const validHashValues = [
  "all",
  "tech",
  "history",
  "business",
  "sci-fi",
  "literature",
];

let locationHash = location.hash.replace("#", "");
let currSelectedGenre = validHashValues.includes(locationHash)
  ? locationHash
  : "all";

// genre button

const btnContainer = document.querySelector("#btn-container");
const genreButton = document.querySelector(
  `button[data-hash-value=${currSelectedGenre}]`
);

function setStyleOfSelectedButton(button) {
  button.style.backgroundColor = "var(--blue-gray-400)";
  button.style.setProperty("color", "white", "important");
}

function setStyleOfNotSelectedButton(button) {
  button.style.backgroundColor = "white";
  button.style.color = "var(--blue-gray-700)";
}

function handleBtnContainerClick(event) {
  if (event.target.nodeName === "BUTTON") {
    currSelectedGenre = event.target.getAttribute("data-hash-value");

    const notSelectedGenres = Array.from(event.currentTarget.children).filter(
      (child) => child.getAttribute("data-hash-value") !== currSelectedGenre
    );

    notSelectedGenres.forEach((button) => {
      setStyleOfNotSelectedButton(button);
    });

    setStyleOfSelectedButton(event.target);

    showBooks(currSelectedGenre);
  }
}

btnContainer.addEventListener("click", handleBtnContainerClick);
setStyleOfSelectedButton(genreButton);

// book container

const bookContainer = document.querySelector("section.book-container");

async function showBooks(currSelectedGenre) {
  let listItems = [];

  if (currSelectedGenre === "all") {
    listItems = [...getBooksList(DATA)];
  } else {
    let filteredData = DATA.filter(
      (book) => book.hashValue === currSelectedGenre
    );
    listItems = [...getBooksList(filteredData)];
  }

  if (listItems.length === 0) {
    bookContainer.innerHTML = `
        <p>
            The site is in continuous development. 
            New books are added from time to time. Stay tuned!
        </p>
      `;
  } else {
    bookContainer.innerHTML = "<ul>" + listItems.join("") + "</ul>";
  }
}

showBooks(currSelectedGenre);

// book container modal

bookContainer.addEventListener("click", handleBookShowModal);

// form

const inputRef = document.querySelector("input");
const btnSubmit = document.querySelector('button[type="submit"]');

function showSearchFilteredBooks(searchedValue) {
  let filteredData = DATA.filter(
    (book) =>
      book.title.toLowerCase().startsWith(searchedValue) ||
      book.author.toLowerCase().startsWith(searchedValue)
  );

  if (searchedValue.length === 0) {
    showBooks(currSelectedGenre);
  } else if (filteredData.length === 0 && searchedValue.length !== 0) {
    bookContainer.innerHTML = `
        <p>
            Sorry, No book found with searched Title or Author name 
            in our Database
        </p>
      `;
  } else {
    bookContainer.innerHTML =
      "<ul>" + [...getBooksList(filteredData)].join("") + "</ul>";
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
