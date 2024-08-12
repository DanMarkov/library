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
