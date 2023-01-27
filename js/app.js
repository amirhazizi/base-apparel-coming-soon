// variables
const form = document.getElementById("form")
const errorMsg = document.getElementById("error-msg")
const errorImg = document.querySelector(".error-img")
const email = document.querySelector("#email-input")
// submit event
form.addEventListener("submit", function (e) {
  //   console.log("hello", email.value)
  const emailValue = email.value
  e.preventDefault()
  if (emailValue === "" || validateEmail(emailValue)) {
    addClass(0)
  } else {
    addClass(1)
    alert("Thank you :)")
  }
})
// check validateEmail
function validateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return false
  }
  return true
}
// cleaner code
function addClass(t) {
  if (t) {
    errorMsg.classList.remove("active")
    errorImg.classList.remove("active")
    email.style.borderColor = "hsla(0, 6%, 24%, 0.3)"
    email.value = ""
  } else {
    errorMsg.classList.add("active")
    errorImg.classList.add("active")
    email.style.borderColor = "red"
  }
}
