import mongoose from 'mongoose';
import App from './modules/server';

export default class Server {
    private url: any;
    public app: any;

    constructor() {
        this.url = process.env.DB_CONNECTION;

        mongoose.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        mongoose.connection.on('error', err => {
            throw err;
        })
        mongoose.connection.once('open', () => console.log("Connected to database"));

        this.app = new App();
    }    
}