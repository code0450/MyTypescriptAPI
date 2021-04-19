import mongoose from 'mongoose';

export default class Model {
    private Schema: any;
    private quoteSchema: any;
    public model: any;
    
    
    constructor() {
        this.Schema = mongoose.Schema;

        this.quoteSchema = new this.Schema({
            name: String,
            quote: { type: String, unique: true }
        })

        this.model = mongoose.model('Quote', this.quoteSchema);
    }
}