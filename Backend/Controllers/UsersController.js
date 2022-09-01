const Data = require('../../Data/Users');

const getAllUsers = (req, res) => {
    res.json(Data);
}

const getSingleUser = (req, res) => {
    let paramId = req.params.userId;
    let isFound = Data.some( user => user.id === parseInt(paramId));
    if (isFound) {
        let singleUserData = Data.filter( user => user.id === parseInt(paramId));
        res.json(singleUserData)  
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
        res.status(200).json({success: 'User Added Successfully !'})
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser
}