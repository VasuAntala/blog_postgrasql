import  pool  from "pg";

export const connection = new pool.Pool({
    host: "localhost", //database host
    user: "postgres", //database user
    password: "1234", //database password
    database: "blog", //database name
    port: 5432 //database port
})

connection.connect((err) => {
    if (err) {
        console.log("Connection error", err);
    } else {
        console.log("Connection successful");
    }
})

