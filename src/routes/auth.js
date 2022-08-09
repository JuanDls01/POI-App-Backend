const { Router } = require('express')

const authRouter = Router()

authRouter.get('/login', (req, res) => {
    return 'funciono'
})