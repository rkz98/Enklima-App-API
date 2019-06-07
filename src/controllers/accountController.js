const Account = require('../model/Account')
const sha1 = require('sha1');

exports.createAccount = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const permission = req.body.permission;
    const name = req.body.name;
    const patent = req.body.patent;
    const age = req.body.age;

    new Account({
        'login': login,
        'password': sha1(password),
        'permission': permission,
        'name': name,
        'patent': patent,
        'age': age, 
        'created_at': new Date
       }).save(function(error, report) {
           if (error) {
               res.json({error: 'Error to create account.'});
           } else {
               res.status(201).send(report);
           }
       });
};

exports.getMe = (req, res) => {
    const login = req.param('login');
    
    Account.find({ 'login': login}, function (err, account) {
        if (err) {
            res.json({
                error: 'Error to get account.'
            })
        } else {
            if (account.length !== 0) {
                console.log(res)
                return res.json(account[0]);
            } else {
                return res.status(404).send('User not found.');
            }
        }
    });
}

