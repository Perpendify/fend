function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textInput').value
    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    // console.log(formText)
    // fetch('http://localhost:8081/test', {
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // })
    // .then(res => {
    //     return res.json();
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })
    // .catch(console.log('error:',console.error))


    return fetch(`http://localhost:8081/sentiment?text=${formText}`)
    .then((res) => res.json())
    .then( (res) => {
    document.getElementById("results2").innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById("results3").innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById("results4").innerHTML = `Irony: ${res.irony}`;
    document.getElementById("results5").innerHTML = `Model: ${res.model}`;
    document.getElementById("results6").innerHTML = `Score_tag: ${res.score_tag}`;
    document.getElementById("results7").innerHTML = `Subjectivity: ${res.subjectivity}`;

    // console.log('this is res:', res)
    })
    .catch((error) => {
    document.getElementById("results").innerHTML = `Error, please input valid text: ${error}`;
    // console.log('this is error', error);
    });
}

export { handleSubmit }
