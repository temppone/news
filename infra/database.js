import { Client } from "pg";

export async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  console.log("Postgres credentials", {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.log(error);

    throw error;
  } finally {
    await client.end();
  }
}

function getSSLValues() {
  if(process.env.POSTGRES_CA){
    return {
      ca: process.env.POSTGRES_CA
    }
  }

  return process.env.node === "development" ? false : true,
}