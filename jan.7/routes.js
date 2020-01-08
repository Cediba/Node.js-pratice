const fs = require('fs');


const requestHandler = (req, res) => {

    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write("<h1>Hello Node!</h1><div><a href='/readMessage'>Read message</a></div><div><a href='/writeMessage'>Write message</a></div>")
        res.end();
    }

    if (req.url ==='/about') {
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>We are awesome!</h1>');
        res.end();
    }

    if (req.url ==='/contact') {
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>No contact!</h1>');
        res.end();
    }

    if (req.url === '/sendMessage') {
        res.setHeader('Content-type', 'text/html');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form>');
        res.end();
    }

    if ( req.url === '/readMessage') {
            fs.readFile('./message.txt', null, function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write('Whoops! File not found!');
                } else {
                    res.write(data);
                }
                res.end();
            });
        }

    if (req.url ==='/message' && req.method === 'POST') {

        const body = [];

        req.on('data', (package) => {
            console.log(package);
            body.push(package);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                res.end();
            })
        })

    }



};

module.exports = requestHandler;