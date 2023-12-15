const { json } = require('express');
const fs = require('fs');
const express = require("express")
const app= express()
let theirNames;
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    // console.log(data);
    const jsonData = JSON.parse(data);
    theirNames= jsonData.employees.map (e=>e.user);
  } else {
    console.error(err)
  }
});
app.get("/", (req, res)=>{
    res.send(theirNames)
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });