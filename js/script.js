const form = document.querySelector('#signup_form')
const passwordField1 = document.querySelector('#password')
const passwordField2 = document.querySelector('#confirm_password')
const errorMessage = document.querySelector('.error_message')
errorMessage.textContent=""

const handleSubmit = (e) => {
  if (passwordField1.value !== passwordField2.value) {
    errorMessage.textContent="* Passwords do not match"
    if (!passwordField1.classList.contains("forced-invalid")) {
      passwordField1.classList.add("forced-invalid")
      passwordField2.classList.add("forced-invalid")  
    }
    e.preventDefault();
    return false
  } else {
    errorMessage.textContent=""
  }
}

const removePasswordError = () => {
  errorMessage.textContent=""
  passwordField1.classList.remove("forced-invalid")
  passwordField2.classList.remove("forced-invalid")
}

// Add event listeners
form.addEventListener('submit', handleSubmit)
passwordField1.addEventListener('input', removePasswordError)
passwordField2.addEventListener('input', removePasswordError)