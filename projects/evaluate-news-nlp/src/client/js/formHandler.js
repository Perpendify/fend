function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    console.log(formText)
    fetch('http://localhost:8081/test')
    .then(res => {
        console.log('testsdfksopdfk')
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
    .catch(console.log('error:',console.error))
}

export { handleSubmit }
