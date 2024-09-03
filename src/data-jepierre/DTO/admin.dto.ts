import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Max } from "class-validator";


export class CreateAdminDto {
  @IsInt()
  @IsOptional()
  id: number;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsInt()
  @Max(120, { message: "Please enter a valid age" })
  age: number;
  @Type(() => Date)
  birthDay: Date;
  @IsString()
  @IsOptional()
  scholarity: string;
  @IsString()
  @IsOptional()
  dedication: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) { }