export class Course {
    constructor(
        public title: string, 
        public code: string, 
        public days: string[], 
        public startTime: string, 
        public endTime: string, 
        public credits: number) {};
}
