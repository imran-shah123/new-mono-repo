const express = require('express');
const mathOperations = require('./calculator');

const app = express();

app.get("/", (req, resp) => {
    console.log("Sum of 1+2: " + String(mathOperations.add(1,2)));
    resp.send("Hello DevOps! App is successfully deployed on producion through CI/CD");
});


const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'APP';

app.listen(PORT, () => {
    console.info(`${APP_NAME} started on PORT ${PORT}`);
});