module.exports = class Request {
    constructor(req){
        this.req = req
    }

    /**
     *
     * @returns {*}
     */
    all(){
        return this.req.query
    }

    /**
     *
     * @param name
     * @returns {*}
     */
    input(name){
        return this.all()[name]
    }
}
