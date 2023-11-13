const myLibrary = [];

let lengthOfArry;



function Book(name, author, page, read) {
    this.name = name;
    this.author = author;
    this.page = page;
    this.read = read;
};


function showCard() {
    document.querySelector('.container').style.display = 'flex';
}

function hideCard() {
    document.querySelector('.container').style.display = 'none';
}

function addBooks(event) {
    event.preventDefault();
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPage = document.getElementById('page').value;
    let bookReadStatus;
    let readBtn = document.getElementById('read');
    if (readBtn.checked == true) {
        bookReadStatus = document.getElementById('read').value;
    }
    else bookReadStatus = 'Not Read';

    let book = new Book(bookTitle, bookAuthor, bookPage, bookReadStatus);
    myLibrary.push(book);
    showBooks()

    hideCard();
}

function showBooks() {
    lengthOfArry = myLibrary.length;
    document.getElementById('book-list').innerHTML = '';
    for (let i = 0; i < lengthOfArry; i++) {
        const bookCard = document.createElement('div');
        const bookName = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPage = document.createElement('div');
        const bookRead = document.createElement('button');
        const removeBook = document.createElement('div');
        removeBook.innerHTML = '&times;';
        removeBook.classList.add('remove-book');

        
        
        bookName.textContent = `Name: ${myLibrary[i].name}`;
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookPage.textContent = `Page: ${myLibrary[i].page}`;
        bookRead.textContent = `${myLibrary[i].read}`;
        
        bookName.classList.add('book-name');
        bookAuthor.classList.add('book-author');

        bookRead.classList.add('read-status');
        if (myLibrary[i].read === 'Read') {
            bookRead.classList.add('read-btn');
        }
        else bookRead.classList.add('not-read-btn');

        bookCard.appendChild(removeBook);
        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPage);
        bookCard.appendChild(bookRead);

        bookCard.classList.add('book-card');
        document.getElementById('book-list').appendChild(bookCard);

        bookRead.addEventListener('click', function (event) {
            if (event.target.classList.contains('read-btn')) {
                event.target.classList.remove('read-btn');
                event.target.classList.add('not-read-btn');
                event.target.textContent = 'Not Read'

            } else {
                event.target.classList.remove('not-read-btn');
                event.target.classList.add('read-btn');
                event.target.textContent = 'Read'
            }
        });

        // Remove book card from window
        removeBook.addEventListener('click', function () {
            let removeDiv = this.parentElement;
            document.getElementById('book-list').removeChild(removeDiv);

            let bookNameText = removeDiv.querySelector('.book-name').textContent.replace('Name: ', '');
            let bookAuthorText = removeDiv.querySelector('.book-author').textContent.replace('Author: ', '');

            let indexToRemove = findBookIndex(bookNameText, bookAuthorText);

            if (indexToRemove !==-1){
                myLibrary.splice(indexToRemove, 1);
            }


        });

        function findBookIndex(bookName, bookAuthor) {
            return myLibrary.findIndex(book =>
                book.name === bookName && book.author === bookAuthor
                );
        }
    }
}
document.querySelector('.add').addEventListener('click', showCard);
document.querySelector('.close-btn').addEventListener('click', hideCard);
document.querySelector('.card-form').addEventListener('submit', addBooks);


