// Variables
const formulario = document.querySelector("#form-data");
const idPizza = document.querySelector("#idPizza");
const container = document.querySelector(".card-container");


// Data de la pizza
const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		imagen: "./assets/img/peperoni.jpg",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		imagen: "./assets/img/hawaiana.jpg",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		imagen: "./assets/img/vegetariana.jpg",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		imagen: "./assets/img/napolitana.jpg",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		imagen: "./assets/img/cuatro-quesos.jpg",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
		imagen: "./assets/img/mozzarella.jpg",
		ingredientes: ["mozzarella", "tomate", "harina"],
		precio: 500,
	},
];

// Guardar array al localStorage
// window.onload = function () {
//   localStorage.setItem("pizzas", JSON.stringify(pizzas));
// }

// Guardar array al localStorage
window.addEventListener("load", () => {
	localStorage.setItem("pizzas", JSON.stringify(pizzas));
});

// Crear Card Pizzas
const crearCard = (pizza) => {
	// Crear la card
	const card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute("id", pizza.id);
	container.appendChild(card);

	// Crear la imagen cerrar
	const img = document.createElement("img");
	img.classList.add("close");
	img.src = "./assets/img/close.png";
	card.appendChild(img);
	// Agregar el evento para eliminar toda la card
	img.addEventListener("click", () => {
		card.remove();
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
};

formulario.addEventListener("submit", (e) => {
	e.preventDefault();

	// Obtener el array de pizzas del localStorage
	const pizzasLocalStorage = JSON.parse(localStorage.getItem("pizzas"));

	// Encuentra el primer objeto que cumple con el id que se le pasa
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	const pizzaByID = pizzasLocalStorage.find(
		(pizza) => pizza.id == idPizza.value
	);

	// Me devuelve un array donde esta la pizza con el id que le paso
	// const pizzaByID = pizzasLocalStorage.filter((pizza) => pizza.id == idPizza.value);

	// Validaciones
	if (idPizza.value == "") {
		alert("Debes ingresar un ID");
		return;
	}

	if (pizzaByID == undefined) {
		alert("No existe la pizza con el ID ingresado");
		return;
	}



	// Mostrar la pizza en la card
	console.log(pizzaByID);
	crearCard(pizzaByID);

	// Limpiar el formulario
	formulario.reset();

});


