const displayAddBookForm = () => {
  const container = document.createElement('div');
  const formHeader = document.createElement('h1');
  const form = document.createElement('form')
  container.classList.add('add-book-form')
  formHeader.innerText = 'Add Book'

  container.appendChild(formHeader)
  container.appendChild(form)


  const bookTitleLabel = document.createElement('label');
  const bookTitleField = document.createElement('input')
  bookTitleLabel.innerText = 'Title';
  bookTitleField.setAttribute('id', 'bookTitle');
  bookTitleLabel.setAttribute('for', 'bookTitle');

  form.appendChild(bookTitleLabel);
  form.appendChild(bookTitleField);

  const bookAuthorLabel = document.createElement('label');
  const bookPagesLabel = document.createElement('label');
  const bookHasReadLabel = document.createElement('label');

  body.appendChild(container);
  cardArea.classList.add('blur')
}