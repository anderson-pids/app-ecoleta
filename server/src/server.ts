import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuario');
    response.json(
        [
            'Anderson',
            'Ralph',
            'Caveira'
        ]
    );
});

app.listen(3333);