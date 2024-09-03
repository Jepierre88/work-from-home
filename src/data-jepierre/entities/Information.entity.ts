import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "./Admin.entity";
import { Target } from "./Target.entity";

@Entity({
  database: "data-jepierre"
})
export class Information {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;
  @Column({ name: "informationData" })
  informationData: string;
  @ManyToOne(() => Admin, admin => admin.id, { eager: true })
  @JoinColumn({ name: 'idAdmin' })
  admin: Admin;
  @ManyToOne(() => Target, target => target.id, { eager: true })
  @JoinColumn({ name: "idTarget" })
  target: Target;
  @Column({ name: "startDate" })
  startDate: Date;
  @Column({ name: "endDate", nullable: true })
  endDate?: Date;
}