// sign in or your list nav link

let isNotOnLandingPage = [
  "browse_collections.html",
  "your_list.html",
  "about_us.html",
].some((fileName) => window.location.href.includes(fileName));

function setSignInLinkContainerChild(user) {
  const signInLinkContainer = document.querySelector("#sign-in-link-container");

  if (user) {
    signInLinkContainer.innerHTML = `<a class='nav-link' href='${
      isNotOnLandingPage ? "" : "client/"
    }your_list.html'>Your List</a>`;
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
  onlineLibraryUser = null;

  document.cookie.split(";").forEach((cookie) => {
    [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === "onlineLibraryUser")
      onlineLibraryUser = cookieValue.trim();
  });

  setSignInLinkContainerChild(onlineLibraryUser);
}

getOnlineLibraryUser();
