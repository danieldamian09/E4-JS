

export const crearList = (pizzas) => {

  const contenedor = document.querySelector(".list-pizzas ul");

  pizzas.forEach((pizza) => {
    const item = document.createElement("li");
    item.textContent = `nombre: ${pizza.nombre} id: ${pizza.id}`;
    contenedor.appendChild(item);
  });

  

}