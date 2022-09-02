// @Get Data From Static Data File
const Data = require('../../Data/Users');

let currentUser;
let isFound;
// @Find Specific User By ID
const findUserFromData = (id) => {
    return currentUser = Data.filter( user => user.id === parseInt(id));
}
// @Validation For Single User By ID
const validateUserWithId = (id) => {
    return isFound = Data.some( user => user.id === parseInt(id));
}

// @Controllers Section
const getAllUsers = (req, res) => {
    res.json(Data);
}

const getSingleUser = (req, res) => {
    let paramId = req.params.userId;
    validateUserWithId(paramId);
    if (isFound) {
        findUserFromData(paramId);
        res.json(currentUser)  
    } else {
        res.status(404).json({error: `User With ID ${paramId} : Not Found`})
    }
}

const createNewUser = (req, res) => {
    let lastId = Data.length
    let newUserData = {
        id: lastId++,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        occupation: req.body.occupation,
    }
    if( !newUserData.first_name || !newUserData.last_name || !newUserData.username || !newUserData.occupation ) {
        res.status(400).json({error: 'Please Fill All Inputs.'});
    } else {
        Data.push(newUserData);
        res.status(200).json({success: 'User Added Successfully !'});
    }
}

const updateSingleUser = (req, res) => {
    let paramId = req.params.userId;
    validateUserWithId(paramId);
    if (isFound) {
        findUserFromData(paramId);
        const updatedUser = {
            id: paramId,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            occupation: req.body.occupation,
        }
        if ( !updatedUser.first_name || !updatedUser.last_name || !updatedUser.username || !updatedUser.occupation ) {
            res.status(400).json({error: 'Please Fill All Inputs.'});
        } else {
            Data[paramId] = updatedUser;
        }
    }
    res.json(Data);
}

const deleteSelectedUser = (req, res) => {
    let paramId = req.params.userId;
    validateUserWithId(paramId);
    if (isFound) {
        if (parseInt(paramId) !== Data.length) {
            Data.splice(paramId, 1);
            res.json(Data);
        } else {
            Data.pop();
            res.json(Data);
        }
    } else {
        res.status(404).json({error: `User With ID ${paramId} Not Found !`});
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser,
    updateSingleUser,
    deleteSelectedUser
}