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
              <button class="your-list-download-btn">Download</button>
              <button class="your-list-read-online-btn">Read Online</button>
            </div>
          </div>
        `;

    listItems.push(listItem);
  });

  return listItems;
}

function attachEventListenersToYourList() {
  let yourListDownloadBtn = document.querySelectorAll(
    ".your-list-download-btn"
  );
  let yourListReadOnlineBtn = document.querySelectorAll(
    ".your-list-read-online-btn"
  );

  yourListDownloadBtn.forEach((downloadBtn) => {
    downloadBtn.addEventListener("click", (event) => {
      handleDownloadAndReadOnlineClick(event, "download");
    });
  });

  yourListReadOnlineBtn.forEach((readOnlineBtn) => {
    readOnlineBtn.addEventListener("click", (event) => {
      handleDownloadAndReadOnlineClick(event, "readOnline");
    });
  });
}

function getBookName(targetElement) {
  let bookNameWithAuthor = targetElement.alt.replace("Cover image of", "");

  return bookNameWithAuthor.substring(0, bookNameWithAuthor.indexOf("book"));
}

function handleDownloadAndReadOnlineClick(event, operation) {
    let bookFileName = getBookName(event.target.parentNode.parentNode.children[0].children[0])
      .toLowerCase()
      .trim()
      .replaceAll(" ", "_");

    var anchorElement = document.createElement("a");
    anchorElement.setAttribute(
      "href",
      `${
        isNotOnLandingPage ? "" : "client/"
      }assets/online_library_books/${bookFileName}.pdf`
    );

    if (operation === "download") {
      anchorElement.setAttribute("download", bookFileName);
    } else if (operation === "readOnline") {
      anchorElement.setAttribute("target", "_blank");
    }

    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}
