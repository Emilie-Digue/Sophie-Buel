/* Affichage des différents projets*/
async function genererProjets() {
    
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

   
    for (let i=0; i < projets.length; i++) {
    
        const article = projets[i];
        const sectionFiches = document.querySelector(".gallery");
       
        const projetElement = document.createElement("article");
        const imageElement = document.createElement("img");
        imageElement.src = article.imageUrl;
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = article.title;

        sectionFiches.appendChild(projetElement);
        projetElement.appendChild(imageElement);
        projetElement.appendChild(nomElement);
    }
  
}

genererProjets();

/* création des filtres*/
const boutonObjet = document.querySelector(".btn_objets");
boutonObjet.addEventListener("click", async function() {
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();
    
    const objetFiltre = projets.filter(function (projet) {
        return categoryId = 1;
    })
    console.log(objetFiltre)
});


