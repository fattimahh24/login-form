const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const btn = document.querySelector(".log-btn");
const iconClose = document.querySelector(".icon-close");

register.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
