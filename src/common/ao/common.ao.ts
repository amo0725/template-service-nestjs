import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CommonAO {
  @Expose()
  @ApiProperty()
  isDeleted: boolean;

  @Expose()
  @ApiProperty({ type: Date })
  createdAt: Date;

  @Expose()
  @ApiProperty({ type: Date })
  updatedAt: Date;
}
