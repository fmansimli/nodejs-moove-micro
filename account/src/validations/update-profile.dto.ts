import { IsString, MinLength, MaxLength } from "class-validator";

export class CreatePlaceDto {
  @IsString()
  @MinLength(10)
  name: string = "";

  @IsString()
  @MinLength(12)
  desc: string = "";

  @IsString()
  @MinLength(3)
  @MaxLength(7)
  type: string = "";
}
