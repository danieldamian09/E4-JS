// Eliminar pizza de favoritos
export const eliminarFavorito = (pizza) => {
	let favoritosLocal = JSON.parse(localStorage.getItem("pizzaFavorita"));

	// Filtrar por pizza eliminada
	let pizzaEliminada = favoritosLocal.filter((elem) => elem.id !== pizza.id);

	// Guardar array al localStorage
	localStorage.setItem("pizzaFavorita", JSON.stringify(pizzaEliminada));
	
  // Eliminar card
  const card = document.querySelector(`[data-id="${pizza.id}"]`);
  card.remove();
};