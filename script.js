let panier = [];

const boutons = document.querySelectorAll(".product button");

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

        alert(nom + " a été ajouté au panier 🛒");

        afficherPanier();
    });
});


function afficherPanier() {

    console.log("Panier :", panier);

    let total = 0;

    panier.forEach((article) => {
        total += article.prix;
    });

    console.log("Total :", total + " $");
}