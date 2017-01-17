

//Begin Types
export enum Character_Type {
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

export enum Transfer_Type {
    None,
    Contribution,
    Distribution,
    Growth,
    Cost,
    Transfer,
    Premium, 
    LoanPayBack
}

export enum Month_Type {
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

export enum Apr_Type {
    Fixed,
    Variable
}

export enum Tax_Type {
    PreTax,
    PostTax
}

export enum Additional_Direction {
    None,
    Increasing,
    Decreasing,
    Variable
}

export enum Additional_Direction_No_Variable {
    None,
    Increasing,
    Decreasing
}

export enum Income_Type {
    Net,
    Gross
}

export enum Cost_Type {
    Fee,
    Tax
}

export enum CostSub_Type {
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

export enum DollarPctCompound_Type {
    Dollar,
    Percentage
}

///A character will be one of these tax types
export enum TaxTemplate_Type {
    BasisThenGain, //Tax the gain only on distributions
    GainThenBasis, //Tax the gain only on distributions
    Exclusion_Ratio,//A 30% exclusion ration means 30% of the distribution will not be taxed.  That 30% will come from basis.
    Fully_Taxed, //100% taxable
    Tax_Free //0% taxable
}

export enum TransferGrowthCost_Type {
    Growth,
    NetGrowth
}

export enum TransferDistributionCost_Type {
    Distribution,
    NetDistribution
}

export enum TransferIncomeCost_Type {
    Income,
    NetIncome
}

export enum WithdrawalBorrow_Type{
    Withdraw,
    Borrow
}

export enum AmountSpendDown_Type{
    Amount,
    SpendDown
}

export enum Mode_Type {
    Daily,
    Biweekly,
    Weekly,
    Bimonthly,
    Monthly,
    Quarterly,
    Semiannual,
    Annual
}

export enum LoanPayBack_Type {
    Income,
    Accrual
}

/**Pay Principal & Interest immediately, Defer then pay P & I, Pay Interest only, Pay Interest then Principal and Interest */
export enum LoanPaymentMethod_Type {
    PIImmediately,
    DeferPI,
    IOOnly,
    IOThenPI
}

/**Primary, Contingent, Teriary, etc... */
export enum Beneficiary_Type{
    Primary,
    Contingent,
    Tertiary, 
    Quaternary,
    Quinary
}

/**LumpSum, Over Years, In Installments of*/
export enum BeneficiaryPayout_Type{
    LumpSum,
    OverYears,
    Installments
}

//End Types

//Begin Classes
export class BaseClass {
    /**Call baseService.GenerateGuid() */
    Id: string;
    Creation: Date;
    LastUpdated: Date;
    Name: string;
    Active: boolean;
}

export class Movie extends BaseClass {
    CostDestination: CostDestination; //All costs and fees are added to this array
    TimeLines: TimeLine[] = [];
    TransferCharacters: TransferCharacter[] = [];
}

export class BaseClassWithAges extends BaseClass {
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

export class TimeLine extends BaseClassWithAges {
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


export class Transfers extends BaseClassWithAges {
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

export class UiTransferCharacter extends BaseClassWithAges {

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

export class Cost extends UiTransferCharacter {
    CostType: Cost_Type;
    CostSubType: CostSub_Type;
    TransferGrowthCostType: TransferGrowthCost_Type;
    TransferDistributionCostType: TransferDistributionCost_Type;
    TransferIncomeCostType: TransferIncomeCost_Type;
    BorrowPayerTimeLineId: string; //only used when borrowing money.  To allow some other timeline to pay back the cost
}

export class Contribution extends UiTransferCharacter {
    /**Set to true if employer is paying, false if from client */
    FromEmployer: boolean;
    TaxType: Tax_Type;
}

export class Growth extends UiTransferCharacter {
    Costs: Cost[] = [];
    CurrentCost: Cost;
}

export class Distribution extends UiTransferCharacter {
    WithdrawalBorrowType: WithdrawalBorrow_Type;
    AmountSpendDownType: AmountSpendDown_Type;
    SpendDownNumber: number; //
    Costs: Cost[] = [];
    //CurrentCost: Cost;
    LoanPayBackType: LoanPayBack_Type;//Accrual, Income
    /**Only one payback per distribution borrow */
    LoanPayBack: LoanPayBack; //If the DistributionType is Borrow
}

export class Beneficiary extends UiTransferCharacter{
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
export class TransferCharacter extends Distribution{
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
export class LoanPayBack extends UiTransferCharacter {
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

export class CharacterBase extends BaseClassWithAges {
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


export class NestEgg extends CharacterBase {
    TaxTemplateType: TaxTemplate_Type;
    HasBeginAtAge: boolean;
    ExclusionRatio: number;
}

export class AnnuityWithIncomeRider extends CharacterBase{
    ExclusionRation: number;
}

/**Defense membranes */
export class Insurance extends CharacterBase{
    DefenseAmount: number; //The amount of insurance the person is buying ($100,000)
    DefensePremiumPayerTimeLineId: string; //The person who will pay the defense cost
    DefensePremium: number; // Yearly cost of the insurance
    DefensePremiumAdditionalDirection: Additional_Direction;
    DefensePremiumAdditionalType: DollarPctCompound_Type;
    DefensePremiumAdditionalValue: number;
    DefensePremiumVariableSchedule: VariableSchedule[] = [];
    DefensePremiumVariableScheduleDollarPctType: DollarPctCompound_Type;
}

export class ThirdParty extends CharacterBase {

}

export class IncomeRiver extends CharacterBase{

}

export class PermLife extends CharacterBase{

}

export class TermLife extends CharacterBase{

}

export class Debt extends CharacterBase{

}

/**Property i.e. real estate, car */
export class HardAsset extends CharacterBase{

}

export class InheritanceCashAccount extends CharacterBase{

}

export class AgeAvailable {
    Age: number;
    Available: boolean;
}

export class VariableSchedule {
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

export class CostDestination extends BaseClass {

}

/**Used to hold properties of characters in a timeline */
export class TimeLineCharacter{
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

