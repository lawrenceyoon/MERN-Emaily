const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ firstName: "Lawrence", lastName: "Yoon", age: "27" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Turnin up at 5000!"));