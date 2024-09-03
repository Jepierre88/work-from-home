import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsOptional, Max } from "class-validator";


export class CreateTargetDto {
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
  @IsNotEmpty()
  birthDay: Date;
}

export class UpdateTargetDto extends PartialType(CreateTargetDto) { }