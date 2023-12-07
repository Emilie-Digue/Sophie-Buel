const form = document.querySelector('form');
const error = document.querySelector('.error');

/*Ajout evement listener */
form.addEventListener("submit", async (event)=> {
    event.preventDefault();
    console.log("Il ny' a pas eu de rechargment");
    
    /*Création de l'objet de connexion*/ 
const login = {
    email : event.target.querySelector("[name=email]").value,
    password: event.target.querySelector("[name=password]").value,
    };
    
    /*Création de la charge utile */
    const chargeUtile = JSON.stringify(login);
    
    /*Appel de la fonction fetch  */
    const reponse = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body : chargeUtile
    });
    console.log(reponse);
    if (reponse.status === 200 ) {
        document.location.href = "admin.html"
    } 
    else {
        error.innerHTML = "Erreur dans l’identifiant ou le mot de passe"
    }
    /*Récupération du token depuis l'API */
    
    const token = await reponse.json();

    /*Transformation du token en JSON */
    const valeurToken = JSON.stringify(token);

    /*Stockage du token dans le localStorage */
    window.localStorage.setItem("token", valeurToken);
})


