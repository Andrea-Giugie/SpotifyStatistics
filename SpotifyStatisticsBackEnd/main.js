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
//BQAikHo0K58gy_1psEsPANAxsHz6iBs6INOWdIXpVjTt5PO2xTAnIJMv_25hjHvH82PyaOLO_5k8NZg5ROasGkd3oTL5et8sTyIWfg-dL7dgGzNGDSpTeLeHDhsFnZh-2GTKBzO98XQl1INgqbWq9glgHw
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
            console.log("letto");
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

    console.log("Example app listening at http://%s:%s", host, port)
})