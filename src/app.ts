import mongoose from 'mongoose';
import Server from './modules/server';

export default class App {
    private url: any;
    public server: any;

    async start() {
        this.url = process.env.DB_CONNECTION;
        
        await mongoose.connect(this.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        mongoose.connection.on('error', err => {
            throw err;
        })
        mongoose.connection.once('open', () => console.log("Connected to database"));

        
        this.server = await new Server().start();
    } 
}