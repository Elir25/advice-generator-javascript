let button = document.createElement('button');
button.textContent = "click here";

let h1 = document.createElement('h2');
h1.innerText = "some cool advice will appear here some day!";

let card = document.querySelector('#card');
card.appendChild(h1);
card.appendChild(button);

//adding the fetch when the button is clicked
button.addEventListener('click', fetchApi);

function fetchApi() {
    let URL = 'https://api.adviceslip.com/advice';
    fetch(URL)
    .then((response) => {
         return response.json();
        })
    .then((data) => {
        console.log(data.slip.advice);
        h1.innerText = data.slip.advice;
    })
}

fetchApi();


