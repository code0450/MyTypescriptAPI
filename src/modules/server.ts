import express from 'express';
import Router from '../routes/route';


export default class Server {
    private routerObj: any;
    public router: any;
    public app: any;

    async start() {
        await this.createRouter();
        
        this.app = express();

        this.app.set('view engine', 'ejs');

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(this.router);

        this.app.listen(
            process.env.PORT,
            () => console.log(`Server running on http://localhost:${process.env.PORT}`)
        );
    }

    private async createRouter() {
        this.routerObj = await new Router().create();
        this.router = this.routerObj.router; 
    }
}