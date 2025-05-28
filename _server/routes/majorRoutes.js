const { major } = require('../models')

module.exports = (app) => {
    const router = app.Router()

    router.get('/major', async (req, res) => {
        const majorData = await major.findAll({
            attributes: ["id", "name"]
        })

        res.status(200).json({
            message: 'major data founded!',
            data: majorData
        })
    })

    return router;
}