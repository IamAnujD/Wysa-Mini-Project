import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import SleepAssessmentModule from './Books/sleepAssessment.module';

import SleepAssessmentEntity from './db/sleepAssessment.entity';


@Module({
  imports: [
            SleepAssessmentModule,
            
    TypeOrmModule.forFeature(
      [ SleepAssessmentEntity],
    ),

    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}