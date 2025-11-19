const {fail} = require("../utils/apiResponse");

function errorHandler(err, req, res, next) {
    console.error(err);
    fail(res, 'UNAUTHORIZED', 'Internal Server Error');    
}


module.exports = errorHandler;