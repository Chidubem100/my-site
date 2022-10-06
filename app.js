const express = require("express");
const app = express();

app.use(express.static('./public'));
app.set("view engine", "ejs");





app.get('/', (req,res) =>{
    res.send('<h1>Home page</h1>')
});





const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`server have started on port ...${port}`)
});