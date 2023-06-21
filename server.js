import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('My first docker containerized nodejs application');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});