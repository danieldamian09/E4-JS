const container = document.querySelector(".favorite-container")

window.addEventListener("load", () => {
  mostrarPizzasFavoritas();
});


const mostrarPizzasFavoritas = () => {
	let pizzasFavoritasCard = JSON.parse(localStorage.getItem("pizzaFavorita"));
	pizzasFavoritasCard.forEach((pizza) => {
		crearCard(pizza);
	});
};

// Eliminar pizza de favoritos
const eliminarFavorito = (pizza) => {
	let favoritosLocal = JSON.parse(localStorage.getItem("pizzaFavorita"));
	console.log(favoritosLocal);

	// Filtrar por pizza eliminada
	let pizzaEliminada = favoritosLocal.filter((elem) => elem.id !== pizza.id);
	console.log(pizzaEliminada);
	// carrito.innerHTML = pizzaEliminada.length;

	// Guardar array al localStorage
  localStorage.setItem("pizzaFavorita", JSON.stringify(pizzaEliminada));
  // Eliminar card
  const card = document.querySelector(`[data-id="${pizza.id}"]`);
  card.remove();
};

const crearCard = (pizza) => {

	// Crear la card
	const card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute("data-id", pizza.id);
  container.appendChild(card);
  
  	// Crear la imagen cerrar
	const img = document.createElement("img");
	img.classList.add("close");
	img.src = "./assets/img/close.png";
	card.appendChild(img);
	// Agregar el evento para eliminar toda la card
	img.addEventListener("click", () => {
		eliminarFavorito(pizza);
	});

	// Crar la imagen de la card
	const cardImg = document.createElement("img");
	cardImg.classList.add("imagen");
	cardImg.src = pizza.imagen;
	card.appendChild(cardImg);

	// Crear el card body
	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");
	card.appendChild(cardBody);

	// Crear el nombre de la pizza
	const cardNombre = document.createElement("h5");
	cardNombre.classList.add("name-pizza");
	cardNombre.innerHTML = pizza.nombre;
	cardBody.appendChild(cardNombre);

	// Crear titulo ingredientes
	const cardIngredientes = document.createElement("p");
	cardIngredientes.classList.add("ingredients");
	cardIngredientes.innerHTML = "Ingredientes:";
	cardBody.appendChild(cardIngredientes);

	// Crear lista de ingredientes
	const cardList = document.createElement("ul");
	cardList.classList.add("list-ingredients");
	cardBody.appendChild(cardList);

	// Crear los ingredientes
	pizza.ingredientes.forEach((ingrediente) => {
		const cardItem = document.createElement("li");
		cardItem.innerHTML = ingrediente;
		cardList.appendChild(cardItem);
	});

	// Container precios y agregar
	const cardPrecio = document.createElement("div");
	cardPrecio.classList.add("container-price");
	cardBody.appendChild(cardPrecio);

	// Crear el precio
	const cardPrice = document.createElement("p");
	cardPrice.classList.add("price");
	cardPrice.innerHTML = `Precio: ${pizza.precio}`;
	cardPrecio.appendChild(cardPrice);

};

