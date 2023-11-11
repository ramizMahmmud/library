const myLibrary = [];

let lengthOfArry;

let i = 0;

function Book (name, author, page) {
    this.name = name;
    this.author = author;
    this.page = page;
};


function showCard(){
    document.querySelector('.container').style.display = 'flex';
}

function hideCard(){
    document.querySelector('.container').style.display = 'none';
}
function showBooks(){
    lengthOfArry = myLibrary.length;  
    for(i; i < lengthOfArry; i++){
        const bookCard = document.createElement('div');
        const bookName = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPage = document.createElement('div');
        bookName.innerHTML = `Name: ${myLibrary[i].name}`;
        bookAuthor.innerHTML = `Author: ${myLibrary[i].author}`;
        bookPage.innerHTML = `Page: ${myLibrary[i].page}`;

        bookCard.appendChild(bookName);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPage);
        bookCard.classList.add('book-card');
        document.getElementById('book-list').appendChild(bookCard);
    }
    
}
function addBooks(event){
    event.preventDefault();
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPage =document.getElementById('page').value;
    let book = new Book(bookTitle, bookAuthor, bookPage);
    myLibrary.push(book);

    showBooks()

    hideCard();
}


document.querySelector('.add').addEventListener('click',showCard);
document.querySelector('.close-btn').addEventListener('click', hideCard);
document.querySelector('.card-form').addEventListener('submit',addBooks);



