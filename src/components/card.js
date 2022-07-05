import { agregarFavorito } from '../helpers/addFavorites.js';


// Crear Card Pizzas
export const crearCard = (pizza, container, carrito) => {

	console.log(pizza);

	// Validar si la pizza ya esta creada
	let pizzaCreada = document.querySelector(`[data-id="${pizza.id}"]`);
	if (pizzaCreada) {
		alert("Pizza ya creada");
		return;
	}

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
		card.remove();
		// eliminarFavorito(pizza);
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

	// Crear el boton agregar
	const cardBtn = document.createElement("button");
	cardBtn.classList.add("btn-add");
	cardBtn.innerHTML = "Agregar Carrito";
	cardPrecio.appendChild(cardBtn);

	// Agregar el evento al boton
	cardBtn.addEventListener("click", () => {
		agregarFavorito(pizza, carrito);
	});
};