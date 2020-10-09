import { css } from 'lit-element';

export default css`
:host {
  display: block;
  padding: 0 1rem 2rem 1rem;
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
}

h4 {
  margin: 0;
  font-size: 1.4rem;
}

fieldset {
  padding: 2rem 0 0 0;
  border: none;
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
  margin-bottom: 2rem;
  font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  resize: vertical;
}

ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0 1rem;
  padding: 1rem 0 0 0;
  margin: 0 0 2rem 0;
  list-style: none;
}

li input {
  display: none;
}

li label {
  display: block;
  padding-top: .2rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 4px;
  background: #181818;
  cursor: pointer;
}

li input:checked + label {
  background: #fff;
}

input[type="submit"] {
  background: var(--saveButtonColor);
}

button {
  background: var(--deleteButtonColor);
}

.button {
  -webkit-appearance: none;
  appearance: none;
  padding: .5rem 1rem;
  font: normal 1.3rem "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: var(--primaryTextColor);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.justify {
  margin-bottom: 2rem;
  text-align: center;
}

icon-bookmark {
  --iconFillColor: var(--defaultBookmarkColor);
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

.yellow {
  --iconFillColor: var(--yellowBookmarkColor);
}
`;
