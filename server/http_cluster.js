const cluster = require('cluster')
const http = require('http')
module.exports = (callback) => {
    if (cluster.isMaster) {
        let numReqs = 0
        /**
         *
         * @param msg
         */
        var messageHandler = (msg) => {
            if (msg.cmd && msg.cmd === 'notifyRequest') {
                numReqs += 1
            }
        }
        const numCPUs = require('os').cpus().length
        for (let i = 0; i < numCPUs; i++) {
            console.log('Current CPU :', i)
            cluster.fork()
        }
        for (const id in cluster.workers) {
            cluster.workers[id].on('message', messageHandler)
        }
    } else {
        callback()

    }
}
