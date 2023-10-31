//Script que carga dinámicamente datos de productos y crea cards de productos en el DOM
document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            nombre: "Pantalón azul",
            imagen: "/assets/files/images/compressed/pantalonAzul.webp",
            sale: true,
            oldPrice: "$1000",
            newPrice: "$900",
        },
        {
            nombre: "Camisa de lino celeste",
            imagen: "/assets/files/images/compressed/camisaLinoCeleste.webp",
            sale: false,
            newPrice: "$860",
        },
        {
            nombre: "Chaqueta Moonideas",
            imagen: "/assets/files/images/compressed/chaquetaMoonideas.webp",
            sale: false,
            newPrice: "$1500",
        }
    ];

    const productsContainer = document.getElementById("productsList");

    productos.forEach((producto) => {
        const productCard = document.createElement("div");
        productCard.className = "productCard";

        const productImage = document.createElement("div");
        productImage.className = "productImage";
        const productImg = document.createElement("img");
        productImg.src = producto.imagen;
        productImg.alt = producto.nombre;
        productImage.appendChild(productImg);

        // Agrega la etiqueta "SALE" solo si la propiedad sale es verdadera
        if (producto.sale) {
            const saleTag = document.createElement("span");
            saleTag.className = "saleTag";
            saleTag.textContent = "SALE";
            productImage.appendChild(saleTag);
        }

        const productDetails = document.createElement("div");
        productDetails.className = "productDetails";

        const productsInfo = document.createElement("div");
        productsInfo.className = "productsInfo";
        const productName = document.createElement("h3");
        productName.textContent = producto.nombre;
        const favoriteIcon = document.createElement("img");
        favoriteIcon.src = "/assets/files/icons/heart.svg";
        favoriteIcon.alt = "Favorito";
        favoriteIcon.className = "favoriteIcon";
        productsInfo.appendChild(productName);
        productsInfo.appendChild(favoriteIcon);

        const productsPrice = document.createElement("div");
        productsPrice.className = "productsPrice";
        if (producto.sale) {
            const oldPrice = document.createElement("p");
            oldPrice.className = "oldPrice";
            oldPrice.textContent = producto.oldPrice;
            productsPrice.appendChild(oldPrice);
        }
        const newPrice = document.createElement("p");
        newPrice.className = "newPrice";
        newPrice.textContent = producto.newPrice;
        productsPrice.appendChild(newPrice);

        productDetails.appendChild(productsInfo);
        productDetails.appendChild(productsPrice);

        productCard.appendChild(productImage);
        productCard.appendChild(productDetails);

        productsContainer.appendChild(productCard);
    });
});


