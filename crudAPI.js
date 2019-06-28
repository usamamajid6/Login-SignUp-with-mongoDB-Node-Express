const db = require('./userSchema');

const isUsernameAvailable = async(username) => {

    try {
        const result = await db.findOne({ username: username });
        if (!result) {
            return true;
        }
        return false;
    } catch (error) {
        console.log('error in db find username', error);
    }
}

const addData = async(username, password) => {
    try {
        const result = await isUsernameAvailable(username);
        console.log("The isUsernameAvailable in addData result is: ", result);
        if (result) {
            try {
                const result = await db.create({ username: username, password: password });
                if (result) {
                    console.log("addData method return:True");
                    return true;
                }
            } catch (error) {
                console.log("Error in addData", error);
            }


        }
        console.log("addData method return:False");
        return false;

    } catch (error) {
        console.log("Error in add Data:", error);
    }
}

const deleteData = async(username) => {
    try {
        const result = await isUsernameAvailable(username);
        console.log("The isUsernameAvailable in deleteData result is: ", result);
        if (!result) {
            try {
                const result = await db.deleteOne({ username: username });
                if (result) {
                    console.log("deleteData method return:True");
                    return true;
                }
            } catch (error) {
                console.log("Error in deleteData (inner try-catch block):", error);
            }
        }
        console.log("deleteData method return:False");
        return false;
    } catch (error) {
        console.log("Error in deleteData (outer try-catch block):", error);
    }
}


const updateData = async(username, new_username, new_password) => {
    try {
        const result = await isUsernameAvailable(username);
        console.log("The isUsernameAvailable in updateData result is: ", result);
        if (!result) {
            try {
                const result = await db.updateOne({ username: username }, { username: new_username, password: new_password });
                if (result) {
                    console.log("updateData method return:True");
                    return true;
                }
            } catch (error) {
                console.log("Error in updateData (inner try-catch block):", error);
            }
        }
        console.log("updateData method return:False");
        return false;
    } catch (error) {
        console.log("Error in updateData (outer try-catch block):", error);
    }
}

const showData = async() => {
    try {
        const result = await db.find({});
        if (result) {
            console.log("The result return in showData:", result);
            return result;
        }
        return false;
    } catch (error) {
        console.log("Error in updateData (outer try-catch block):", error);
    }
}

const validateLogin = async(username, password) => {
    try {
        const result = await db.findOne({ username: username, password: password });
        if (!result) {
            return false;
        }
        return result.username;
    } catch (error) {
        console.log('error in db find username and password', error);
    }
}

// var res = addData("uu", "u");
// console.log(res);
// if (res === true) {
//     console.log("Inserted");
// } else {

//     console.log("NO");

// 

module.exports = { addData, showData, deleteData, updateData, validateLogin };