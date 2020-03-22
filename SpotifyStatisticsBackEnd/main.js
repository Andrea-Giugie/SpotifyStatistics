var express = require('express');
var app = express();
var auth

const options = {
    hostname: 'api.spotify.com',
    port: 443,
    path: '/v1/me/top/tracks?time_range=long_term&limit=50&offset=0',
    method: 'GET',
    headers: {
    }
}
const https = require('https');
app.get('/:auth', function (reque, response) {
    auth = reque.params.auth
    options.headers["Authorization"] = " Bearer " + auth;

    https.get(options, res => {
        let body = "";
        res.on('data', d => {
            body += d;
        })
        res.on("end", () => {
            console.log("HTTP request done");
            if (res.statusCode === 401) {
                response.end("Non connesso");
            }
            else {
                response.end(body);
            }
        })
    })
})




var server = app.listen(4201, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server Listening at http://%s:%s", host, port)
})