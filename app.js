const express = require("express");
const routes = require('./routes/m_router');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));
app.set("view engine", "ejs");
app.use('/', routes)




app.get('/testing', (req,res) =>{
    res.send('<h1>Home page</h1>')
});

// app.use("*", (req,res) =>{
//     res
//         .status(404)
//        .send("<h1>Page does not exist</h1>")
// });



const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`server have started on port ...${port}`)
});