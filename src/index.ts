import * as http from 'http';
import * as os from 'os';
const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    // La méthode est GET, donc la requête est traitée
    res.writeHead(200, {

    });
    
    res.end(JSON.stringify(req.headers, null, 2)); // Convertit les en-têtes en JSON avec indentation
    console.log(os.hostname());
  } else {
    // Toutes les autres méthodes (POST, PUT, etc.) sont ignorées
    res.statusCode=404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});