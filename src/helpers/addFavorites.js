// Agregar pizza a favoritos
let favoritos = [];

export const agregarFavorito = (pizza, carrito) => {
	if (localStorage.getItem("pizzaFavorita") === null) {
		favoritos = [];
		favoritos.push(pizza);
		localStorage.setItem("pizzaFavorita", JSON.stringify(favoritos));
		carrito.innerHTML = favoritos.length;
		alert("Pizza agregada al carrito");
	} else {
		favoritos = JSON.parse(localStorage.getItem("pizzaFavorita"));
		favoritos.push(pizza);
		localStorage.setItem("pizzaFavorita", JSON.stringify(favoritos));
		carrito.innerHTML = favoritos.length;
		alert("Pizza agregada al carrito");
	}
};