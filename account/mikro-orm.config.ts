import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TSMigrationGenerator } from "@mikro-orm/migrations";
import type { Options } from "@mikro-orm/core";

const config: Options = {
  type: "postgresql",
  entities: ["./dist/src/models/*.js"],
  entitiesTs: ["./src/models/*.ts"],
  driver: PostgreSqlDriver,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  dbName: process.env.POSTGRES_DB,
  allowGlobalContext: true,
  debug: process.env.NODE_ENV === "development",
  migrations: {
    tableName: "mikroorm_migrations",
    pathTs: "./migrations",
    path: "./dist/migrations",
    disableForeignKeys: true,
    snapshot: true,
    transactional: true,
    dropTables: true,
    safe: true,
    allOrNothing: true,
    generator: TSMigrationGenerator
  }
};

export default config;
