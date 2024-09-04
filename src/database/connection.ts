import  pool  from "pg";

export const connection = new pool.Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "blog",
    port: 5432
})

connection.connect((err) => {
    if (err) {
        console.log("Connection error", err);
    } else {
        console.log("Connection successful");
    }
})