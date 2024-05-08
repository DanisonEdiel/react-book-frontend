import "./App.css";
import ListBookComponent from "./components/ListBookComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBookComponent from "./components/AddBookComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListBookComponent/>}></Route>
            <Route path="/books" element={<ListBookComponent/>}></Route>
            <Route path="/add-book" element={<AddBookComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
