const {users} = require('../models')

    async function getUsers (req,res) {
        try {
            const data = await users.findAll()
            res.render('./users', {data})
        } catch (error) {
            res.send('error')
        }
    }

module.exports = {getUsers}
