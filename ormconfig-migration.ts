import { typeormConfig } from './ormconfig';
import { DataSource } from 'typeorm';

const typeormMigrationConfig = new DataSource({
  ...typeormConfig,
  entities: ['src/**/entities/**/*.ts'],
  migrations: ['./src/migration/*.ts'],
  migrationsTableName: 'migrations',
});

export default typeormMigrationConfig;
