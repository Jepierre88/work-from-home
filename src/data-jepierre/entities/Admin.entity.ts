import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({
  database: "data-jepierre",
})
export class Admin {
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
  @Column({ name: "scholarity" })
  scholarity: string;
  @Column({ name: "dedication" })
  dedication: string;
}