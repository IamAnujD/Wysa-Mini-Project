import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SleepAssessmentService } from './sleepAssessment.service';
import CreateSleepAssessmentDto from './dto/create-sleepAssessment-dto';

@Controller('sleepAssessment')
export class SleepAssessmentController {
  constructor(private readonly sleepAssessmentServices: SleepAssessmentService) {}


  async sleepAssessmentResult(@Body() sleepAssesment: CreateSleepAssessmentDto) {
     // code here to find out the proper response to be send to the user
     return "yes";
    
  }

  @Post()
  async postUser( @Body() sleepAssesment: CreateSleepAssessmentDto) {
    await this.sleepAssessmentServices.insert(sleepAssesment);
   this.sleepAssessmentResult(sleepAssesment);
  }


  
}