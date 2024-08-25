const myLibrary = [
  {
    title: "The Long Run: A Creative Inquiry",
    author: "Stacey D'Erasmo",
    pages: 192,
    read: "No"
  },

  {
    title: "Fifteen Cents on the Dollar: How Americans Made the Black-White Wealth Gap ",
    author: "Louise Story",
    pages: 464,
    read: "No"
  },

  {
    title: "Circle of Hope: A Reckoning with Love, Power, and Justice in an American Church",
    author: "Eliza Griswold",
    pages: 352,
    read: "No"
  },

  {
    title: "Devil's Contract: The History of the Faustian Bargain",
    author: " Ed Simon",
    pages: 356,
    read: "No"
  }
];


function bookBox(title, author, pages, isRead) {

  const container = document.querySelector("#container");
  const book_container = document.createElement("div");
  book_container.classList.add("book_container");
  
  container.prepend(book_container);
  
  const h3 = document.createElement("h3");
  h3.textContent = title;
  book_container.appendChild(h3);
  
  const h4 = document.createElement("h4");
  h4.textContent = author;
  book_container.appendChild(h4);
  
  const hline = document.createElement("div");
  hline.classList.add("horizontal_line");
  book_container.appendChild(hline);

  const pagesContainer = document.createElement("div");
  pagesContainer.classList.add("pages_container");
  book_container.appendChild(pagesContainer);

  const p = document.createElement("p");
  p.textContent = "Pages:";
  pagesContainer.appendChild(p);
  
  const span = document.createElement("span");
  span.textContent = pages;
  pagesContainer.appendChild(span);

  const statusBlock = document.createElement("div");
  statusBlock.classList.add("status_block");
  book_container.appendChild(statusBlock);

  const statusQuestion = document.createElement("p");
  statusQuestion.textContent = "Did you read this book?";
  statusBlock.appendChild(statusQuestion);

  const read = document.createElement("p");
  read.classList.add("status");
  read.textContent = isRead;
  statusBlock.appendChild(read);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete_button");
  book_container.appendChild(deleteButton);

}

// bookBox();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, not ${this.read} yet`;
  };
}

Book.prototype.changeReadStatus = function() {
  if (this.read === "Yes") {
    return this.read = "No";
  } else {
    return this.read = "Yes";
  }
}





function addBookToLibrary() {
  let userBook = prompt();
}

// addBookToLibrary();


function wholeBookLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    // console.log(library[i]);
    bookBox(library[i].title, library[i].author, library[i].pages, library[i].read);
  }
}

wholeBookLibrary(myLibrary);

function setAttributeButton() {
  const deleteButtons = document.querySelectorAll(".delete_button");
  deleteButtons.forEach((button, i) => {
    button.setAttribute("data-book", i);
    // button.setAttribute("onClick", "delete_block()");
  });
}

setAttributeButton();

function deleteButtons() {

  const deleteButtons = document.querySelectorAll(".delete_button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const element = e.target.dataset;
      console.log(element);
      button.parentNode.remove();
    });  

  });
}

deleteButtons();

function changeArrayStatus() {
  myLibrary.forEach((book) => {
    if (book.read === "No") {
      return book.read = "Yes";
    } else {
      return book.read = "No";
    }
  });

}


function changeStatus() {

  const statuses = document.querySelectorAll(".status");

  statuses.forEach((status) => {
    if (status.textContent === "Yes") {
      changeArrayStatus();
      status.classList.add("yes_sign");
    } else {
      changeArrayStatus();
      status.classList.remove("yes_sign");
    }

    status.addEventListener("click", (e) => {
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);
    }
      if (status.textContent === "Yes") {
        // status.classList.remove("yes_sign");
        e.target.classList.remove("yes_sign");
        changeArrayStatus();
        // status.style.background = "#e95644";
        // return status.textContent = "No";
        return e.target.textContent = "No";
      } else {
        // status.classList.add("yes_sign");
        e.target.classList.add("yes_sign");
        changeArrayStatus();
        // status.style.background = "#68e944";
        // return status.textContent = "Yes";
        return e.target.textContent = "Yes";
      }
    });

  });
}

changeStatus();

// dialog code // 


const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
// favDialog.addEventListener("close", (e) => {
  // outputBox.value = `ReturnValue: ${favDialog.returnValue}.`; 
// });

function returnValue() {

  const addedBooks = new Book(title.value, author.value, pages.value, selectEl.value);
  myLibrary.unshift(addedBooks);
    // for (let i = 0; i < myLibrary.length; i++) {
    //   console.log(myLibrary[i]);
    // }
  bookBox(myLibrary[0].title, myLibrary[0].author, myLibrary[0].pages, myLibrary[0].read);
  deleteButtons();
  changeStatus();
  return setAttributeButton();
}

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(returnValue()); // Have to send the select box value here.
});

// dialog end //


const addedBooks = new Book(title.value, author.value, pages.value, selectEl.value);
addedBooks.changeReadStatus();

console.log(addedBooks.read);