const displayAddBookForm = () => {
  const container = document.createElement('div');
  const formHeader = document.createElement('h1');
  const form = document.createElement('form')
  container.classList.add('add-book-form')
  formHeader.innerText = 'Add Book'

  container.appendChild(formHeader)
  container.appendChild(form)

  //Add Title label and field
  const bookTitleLabel = document.createElement('label');
  const bookTitleField = document.createElement('input')
  bookTitleLabel.innerText = 'Title:';
  bookTitleField.setAttribute('id', 'bookTitle');
  bookTitleLabel.setAttribute('for', 'bookTitle');

  form.appendChild(bookTitleLabel);
  form.appendChild(bookTitleField);
  form.appendChild(document.createElement('br'));

  //Add Author label and field
  const bookAuthorLabel = document.createElement('label');
  const bookAuthorField = document.createElement('input');
  bookAuthorLabel.innerText = 'Author:'
  bookAuthorField.setAttribute('id', 'bookAuthor');
  bookAuthorLabel.setAttribute('for', 'bookAuthor');

  form.appendChild(bookAuthorLabel);
  form.appendChild(bookAuthorField);
  form.appendChild(document.createElement('br'));

  //Add Pages label and field
  const bookPagesLabel = document.createElement('label');
  const bookPagesField = document.createElement('input');
  bookPagesLabel.innerText = 'Pages:'
  bookPagesField.setAttribute('id', 'bookPages');
  bookPagesLabel.setAttribute('for', 'bookPages');

  form.appendChild(bookPagesLabel);
  form.appendChild(bookPagesField);
  form.appendChild(document.createElement('br'));

  //Add hasRead label and field
  const bookHasReadLabel = document.createElement('label');
  const bookHasReadCheck = document.createElement('input');
  bookHasReadCheck.type = 'checkbox';
  bookHasReadLabel.innerText = 'Read';
  bookHasReadCheck.setAttribute('id', 'bookRead');
  bookHasReadLabel.setAttribute('for', 'bookRead');

  form.appendChild(bookHasReadLabel);
  form.appendChild(bookHasReadCheck);
  form.appendChild(document.createElement('br'));

  //Add submit button
  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'Add';

  form.appendChild(submitBtn);


  //Append the container div for the form to body
  //Apply blur class to card-area
  body.appendChild(container);
  cardArea.classList.add('blur')
}