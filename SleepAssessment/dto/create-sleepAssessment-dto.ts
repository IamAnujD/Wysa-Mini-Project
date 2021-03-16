export default class CreateSleepAssessmentDto {
    NickName: string;
    changesRequired: number; //1 - option 1, 2-option 2, 3- option 3 ,etc.
    sleepStruggle: number; // 1 - option 1, 2-option 2, 3- option 3 etc.
   
    bedTime: Date;

    dayStartTime: Date;
    sleepHoursNight: number;
}