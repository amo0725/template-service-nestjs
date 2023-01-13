/* 
  For TypeOrm 0.3.0 upgrade, see 
  https://gist.github.com/anchan828/9e569f076e7bc18daf21c652f7c3d012
*/
import { BaseEntity } from 'typeorm';
import { SetMetadata } from '@nestjs/common';

export const TYPEORM_CUSTOM_ENTITY_REPOSITORY =
  'TYPEORM_CUSTOM_ENTITY_REPOSITORY';

export function CustomEntityRepository(
  entity: typeof BaseEntity
): ClassDecorator {
  return SetMetadata(TYPEORM_CUSTOM_ENTITY_REPOSITORY, entity);
}
