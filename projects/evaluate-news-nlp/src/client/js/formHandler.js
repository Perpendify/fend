function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('textInput').value

    return fetch(`http://localhost:8081/sentiment?text=${formText}`)
    .then((res) => res.json())
    .then( (res) => {
    document.getElementById("Agreement").innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById("Confidence").innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById("Irony").innerHTML = `Irony: ${res.irony}`;
    document.getElementById("Model").innerHTML = `Model: ${res.model}`;
    document.getElementById("Score_tag").innerHTML = `Score_tag: ${res.score_tag}`;
    document.getElementById("Subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;

    // console.log('this is res:', res)
    })
    .catch((error) => {
    document.getElementById("Error").innerHTML = `Error, please input valid text: ${error}`;
    // console.log('this is error', error);
    });
}


export { 
    handleSubmit
}
