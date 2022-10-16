const http = require("http");
// const {MongoClient} = require('mongodb');
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const Card = require("./models/cardModel");
const cardRoute = require("./routes/Card");

const hostname = "127.0.0.1";
const port = 8080;
const uri = "mongodb+srv://test-user:G6DSXYuwVLsxD4Pg@cluster0.a2goo9m.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);


  
async function main(){
    const uri = "mongodb+srv://test-user:0dlckWVGblqme8Rn@cluster0.a2goo9m.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri);
 
    // Connect to MongoDB instance
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   });

app.get("/createCards", (req, res) => {
    console.log("It works!")
    res.status(200).send({
        test: 'hello world',
        test2: "it works!"
    })
})


app.get("/getCard/:id", async (req, res) => {
    try{
        const card = await Card.findById(req.params.id);
        res.status(200).json(card);
    } catch (err){
        res.status(500).json(err);
    }        
})

app.post("/createCards2", async (req, res) => {
	let { name } = req.body
    let { companyName } = req.body
    let { jobPosition } = req.body
    let { phoneNumber } = req.body
    let { email } = req.body

    console.log(name)
    console.log(companyName)
    console.log(jobPosition)
    console.log(phoneNumber)
    console.log(email)
	
    try {
        const newCard = new Card({
            name: name,
            companyName: email,
            jobPosition: jobPosition,
            phoneNumber: phoneNumber,
            email: email,
        });
        const card = await newCard.save();
        res.status(200).json(card);
        console.log();
        console.log("It works! It's in the database!");
    } catch (err) {
        res.status(500).json(err);
    }



})

app.use("/api/Card", cardRoute);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    main().catch(console.error);
});