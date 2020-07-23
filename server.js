const express = require('express');
const app = express();



app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: true
  }))


var html_dir = './';
app.get('/', function(req, res){
    res.sendFile(html_dir + 'index.html');
});
app.post('/formpost', (req, res) => {
    console.log(req.body.email)
    res.end()
}
);

app.listen(3000, function(){
    console.log('Listening on port 3000');
})
