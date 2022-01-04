const express = require('express');
const app = express();


app.get('/', (req, res) => {
 res.send("hello word");
});

app.get('/api/courses', (req,res) => {
res.send([{"name":1},{"name":2},{"name":3}]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`app started at ${port}....`)});