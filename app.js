const express = require("express");
const routes = require('./routes/m_router');
const app = express();

app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use('/', routes)




app.get('/testing', (req,res) =>{
    res.send('<h1>Home page</h1>')
});





const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`server have started on port ...${port}`)
});