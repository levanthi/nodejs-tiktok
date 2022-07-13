
function startServer(app,port){
    const https = require('https');
    const fs = require('fs');

    const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
    };
    https.createServer(options, app).listen(port);
}

module.exports = startServer
