const scriptURL = 'https://script.google.com/macros/s/AKfycbz6QaaAh_4z4QP-Imp5jf73E5rp8jhYG1xAYPqTXGBDpmnGCAGxjs4RBEqYzN618hZG/exec'

const form = document.forms['Scouting-data']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })