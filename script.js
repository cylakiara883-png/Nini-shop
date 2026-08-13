let panier = [];

const boutons = document.querySelectorAll(".product button");
const panierItems = document.getElementById("panier-items");
const totalElement = document.getElementById("total");
const viderPanier = document.getElementById("vider-panier");


// AJOUTER UN PRODUIT AU PANIER

boutons.forEach((bouton) => {

    bouton.addEventListener("click", () => {

        const produit = bouton.parentElement;

        const nom = produit.querySelector("h3").textContent;

        const prix = parseFloat(
            produit.querySelector(".price").textContent
                .replace("$", "")
        );

        panier.push({
            nom: nom,
            prix: prix
        });

        afficherPanier();

        alert(nom + " a été ajouté au panier 🛒");
    });

});


// AFFICHER LE PANIER

function afficherPanier() {

    panierItems.innerHTML = "";

    if (panier.length === 0) {

        panierItems.innerHTML =
            "<p>Votre panier est vide.</p>";

        totalElement.textContent = "0 $";

        return;
    }

    let total = 0;

    panier.forEach((article, index) => {

        total += article.prix;

        const div = document.createElement("div");

        div.classList.add("panier-article");

        div.innerHTML = `
            <span>${article.nom}</span>
            <span>${article.prix} $</span>

            <button onclick="supprimerArticle(${index})">
                ❌
            </button>
        `;

        panierItems.appendChild(div);
    });

    totalElement.textContent = total + " $";
}


// SUPPRIMER UN ARTICLE

function supprimerArticle(index) {

    panier.splice(index, 1);

    afficherPanier();
}


// VIDER LE PANIER

viderPanier.addEventListener("click", () => {

    panier = [];

    afficherPanier();

});