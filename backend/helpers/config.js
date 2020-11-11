require('dotenv').config()

/**
 * Encapsulate security:
 * This encapsulation is done by accessing variables in the .env file through this config file
 */



const PORT = process.env.PORT;
const ENVIRONMENT = {
    dev: "development",
    prod: "production",
    state: "stage"
}


let MONGODB_URI;
const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


/** 
 * Set MONGODB URL given environment
 * If no environment, use dev url
*/

switch (process.env) {
    case ENVIRONMENT.dev:
        MONGODB_URI = process.env.MONGODB_DEV_URI;
        break;
    case ENVIRONMENT.prod:
        MONGODB_URI = process.env.MONGODB_PROD_URI;
        break;
    case ENVIRONMENT.stage:
        MONGODB_URI = process.env.MONGODB_STAGE_URI;
        break;
    default:
        MONGODB_URI = process.env.MONGODB_DEV_URI;
}


module.exports = {
    PORT,
    MONGODB_URI,
    MONGOOSE_OPTIONS
}