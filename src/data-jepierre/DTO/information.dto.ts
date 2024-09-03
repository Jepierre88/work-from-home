import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInformationDto {
  @IsNotEmpty()
  @IsString()
  informationData: string;

  @IsNotEmpty()
  idAdmin: number;

  @IsNotEmpty()
  idTarget: number;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;
}

export class UpdateInformationDto extends PartialType(CreateInformationDto) { }
