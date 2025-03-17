const useRouter = require('./admin')
const {errorHandler, notFound} = require('../middlewares/errorHandler')

const initRoutes = (app) => {
    app.use('/api/admin', useRouter)

    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initRoutes