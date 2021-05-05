import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    name: String,
    quote: { type: String, unique: true }
});

export default mongoose.model('Quote', quoteSchema);