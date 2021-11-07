function createBookModal(targetElement) {
  const bookNameAndAuthor = targetElement.alt
    .replace("Cover image of", "")
    .replace(" book", "");

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", "modal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "modalLabel");
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
            <div id="book-modal" class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <h3>
                    ${bookNameAndAuthor}
                    </h3>

                    <div class="img-button-container">
                      <img
                          src="${targetElement.src}"
                          alt="${targetElement.alt}"
                      />
                      <div>
                          <button id="book-modal-download-btn">Download</button>
                          <button id="book-modal-read-online-btn">Read Online</button>
                          <button id="book-modal-my-list-btn">Add to My List</button>
                          <p id="book-modal-msg"></p>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        `;

  return modal;
}

function attachEventListenersToModal(targetElement) {
  let bookModalDownloadBtn = document.querySelector("#book-modal-download-btn");
  let bookModalReadOnlineBtn = document.querySelector(
    "#book-modal-read-online-btn"
  );
  let bookModalMyListBtn = document.querySelector("#book-modal-my-list-btn");

  bookModalDownloadBtn.addEventListener("click", () => {
    handleDownloadAndReadOnlineClick(targetElement, "download");
  });
  bookModalReadOnlineBtn.addEventListener("click", () => {
    handleDownloadAndReadOnlineClick(targetElement, "readOnline");
  });
  bookModalMyListBtn.addEventListener("click", () => {
    handleBookModalMyListBtnClick(targetElement);
  });
}

function getBookName(targetElement) {
  let bookNameWithAuthor = targetElement.alt.replace("Cover image of", "");

  return bookNameWithAuthor.substring(0, bookNameWithAuthor.indexOf("book"));
}

function handleDownloadAndReadOnlineClick(targetElement, operation) {
  if (onlineLibraryUser === null) {
    document.querySelector("#book-modal-msg").innerText =
      "Please Sign In First !!";
  } else {
    let bookFileName = getBookName(targetElement)
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
}

function handleBookModalMyListBtnClick(targetElement) {
  let bookModalMsg = document.querySelector("#book-modal-msg");

  if (onlineLibraryUser === null) {
    bookModalMsg.innerText = "Please Sign In First !!";
  } else {
    bookModalMsg.innerText = "Adding...";

    fetch(`https://onlibrary-server.herokuapp.com/user/${onlineLibraryUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: getBookName(targetElement).trim() }),
    })
      .then((res) => res.json())
      .then((data) => {
        bookModalMsg.innerText = data.msg;
      })
      .catch((err) => {
<<<<<<< HEAD
        bookModalMsg.innerText =
          "Some Error Occured. Please try again or later !!";
=======
        bookModalMsg.innerText = "Some Error Occured. Please try late !!";
>>>>>>> 0c49e0343124c68f37f8dfc73f8d6b0723aa25f1
      });
  }
}
