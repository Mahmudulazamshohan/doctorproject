const Resource = require('../utils/Resource')
module.exports = class DefaultResource extends Resource{
    static data(data){
        return {
            code:200,
            message:'Data retrived Successfully done',
            data
        }
    }
}
