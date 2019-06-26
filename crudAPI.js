const db = require('./userSchema');

const isValid = (username, password) => {
    var user = db.findOne({ username: username }, (err, result) => {
        if (err) {
            throw err;
        }
        if (result) {
            return false;
        } else {
            return true;
        }

    })
}

const addData = (username, password) => {
    var user = db.findOne({ username: username }, (err) => {
        if (err) {
            throw err;
        }

    })
}

const deleteData = (username) => {
    console.log(username);
}


const updateData = (username, password) => {

}

const showData = (username) => {

}