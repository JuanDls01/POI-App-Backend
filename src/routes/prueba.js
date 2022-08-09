const { Router } = require('express')

const authRouter = Router()

authRouter.get('/prueba', (req, res) => {
    return res.send('funciono')
});

module.exports = authRouter;