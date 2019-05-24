import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {

    const API_ROOT = '/api'
    app.get(API_ROOT, (req, res) => res.status(200).send({
        message: 'Welcome to the BookStore API!',
    }));

    // User Routes
    app.get(API_ROOT+'/users', Users.listUsers); // API route for user to signup
    // app.post(API_ROOT+'/user/:id', Users.listUsers); // API route for user to signup
    // app.post(API_ROOT+'/user/:id', Users.listUsers); // API route for user to signup
    
    // Book Routes
    const BOOK_ROUTE = '/books'
    app.get(API_ROOT+BOOK_ROUTE, Books.index); // API route for getting all books
    app.get(API_ROOT+BOOK_ROUTE+'create', Books.create); // API route for creating a book
    app.get(API_ROOT+BOOK_ROUTE+':bookId', Books.show); // API route for showing a specific book
    app.post(API_ROOT+BOOK_ROUTE+':bookId', Books.store); // API route for user to edit a book
    app.get(API_ROOT+BOOK_ROUTE+':bookId/edit', Books.edit); // API route for edit a book
    app.put(API_ROOT+BOOK_ROUTE+':bookId', Books.update); // API route for user to edit a book
    app.delete(API_ROOT+BOOK_ROUTE+':bookId', Books.delete); // API route for user to delete a book

};