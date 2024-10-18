import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  database: process.env.DB_DATABASE,
})
export class Target {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({
    name: "firstName"
  })
  firstName: string;
  @Column({ name: "lastName" })
  lastName: string;
  @Column({ name: "age" })
  age: number;
  @Column({ name: "birthDay" })
  birthDay: Date;
}