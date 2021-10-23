// sign in or your list nav link

function setSignInLinkContainerChild(user) {
  const signInLinkContainer = document.querySelector("#sign-in-link-container");

  if (user) {
    signInLinkContainer.innerHTML =
      "<a class='nav-link' href='your_list.html'>Your List</a>";
  } else {
    signInLinkContainer.innerHTML =
      "<a class='nav-link' href='#' id='sign-in-link'>Sign In</a>";
  }
}

//

let onlineLibraryUser;

function setOnlineLibraryUser(onlineLibraryUserToken) {
  onlineLibraryUser = onlineLibraryUserToken;

  const EXPIRE_DAYS = 2;
  const date = new Date();
  date.setTime(date.getTime() + EXPIRE_DAYS * 24 * 60 * 60 * 1000);

  document.cookie = `onlineLibraryUser=${onlineLibraryUserToken}; expires=${date.toUTCString()}; path=/; secure`;

  setSignInLinkContainerChild(onlineLibraryUser);
  window.location.reload();
}

function getOnlineLibraryUser() {
  onlineLibraryUser = document.cookie.split("=")[1] ?? null;

  setSignInLinkContainerChild(onlineLibraryUser);
}

getOnlineLibraryUser();
