const formOpenBtn = document.querySelector("#form-open"),
  login = document.querySelector(".login"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => login.classList.add("show"));
formCloseBtn.addEventListener("click", () => login.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

const formOpenBtnMenu = document.querySelector("#form-open-menu"),
  loginMenu = document.querySelector(".login"),
  formContainerMenu = document.querySelector(".form_container"),
  formCloseBtnMenu = document.querySelector(".form_close"),
  signupBtnMenu = document.querySelector("#signup"),
  loginBtnMenu = document.querySelector("#login"),
  pwShowHideMenu = document.querySelectorAll(".pw_hide_menu");

formOpenBtnMenu.addEventListener("click", () => login.classList.add("show"));
formCloseBtnMenu.addEventListener("click", () => login.classList.remove("show"));

pwShowHideMenu.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  formContainerMenu.classList.add("active");
});
loginBtnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  formContainerMenu.classList.remove("active");
});
