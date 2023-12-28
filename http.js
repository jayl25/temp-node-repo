const http = require('http');

const server = http.createServer( (req, res) => {
    
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if (req.url === '/about'){
        res.end('Welcome to our about page')
    }

    res.end(`<h1>Oops!</h1><br><p>We can't seem to find the page you are looking for</p><br><a href="/">back home</a>`)
});

server.listen(5000);