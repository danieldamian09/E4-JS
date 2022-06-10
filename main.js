// Variables
const formulario = document.querySelector('#formulario');
const idPizza = document.querySelector('#idPizza');


// Data de la pizza
const pizzas = [
	{
		id: 1,
		nombre: "Pepperoni",
		ingredientes: ["pepperoni", "queso", "tomate", "pimenton", "harina"],
		precio: 800,
	},
	{
		id: 2,
		nombre: "Hawaiana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "piña", "harina"],
		precio: 900,
	},
	{
		id: 3,
		nombre: "Vegetariana",
		ingredientes: ["tomate", "cebolla", "rucula", "pimenton", "harina"],
		precio: 700,
	},
	{
		id: 4,
		nombre: "Napolitana",
		ingredientes: ["queso", "tomate", "cebolla", "pimenton", "jamon", "harina"],
		precio: 1000,
	},
	{
		id: 5,
		nombre: "4 quesos",
		ingredientes: ["mozzarella", "parmesano", "cheddar", "provolone", "harina"],
		precio: 1200,
	},
	{
		id: 6,
		nombre: "Mozzarella",
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