import { User } from "./user.model"



export interface Interview {
    id:number,
    jobApplicationId:number,
    date:Date,
    time:number,
    duration:number,
    interviewType:string,
    interviewDetails:string,
    interviewers:User[],
}


