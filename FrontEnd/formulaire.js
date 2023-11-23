let baliseEmail = document.getElementById("email")
let email = baliseEmail.value 
console.log(email);
let baliseMdp = document.getElementById("password")
let mdp = baliseMdp.value
console.log(mdp);

const form = document.querySelector('form');

form.addEventListener("submit", (event)=> {
    event.preventDefautlt();
    console.log("Il ny' a pas eu de rechargment");
})