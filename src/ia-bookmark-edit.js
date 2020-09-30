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
      renderHeader: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.bookmark = {};
    this.bookmarkColors = [{
      id: 0,
      className: '',
    }, {
      id: 1,
      className: 'blue',
    }, {
      id: 2,
      className: 'red',
    }, {
      id: 3,
      className: 'green',
    }, {
      id: 4,
      className: 'yellow',
    }];
    this.renderHeader = false;
  }

  emitSaveEvent(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('saveBookmark', {
      bubbles: true,
      composed: true,
      detail: {
        bookmark: this.bookmark,
      },
    }));
  }

  emitDeleteEvent() {
    this.dispatchEvent(new CustomEvent('deleteBookmark', {
      bubbles: true,
      composed: true,
      detail: {
        id: this.bookmark.id,
      },
    }));
  }

  emitColorChangedEvent(colorId) {
    this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
      bubbles: true,
      composed: true,
      detail: {
        bookmarkId: this.bookmark.id,
        colorId,
      },
    }));
  }

  changeColorTo(id) {
    this.bookmark.color = id;
    this.emitColorChangedEvent(id);
  }

  updateNote(e) {
    this.bookmark.note = e.currentTarget.value;
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

  render() {
    return html`
      ${this.renderHeader ? IABookmarkEdit.headerSection : nothing}
      <div class="bookmark">
        <img src=${this.bookmark.thumbnail} />
        <h4>Page ${this.bookmark.page}</h4>
      </div>
      <form action="" method="put" @submit=${this.emitSaveEvent}>
        <fieldset>
          <label for="note">Note <small>(optional)</small></label>
          <p>Comments appear in the bookmarks menu.</p>
          <textarea rows="4" cols="80" name="note" id="note" @change=${this.updateNote}>${this.bookmark.note}</textarea>
          <label for="color">Bookmark color <small>(optional)</small></label>
          <p>Bookmarks can be grouped by color in the bookmarks menu.</p>
          <ul>
            ${repeat(this.bookmarkColors, color => color.id, this.bookmarkColor.bind(this))}
          </ul>
          <div class="justify">
            <input class="button" type="submit" value="Save changes" />
          </div>
        </fieldset>
      </form>
      <div class="justify">
        <button class="button" @click=${this.emitDeleteEvent}>Delete bookmark</button>
      </div>
    `;
  }
}
