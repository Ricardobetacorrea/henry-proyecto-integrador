const fs = require('fs');
const http = require('http');

const PORT = 3001;

http.createServer((request, response) => {
  console.log(`Iniciando server en el puerto ${PORT}`);

  const { url } = request;

  response.setHeader('Access-Control-Allow-Origin', '*');

  if(url === '/rickandmorty/character') {
    console.log('url correcta');
  }

  response.statusCode = 400;
  response.setHeader('Content-Type', 'text/plain');
  response.write('Ruta no encontrada');
  response.end();
}).listen(PORT, 'localhost');