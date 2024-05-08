import axios from "axios";

//const BOOK_BASE_REST_API_URL ="https://rest-api-book-production.up.railway.app/api/books";
const BOOK_SERVICE_LOCALHOST="http://localhost:8081/api/books";
const BOOK_SERVICE_LOCALHOST_SAVE="http://localhost:8081/api/create";
class BookService {
    getAllBooks(){
        return axios.get(BOOK_SERVICE_LOCALHOST);
    }

    createBook(book){
        return axios.post(BOOK_SERVICE_LOCALHOST_SAVE, book)
    }
}

const bookServiceInstance = new BookService();
export default bookServiceInstance;
