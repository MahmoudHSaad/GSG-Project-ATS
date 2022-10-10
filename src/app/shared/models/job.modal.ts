export interface Job {
    id:number,
    title : string,
    sectorId:number,
    functionalAreaId:number, 
    countryId:number, 
    region:number, 
    cityId:number, 
    yeasOfExperience:Range;
    expectedSalary:Range;
    jobTypeId:number;
    lowEducationLevelId:number;
    highEducationLevelId:number;
    nationalityId:number;
    languagesId:number[];
    skillsId:number[];
    benefits:number[];
    description:string;
    requirements:string;
}