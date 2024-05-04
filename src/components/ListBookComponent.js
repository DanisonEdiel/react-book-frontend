import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";

export const ListBookComponent = () => {
  //Listado de la lista de libros que obtenga de la api de spring boot
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BookService.getAllBooks()
      .then(response => {
        if (Array.isArray(response.data)) {
          setBooks(response.data);
          console.log(response.data);
        } else {
          console.error("La respuesta de la API no es un array:", response.data);
        }
      })
      .catch(error => {
        console.error("Error al obtener los libros:", error);
      });
  }, []);

  

  return (
    <div className="container">
      <h2 className="text-center">List Books</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.description}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBookComponent;
