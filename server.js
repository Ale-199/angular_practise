let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(__dirname + '/dist/inventory-frontend')); 

app.get('/*', function (req, res) { 
    res.sendFile(path.join(__dirname + '/dist/inventory-frontend/')); 
}); 

app.listen(process.env.PORT || 8080, () => {
    console.log(`====> Angular app is running.`)
})