import { css } from 'lit-element';

export default css`
:host {
  display: block;
  color: var(--primaryTextColor);
}

small {
  font-style: italic;
}

.bookmark {
  display: grid;
  grid-template-columns: var(--bookmarkThumbWidth) 1fr;
  grid-gap: 0 1rem;
  align-items: center;
}

img {
  display: block;
  width: var(--bookmarkThumbWidth);
  min-height: calc(var(--bookmarkThumbWidth) * 1.55);
  background: var(--loadingPagePlaceholder);
}

h4 {
  margin: 0;
  font-size: 1.4rem;
}

fieldset {
  border: none;
  padding: 0;
}

label {
  display: block;
  font-weight: bold;
}

p {
  padding: 0;
  margin: .5rem 0;
  font-size: 1.2rem;
  line-height: 120%;
}

textarea {
  width: 100%;
  margin-bottom: .5rem;
  box-sizing: border-box;
  font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  resize: vertical;
  padding: 0.5rem;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0 1rem;
  justify-content: start;
  padding: 0;
  margin: 0 0 .5rem 0;
  list-style: none;
}

li input {
  display: none;
}

li label {
  display: block;
  min-width: 50px;
  padding-top: .4rem;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

li input:checked + label {
  border-color: #fff;
}

label[for="note"] {
  margin-bottom: .5rem;
}

button {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  padding: .5rem 1rem;
  box-sizing: border-box;
  font: normal 1.3rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--primaryTextColor);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 3rem;
  border: .1rem solid var(--primaryTextColor);
}

.delete-bookmark {
  background: var(--deleteButtonColor);
  border: 1px solid var(--deleteButtonBorderColor);
  margin-right: 1rem;
}

.save-bookmark {
  background: var(--saveButtonColor);
  border: .1rem solid var(--saveButtonBorderColor);
}

.blue {
  --iconFillColor: var(--blueBookmarkColor);
}

.red {
  --iconFillColor: var(--redBookmarkColor);
}

.green {
  --iconFillColor: var(--greenBookmarkColor);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
`;
