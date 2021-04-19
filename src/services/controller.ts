import express from 'express';
import Model from '../models/quoteModel';

export default class Controller {
    private Quote: any;

    public quotes_create: any;
    public quotes_get: any;
    public quotes_update: any;
    public quotes_delete: any;


    constructor() {
        this.Quote = new Model().model;

        this.quotes_create = (req: express.Request, res: express.Response) => {
            this.Quote.create({
                name: req.body.name,
                quote: req.body.quote
            },
            function(err: any, result: any) {
                if(err) throw err;
                res.redirect('/');
            })
        };

        this.quotes_get = (req: express.Request, res: express.Response) => {
            this.Quote.find({},
            function(err: any, result: any) {
                if(err) throw err;
                res.render('index.ejs', {quotes: result})
            });
        };

        this.quotes_update = (req: express.Request, res: express.Response) => {
            this.Quote.findOneAndUpdate(
            {name: req.body.name},
            {$set:{quote: req.body.quote}},
            function(err: any, result: any) {
                if(err) throw err;
                res.json('Success');
            })
        };

        this.quotes_delete = (req: express.Request, res: express.Response) => {
            this.Quote.findOneAndDelete({
                name: req.body.name,
                quote: req.body.quote
            },
            function(err: any, result: any) {
                if(err) throw err;
                res.json('Success');
            });
        }
    }
}