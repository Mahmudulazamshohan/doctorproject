const app = require('./routes')
const PORT = process.env.PORT || 3211
const HTTP_CLUSTER = require('./http_cluster')
const RedisServer = require('./utils/RedisServer')
app.use((req, res, next) => {
    console.log(`Received a ${req.method} request from ${req.ip} for  ${req.url}`);
    next();
})
//console.log(require('passport').authenticate('jwt', {session: false}))
HTTP_CLUSTER(function () {
    const redisServer = new RedisServer()
    redisServer.start()

    app.listen(PORT, () => {
        console.log(`Server Started At ${PORT}`)
    })
})

