import server from './src/app.js';
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
});