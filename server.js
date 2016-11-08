
const express = require('express');
const app = express();


app.get('/', (req, res)=> {
  let a = isNum(req.query.a) ? req.query.a : 0,
      b = isNum(req.query.b) ? req.query.b : 0,
      sum = parseInt(a) + parseInt(b);
  res.status(200).send(sum.toString());
});

function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

app.listen(3000, ()=> {
  console.log('listening port 3000');
})
