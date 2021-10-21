function createBookModal(targetElement) {
  const bookName = targetElement.alt
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
            ${bookName}
            </h3>

            <div class="img-button-container">
            <img
                src="${targetElement.src}"
                alt="${targetElement.alt}"
            />
            <div>
                <button>Download</button>
                <button>Read Online</button>
                <button>Add to My List</button>
            </div>
            </div>
        </div>
        </div>
    </div>
`;

  return modal;
}
