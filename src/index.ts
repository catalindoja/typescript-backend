import express from 'express';

import toolsRouter from './routes/tools';


const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log("someone pinged here!!! Dodo");
    res.send('pong');
});

app.use('/api/tools', toolsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
