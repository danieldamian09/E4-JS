// Variables
const formulario = document.querySelector('#form-data');
const idPizza = document.querySelector('#idPizza');


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
	const card = document.createElement('div');
	card.classList.add('card');
}


formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener el array de pizzas del localStorage
  const pizzasLocalStorage = JSON.parse(localStorage.getItem("pizzas"));


  // Encuentra el primer objeto que cumple con el id que se le pasa
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const pizzaByID = pizzasLocalStorage.find((pizza) => pizza.id == idPizza.value);

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
})