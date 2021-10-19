const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());

app.get('/hello', (req,res)=>{
    res.send('all looks good ')
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, console.log(`app is where we want it to be @ port ${port}`));