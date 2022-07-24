import User from "../types/users.type";
import db from "../database";
import config from "../config";

// create instance user model 

class UserModel{
    // create 
    async create(u:User):Promise<User>{
        try{ 
            // open connection with database
            const connection = await db.connect();

            const sql = `INSERT INTO users (email, user_name,first_name,last_name,password) values
            ($1,$2,$3,$4,$5) returning *` ;
            // run the query 
            const result = await connection.query(sql,[
                u.email,
                u.user_name,
                u.first_name,
                u.last_name,
                u.password
            ]);
            // release the connection
            connection.release();
            // return created user
            return result.rows[0];
        }catch(error){
            throw new Error(
                `unable to create (${u.user_name}) :${(error as Error).message} `
            )
        }
    }
}



export default UserModel;