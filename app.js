// Sruthi Sivasankararaj
      
// Node Server    
          
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hey Sruthi Sivasankararaj !!')
    }

// localhost:5000/about
    if(req.url === '/about') {
        res.end('Hey, Its About Page !!')
    }

    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for!</p>
    <a href="/">Back Home</a>
    `)
})

// Server - Port
server.listen(5000)
