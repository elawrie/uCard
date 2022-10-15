const router = require("express").Router();
const Card = require("../models/cardModel");


router.post("/", async(req, res) => {
    // const newCard = new Card(req.body);
    // try {
    //     const savedCard = await newCard.save();
    //     res.status(200).json(savedCard)
    // } catch (err){
    //     res.status(500).json(err);
    // }
    console.log("post req sent")

    try {
        const newCard = new Card({
            name: req.body.name,
            companyName: req.body.email,
            jobPosition: req.body.jobPosition,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
        });
        const card = await newCard.save();
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;