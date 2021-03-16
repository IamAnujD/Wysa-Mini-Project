
//************** REQUEST MODEL FOR PUT/POST/DELETE **************************************** */
export class RequestModel<TDto> {
   
    public NickName: string;
    public changesRequired: number; //1 - option 1, 2-option 2, 3- option 3 ,etc.
    public sleepStruggle: number; // 1 - option 1, 2-option 2, 3- option 3 etc.
    
    public bedTime: Date;

    public dayStartTime: Date;
    public sleepHoursNight: number;
    


    constructor(){
       
      
        this.NickName="Anuj";
        this.changesRequired= 1;
        
        this.sleepStruggle = 1;
        this.bedTime =new Date();
        this.dayStartTime = new Date();
        this.sleepHoursNight = 1;


    };



    

    CreateRequestModel():RequestModel<TDto>{
        let requestModel =  new RequestModel<TDto>();
        return requestModel;
    };

    

  
};
