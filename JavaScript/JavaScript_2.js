const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const errorElement = document.getElementById('error')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = [];
    if (fname.value === '' || fname.value == null) {
        messages.push("First name is required")
    }

    if (lname.value === '' || lname.value == null) {
        messages.push("Last name is required")
    }

    if (messages.length > 0) {
       e.preventDefault() 
       errorElement.innerText = messages.join(', ')
    }
})