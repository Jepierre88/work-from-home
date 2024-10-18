import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class NewCrud {

 @PrimaryGeneratedColumn("increment")
 id: number;
 @Column()
 name: string;
}
