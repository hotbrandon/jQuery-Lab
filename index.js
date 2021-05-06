const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {
        id: 1,
        title: 'The Avengers'
    },
    {
        id: 2,
        title: 'Captain Marvel'
    },
    {
        id: 3,
        title: 'Superwoman 1984'
    }

];

app.get('/movies', (req, res) => {
    res.json(movies);
});


app.listen(port, () => console.log(`server started at port ${port}`));