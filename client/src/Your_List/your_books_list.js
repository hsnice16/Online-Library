function getYourBooksList(booksDetails) {
  let listItems = [];

  booksDetails.forEach((book, index) => {
    let imgFileName =
      "online_library_" + book.title.toLowerCase().trim().replaceAll(" ", "_");

    let listItem = `        
          <div class="your-book ${
            index === booksDetails.length - 1 ? "last-book" : ""
          }">
            <div class="book-details">
                <img
                    src="assets/genres/${
                      book.genre
                    }/book_cover/${imgFileName}.jpg"
                    alt="Cover image of ${book.title} book by ${book.author}"
                />
                <p>
                    ${book.title} <br />
                    <small><em>by ${book.author}</em></small>
                </p>
            </div>
            <div class="book-buttons">
              <button>Download</button>
              <button>Read Online</button>
            </div>
          </div>
        `;

    listItems.push(listItem);
  });

  return listItems;
}
