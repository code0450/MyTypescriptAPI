import express from 'express';
import Router from '../routes/route';


export default class App {
    public app: any;

    constructor() {
        this.app = express();

        this.app.set('view engine', 'ejs');

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(new Router().router);

        this.app.listen(
            process.env.PORT,
            () => console.log(`Server running on http://localhost:${process.env.PORT}`)
        );
    }
}