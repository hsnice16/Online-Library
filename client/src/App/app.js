// modal

const divContainer = document.querySelector(".div-container");
let myModal;
let modalElement;

function handleShowHideModal() {
  myModal = new bootstrap.Modal(document.querySelector(".modal"));
  myModal.show();

  modalElement = document.querySelector(".modal");
  modalElement.addEventListener("hidden.bs.modal", () => {
    modalElement.remove();
  });
}

function handleBookShowModal(event) {
  if (event.target.nodeName === "IMG") {
    divContainer.insertBefore(
      createBookModal(event.target),
      divContainer.firstChild
    );

    attachEventListenersToModal(event.target);
    handleShowHideModal();
  }
}

function successfulSignInFunctionality(result) {
  setOnlineLibraryUser(result.user.uid);

  if (modalElement) {
    modalElement.remove();
  }
}

function signInErrorHandler(error) {
  if (
    !["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(
      error.code
    )
  ) {
    alert(error.message);
  }
}

async function handleGoogleSignInClick() {
  // workaround of late pop up
  const scriptElement = document.createElement("script");
  scriptElement.setAttribute(
    "src",
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"
  );
  document.querySelector("body").appendChild(scriptElement);
  //

  try {
    const result = await signInWithGoogle();

    successfulSignInFunctionality(result);
  } catch (error) {
    signInErrorHandler(error);
  }
}

async function handleFacebookSignInClick() {
  // try {
  //   const result = await signInWithFacebook();

  //   successfulSignInFunctionality(result);
  // } catch (error) {
  //   signInErrorHandler(error);
  // }

  alert(`
  Thanks for visiting us.
  Sign In With Facebook will come soon. For now, Please Sign In With
  Google
  
  Thank you!`);
}

function handleSignInModal() {
  divContainer.insertBefore(createSignInModal(), divContainer.firstChild);

  handleShowHideModal();

  const googleSignInButton = document.querySelector("#google-sign-in-button");
  googleSignInButton.addEventListener("click", handleGoogleSignInClick);

  const facebookSignInButton = document.querySelector(
    "#facebook-sign-in-button"
  );
  facebookSignInButton.addEventListener("click", handleFacebookSignInClick);
}

// sign in

if (onlineLibraryUser === null) {
  const signInLink = document.querySelector("#sign-in-link");

  function handleSignInClick(event) {
    event.preventDefault();
    handleSignInModal();
  }

  signInLink.addEventListener("click", handleSignInClick);
}

// footer

const spanYear = document.querySelector(".span-year");
spanYear.innerText = new Date().getFullYear();
