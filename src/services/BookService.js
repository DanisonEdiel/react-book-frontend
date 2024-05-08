import axios from "axios";

//const BOOK_BASE_REST_API_URL ="https://rest-api-book-production.up.railway.app/api/books";
const BOOK_SERVICE_LOCALHOST="https://rest-api-book-production-2f54.up.railway.app/api/books";
const BOOK_SERVICE_LOCALHOST_SAVE="https://rest-api-book-production-2f54.up.railway.app/api/create";
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
