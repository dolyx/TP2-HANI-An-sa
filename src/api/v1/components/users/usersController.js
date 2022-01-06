const users = require('./UserData');

exports.ReadUsers = (req, res)=>{
    res.status(200).json(users);
}


exports.users = (req, res)=> {
    res.status(200).json(users);
}

exports.userid = (req, res) => {
    console.log(req.params);
    let userid = req.params.id;
    res.status(200).json(users[userid]);
};