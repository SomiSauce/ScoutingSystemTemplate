const scriptURL = 'https://script.google.com/macros/s/AKfycbxBeQ4vFWTpO9H1XEaUQuiHLj4Qnmt5EN723LI5jfSS6fwfgFFkCL329uDW-D2MPjFF/exec'

const form = document.forms['Scouting-data']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })