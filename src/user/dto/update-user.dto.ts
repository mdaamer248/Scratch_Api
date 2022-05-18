import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  transactionHash: string;

  @ApiProperty()
  @IsNotEmpty()
  transactionTime: Date;
}
