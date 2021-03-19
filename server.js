const express=require('express')
const app =express()
const mongoose=require('mongoose')

const mongoUrl="mongodb+srv://wajih123:123@wajih007.dbc8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(express.json());
app.use('/contacts',require('./Routes/contactRoutes'))
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    err ? console.log(err) : console.log("database is connected");
  }
);

const port =5000
app.listen(port,(err)=>{
    err? console.log(err) : console.log('server is running on port 5000')
}
)