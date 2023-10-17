import express from 'express';
import cors from 'cors';
import router from './src/router.js';

const app = express();

app.use(cors())

app.use('/', router);
app.use('*', (req, res) => {
    res.send('Resource not found!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;
