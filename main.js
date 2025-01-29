//https://flynn.boolean.careers/exercises/api/random/mail
const email = document.getElementById("email-list")
const btn = document.getElementById("btn-genera")

for (let i = 0; i < 10; i++){
    
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    //codice per fare qualcosa con la risposta
    console.log(data);
    email.innerHTML += `<li class="list-group-item list-group-item-action list-group-item-primary">${data.response}</li>`
})
.catch(error => {
    //codice da eseguire in caso di errore
    console.log(error);
})
}

btn.addEventListener("click", function(event) {
    
    for(let i = 0; i < 10; i++){
        email.innerHTML = ""
        
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            email.innerHTML += 
            `<li class="list-group-item list-group-item-action list-group-item-primary">
            ${data.response}
            </li>`
        })
        .catch(error => {
            console.log(error);
        })
    }
        
});