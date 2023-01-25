import { useNavigate } from "react-router-dom";

import './Products.css';

export function Products() {
  //Activamos la navegacion entre componentes cuando se de un evento
  let navegante = useNavigate()

  //que hago cuando se de el evento
  function detectarEvento(productoSeleccionado) {

    navegante("/details", {
      state: { productoSeleccionado }
    })
  }

  let titulo = "Productos de la banda";

  let producto = [
    {
      nombre: "Vinilo De La Banda",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSix.jpg?alt=media&token=92d184b2-0638-41a3-ae56-e0ae76be57be",
      precio: 79.99,
      descripcion: "Vinilo De Los Conciertos Mas Representativos",
    },

    {
      nombre: "Chompa Negra XL",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSeven.jpg?alt=media&token=8bf935fa-383e-45d4-945f-24d0ff1870fc",
      precio: 29.99,
      descripcion: "Buso con Capota Disponibles en Todas las Tallas",

    },

    {
      nombre: "Perfume Sauvage",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFive.jpg?alt=media&token=3ff8459e-26b6-4742-8188-519446a6612a",
      precio: 9.99,
      descripcion: "Perfume Sauvage One Direction",
    },
    {
      nombre: "Cartuchera Estudiantil",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFour.jpg?alt=media&token=6b573806-5db1-4f58-bca0-5dcc79929bb8",
      precio: 9.99,
      descripcion: "Cartuchera Estudiantil Para Niños Y Niñas",
    },
    {
      nombre: "Video Concierto",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productThree.jpg?alt=media&token=593b1f68-0a2f-44c5-9b58-9facf1591971",
      precio: 59.99,
      descripcion: "Video Concierto Tour Para Toda La Familia",
    },
    {
      nombre: "Camiseta Original",
      foto: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productOne.jpg?alt=media&token=f3896047-a675-4515-a112-4f8caf443ad8",
      precio: 39.99,
      descripcion: "Camiseta Original De La Banda Para Adultos Y Niños",
    },
  ];

  return (
    <>
      <h1 className="text-center py-3">{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">

          {producto.map(function (producto, id) {
            return (
              <div key={id}>
                <div className="col imageHeight">
                  <div className="card h-100 shadow">
                    <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"></img>

                    <button className="btn btn-primary mx-5 my-3" onClick={
                      function () {
                        detectarEvento(producto)
                      }}>Ampliar</button>

                    <hr />
                    <h3 className="pb-2 text-center">{producto.nombre}</h3>
                    <h4 className="pb-2 text-center">precio {producto.precio}</h4>
                    <p className="pb-2 text-center">{producto.descripcion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}