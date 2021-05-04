console.log("this is index.js");

// constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// display constructor
function Display() {}

// add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tablebody = document.getElementById("tableBody");
  let uiString = `<tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>`;
  tableBody.innerHTML += uiString;
};
// Impement the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
// Impement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
   <strong>Message:</strong> ${displayMessage}
   <button
     type="button"
     class="btn-close"
     data-bs-dismiss="alert"
     aria-label="Close">
     <span aria-hidden="true">×</span>
   </button>
 </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 4000);
};

// add sumbit event listener to libraryform
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  console.log("you have submitted library form");

  let name = document.getElementById("Bookname").value;
  let author = document.getElementById("Author").value;
  let type;
  //  Fiction, programming, cooking;
  let Fiction = document.getElementById("Fiction");
  let Programming = document.getElementById("Programming");
  let Cooking = document.getElementById("Cooking");

  if (Fiction.checked) {
    type = Fiction.value;
  } else if (Programming.checked) {
    type = Programming.value;
  } else if (Cooking.checked) {
    type = Cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", " Your book has been successfully added");
  } else {
    display.show("danger", " Sorry you cannot add this book");
  }
}
