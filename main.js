const myLibrary = [];

let lengthOfArry;

let i = 0;

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
    for (i; i < lengthOfArry; i++) {
        const bookCard = document.createElement('div');
        const bookName = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPage = document.createElement('div');
        const bookRead = document.createElement('button');

        bookName.innerHTML = `Name: ${myLibrary[i].name}`;
        bookAuthor.innerHTML = `Author: ${myLibrary[i].author}`;
        bookPage.innerHTML = `Page: ${myLibrary[i].page}`;
        bookRead.innerHTML = `${myLibrary[i].read}`;

        bookRead.classList.add('read-status');
        if (myLibrary[i].read === 'Read') {
            bookRead.classList.add('read-btn');
        }
        else bookRead.classList.add('not-read-btn');

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
                event.target.innerHTML = 'Not Read'

            } else {
                event.target.classList.remove('not-read-btn');
                event.target.classList.add('read-btn');
                event.target.innerHTML = 'Read'
            }
        })
    }

}


document.querySelector('.add').addEventListener('click', showCard);
document.querySelector('.close-btn').addEventListener('click', hideCard);
document.querySelector('.card-form').addEventListener('submit', addBooks);


