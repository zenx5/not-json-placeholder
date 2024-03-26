const cite=document.querySelector('#cite')
const url='https://api.chucknorris.io/jokes/random'
const button=document.querySelector('#button')

const handleClick=()=>{  
    fetch(url)
    .then(response => response.json())
    .then(data => cite.innerText=data.value)
} 

handleClick()

button.addEventListener('click', handleClick)