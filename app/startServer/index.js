
function startServer(app,port){
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    });
}

module.exports = startServer
