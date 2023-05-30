const express = require("express");

const userRoute = require("./routes/user.route")

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended : true}));

app.use(userRoute)

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

