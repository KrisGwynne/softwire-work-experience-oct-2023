import express from 'express';
import cors from 'cors';
import router from './src/router.js';

const app = express();

app.use(cors())

// API endpoints available at <siteUrl>/api/<endpoint>
app.use('/api', router);

// Handle unknown urls
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Unknown endpoint'});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;
