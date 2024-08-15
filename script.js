const myLibrary = [
  {
    title: "The Long Run: A Creative Inquiry",
    author: "Stacey D'Erasmo",
    pages: 192,
    read: false
  },

  {
    title: "Fifteen Cents on the Dollar: How Americans Made the Black-White Wealth Gap ",
    author: "Louise Story",
    pages: 464,
    read: false
  },

  {
    title: "Circle of Hope: A Reckoning with Love, Power, and Justice in an American Church",
    author: "Eliza Griswold",
    pages: 352,
    read: false
  },

  {
    title: "Devil's Contract: The History of the Faustian Bargain",
    author: " Ed Simon",
    pages: 356,
    read: false
  }
];


function bookBox(title, author, pages, isRead) {

  const container = document.querySelector("#container");
  const book_container = document.createElement("div");
  book_container.classList.add("book_container");
  
  container.appendChild(book_container);
  
  const h3 = document.createElement("h3");
  h3.textContent = title;
  book_container.appendChild(h3);
  
  const h4 = document.createElement("h4");
  h4.textContent = author;
  book_container.appendChild(h4);
  
  const hline = document.createElement("div");
  hline.classList.add("horizontal_line");
  book_container.appendChild(hline);
  
  const p = document.createElement("p");
  p.textContent = pages;
  book_container.appendChild(p);
  
  const read = document.createElement("p");
  read.classList.add("status");
  read.textContent = isRead;
  book_container.appendChild(read);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete this book!";
  deleteButton.classList.add("delete-button");
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

function addBookToLibrary() {
  let userBook = prompt();
}

// addBookToLibrary();


function wholeBookLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
    bookBox(library[i].title, library[i].author, library[i].pages, library[i].read);
  }
}

wholeBookLibrary(myLibrary);

function setAttributeButton() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button, i) => {
    button.setAttribute("data-book", i);
    // button.setAttribute("onClick", "delete_block()");
  });
}

setAttributeButton();

function deleteButtons() {

  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const element = e.target.dataset;
      console.log(element);
      button.parentNode.remove();
    });  

  });
}

deleteButtons();

function changeStatus() {

  const statuses = document.querySelectorAll(".status");

  statuses.forEach((status) => {
    status.addEventListener("click", () => {
      if (status.textContent === "true") {
        return status.textContent = "false";
      } else {
        return status.textContent = "true";
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
favDialog.addEventListener("close", (e) => {
  // outputBox.value = `ReturnValue: ${favDialog.returnValue}.`; 
});

function returnValue() {
  const addedBooks = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: selectEl.value
  };

  myLibrary.push(addedBooks);
  bookBox(myLibrary[myLibrary.length-1].title, myLibrary[myLibrary.length-1].author, myLibrary[myLibrary.length-1].pages, myLibrary[myLibrary.length-1].read);
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


