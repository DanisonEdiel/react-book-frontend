import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";
import Card from "./Card";

export const ListBookComponent = () => {
  //Listado de la lista de libros que obtenga de la api de spring boot
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BookService.getAllBooks()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBooks(response.data);
          console.log(response.data);
        } else {
          console.error(
            "La respuesta de la API no es un array:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener los libros:", error);
      });
  }, []);

  return (
    <div className="container d-flex mt-4">
      <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {books.map((book) => (
          <div className="col-lg-4 mb-4" key={book.id}>
            <Card title={book.name} ImageURL={book.image} description={book.description} price={book.price}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBookComponent;
