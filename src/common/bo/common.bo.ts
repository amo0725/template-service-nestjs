import { Expose } from 'class-transformer';

export class CommonBO {
  @Expose()
  isDeleted: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
