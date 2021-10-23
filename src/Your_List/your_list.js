// book list

const yourBookListContainer = document.querySelector(
  ".your-book-list-container"
);

const booksDetails = [];
// DATA.slice(0, 4);

function showBooksList(booksDetails) {
  let listItems = [...getYourBooksList(booksDetails)];

  if (listItems.length === 0) {
    yourBookListContainer.innerHTML = `
        <p>
            Your List is empty till now!
            Fill it from 
            <a href="browse_collections.html#all">
              Browse Collections
            </a>
            .
        </p>
      `;
  } else {
    yourBookListContainer.innerHTML = listItems.join("");
  }
}

showBooksList(booksDetails);

// form

const inputRef = document.querySelector("input");
const btnSubmit = document.querySelector('button[type="submit"]');

function showSearchFilteredBooks(searchedValue) {
  if (booksDetails.length) {
    let filteredData = booksDetails.filter(
      (book) =>
        book.title.toLowerCase().startsWith(searchedValue) ||
        book.author.toLowerCase().startsWith(searchedValue)
    );

    if (searchedValue.length === 0) {
      showBooksList(booksDetails);
    } else if (filteredData.length === 0 && searchedValue.length !== 0) {
      yourBookListContainer.innerHTML = `
        <p>
            Sorry, No book found with searched Title or Author
            in Your List
        </p>
      `;
    } else {
      yourBookListContainer.innerHTML = [
        ...getYourBooksList(filteredData),
      ].join("");
    }
  }
}

function handleBtnSubmitClick(event) {
  event.preventDefault();
  showSearchFilteredBooks(inputRef.value.toLowerCase().trim());
}

function handleInputChange(event) {
  showSearchFilteredBooks(event.target.value.toLowerCase().trim());
}

inputRef.addEventListener("input", handleInputChange);
btnSubmit.addEventListener("click", handleBtnSubmitClick);
