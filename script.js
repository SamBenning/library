const cardArea = document.querySelector('div.card-area');
const addBookBtn = document.querySelector('button.add-book-btn');
const body = document.querySelector('body');
const app = document.querySelector('div.app');
//const card = document.querySelector('.card')

let myLibrary = [];

const displayAllBooks = () => {
  for (i = 0; i < myLibrary.length; i++) {
      currBook = myLibrary[i].info();
      cardArea.appendChild(currBook)
  }    
}

addBookBtn.addEventListener('click', displayAddBookForm);

const book1 = new Book('IT', 'Stephen King', 1000, true);
const book2 = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', 250, false);
const book3 = new Book('IT', 'Stephen King', 1000, true);
const book4 = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', 250, false);
const book5 = new Book('IT', 'Stephen King', 1000, true);
const book6 = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', 250, false);
myLibrary[0] = book1;
myLibrary[1] = book2;
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);


displayAllBooks();

