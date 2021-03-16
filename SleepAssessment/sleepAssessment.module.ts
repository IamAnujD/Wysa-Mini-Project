import { Module } from '@nestjs/common';
import { SleepAssessmentService } from './sleepAssessment.service';
import {SleepAssessmentController }from './sleepAssessment.controller';
@Module({
  imports: [],
  controllers: [SleepAssessmentController],
  providers: [SleepAssessmentService],
})
export default class SleepAssessmentModule {}