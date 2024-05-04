import axios from "axios";

const BOOK_BASE_REST_API_URL ="https://rest-api-book-production.up.railway.app/api/books";

class BookService {
    getAllBooks(){
        return axios.get(BOOK_BASE_REST_API_URL);
    }
}

const bookServiceInstance = new BookService();
export default bookServiceInstance;
