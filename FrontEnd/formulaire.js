const form = document.querySelector('form');

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log("Il ny' a pas eu de rechargment");

    const login = {
        email : document.querySelector("email"),
        password: document.querySelector("password"),
    }
    const chargeUtile = JSON.stringify(login);

   fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: chargeUtile
    })
})