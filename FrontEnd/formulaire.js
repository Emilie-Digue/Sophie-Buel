const form = document.querySelector('form');

form.addEventListener("submit", async (event)=> {
    event.preventDefault();
    console.log("Il ny' a pas eu de rechargment");

    const login = {
        email : document.querySelector("email"),
        password: document.querySelector("password"),
    }
    console.log(login);

    const log = await fetch("http://localhost:5678/api/users/login").then (log =>log.json());
    const valeurEmail = JSON.stringify(email);
    const valeurPassword = JSON.stringigy(password);
    
    const valeurUserID = JSON.stringify(userId);
    const valeurToken = JSON.stringify(token)

    window.localStorage.seItem("log", valeurEmail, valeurPassword, valeurUserID, valeurToken);
    })
