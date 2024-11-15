//BASIC SERVER SETUP---------------------------------------
const express = require("express");
const app = express();

//cors is just allowing communcation between fron and back... jsut copy paste
const cors = require("cors");
app.use(cors());

//axios is fetch
const axios = require("axios");

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
//HOW TO FIND type localhost:3000 in the browser
//-----------------------------------------------------------------------------------------------

const API_KEY = "6c34ec817f73b29ae9121531480175e7";

//sets /weather as a option to listen to using .get
app.get("/weather", async (req, res) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${API_KEY}`
  );
  //query sets a search parameter and city is the value
  res.json(response.data);
});
