import { html, fixture, expect } from '@open-wc/testing';
import '../ia-bookmark-edit.js';

const container = html`<ia-bookmark-edit></ia-bookmark-edit>`;

describe('<ia-bookmark-edit>', () => {
  it('renders an element', async () => {
    const el = await fixture(container);

    expect(el.shadowRoot.querySelector('button')).to.exist;
  });
});
