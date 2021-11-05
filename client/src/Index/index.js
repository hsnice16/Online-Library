// book list

const ebookList = document.querySelector(".ebook-list");

ebookList.addEventListener("click", handleBookShowModal);

// genre

const genres = document.querySelectorAll(".genre");

function handleGenresClick(event) {
  let hashValue = event.currentTarget.getAttribute("data-hash-value");
  location.href = "client/browse_collections.html" + "#" + hashValue;
}

genres.forEach((genre) => {
  genre.addEventListener("click", handleGenresClick);
});
