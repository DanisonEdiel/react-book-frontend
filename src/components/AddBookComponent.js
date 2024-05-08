import React, { useState } from "react";
import bookServiceInstance from "../services/BookService";
import { useNavigate } from "react-router-dom";

export const AddBookComponent = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const navigate = useNavigate();

  const saveBook = (e) => {
    e.preventDefault();
    const book = { name, image, description, price };
    bookServiceInstance
      .createBook(book)
      .then((response) => {
        console.log(response.data);
        navigate("/books");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Register a new Book</h3>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Name </label>
                  <input
                    type="text"
                    placeholder="Enter a name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Image Url </label>
                  <input
                    type="text"
                    placeholder="Enter a image url"
                    name="image"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Description </label>
                  <textarea
                    placeholder="Enter a description for book"
                    name="description"
                    className="form-control"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Price </label>
                  <input
                    type="number"
                    placeholder="Enter a price for book"
                    name="price"
                    step="0.01"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  ></input>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveBook(e)}
                  >
                    {" "}
                    Save Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookComponent;
