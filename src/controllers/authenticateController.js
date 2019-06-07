const Account = require('../model/Account')
const sha1 = require('sha1');

exports.login = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    
    Account.find({ 'login': login, 'password': sha1(password) }, function (err, account) {
        if (err) {
            res.json({
                error: 'Error to query.'
            })
        } else {
            if (account.length !== 0) {
                return res.json(account[0]);
            } else {
                return res.status(404).send('Login or password wrong.');
            }
        }
    });

};

