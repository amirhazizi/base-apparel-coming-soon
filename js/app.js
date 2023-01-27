const form = document.getElementById("form")
const errorMsg = document.getElementById("error-msg")
const errorImg = document.querySelector(".error-img")
const email = document.querySelector("#email-input")
form.addEventListener("submit", function (e) {
  //   console.log("hello", email.value)
  const emailValue = email.value
  e.preventDefault()
  if (emailValue === "") {
    addClass(0)
  } else if (ValidateEmail(emailValue)) {
    addClass(0)
  } else {
    addClass(1)
    alert("Thank you :)")
  }
})
function ValidateEmail(inputText) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.match(mailformat)) {
    return false
  }
  return true
}
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
