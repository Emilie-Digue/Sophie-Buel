/* Affichage des différents projets*/
async function genererProjets() {
    
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

   creerProjets(projets);
    
  
}

genererProjets();

/* création des filtres*/
async function genererFiltre(){
    const response = await fetch ('http://localhost:5678/api/categories')
    const categorie = await response.json();
    const sectionFiches = document.querySelector(".gallery");
    const sectionFiltres = document.querySelector(".filtres");
    const btnTous = document.createElement("button");
    btnTous.innerText = "Tous";
    sectionFiltres.appendChild(btnTous);

    btnTous.addEventListener("click", function() {
        sectionFiches.innerHTML="";
        genererProjets();
    })
    

    for (let filtres of categorie) {

        /*const filtres = categorie[i];*/
        

        const button = document.createElement("button");
        button.innerText = filtres.name;

        sectionFiltres.appendChild(button);
    
        button.addEventListener("click", async function() {
            const reponse = await fetch('http://localhost:5678/api/works');
            const projets = await reponse.json();
                
            const filtre = projets.filter(function (projet) {
                return projet.categoryId === filtres.id;
            })
            const sectionFiches = document.querySelector(".gallery");
            sectionFiches.innerHTML="";
            
            creerProjets(filtre);
        
        })
    
}
}

genererFiltre();

function creerProjets (projets)  {
    for (let article of projets) {
    
        
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

