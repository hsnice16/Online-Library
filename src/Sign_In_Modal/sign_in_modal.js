function createSignInModal() {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");
  modal.setAttribute("id", "modal");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "modalLabel");
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div id="sign-in-modal" class="modal-dialog modal-dialog-centered">
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
                <button id="google-sign-in-button">
                    <img 
                        src="https://img.icons8.com/color/40/000000/google-logo.png"
                        alt="Google Logo"
                    /> Sign In With Google
                </button>
                <p class="or-p"><span class="or-span">or</span><p>
                <button id="facebook-sign-in-button">
                    <img
                        src="https://img.icons8.com/color/40/000000/facebook.png"
                        alt="Facebook Logo"
                    /> Sign In With Facebook
                </button>
            </div>
            <div class="modal-footer">
                <p>
                    We need this to maintain your Book List, 
                    and to know that you are a genuine user or not.
                </p>
            </div>
        </div>
    </div>
`;

  return modal;
}
