function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    
    this.setReadStatus = function() {
        if(this.hasRead) {
            return 'Read'
          } else {
            return 'Not Read'
          }
    }
    this.readStatus = this.setReadStatus();

    this.info = function () {
      
      
      const bookCard = document.createElement('div');
      bookCard.classList.add('card');
      const title = document.createElement('h2');
      const author = document.createElement('p');
      const pages = document.createElement('p');
      const readBtn = document.createElement('button');
      const delBtn = document.createElement('button');
      title.innerText = this.title;
      author.innerText = "by " + this.author;
      pages.innerText = this.pages + " pages";
      readBtn.innerText = this.readStatus;
      delBtn.innerText = 'Remove';

      const titleContainer = document.createElement('div');
      titleContainer.appendChild(title);
      titleContainer.id = 'title-container';

      readBtn.addEventListener('click', () => {
        this.hasRead = !this.hasRead;
        this.readStatus = this.setReadStatus();
        readBtn.innerText = this.readStatus;
      });

      delBtn.addEventListener('click', () => {
          cardArea.removeChild(delBtn.parentNode);
      })

      bookCard.appendChild(titleContainer);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
      bookCard.appendChild(readBtn);
      bookCard.appendChild(delBtn);



      return bookCard
    }
}