const cardArea = document.querySelector('div.card-area');
const addBookBtn = document.querySelector('button.add-book-btn');
const body = document.querySelector('body')
//const card = document.querySelector('.card')

let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.readStatus = '';
    this.info = function () {
      
      if(this.hasRead) {
        this.readStatus = 'read'
      } else {
        this.readStatus = 'not read'
      }
      const bookCard = document.createElement('div');
      bookCard.classList.add('card');
      const title = document.createElement('h2');
      const author = document.createElement('p');
      const pages = document.createElement('p');
      const readString = document.createElement('p');
      title.innerText = this.title;
      author.innerText = this.author;
      pages.innerText = this.pages;
      readString.innerText = this.readStatus;
      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
      bookCard.appendChild(readString);
      return bookCard
    }
}

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

