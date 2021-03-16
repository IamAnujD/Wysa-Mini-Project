import { Injectable } from '@nestjs/common';
import SleepAssessmentEntity from '../db/sleepAssessment.entity';


import CreateSleepAssessmentDto from './dto/create-sleepAssessment-dto';
import { createQueryBuilder, getConnection } from 'typeorm';





@Injectable()
export class SleepAssessmentService {

  async insert(sleepAssessmentDetails: CreateSleepAssessmentDto): Promise<SleepAssessmentEntity> {
    const { NickName, bedTime, changesRequired, dayStartTime, sleepHoursNight, sleepStruggle } = sleepAssessmentDetails;
    const sleepAssesment = new SleepAssessmentEntity();
    sleepAssesment.NickName = NickName;
    sleepAssesment.bedTime = bedTime;
    sleepAssesment.changesRequired = changesRequired;
    sleepAssesment.dayStartTime = dayStartTime;
    sleepAssesment.sleepHoursNight = sleepHoursNight;
    sleepAssesment.sleepStruggle = sleepStruggle;



    await sleepAssesment.save();
    return sleepAssesment;
  }
  async getAllSleepAssessment(): Promise<SleepAssessmentEntity[]> {












    return SleepAssessmentEntity.find();
  }
}