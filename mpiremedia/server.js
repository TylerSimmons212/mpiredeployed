const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 4002;

const app = express();
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
app.use( express.static( `${__dirname}/../build` ) );

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




