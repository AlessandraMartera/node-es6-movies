const http = require("http");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

http.createServer(function (req, res) {
    res.end(
        "il server è attivo"
    )
});