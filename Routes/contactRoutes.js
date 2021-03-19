const express = require("express");
const router = express.Router();
const contact = require("../Models/contactSchema");

router.post("/newcontact", (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, data) => {
    err ? console.log(err) : res.send("contact was added");
  });
});
router.get("/", (req, res) => {
  Contact.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
module.exports = router;

router.get("/:id", (req, res) => {
  Contact.find({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
router.delete("/deletecontact/:id", (req, res) => {
  Contact.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
    err ? console.log(err) : res.json({ msg: "anes was deleted" });
  });
});

router.put("/update/:id", (req, res) => {
  Contact.findByIdAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    (err, msg) => {
      err ? console.log(err) : res.json({ msg: "wajih was update" });
    }
  );
});

module.exports = router;
