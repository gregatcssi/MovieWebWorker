export class UtilService {

  constructor() { }

    /**Returns the date of the character at a specified date */
    GetAccurateAge(earlierDate: Date, laterDate: Date): Date {
        let months: number = (laterDate.getMonth() - earlierDate.getMonth());
        let days: number = (laterDate.getDate() - earlierDate.getDate());
        if (days < 0) {
            months--;
        }
        let years = laterDate.getFullYear() - earlierDate.getFullYear();
        if (months < 0) {
            years--;
        }
        return new Date(years, months, days);
    }

    /**Returns the number of months between two dates */
    GetMonthDifference(earlierDate: Date, laterDate: Date): number {
        let monthsApart = 12 * (earlierDate.getFullYear() - laterDate.getFullYear())
            + earlierDate.getMonth() - laterDate.getMonth();
        return Math.abs(monthsApart);
    }

    /**Returns the date of a character at a specific date in the future */
    GetDateAtAge(dateOfBirth: Date, year: number): Date {
        let yearOfBirth: number = dateOfBirth.getFullYear();
        let yearOfAge: number = yearOfBirth + year;
        return new Date(yearOfAge, dateOfBirth.getMonth(), dateOfBirth.getDate());
    }

    /**Adds the years to the starting date.  Returns Date object */
    AddYearsToDate(startingDate: Date, years: number): Date {
        let startingYear: number = startingDate.getFullYear();
        let finalYear: number = startingYear + years;
        return new Date(finalYear, startingDate.getMonth(), startingDate.getDate());
    }

    /** Returns the age (rounded) based on dob and date in the future*/
    GetAge(dateOfBirth: Date, futureDate: Date): number{
        let days: number = (futureDate.getDate() - dateOfBirth.getDate());
        let months: number = (futureDate.getMonth() - dateOfBirth.getMonth());
        let years = (futureDate.getFullYear() - dateOfBirth.getFullYear());   

        if(days < 0){
            months--;
        }     
        if(months < 0){
            years--;
        }
        else if(months >= 6){
            years++;
        }
        return years;
    }
    
    /**Gets the age of the second timeline at the time the first timeline is at the parameter age */
    GetAgeOfSecondTimeLineById(movie: Movie, timeLine1Id: string, timeLine2Id: string, timeLine1Age: number): number{
        let t1Idx: number = movie.TimeLines.map(function(x){return x.Id}).indexOf(timeLine1Id);
        if(t1Idx >= 0){
            let t2Idx: number = movie.TimeLines.map(function(x){return x.Id}).indexOf(timeLine2Id);
            if(t2Idx >= 0){
                let t1: TimeLine = movie.TimeLines[t1Idx];
                let t2: TimeLine = movie.TimeLines[t2Idx];
                return this.GetAgeOfSecondTimeLine(t1, t2, timeLine1Age);
            }
        }
        return -1;
    }

    /**Gets the age of the second timeline at the time the first timeline is at the parameter age */
    GetAgeOfSecondTimeLine(timeLine1: TimeLine, timeLine2: TimeLine, timeLine1Age: number): number{
        let timeLine1Dob: Date = timeLine1.DateOfBirth;
        //The date of timeline1 at the specified age.
        let dateAtTimeLine1Age: Date = this.AddYearsToDate(timeLine1Dob, timeLine1Age);

        let timeLine2Dob: Date = timeLine2.DateOfBirth;
        let secondAge: number = this.GetAge(timeLine2Dob, dateAtTimeLine1Age);

        return secondAge;
    }

    GetStartAgeRange(timeLine: TimeLine): number[]{
        let ages: number[] = [];
        let startAge: number = timeLine.StartAge;
        let endAge: number = 1000;
        if(timeLine.EndAge <= 1000){
            endAge = timeLine.EndAge;
        }

        for (let x: number = 0; x <= endAge; x++) {
            ages.push(x);
            if(x < startAge && ((x + 1) > startAge)){
                ages.push(startAge);
            }
        }
        return ages;
    }

    GetEndAgeRange(timeLine: TimeLine): number[] {
        let ages: number[] = [];
        if(timeLine.StartAge == undefined){
            timeLine.StartAge = 0;
        }
        let startAge: number = timeLine.StartAge;
        let endAge: number = 1000;
        let index: number = 0;
        for (let x: number = startAge; x <= endAge; x++) {
            ages.push(x);
            if(index == 0){
                x = parseInt(x.toString());
            }
            index++;
        }
        return ages;
    }

    GetEarlyDeathAgeRange(timeLine: TimeLine): number[] {
            let ages: number[] = [];
            if(timeLine.StartAge == undefined){
                timeLine.StartAge = 0;
            }
            let startAge: number = timeLine.StartAge;
            let endAge: number = timeLine.EndAge;
            let index: number = 0;
            for (let x: number = startAge; x <= endAge; x++) {
                ages.push(x);
                if(index == 0){
                    x = parseInt(x.toString());
                }
                index++;
            }
            return ages;
    }

    anotherClone(item): any {
        let tmpItem = {};
        for (let attr in item) {
            if (item.hasOwnProperty(attr)){
                tmpItem[attr] = item[attr];
            }
        };
        return tmpItem;
    }
    
    GenerateGuid(): string{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() *16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
});
    }
}