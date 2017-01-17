

//Begin Types
 enum Character_Type {
    NestEgg,
    LifeInsurance,
    Property,
    Debt,
    Insurance,
    IncomeRiver,
    Wef,
    FromList,
    Cost,
    Distribution,
    ThirdParty,
    Growth,
    CostDestination,
    Income,//not the same as income river, this is a type of distribution
    Transfer,
    InheritanceCashAccount
}

 enum Transfer_Type {
    None,
    Contribution,
    Distribution,
    Growth,
    Cost,
    Transfer,
    Premium, 
    LoanPayBack
}

 enum Month_Type {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

 enum Apr_Type {
    Fixed,
    Variable
}

 enum Tax_Type {
    PreTax,
    PostTax
}

 enum Additional_Direction {
    None,
    Increasing,
    Decreasing,
    Variable
}

 enum Additional_Direction_No_Variable {
    None,
    Increasing,
    Decreasing
}

 enum Income_Type {
    Net,
    Gross
}

 enum Cost_Type {
    Fee,
    Tax
}

 enum CostSub_Type {
    Select,
    Setup,
    Regular,
    EarlyDistribution,
    OverAmount,
    APR,
    Surrender,
    PropertySale,
    Borrow
}

 enum DollarPctCompound_Type {
    Dollar,
    Percentage
}

///A character will be one of these tax types
 enum TaxTemplate_Type {
    BasisThenGain, //Tax the gain only on distributions
    GainThenBasis, //Tax the gain only on distributions
    Exclusion_Ratio,//A 30% exclusion ration means 30% of the distribution will not be taxed.  That 30% will come from basis.
    Fully_Taxed, //100% taxable
    Tax_Free //0% taxable
}

 enum TransferGrowthCost_Type {
    Growth,
    NetGrowth
}

 enum TransferDistributionCost_Type {
    Distribution,
    NetDistribution
}

 enum TransferIncomeCost_Type {
    Income,
    NetIncome
}

 enum WithdrawalBorrow_Type{
    Withdraw,
    Borrow
}

 enum AmountSpendDown_Type{
    Amount,
    SpendDown
}

 enum Mode_Type {
    Daily,
    Biweekly,
    Weekly,
    Bimonthly,
    Monthly,
    Quarterly,
    Semiannual,
    Annual
}

 enum LoanPayBack_Type {
    Income,
    Accrual
}

/**Pay Principal & Interest immediately, Defer then pay P & I, Pay Interest only, Pay Interest then Principal and Interest */
 enum LoanPaymentMethod_Type {
    PIImmediately,
    DeferPI,
    IOOnly,
    IOThenPI
}

/**Primary, Contingent, Teriary, etc... */
 enum Beneficiary_Type{
    Primary,
    Contingent,
    Tertiary, 
    Quaternary,
    Quinary
}

/**LumpSum, Over Years, In Installments of*/
 enum BeneficiaryPayout_Type{
    LumpSum,
    OverYears,
    Installments
}

//End Types

//Begin Classes
 class BaseClass {
    /**Call baseService.GenerateGuid() */
    Id: string;
    Creation: Date;
    LastUpdated: Date;
    Name: string;
    Active: boolean;
}

 class Movie extends BaseClass {
    CostDestination: CostDestination; //All costs and fees are added to this array
    TimeLines: TimeLine[] = [];
    TransferCharacters: TransferCharacter[] = [];
}

 class BaseClassWithAges extends BaseClass {
    CurrentAge: number;//delete
    CurrentAgeDate: Date;//delete
    CurrentValue: number;
    StartAge: number;
    StartAgeDate: Date;
    EndAge: number;
    EndAgeDate: Date;
    EarlyDeathAge: number;
    EarlyDeathAgeDate: Date;
}

 class TimeLine extends BaseClassWithAges {
    MovieId: string;
    FirstName: string;
    LastName: string;

    TimeLineGroupId: string;
    DateOfBirth: Date;
    IsFocus: boolean;
    NestEggs: NestEgg[] = [];
    ThirdParties: ThirdParty[] = [];
    InheritanceCashAccount: InheritanceCashAccount;
    HardAssets: HardAsset[] = [];
    Debts: Debt[] = [];
    AnnuityWithIncomeRiders: AnnuityWithIncomeRider[] = [];
    TermLifes: TermLife[] = [];
    PermLifes: PermLife[] = [];
    IncomeRivers: IncomeRiver[] = [];
    Insurances: Insurance[] = [];
}


 class Transfers extends BaseClassWithAges {
    // Required Fields
    UiTransferCharacterId: string;
    UiTransferCharacterTransferType: Transfer_Type;

    SourceId: string;
    SourceType: Character_Type;
    
    DestinationId: string;
    DestinationType: Character_Type;
    EventDate: Date;

    // Optional Fields
    DeltaDollar?: number;
    SourcePercentageAmount?: number;
    SourceNegativeOverFlowAmount?: number;
    SourceAdditionalDollar?: number;
    SourceAdditionalPercent?: number;
    SourceCalculationDollarAmount?: number;
    SourceOriginalAmount?: number;
    SourcePreviousAmount?: number;
    SourceCurrentValue?: number;
    

    DestinationNegativeOverFlowAmount?: number;
    DestinationAdditionalDollar?: number;
    DestinationAdditionalPercent?: number;
    DestinationOriginalAmount?: number;
    DestinatinoPreviousAmount?: number;
    DestinationCurrentValue?: number;

}

 class UiTransferCharacter extends BaseClassWithAges {

    /**Used for showing the apr schedule with no base values.*/
    BaseDirection: Additional_Direction;
    /**Base value can only be Dollar or Pct Simple*/
    BaseType: DollarPctCompound_Type;
    /**The dollar or pct value entered by the user on the modal*/
    BaseValue: number;
    /**User selects if the transfer will increase /decrease from the base value*/
    AdditionalDirection: Additional_Direction;
    /**The type of increase or decrease of the additional Dollar, Pct_Simple and sometimes Pct_Compound*/
    AdditionalType: DollarPctCompound_Type;
    /**Value associated to the additional type of the transfer, can be dollar or pct */
    AdditionalValue: number;
    /**Schedule list may show dollar, simple pct or compound pct for start and end ages of the transfer */
    VariableSchedule: VariableSchedule[] = [];
    /**Indicates which type has been selected by the user for the variable schedule.  Dollar, Pct Simple, Pct Compound */
    VariableScheduleDollarPctType: DollarPctCompound_Type;
    SourceCurrentValue?: number;
    SourceNegativeOverFlowAmount?: number;
    SourceDelta?: number;
    /**Withdrawl, Distribution, Cost, Transger */
    TransferType: Transfer_Type;
    /**Id of object where the money is coming from */
    SourceId: string;
    /**NestEgg, Growth, Wef, Distribution, IncomeRiver, etc... */
    SourceType: Character_Type;
    /**Used by Transfer Character */
    SourceTimeLineId: string;
    /**Id of object where the money is going to */
    DestinationId: string;
    /**NesEgg, Growth, Wef, Distribution, IncomeRiver, etc... */
    DestinationType: Character_Type;
    /**Used by TransferCharacter */
    DesinationTimeLineId: string;

    DestinationCurrentValue: number;
    DestinationNegativeOverFlowAmount: number;
    DestinationDelta: number;
    /**A visual helper that appears in a popover */
    BaseValuePopoverMessage: string;
    /**Date of transfer */
    EventDate: Date;
    /**Default 59.5. The earliest age someone can take a distribution without a early distribution cost.   */
    EarlyDistributionAge: number = 59.5;//An early distribution t/f for $__% each mode will be applied to any distribution prior to the age__ 
    /**OverAmount Dollar or Pct */
    DistributionOverType: DollarPctCompound_Type;
    /**Dollar or Pct amount someone passes will pay an overamount cost */
    DistributionOverValue: number; //A “title” t/f for $__% each mode will be applied to any distribution over $__% 

}

 class Cost extends UiTransferCharacter {
    CostType: Cost_Type;
    CostSubType: CostSub_Type;
    TransferGrowthCostType: TransferGrowthCost_Type;
    TransferDistributionCostType: TransferDistributionCost_Type;
    TransferIncomeCostType: TransferIncomeCost_Type;
    BorrowPayerTimeLineId: string; //only used when borrowing money.  To allow some other timeline to pay back the cost
}

 class Contribution extends UiTransferCharacter {
    /**Set to true if employer is paying, false if from client */
    FromEmployer: boolean;
    TaxType: Tax_Type;
}

 class Growth extends UiTransferCharacter {
    Costs: Cost[] = [];
    CurrentCost: Cost;
}

 class Distribution extends UiTransferCharacter {
    WithdrawalBorrowType: WithdrawalBorrow_Type;
    AmountSpendDownType: AmountSpendDown_Type;
    SpendDownNumber: number; //
    Costs: Cost[] = [];
    //CurrentCost: Cost;
    LoanPayBackType: LoanPayBack_Type;//Accrual, Income
    /**Only one payback per distribution borrow */
    LoanPayBack: LoanPayBack; //If the DistributionType is Borrow
}

 class Beneficiary extends UiTransferCharacter{
    /**Who will receive the inheritance */
    BeneficiaryTimeLineId: string;
    /**Character which the inheritance will go*/
    InheritanceCashAccountId: string;
    /**Primary, Contingent, Teriary */
    BeneficiaryType: Beneficiary_Type;
    /**Percentage of the benefit the accout will receive */
    BenefitPercentage: number;
    //Lump sum, over x number of years, in installments of
    BeneficiaryPayoutType: BeneficiaryPayout_Type;
    /**Years to pay out. Used if BeneficiaryPayoutType == OverYears */
    PayOutOverYears: number;
    /**Used if BeneficiaryPayout_Type.Installments */
    PayOutInstallmentsAmount: number;
    //Age which the beneficiary will receive the inheritance after the death of the owner.  Use if BeneficiaryPayoutStartType == AtBeneficiaryAge
    BeneficiaryAgeAfterDeath: number;
    /**If payout beneficiary start type is In Years */
    InYears: number;
    /**Used for label on the beneficiary page */
    ApproxDollarAmount: number;
}

/**For All Transfers from the UI. Almost identical to Distribution but can have any source and destination*/
 class TransferCharacter extends Distribution{
    SourceTimeLineId: string;
    SourceTimeLineName: string;
    SourceTimeLineDOB: Date;
    SourceStartAge: number;
    SourceStartAgeDate: Date;
    SourceEndAge: number;
    SourceEndAgeDate: Date;
    SourceTimeLineCharacters: CharacterBase[] = [];//Used to hold a list of characters the user can select as the source.
    SourceTimeLineObj: TimeLine;

    DestinationTimeLineId: string;
    DestinationTimeLineName: string;
    DestinationTimeLineDOB: Date;
    DestinationStartAge: number;
    DestinationStartAgeDate: Date;
    DestinationEndAge: number;
    DestinationEndAgeDate: Date;
    DestinationTimeLineCharacters: CharacterBase[] = [];//Used to hold the list of characters the user can select for destination
    DestinationTimeLineObj: TimeLine;
}

///For Distributions with LoanPayBackType of income only, the payer pays the whole loan back
 class LoanPayBack extends UiTransferCharacter {
    PayerTimeLineId: string;
    /**TODO - Needs to be calculated. Use when DistributionSubType is Accrual */
    DefaultAge: number;
    /**P&I immediately, defer then pay P&I, IO only, IO then P&I */
    LoanPaymentMethodType: LoanPaymentMethod_Type;
    /**TODO- Needs to be calculated. Used in: P&I immediately, defer then pay P&I, IO then P&I */
    PayOffAge: number;
    /**For LoanPaymentMethod_Type.DeferPI */
    DeferPaymentsToAge: number;
    /**For LoanPaymentMethod_Type.IOThenPI */
    PayInterestOnlyToAge: number;
    /**Loan Name - grouped loans */
    LoanName: string;    
    /**Loan APR Fixed or Variable*/
    LoanAPR: Apr_Type;
    /**Loan APR fixed value */
    LoanAPRFixedValue: number;
    /**APR schedule for variable loan apr */
    LoanVariableScheduleApr: VariableSchedule[] = [];
}

 class CharacterBase extends BaseClassWithAges {
    CharacterType: Character_Type;
    BaseDirection: Additional_Direction;
    BaseType: DollarPctCompound_Type;
    BaseValue: number;
    /**User selects if the transfer will increase /decrease from the base value*/
    AdditionalDirection: Additional_Direction;
    /**The type of increase or decrease of the additional Dollar, Pct_Simple and sometimes Pct_Compound*/
    AdditionalType: DollarPctCompound_Type;
    /**Value associated to the additional type of the transfer, can be dollar or pct */
    AdditionalValue: number;
    /**Schedule list may show dollar, simple pct or compound pct for start and end ages of the transfer */
    VariableSchedule: VariableSchedule[] = [];
    /**Indicates which type has been selected by the user for the variable schedule.  Dollar, Pct Simple, Pct Compound */
    VariableScheduleDollarPctType: DollarPctCompound_Type;
    TimeLineId: string;
    ProtectFromWefAttack: boolean;
    AccountValue: number;
    BasisValue: number;
    HasDestroyedAge: boolean;

    Contributions: Contribution[] = [];
    Growths: Growth[] = [];
    GrowthAges: AgeAvailable[] = [];
    SetupFees: Cost[] = [];
    Distributions: Distribution[] = [];
    Beneficiaries: Beneficiary[] = [];
}


 class NestEgg extends CharacterBase {
    TaxTemplateType: TaxTemplate_Type;
    HasBeginAtAge: boolean;
    ExclusionRatio: number;
}

 class AnnuityWithIncomeRider extends CharacterBase{
    ExclusionRation: number;
}

/**Defense membranes */
 class Insurance extends CharacterBase{
    DefenseAmount: number; //The amount of insurance the person is buying ($100,000)
    DefensePremiumPayerTimeLineId: string; //The person who will pay the defense cost
    DefensePremium: number; // Yearly cost of the insurance
    DefensePremiumAdditionalDirection: Additional_Direction;
    DefensePremiumAdditionalType: DollarPctCompound_Type;
    DefensePremiumAdditionalValue: number;
    DefensePremiumVariableSchedule: VariableSchedule[] = [];
    DefensePremiumVariableScheduleDollarPctType: DollarPctCompound_Type;
}

 class ThirdParty extends CharacterBase {

}

 class IncomeRiver extends CharacterBase{

}

 class PermLife extends CharacterBase{

}

 class TermLife extends CharacterBase{

}

 class Debt extends CharacterBase{

}

/**Property i.e. real estate, car */
 class HardAsset extends CharacterBase{

}

 class InheritanceCashAccount extends CharacterBase{

}

 class AgeAvailable {
    Age: number;
    Available: boolean;
}

 class VariableSchedule {
    CharacterType: Character_Type;
    CharacterId: string;
    TransferType: Transfer_Type;
    TransferId: string;
    Age: number;
    Dollar: number;
    IsDollarManual: boolean;
    CompoundPct: number;
    IsCompoundManual: boolean;
}

 class CostDestination extends BaseClass {

}

/**Used to hold properties of characters in a timeline */
 class TimeLineCharacter{
  TimeLineId: string;
  TimeLineName: string;  
  CharacterId: string;
  CharacterType: Character_Type;
  Name: string;
  StartAge: number;
  StartAgeDate: Date;
  EndAge: number
  EndAgeDate: Date;
  EarlyDeathAge: number;
  EarlyDeathAgeDate: Date;
  DateOfBirth: Date;
}


interface DedicatedWorkerGlobalScope {
    onmessage: (this: this, ev: MessageEvent) => any;
    postMessage(data: any): void;
    addEventListener(type: "message", listener: (this: this, ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}
declare function postMessage(data: any): void;
 

self.onmessage = e => {
    switch (e.data.tag) {
        case 'FullMovie':
            postMessage('Gone away for now');
            break;
        case 'Nestegg':
            let ne = new NestEggScheduler(e.data.nestegg);
            ne.updateContributionSchedule();
            postMessage('Gone away for now');
            break;
        default:
            postMessage('i want to test multiple posts');
            postMessage('testing new setup');
            break;
    }

};



 
 
 
 
 
 



 class NestEggScheduler{
    _contributions: Array<Contribution> = [];
    _distributions: Array<Distribution> = [];
    _setupFees: Array<Cost> = [];
    _growths: Array<Growth> = [];
    constructor(_nestEgg: NestEgg) {
        this._contributions =_nestEgg.Contributions;
        this._distributions =_nestEgg.Distributions;
        this._growths = _nestEgg.Growths;
        this._setupFees = _nestEgg.SetupFees;
    }
    updateContributionSchedule() {
        return 'this is for sandboxed update to contribution since it\'s value isn\'t altered by anything other than no more money';
    }

}


 class UtilService {

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
 
 

 class ContributionUtil {
    _contribution = new Contribution();
    _utilsvc = new UtilService();
    constructor(){}
    setcontribution(contrib: Contribution) {
        this._contribution = contrib;
    }
    calculateContributions(): Array<Transfers>{
        let trnsfrs: Array<Transfers> = [];
        let previousval = this._contribution.BaseValue;
        switch (this._contribution.BaseDirection) {
            case Additional_Direction.None:
                for (let age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    let tmpTransfer = new Transfers();
                    tmpTransfer.SourceId = this._contribution.SourceId;
                    tmpTransfer.DestinationId = this._contribution.DestinationId;
                    tmpTransfer.DeltaDollar = this._contribution.BaseValue;
                    tmpTransfer.CurrentAge = age;
                    tmpTransfer.Id = this._utilsvc.GenerateGuid();
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Increasing:
                for (let age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    let tmp = this.increasingContribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Decreasing:
                for (let age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    let tmp = this.decreasingContribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Variable:
                for (let age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    let tmp = this.variableContribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
        }
        return trnsfrs;
    }
    increasingContribution(age: number,  previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._contribution.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
            default:
               previousval = tmpTransfer.DeltaDollar = previousval + (this._contribution.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }
    decreasingContribution(age: number,  previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval - (previousval * this._contribution.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
            default:
               previousval = tmpTransfer.DeltaDollar = previousval - this._contribution.AdditionalValue ;
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }
     variableContribution(age: number, previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        let idx = this._contribution.VariableSchedule.map((x) => {return x.Age; }).indexOf(age);
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + ( previousval * this._contribution.VariableSchedule[idx].CompoundPct );
                tmpTransfer.CurrentAge = age;
            break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._contribution.VariableSchedule[idx].Dollar);
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }

}


 
 

 class CostsUtil {

}
 
 

 class DistributionUtil {
    _distribution: Distribution= new Distribution();
  _utilsvc = new UtilService();
    constructor() {}
    setDistribution(uiDistribution: Distribution) {
        this._distribution = uiDistribution;
    }
    calculateDistributions(): Array<Transfers> {
        let trnsfrs: Array<Transfers> = [];
        let previousval = this._distribution.BaseValue;
        switch (this._distribution.BaseDirection) {
            case Additional_Direction.None:
                for (let age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    let tmpDistribution = new Transfers();
                    tmpDistribution.SourceId = this._distribution.SourceId;
                    tmpDistribution.DestinationId = this._distribution.DestinationId;
                    tmpDistribution.DeltaDollar = this._distribution.BaseValue;
                    tmpDistribution.CurrentAge = age;
                    tmpDistribution.Id = this._utilsvc.GenerateGuid();
                    let cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Increasing:
                for (let age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    let tmp = this.increasingDistribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpDistribution = tmp.tmpDistribution;
                    let cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Decreasing:
                for (let age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    let tmp = this.decreasingDistribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpDistribution = tmp.tmpDistribution;
                    let cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Variable:
                for (let age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    let tmp = this.variableDistribution(age, previousval);
                    previousval = tmp.previousval;
                    let tmpDistribution = tmp.tmpDistribution;
                    let cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
            break;
        }
        return trnsfrs;
    }


    increasingDistribution(age: number,  previousval: number): {tmpDistribution: Transfers , previousval: number} {
        let tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval + (previousval * this._distribution.AdditionalValue );
                tmpDistribution.CurrentAge = age;
            break;
            default:
            previousval = tmpDistribution.DeltaDollar = previousval + (this._distribution.AdditionalValue );
                tmpDistribution.CurrentAge = age;
            break;
        }
        return {tmpDistribution: tmpDistribution , previousval: previousval };
    }

    decreasingDistribution(age: number,  previousval: number): {tmpDistribution: Transfers , previousval: number} {
        let tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval - (previousval * this._distribution.AdditionalValue );
                tmpDistribution.CurrentAge = age;
            break;
            default:
            previousval = tmpDistribution.DeltaDollar = previousval - this._distribution.AdditionalValue ;
                tmpDistribution.CurrentAge = age;
            break;
        }
        return {tmpDistribution: tmpDistribution , previousval: previousval };
    }

    variableDistribution(age: number, previousval: number): {tmpDistribution: Transfers , previousval: number} {
        let tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        let idx = this._distribution.VariableSchedule.map((x) => {return x.Age; }).indexOf(age);
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval + ( previousval * this._distribution.VariableSchedule[idx].CompoundPct );
                tmpDistribution.CurrentAge = age;
            break;
            default:
                previousval = tmpDistribution.DeltaDollar = previousval + (this._distribution.VariableSchedule[idx].Dollar);
                tmpDistribution.CurrentAge = age;
            break;
        }
        return {tmpDistribution: tmpDistribution , previousval: previousval };
    }

}

 
 

 class GrowthsUtil {

}

 
 

 class TransfersUtil {
    _transfer:UiTransferCharacter= new UiTransferCharacter();
    _utilsvc = new UtilService();
    constructor(){}
    setTransfer(uitransfer: UiTransferCharacter) {
        this._transfer = uitransfer;
    }
    calculateTransfers(): Array<Transfers> {
        let trnsfrs: Array<Transfers> = [];
        let previousval = this._transfer.BaseValue;
        switch (this._transfer.BaseDirection) {
            case Additional_Direction.None:
                for (let age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    let tmpTransfer = new Transfers();
                    tmpTransfer.SourceId = this._transfer.SourceId;
                    tmpTransfer.DestinationId = this._transfer.DestinationId;
                    tmpTransfer.DeltaDollar = this._transfer.BaseValue;
                    tmpTransfer.CurrentAge = age;
                    tmpTransfer.Id = this._utilsvc.GenerateGuid();
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Increasing:
                for (let age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    let tmp = this.increasingTransfer(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Decreasing:
                for (let age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    let tmp = this.decreasingTransfer(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
            case Additional_Direction.Variable:
                for (let age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    let tmp = this.variableTransfer(age, previousval);
                    previousval = tmp.previousval;
                    let tmpTransfer = tmp.tmpTransfer;
                    let cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
            break;
        }
        return trnsfrs;
    }


    increasingTransfer(age: number,  previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._transfer.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
            default:
            previousval = tmpTransfer.DeltaDollar = previousval + (this._transfer.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }

    decreasingTransfer(age: number,  previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval - (previousval * this._transfer.AdditionalValue );
                tmpTransfer.CurrentAge = age;
            break;
            default:
            previousval = tmpTransfer.DeltaDollar = previousval - this._transfer.AdditionalValue ;
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }

    variableTransfer(age: number, previousval: number): {tmpTransfer: Transfers , previousval: number} {
        let tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        let idx = this._transfer.VariableSchedule.map((x) => {return x.Age; }).indexOf(age);
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + ( previousval * this._transfer.VariableSchedule[idx].CompoundPct );
                tmpTransfer.CurrentAge = age;
            break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._transfer.VariableSchedule[idx].Dollar);
                tmpTransfer.CurrentAge = age;
            break;
        }
        return {tmpTransfer: tmpTransfer , previousval: previousval };
    }

}

