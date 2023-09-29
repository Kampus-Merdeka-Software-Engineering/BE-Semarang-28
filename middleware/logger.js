// logger
export default function loggerMiddleware(req, res, next){
    console.log(`request recieved at: ${new Date()}`);
    next(); 
}

