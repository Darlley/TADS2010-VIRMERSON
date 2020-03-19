const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var express = require('express')
var app = express()
var adminRouter = express.Router()

adminRouter.get('/cursos', function(req, res) {
    res.send('Uma lista de cursos!')
})
adminRouter.post('/cursos', function (req, res) {
    res.send('Cadastro de novo curso')
})
adminRouter.put('/cursos', function (req, res) {
    res.send('Edição de um curso existente"')
})
adminRouter.delete('/cursos', function (req, res) {
    res.send('Remoção de um curso por ID')
})

app.use('/', adminRouter)
app.listen(8000)
