/* 
  For TypeOrm 0.3.0 upgrade, see 
  https://gist.github.com/anchan828/9e569f076e7bc18daf21c652f7c3d012
*/
import { TYPEORM_CUSTOM_ENTITY_REPOSITORY } from './../decorators/custom-entity-repository.decorator';
import { DynamicModule, Provider } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export class CustomTypeOrmModule {
  public static forCustomEntityRepository<
    T extends new (...args: any[]) => any
  >(repositories: T[]): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(
        TYPEORM_CUSTOM_ENTITY_REPOSITORY,
        repository
      );

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const { target, manager, queryRunner } =
            dataSource.getRepository<any>(entity);
          return new repository(target, manager, queryRunner);
        },
      });
    }

    return {
      exports: providers,
      module: CustomTypeOrmModule,
      providers,
    };
  }
}
