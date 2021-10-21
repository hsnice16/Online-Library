function getBooksList(booksDetails) {
  let listItems = [];

  booksDetails.forEach((book) => {
    let imgFileName =
      "online_library_" + book.title.toLowerCase().trim().replaceAll(" ", "_");

    let listItem = `        
        <li>
            <div class="book-details">
                <img
                    src="assets/genres/${book.genre}/book_cover/${imgFileName}.jpg"
                    alt="Cover image of ${book.title} book by ${book.author}"
                />
                <p>
                    ${book.title} <br />
                    <small><em>by ${book.author}</em></small>
                </p>
            </div>
        </li>
        `;

    listItems.push(listItem);
  });

  return listItems;
}
