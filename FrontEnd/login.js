const form = document.querySelector('form');

/*Ajout evement listener */
form.addEventListener("submit", async (event)=> {
    event.preventDefault();
    console.log("Il ny' a pas eu de rechargment");
    
    /*Création de l'objet de connexion*/ 
const login = {
    email : Event.target.querySelector("[name=email]").value,
    password: Event.target.querySelector("[name=password]").value,
    };
    
    /*Création de la charge utile */
    const chargeUtile = JSON.stringify(login);
    
    /*Appel de la fonction fetch  */
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body : chargeUtile
    });
    
})

