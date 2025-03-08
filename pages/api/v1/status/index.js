import { query } from "../../../../infra/database.js";
import { client, DatabaseError } from "pg";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseName = process.env.POSTGRES_DB;

  const databaseMaxConnectionResult = await query("SHOW max_connections;");
  const databaseMaxConnectionsValue =
    databaseMaxConnectionResult.rows[0].max_connections;

  const databaseOpenedConnectionsResult = await query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1",
    values: [databaseName],
  });

  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        pg_version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
