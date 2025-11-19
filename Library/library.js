const myLibrary =[];
const libraryDiv = document.querySelector('.library');
const formBookButton = document.querySelector('#add-book-btn');
const addBookBtn = document.querySelector('.add-button');
const modalDiv = document.querySelector('.modal');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.bookRead = function(){
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(book);
}

function removeBook(id){
    const deleteBookIndex = myLibrary.map(x=>x.id).indexOf(id);
    myLibrary.splice(deleteBookIndex, 1);
}

function displayBook(x, replace){
    const divContainer = document.createElement('div');
    divContainer.innerHTML= x.title;
    divContainer.classList.add('title-' + x.id);

    const authorContainer = document.createElement('div');
    authorContainer.innerText = x.author + ' (pages: '+ x.pages +')';
    authorContainer.classList.add('author-' + x.id );

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.id = x.id;

    bookCard.appendChild(divContainer);
    bookCard.appendChild(authorContainer);

    if(x.read){
        const readContainer = document.createElement('div');
        readContainer.innerText = 'Read';
        readContainer.classList.add = 'read';
        bookCard.appendChild(readContainer);
    }else{
        const markRead = document.createElement('div');
        markRead.innerHTML = 'Mark as Read';
        markRead.classList.add = 'markRead';
        markRead.addEventListener('click', () => {
            x.bookRead();
            displayBook(x, bookCard);
        });
        bookCard.appendChild(markRead);
    }


    const deleteBtn = document.createElement('a');
    deleteBtn.innerText='delete';
    deleteBtn.classList.add('delete');
    deleteBtn.value = x.id;
    deleteBtn.addEventListener('click', ()=>{
        removeBook(x.id);
        libraryDiv.removeChild(bookCard);
    });

    bookCard.appendChild(deleteBtn);
    if(replace){
        replace.replaceWith(bookCard)
    }else{
    libraryDiv.appendChild(bookCard);
    }
}

addBookBtn.addEventListener('click', ()=>{
    modalDiv.style.display = 'block';
});

formBookButton.addEventListener('click', ()=>{
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#book-author');
    const pagesInput =  document.querySelector('#book-pages');
    const readChkbx = document.querySelector('#book-read');
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readChkbx.checked;
    addBookToLibrary(title, author, pages, read);

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readChkbx.checked = false;
    modalDiv.style.display = 'none';
});

addBookToLibrary('title1', 'jen', 100, false);
addBookToLibrary('title2','jenn', 150, true);
addBookToLibrary('title3', 'jen', 134, false);
