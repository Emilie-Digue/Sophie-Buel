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
async function genererFiltre(){
    const response = await fetch ('http://localhost:5678/api/categories')
    const categorie = await response.json();
    
    const sectionFiltres = document.querySelector(".filtres");
    const btnTous = document.createElement("button");
    btnTous.innerText = "Tous";
    sectionFiltres.appendChild(btnTous);

    for (let i=0; i <categorie.length; i++) {

        const filtres = categorie[i];
        const sectionFiltres = document.querySelector(".filtres");

        const button = document.createElement("button");
        button.innerText = filtres.name;

        sectionFiltres.appendChild(button);
    
        button.addEventListener("click", async function() {
            const reponse = await fetch('http://localhost:5678/api/works');
            const projets = await reponse.json();
                
            const filtre = projets.filter(function (projet) {
                return projet.categoryId === [i];
            
            const suppr = document.querySelector(".gallery").innerHTML="";
            
            const projetFiltre = projets.categoryId[i];
            const sectionFiches = document.querySelector(".gallery");
       
            const projetElement = document.createElement("article");
            const imageElement = document.createElement("img");
            imageElement.src = article.imageUrl;
            const nomElement = document.createElement("figcaption");
             nomElement.innerText = article.title;
            console.log(button);
        })
        })
    
}
}

genererFiltre();

