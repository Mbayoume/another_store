import {Pool} from 'pg';
import config from '../config';

// create an instance from the configration of the db

const pool = new Pool({
    host:config.host,
    database:config.database,
    user:config.user,
    password:config.db_password,
    port:parseInt(config.db_port as string,10),

})
// log an error message 

pool.on('error',(error:Error)=>{
    console.error(error.message);
    
})

export default pool;