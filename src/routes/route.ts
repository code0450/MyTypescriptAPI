import * as express from 'express';
import Controller from '../services/controller'

export default class Router {
    public router: any;
    public controller: any;

    constructor() {
        this.router = express.Router();
        this.controller = new Controller();

        this.router.get('/', this.controller.quotes_get);
        this.router.post('/quotes', this.controller.quotes_create);
        this.router.put('/quotes', this.controller.quotes_update);
        this.router.delete('/quotes', this.controller.quotes_delete);
    }
}