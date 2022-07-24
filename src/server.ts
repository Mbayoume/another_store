import  express,{ Application, Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
import config from "./config";
import pool from './database';
import db from './database';
// import routes from './routes';





const app: Application = express();

const PORT = config.port ||3000;

// app.use(bodyParser.json())


app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})
// api path 
// app.use("/api", routes);
// test the database
db.connect().then(pool =>{
    return pool.query('SELECT now()')
    .then((res)=>{
        pool.release();
        console.log(res.rows);
    }).catch((err)=>{
        pool.release();
        console.log(err.stack);
        
    });
})

app.listen(3000, function () {
    console.log(`starting app on: ${PORT}`)
})

export default app;
