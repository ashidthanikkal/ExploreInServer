  const json_server=require('json-server')


// server creation
const explrServer=json_server.create()

//create middleware for converting json server-js
const middleware=json_server.defaults()

const router=json_server.router('db.json')

const cors=require('cors')

explrServer.use(cors())

explrServer.use(middleware)
explrServer.use(router)

const PORT=8000
explrServer.listen(PORT,()=>{
    console.log(`____________explrServer started at port${PORT}`);
})