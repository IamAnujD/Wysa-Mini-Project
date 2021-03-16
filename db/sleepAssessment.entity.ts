import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne,JoinColumn } from 'typeorm';


@Entity()
export default class SleepAssessmentEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name:"user_nickname" })
  NickName: string;
   
  @Column({ name: "changes_required" })
  changesRequired: number; //1 - option 1, 2-option 2, 3- option 3 ,etc.

  @Column({ name:"sleep_struggle" })
  sleepStruggle: number; // 1 - option 1, 2-option 2, 3- option 3 etc.

  @Column({ name:"bed_time" })
  bedTime: Date;

  @Column({ name:"day_start_time"})
  dayStartTime: Date;

  @Column({ name:"sleep_hours_night"})
  sleepHoursNight: number;

}