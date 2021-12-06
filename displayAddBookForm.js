const displayAddBookForm = () => {
  const container = document.createElement('div');
  const closeBtn = document.createElement('a')
  const formHeader = document.createElement('h1');
  const form = document.createElement('form')
  container.classList.add('add-book-form')
  formHeader.innerText = 'Add Book'
  closeBtn.classList.add('closeBtn');

  container.appendChild(closeBtn);
  container.appendChild(formHeader)
  container.appendChild(form)

  closeBtn.addEventListener('click', () => {
      body.removeChild(container);
      app.classList.remove('blur');
  })

  //Add Title label and field
  const bookTitleLabel = document.createElement('label');
  const bookTitleField = document.createElement('input')
  bookTitleLabel.innerText = 'Title:';
  bookTitleField.setAttribute('id', 'bookTitle');
  bookTitleLabel.setAttribute('for', 'bookTitle');

  const titleContainer = document.createElement('div');
  titleContainer.appendChild(bookTitleLabel);
  titleContainer.appendChild(bookTitleField);
  form.appendChild(titleContainer);
  form.appendChild(document.createElement('br'));

  //Add Author label and field
  const bookAuthorLabel = document.createElement('label');
  const bookAuthorField = document.createElement('input');
  bookAuthorLabel.innerText = 'Author:'
  bookAuthorField.setAttribute('id', 'bookAuthor');
  bookAuthorLabel.setAttribute('for', 'bookAuthor');

  const authorContainer = document.createElement('div')
  authorContainer.appendChild(bookAuthorLabel);
  authorContainer.appendChild(bookAuthorField);
  form.appendChild(authorContainer);
  form.appendChild(document.createElement('br'));

  //Add Pages label and field
  const bookPagesLabel = document.createElement('label');
  const bookPagesField = document.createElement('input');
  bookPagesField.type = 'number';
  bookPagesLabel.innerText = 'Pages:'
  bookPagesField.setAttribute('id', 'bookPages');
  bookPagesLabel.setAttribute('for', 'bookPages');

  const pagesContainer = document.createElement('div');
  pagesContainer.appendChild(bookPagesLabel);
  pagesContainer.appendChild(bookPagesField);
  form.appendChild(pagesContainer);
  form.appendChild(document.createElement('br'));

  //Add hasRead label and field
  const bookHasReadLabel = document.createElement('label');
  const bookHasReadCheck = document.createElement('input');
  bookHasReadCheck.type = 'checkbox';
  bookHasReadLabel.innerText = 'Read';
  bookHasReadCheck.setAttribute('id', 'bookRead');
  bookHasReadLabel.setAttribute('for', 'bookRead');

  const hasReadContainer = document.createElement('div');
  hasReadContainer.appendChild(bookHasReadLabel);
  hasReadContainer.appendChild(bookHasReadCheck);
  form.appendChild(hasReadContainer);
  form.appendChild(document.createElement('br'));

  //Add submit button
  const submitBtn = document.createElement('input');
  submitBtn.type = 'button';
  submitBtn.onclick= () => {
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('bookAuthor').value;
      const pages = document.getElementById('bookPages').value;
      const hasRead = document.getElementById('bookRead').checked;

      if (validateInput(title, author, pages)) {
        const newBook = new Book(title, author, pages, hasRead);
        cardArea.appendChild(newBook.info());
        cardArea.classList.remove('blur');
        body.removeChild(container);
        app.classList.remove('blur');
      } else {
        alert('Invalid input!')
      }
      console.log(title);
      console.log(author);
      console.log(pages);

      
  }
  submitBtn.value = 'Add';

  form.appendChild(submitBtn);


  //Append the container div for the form to body
  //Apply blur class to card-area
  body.appendChild(container);
  app.classList.add('blur')
}

const validateInput = (title, author, pages) => {
    if (title === '' || author === '' || pages === '') {
        return false;
    } else {
        return true;
    }
}