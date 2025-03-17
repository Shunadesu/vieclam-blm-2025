const useRouter = require('./admin')

const initRoutes = (app) => {
    app.use('/api/admin', useRouter)
}

module.exports = initRoutes