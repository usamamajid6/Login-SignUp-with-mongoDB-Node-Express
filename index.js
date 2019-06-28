const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
const api = require('./crudAPI');


app.use(express.json());

app.listen(2222, () => {
    console.log("Server Started!");
})

app.get("/validateLogin", async(req, res) => {
    const result = await api.validateLogin(req.body.username, req.body.password);
    console.log("Router validateLogin give result:", result);
    if (result) {
        res.send(result);
    } else {
        res.send("Some Problem");
    }
})

app.get("/showData", async(req, res) => {
    const result = await api.showData();
    console.log("Router showData give result:", result);
    if (result) {
        const output = "You are logged in as:" + result;
        res.send(output);
    } else {
        res.send("Some Problem");
    }
})


app.post("/addData", async(req, res) => {
    const status = await api.addData(req.body.username, req.body.password);
    console.log("Router addData give result:", status);
    if (status) {
        res.send("Inserted!");
    } else {
        res.send("Some Problem");
    }
});

app.put("/updateData", async(req, res) => {
    try {
        const status = await api.updateData(req.body.username, req.body.new_username, req.body.new_password);
        console.log("Router updateData give result:", status);
        if (status) {
            res.send("Updated!");
        } else {
            res.send("Some Problem");
        }
    } catch (error) {
        console.log('Error in updateData:', error);
    }
})


app.delete("/deleteData", async(req, res) => {
    try {
        const status = await api.deleteData(req.body.username);
        console.log("Router deleteData give result:", status);
        if (status) {
            res.send("Deleted!");
        } else {
            res.send("Some Problem");
        }
    } catch (error) {
        console.log('Error in deleteData:', error);
    }
})