import express from 'express';

class RouterBuilder {
    constructor() {
        this.router = express.Router();
        this.router.use(express.json())
    }

    addGetEndpoint(path, action) {
        this.router.get(path, (req, res) => {
            res.json(action(req.body));
        });
    }
}

export default RouterBuilder;
