const logginMdw = ((req, res, next) => {
    console.log(`Call made to resource ${req.url} with method ${req.method}`);
    req.user = {lastname: "Alessio"};
    next();
    //return; 
    //res.end();
});

module.exports = logginMdw;