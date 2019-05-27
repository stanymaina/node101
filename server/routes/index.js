import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {

    const API_ROOT = '/api'
    app.get(API_ROOT, (req, res) => res.status(200).send({
        message: 'Welcome to the BookStore API!',
    }));

    // User Routes
    // app.get(API_ROOT+'/users', Users.listUsers); // API route for user to signup
    // app.post(API_ROOT+'/user/:id', Users.listUsers); // API route for user to signup
    // app.post(API_ROOT+'/user/:id', Users.listUsers); // API route for user to signup
    
    // User Routes
    const USER_ROUTE = '/users'
    app.get(API_ROOT+USER_ROUTE, Users.index); // API route for getting all users
    app.get(API_ROOT+USER_ROUTE+'/:userId', Users.show); // API route for showing a specific user
    // app.post(API_ROOT+USER_ROUTE, Users.register); // API route for user to edit a user
    app.post(API_ROOT+USER_ROUTE, Users.register); // API route for user to edit a user
    app.put(API_ROOT+USER_ROUTE+'/:userId', Users.update); // API route for user to edit a user
    app.delete(API_ROOT+USER_ROUTE+'/:userId', Users.delete); // API route for user to delete a user

    // Book Routes
    const BOOK_ROUTE = '/books'
    app.get(API_ROOT+BOOK_ROUTE, Books.index); // API route for getting all books
    app.get(API_ROOT+BOOK_ROUTE+'/:bookId', Books.show); // API route for showing a specific book
    app.post(API_ROOT+BOOK_ROUTE+'/:bookId', Books.store); // API route for user to edit a book
    app.put(API_ROOT+BOOK_ROUTE+'/:bookId', Books.update); // API route for user to edit a book
    app.delete(API_ROOT+BOOK_ROUTE+'/:bookId', Books.delete); // API route for user to delete a book

    app.get(API_ROOT+BOOK_ROUTE+'/create/', Books.create); // API route for creating a book
    app.get(API_ROOT+BOOK_ROUTE+'/:bookId/edit', Books.edit); // API route for edit a book

    app.get('/login/facebook', FacebookRoutes.authenticate() );
    app.get( '/callback/facebook', FacebookRoutes.callback(), redirectSocialUser );
    /**
    * @api {POST} /auth/login/google Social Login
    * @apiName google
    * @apiGroup Auth
    * @apiSuccess {String} code HTTP status code from API.
    * @apiSuccess {String} message Message from API.
    */
    app.get('/login/google', GoogleRoutes.authenticate() );
    app.get( '/callback/google', GoogleRoutes.callback(), redirectSocialUser );
    /**
    * @api {POST} /auth/login/twitter Social Login
    * @apiName twitter
    * @apiGroup Auth
    * @apiSuccess {String} code HTTP status code from API.
    * @apiSuccess {String} message Message from API.
    */
    app.get('/login/twitter', TwitterRoutes.authenticate() );
    app.get( '/callback/twitter', TwitterRoutes.callback(), redirectSocialUser );
    /**
    * @api {POST} /auth/login/instagram Social Login
    * @apiName instagram
    * @apiGroup Auth
    * @apiSuccess {String} code HTTP status code from API.
    * @apiSuccess {String} message Message from API.
    */
    app.get('/login/instagram', InstagramRoutes.authenticate() );
    app.get( '/callback/instagram', InstagramRoutes.callback(), redirectSocialUser );
};