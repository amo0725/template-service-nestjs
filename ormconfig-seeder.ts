import { typeormConfig } from './ormconfig';
import { DataSource } from 'typeorm';

const typeormSeederConfig = new DataSource({
  ...typeormConfig,
  entities: ['src/**/entities/**/*.ts'],
  migrations: ['./src/seeder/*.ts'],
  migrationsTableName: 'seeders',
});

export default typeormSeederConfig;
