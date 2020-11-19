import { nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { html, LitElement } from 'lit-element';
import bookmarkEditCSS from './styles/ia-bookmark-edit.js';

export class IABookmarkEdit extends LitElement {
  static get styles() {
    return bookmarkEditCSS;
  }

  static get properties() {
    return {
      bookmark: { type: Object },
      bookmarkColors: { type: Array },
      defaultBookmarkColor: { type: Object },
      renderHeader: { type: Boolean },
      showBookmark: { type: Boolean },
      disableSave: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.bookmark = {};
    this.bookmarkColors = [];
    this.defaultBookmarkColor = {};
    this.renderHeader = false;
    this.showBookmark = true;
    this.disableSave = false;

    this.noteStart = '';
    this.colorStart = '';

    this.newNote = '';
    this.neColor = '';
  }

  firstUpdated() {
    this.setDefaultValues(this.bookmark);
    this.disableSave = this.shouldDisableSave();
  }

  setDefaultValues() {
    const { note, color } = this.bookmark;
    this.noteStart = note;
    this.colorStart = color;
    this.newNote = note;
    this.newColor = color;
  }

  emitSaveEvent(e) {
    e.preventDefault();
    const updatedBookmark = { ...this.bookmark, note: this.newNote, color: this.newColor };
    this.bookmark = updatedBookmark;
    this.setDefaultValues();
    this.dispatchEvent(new CustomEvent('saveBookmark', {
      detail: {
        bookmark: updatedBookmark,
      },
    }));
    this.disableSave = true;
  }

  emitDeleteEvent() {
    this.dispatchEvent(new CustomEvent('deleteBookmark', {
      detail: {
        id: this.bookmark.id,
      },
    }));
  }

  emitColorChangedEvent(colorId) {
    this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
      detail: {
        bookmarkId: this.bookmark.id,
        colorId,
      },
    }));
  }

  changeColorTo(id) {
    this.newColor = id;
    this.disableSave = this.shouldDisableSave();
    this.emitColorChangedEvent(id);
  }

  updateNote(e) {
    this.newNote = e.currentTarget.value;
    this.disableSave = this.shouldDisableSave();
  }

  shouldDisableSave() {
    const colorHasChanged = this.colorStart !== this.newColor;
    const noteHasChanged = this.noteStart !== this.newNote;
    if (!colorHasChanged && !noteHasChanged) {
      return true;
    }
    return false;
  }

  static get headerSection() {
    return html`<header>
      <h3>Edit Bookmark</h3>
    </header>`;
  }

  bookmarkColor(color) {
    return html`
      <li>
        <input type="radio" name="color" id="color_${color.id}" .value=${color.id} @change=${() => this.changeColorTo(color.id)} ?checked=${this.bookmark.color === color.id}>
        <label for="color_${color.id}">
          <icon-bookmark class=${color.className}></icon-bookmark>
        </label>
      </li>
    `;
  }

  get bookmarkTemplate() {
    return html`
      <div class="bookmark">
        <img src=${this.bookmark.thumbnail} />
        <h4>Page ${this.bookmark.page}</h4>
      </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  get disabledSaveButton() {
    return html`<button class="save-bookmark" type="submit" value="Save" disabled="disabled">Save</button>`;
  }

  // eslint-disable-next-line class-methods-use-this
  get saveButton() {
    return html`<button class="save-bookmark" type="submit" value="Save">Save</button>`;
  }

  render() {
    const saveButton = this.disableSave ? this.disabledSaveButton : this.saveButton;
    const noteToEdit = this.newNote || this.bookmark.note;
    return html`
      ${this.renderHeader ? IABookmarkEdit.headerSection : nothing}
      ${this.showBookmark ? this.bookmarkTemplate : nothing}
      <form action="" method="put" @submit=${this.emitSaveEvent}>
        <fieldset>
          <label for="color" class="sr-only">Bookmark color</label>
          <ul>
            ${repeat(this.bookmarkColors, color => color.id, this.bookmarkColor.bind(this))}
          </ul>
          <label for="note">Note</label>
          <textarea
            rows="4" cols="80" name="note" id="note"
            @change=${this.updateNote}
            @keyup=${this.updateNote}
          >${noteToEdit}</textarea>
          <div class="actions">
            <button type="button" class="delete-bookmark" @click=${this.emitDeleteEvent}>Delete</button>
            ${saveButton}
          </div>
        </fieldset>
      </form>
    `;
  }
}
