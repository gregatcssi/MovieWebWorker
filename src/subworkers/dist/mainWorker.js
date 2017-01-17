var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Begin Types
var Character_Type;
(function (Character_Type) {
    Character_Type[Character_Type["NestEgg"] = 0] = "NestEgg";
    Character_Type[Character_Type["LifeInsurance"] = 1] = "LifeInsurance";
    Character_Type[Character_Type["Property"] = 2] = "Property";
    Character_Type[Character_Type["Debt"] = 3] = "Debt";
    Character_Type[Character_Type["Insurance"] = 4] = "Insurance";
    Character_Type[Character_Type["IncomeRiver"] = 5] = "IncomeRiver";
    Character_Type[Character_Type["Wef"] = 6] = "Wef";
    Character_Type[Character_Type["FromList"] = 7] = "FromList";
    Character_Type[Character_Type["Cost"] = 8] = "Cost";
    Character_Type[Character_Type["Distribution"] = 9] = "Distribution";
    Character_Type[Character_Type["ThirdParty"] = 10] = "ThirdParty";
    Character_Type[Character_Type["Growth"] = 11] = "Growth";
    Character_Type[Character_Type["CostDestination"] = 12] = "CostDestination";
    Character_Type[Character_Type["Income"] = 13] = "Income";
    Character_Type[Character_Type["Transfer"] = 14] = "Transfer";
    Character_Type[Character_Type["InheritanceCashAccount"] = 15] = "InheritanceCashAccount";
})(Character_Type || (Character_Type = {}));
var Transfer_Type;
(function (Transfer_Type) {
    Transfer_Type[Transfer_Type["None"] = 0] = "None";
    Transfer_Type[Transfer_Type["Contribution"] = 1] = "Contribution";
    Transfer_Type[Transfer_Type["Distribution"] = 2] = "Distribution";
    Transfer_Type[Transfer_Type["Growth"] = 3] = "Growth";
    Transfer_Type[Transfer_Type["Cost"] = 4] = "Cost";
    Transfer_Type[Transfer_Type["Transfer"] = 5] = "Transfer";
    Transfer_Type[Transfer_Type["Premium"] = 6] = "Premium";
    Transfer_Type[Transfer_Type["LoanPayBack"] = 7] = "LoanPayBack";
})(Transfer_Type || (Transfer_Type = {}));
var Month_Type;
(function (Month_Type) {
    Month_Type[Month_Type["January"] = 0] = "January";
    Month_Type[Month_Type["February"] = 1] = "February";
    Month_Type[Month_Type["March"] = 2] = "March";
    Month_Type[Month_Type["April"] = 3] = "April";
    Month_Type[Month_Type["May"] = 4] = "May";
    Month_Type[Month_Type["June"] = 5] = "June";
    Month_Type[Month_Type["July"] = 6] = "July";
    Month_Type[Month_Type["August"] = 7] = "August";
    Month_Type[Month_Type["September"] = 8] = "September";
    Month_Type[Month_Type["October"] = 9] = "October";
    Month_Type[Month_Type["November"] = 10] = "November";
    Month_Type[Month_Type["December"] = 11] = "December";
})(Month_Type || (Month_Type = {}));
var Apr_Type;
(function (Apr_Type) {
    Apr_Type[Apr_Type["Fixed"] = 0] = "Fixed";
    Apr_Type[Apr_Type["Variable"] = 1] = "Variable";
})(Apr_Type || (Apr_Type = {}));
var Tax_Type;
(function (Tax_Type) {
    Tax_Type[Tax_Type["PreTax"] = 0] = "PreTax";
    Tax_Type[Tax_Type["PostTax"] = 1] = "PostTax";
})(Tax_Type || (Tax_Type = {}));
var Additional_Direction;
(function (Additional_Direction) {
    Additional_Direction[Additional_Direction["None"] = 0] = "None";
    Additional_Direction[Additional_Direction["Increasing"] = 1] = "Increasing";
    Additional_Direction[Additional_Direction["Decreasing"] = 2] = "Decreasing";
    Additional_Direction[Additional_Direction["Variable"] = 3] = "Variable";
})(Additional_Direction || (Additional_Direction = {}));
var Additional_Direction_No_Variable;
(function (Additional_Direction_No_Variable) {
    Additional_Direction_No_Variable[Additional_Direction_No_Variable["None"] = 0] = "None";
    Additional_Direction_No_Variable[Additional_Direction_No_Variable["Increasing"] = 1] = "Increasing";
    Additional_Direction_No_Variable[Additional_Direction_No_Variable["Decreasing"] = 2] = "Decreasing";
})(Additional_Direction_No_Variable || (Additional_Direction_No_Variable = {}));
var Income_Type;
(function (Income_Type) {
    Income_Type[Income_Type["Net"] = 0] = "Net";
    Income_Type[Income_Type["Gross"] = 1] = "Gross";
})(Income_Type || (Income_Type = {}));
var Cost_Type;
(function (Cost_Type) {
    Cost_Type[Cost_Type["Fee"] = 0] = "Fee";
    Cost_Type[Cost_Type["Tax"] = 1] = "Tax";
})(Cost_Type || (Cost_Type = {}));
var CostSub_Type;
(function (CostSub_Type) {
    CostSub_Type[CostSub_Type["Select"] = 0] = "Select";
    CostSub_Type[CostSub_Type["Setup"] = 1] = "Setup";
    CostSub_Type[CostSub_Type["Regular"] = 2] = "Regular";
    CostSub_Type[CostSub_Type["EarlyDistribution"] = 3] = "EarlyDistribution";
    CostSub_Type[CostSub_Type["OverAmount"] = 4] = "OverAmount";
    CostSub_Type[CostSub_Type["APR"] = 5] = "APR";
    CostSub_Type[CostSub_Type["Surrender"] = 6] = "Surrender";
    CostSub_Type[CostSub_Type["PropertySale"] = 7] = "PropertySale";
    CostSub_Type[CostSub_Type["Borrow"] = 8] = "Borrow";
})(CostSub_Type || (CostSub_Type = {}));
var DollarPctCompound_Type;
(function (DollarPctCompound_Type) {
    DollarPctCompound_Type[DollarPctCompound_Type["Dollar"] = 0] = "Dollar";
    DollarPctCompound_Type[DollarPctCompound_Type["Percentage"] = 1] = "Percentage";
})(DollarPctCompound_Type || (DollarPctCompound_Type = {}));
///A character will be one of these tax types
var TaxTemplate_Type;
(function (TaxTemplate_Type) {
    TaxTemplate_Type[TaxTemplate_Type["BasisThenGain"] = 0] = "BasisThenGain";
    TaxTemplate_Type[TaxTemplate_Type["GainThenBasis"] = 1] = "GainThenBasis";
    TaxTemplate_Type[TaxTemplate_Type["Exclusion_Ratio"] = 2] = "Exclusion_Ratio";
    TaxTemplate_Type[TaxTemplate_Type["Fully_Taxed"] = 3] = "Fully_Taxed";
    TaxTemplate_Type[TaxTemplate_Type["Tax_Free"] = 4] = "Tax_Free"; //0% taxable
})(TaxTemplate_Type || (TaxTemplate_Type = {}));
var TransferGrowthCost_Type;
(function (TransferGrowthCost_Type) {
    TransferGrowthCost_Type[TransferGrowthCost_Type["Growth"] = 0] = "Growth";
    TransferGrowthCost_Type[TransferGrowthCost_Type["NetGrowth"] = 1] = "NetGrowth";
})(TransferGrowthCost_Type || (TransferGrowthCost_Type = {}));
var TransferDistributionCost_Type;
(function (TransferDistributionCost_Type) {
    TransferDistributionCost_Type[TransferDistributionCost_Type["Distribution"] = 0] = "Distribution";
    TransferDistributionCost_Type[TransferDistributionCost_Type["NetDistribution"] = 1] = "NetDistribution";
})(TransferDistributionCost_Type || (TransferDistributionCost_Type = {}));
var TransferIncomeCost_Type;
(function (TransferIncomeCost_Type) {
    TransferIncomeCost_Type[TransferIncomeCost_Type["Income"] = 0] = "Income";
    TransferIncomeCost_Type[TransferIncomeCost_Type["NetIncome"] = 1] = "NetIncome";
})(TransferIncomeCost_Type || (TransferIncomeCost_Type = {}));
var WithdrawalBorrow_Type;
(function (WithdrawalBorrow_Type) {
    WithdrawalBorrow_Type[WithdrawalBorrow_Type["Withdraw"] = 0] = "Withdraw";
    WithdrawalBorrow_Type[WithdrawalBorrow_Type["Borrow"] = 1] = "Borrow";
})(WithdrawalBorrow_Type || (WithdrawalBorrow_Type = {}));
var AmountSpendDown_Type;
(function (AmountSpendDown_Type) {
    AmountSpendDown_Type[AmountSpendDown_Type["Amount"] = 0] = "Amount";
    AmountSpendDown_Type[AmountSpendDown_Type["SpendDown"] = 1] = "SpendDown";
})(AmountSpendDown_Type || (AmountSpendDown_Type = {}));
var Mode_Type;
(function (Mode_Type) {
    Mode_Type[Mode_Type["Daily"] = 0] = "Daily";
    Mode_Type[Mode_Type["Biweekly"] = 1] = "Biweekly";
    Mode_Type[Mode_Type["Weekly"] = 2] = "Weekly";
    Mode_Type[Mode_Type["Bimonthly"] = 3] = "Bimonthly";
    Mode_Type[Mode_Type["Monthly"] = 4] = "Monthly";
    Mode_Type[Mode_Type["Quarterly"] = 5] = "Quarterly";
    Mode_Type[Mode_Type["Semiannual"] = 6] = "Semiannual";
    Mode_Type[Mode_Type["Annual"] = 7] = "Annual";
})(Mode_Type || (Mode_Type = {}));
var LoanPayBack_Type;
(function (LoanPayBack_Type) {
    LoanPayBack_Type[LoanPayBack_Type["Income"] = 0] = "Income";
    LoanPayBack_Type[LoanPayBack_Type["Accrual"] = 1] = "Accrual";
})(LoanPayBack_Type || (LoanPayBack_Type = {}));
/**Pay Principal & Interest immediately, Defer then pay P & I, Pay Interest only, Pay Interest then Principal and Interest */
var LoanPaymentMethod_Type;
(function (LoanPaymentMethod_Type) {
    LoanPaymentMethod_Type[LoanPaymentMethod_Type["PIImmediately"] = 0] = "PIImmediately";
    LoanPaymentMethod_Type[LoanPaymentMethod_Type["DeferPI"] = 1] = "DeferPI";
    LoanPaymentMethod_Type[LoanPaymentMethod_Type["IOOnly"] = 2] = "IOOnly";
    LoanPaymentMethod_Type[LoanPaymentMethod_Type["IOThenPI"] = 3] = "IOThenPI";
})(LoanPaymentMethod_Type || (LoanPaymentMethod_Type = {}));
/**Primary, Contingent, Teriary, etc... */
var Beneficiary_Type;
(function (Beneficiary_Type) {
    Beneficiary_Type[Beneficiary_Type["Primary"] = 0] = "Primary";
    Beneficiary_Type[Beneficiary_Type["Contingent"] = 1] = "Contingent";
    Beneficiary_Type[Beneficiary_Type["Tertiary"] = 2] = "Tertiary";
    Beneficiary_Type[Beneficiary_Type["Quaternary"] = 3] = "Quaternary";
    Beneficiary_Type[Beneficiary_Type["Quinary"] = 4] = "Quinary";
})(Beneficiary_Type || (Beneficiary_Type = {}));
/**LumpSum, Over Years, In Installments of*/
var BeneficiaryPayout_Type;
(function (BeneficiaryPayout_Type) {
    BeneficiaryPayout_Type[BeneficiaryPayout_Type["LumpSum"] = 0] = "LumpSum";
    BeneficiaryPayout_Type[BeneficiaryPayout_Type["OverYears"] = 1] = "OverYears";
    BeneficiaryPayout_Type[BeneficiaryPayout_Type["Installments"] = 2] = "Installments";
})(BeneficiaryPayout_Type || (BeneficiaryPayout_Type = {}));
//End Types
//Begin Classes
var BaseClass = (function () {
    function BaseClass() {
    }
    return BaseClass;
}());
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        _super.apply(this, arguments);
        this.TimeLines = [];
        this.TransferCharacters = [];
    }
    return Movie;
}(BaseClass));
var BaseClassWithAges = (function (_super) {
    __extends(BaseClassWithAges, _super);
    function BaseClassWithAges() {
        _super.apply(this, arguments);
    }
    return BaseClassWithAges;
}(BaseClass));
var TimeLine = (function (_super) {
    __extends(TimeLine, _super);
    function TimeLine() {
        _super.apply(this, arguments);
        this.NestEggs = [];
        this.ThirdParties = [];
        this.HardAssets = [];
        this.Debts = [];
        this.AnnuityWithIncomeRiders = [];
        this.TermLifes = [];
        this.PermLifes = [];
        this.IncomeRivers = [];
        this.Insurances = [];
    }
    return TimeLine;
}(BaseClassWithAges));
var Transfers = (function (_super) {
    __extends(Transfers, _super);
    function Transfers() {
        _super.apply(this, arguments);
    }
    return Transfers;
}(BaseClassWithAges));
var UiTransferCharacter = (function (_super) {
    __extends(UiTransferCharacter, _super);
    function UiTransferCharacter() {
        _super.apply(this, arguments);
        /**Schedule list may show dollar, simple pct or compound pct for start and end ages of the transfer */
        this.VariableSchedule = [];
        /**Default 59.5. The earliest age someone can take a distribution without a early distribution cost.   */
        this.EarlyDistributionAge = 59.5; //An early distribution t/f for $__% each mode will be applied to any distribution prior to the age__ 
    }
    return UiTransferCharacter;
}(BaseClassWithAges));
var Cost = (function (_super) {
    __extends(Cost, _super);
    function Cost() {
        _super.apply(this, arguments);
    }
    return Cost;
}(UiTransferCharacter));
var Contribution = (function (_super) {
    __extends(Contribution, _super);
    function Contribution() {
        _super.apply(this, arguments);
    }
    return Contribution;
}(UiTransferCharacter));
var Growth = (function (_super) {
    __extends(Growth, _super);
    function Growth() {
        _super.apply(this, arguments);
        this.Costs = [];
    }
    return Growth;
}(UiTransferCharacter));
var Distribution = (function (_super) {
    __extends(Distribution, _super);
    function Distribution() {
        _super.apply(this, arguments);
        this.Costs = [];
    }
    return Distribution;
}(UiTransferCharacter));
var Beneficiary = (function (_super) {
    __extends(Beneficiary, _super);
    function Beneficiary() {
        _super.apply(this, arguments);
    }
    return Beneficiary;
}(UiTransferCharacter));
/**For All Transfers from the UI. Almost identical to Distribution but can have any source and destination*/
var TransferCharacter = (function (_super) {
    __extends(TransferCharacter, _super);
    function TransferCharacter() {
        _super.apply(this, arguments);
        this.SourceTimeLineCharacters = []; //Used to hold a list of characters the user can select as the source.
        this.DestinationTimeLineCharacters = []; //Used to hold the list of characters the user can select for destination
    }
    return TransferCharacter;
}(Distribution));
///For Distributions with LoanPayBackType of income only, the payer pays the whole loan back
var LoanPayBack = (function (_super) {
    __extends(LoanPayBack, _super);
    function LoanPayBack() {
        _super.apply(this, arguments);
        /**APR schedule for variable loan apr */
        this.LoanVariableScheduleApr = [];
    }
    return LoanPayBack;
}(UiTransferCharacter));
var CharacterBase = (function (_super) {
    __extends(CharacterBase, _super);
    function CharacterBase() {
        _super.apply(this, arguments);
        /**Schedule list may show dollar, simple pct or compound pct for start and end ages of the transfer */
        this.VariableSchedule = [];
        this.Contributions = [];
        this.Growths = [];
        this.GrowthAges = [];
        this.SetupFees = [];
        this.Distributions = [];
        this.Beneficiaries = [];
    }
    return CharacterBase;
}(BaseClassWithAges));
var NestEgg = (function (_super) {
    __extends(NestEgg, _super);
    function NestEgg() {
        _super.apply(this, arguments);
    }
    return NestEgg;
}(CharacterBase));
var AnnuityWithIncomeRider = (function (_super) {
    __extends(AnnuityWithIncomeRider, _super);
    function AnnuityWithIncomeRider() {
        _super.apply(this, arguments);
    }
    return AnnuityWithIncomeRider;
}(CharacterBase));
/**Defense membranes */
var Insurance = (function (_super) {
    __extends(Insurance, _super);
    function Insurance() {
        _super.apply(this, arguments);
        this.DefensePremiumVariableSchedule = [];
    }
    return Insurance;
}(CharacterBase));
var ThirdParty = (function (_super) {
    __extends(ThirdParty, _super);
    function ThirdParty() {
        _super.apply(this, arguments);
    }
    return ThirdParty;
}(CharacterBase));
var IncomeRiver = (function (_super) {
    __extends(IncomeRiver, _super);
    function IncomeRiver() {
        _super.apply(this, arguments);
    }
    return IncomeRiver;
}(CharacterBase));
var PermLife = (function (_super) {
    __extends(PermLife, _super);
    function PermLife() {
        _super.apply(this, arguments);
    }
    return PermLife;
}(CharacterBase));
var TermLife = (function (_super) {
    __extends(TermLife, _super);
    function TermLife() {
        _super.apply(this, arguments);
    }
    return TermLife;
}(CharacterBase));
var Debt = (function (_super) {
    __extends(Debt, _super);
    function Debt() {
        _super.apply(this, arguments);
    }
    return Debt;
}(CharacterBase));
/**Property i.e. real estate, car */
var HardAsset = (function (_super) {
    __extends(HardAsset, _super);
    function HardAsset() {
        _super.apply(this, arguments);
    }
    return HardAsset;
}(CharacterBase));
var InheritanceCashAccount = (function (_super) {
    __extends(InheritanceCashAccount, _super);
    function InheritanceCashAccount() {
        _super.apply(this, arguments);
    }
    return InheritanceCashAccount;
}(CharacterBase));
var AgeAvailable = (function () {
    function AgeAvailable() {
    }
    return AgeAvailable;
}());
var VariableSchedule = (function () {
    function VariableSchedule() {
    }
    return VariableSchedule;
}());
var CostDestination = (function (_super) {
    __extends(CostDestination, _super);
    function CostDestination() {
        _super.apply(this, arguments);
    }
    return CostDestination;
}(BaseClass));
/**Used to hold properties of characters in a timeline */
var TimeLineCharacter = (function () {
    function TimeLineCharacter() {
    }
    return TimeLineCharacter;
}());
self.onmessage = function (e) {
    switch (e.data.tag) {
        case 'FullMovie':
            postMessage('Gone away for now');
            break;
        case 'Nestegg':
            var ne = new NestEggScheduler(e.data.nestegg);
            ne.updateContributionSchedule();
            postMessage('Gone away for now');
            break;
        default:
            postMessage('i want to test multiple posts');
            postMessage('testing new setup');
            break;
    }
};
var NestEggScheduler = (function () {
    function NestEggScheduler(_nestEgg) {
        this._contributions = [];
        this._distributions = [];
        this._setupFees = [];
        this._growths = [];
        this._contributions = _nestEgg.Contributions;
        this._distributions = _nestEgg.Distributions;
        this._growths = _nestEgg.Growths;
        this._setupFees = _nestEgg.SetupFees;
    }
    NestEggScheduler.prototype.updateContributionSchedule = function () {
        return 'this is for sandboxed update to contribution since it\'s value isn\'t altered by anything other than no more money';
    };
    return NestEggScheduler;
}());
var UtilService = (function () {
    function UtilService() {
    }
    /**Returns the date of the character at a specified date */
    UtilService.prototype.GetAccurateAge = function (earlierDate, laterDate) {
        var months = (laterDate.getMonth() - earlierDate.getMonth());
        var days = (laterDate.getDate() - earlierDate.getDate());
        if (days < 0) {
            months--;
        }
        var years = laterDate.getFullYear() - earlierDate.getFullYear();
        if (months < 0) {
            years--;
        }
        return new Date(years, months, days);
    };
    /**Returns the number of months between two dates */
    UtilService.prototype.GetMonthDifference = function (earlierDate, laterDate) {
        var monthsApart = 12 * (earlierDate.getFullYear() - laterDate.getFullYear())
            + earlierDate.getMonth() - laterDate.getMonth();
        return Math.abs(monthsApart);
    };
    /**Returns the date of a character at a specific date in the future */
    UtilService.prototype.GetDateAtAge = function (dateOfBirth, year) {
        var yearOfBirth = dateOfBirth.getFullYear();
        var yearOfAge = yearOfBirth + year;
        return new Date(yearOfAge, dateOfBirth.getMonth(), dateOfBirth.getDate());
    };
    /**Adds the years to the starting date.  Returns Date object */
    UtilService.prototype.AddYearsToDate = function (startingDate, years) {
        var startingYear = startingDate.getFullYear();
        var finalYear = startingYear + years;
        return new Date(finalYear, startingDate.getMonth(), startingDate.getDate());
    };
    /** Returns the age (rounded) based on dob and date in the future*/
    UtilService.prototype.GetAge = function (dateOfBirth, futureDate) {
        var days = (futureDate.getDate() - dateOfBirth.getDate());
        var months = (futureDate.getMonth() - dateOfBirth.getMonth());
        var years = (futureDate.getFullYear() - dateOfBirth.getFullYear());
        if (days < 0) {
            months--;
        }
        if (months < 0) {
            years--;
        }
        else if (months >= 6) {
            years++;
        }
        return years;
    };
    /**Gets the age of the second timeline at the time the first timeline is at the parameter age */
    UtilService.prototype.GetAgeOfSecondTimeLineById = function (movie, timeLine1Id, timeLine2Id, timeLine1Age) {
        var t1Idx = movie.TimeLines.map(function (x) { return x.Id; }).indexOf(timeLine1Id);
        if (t1Idx >= 0) {
            var t2Idx = movie.TimeLines.map(function (x) { return x.Id; }).indexOf(timeLine2Id);
            if (t2Idx >= 0) {
                var t1 = movie.TimeLines[t1Idx];
                var t2 = movie.TimeLines[t2Idx];
                return this.GetAgeOfSecondTimeLine(t1, t2, timeLine1Age);
            }
        }
        return -1;
    };
    /**Gets the age of the second timeline at the time the first timeline is at the parameter age */
    UtilService.prototype.GetAgeOfSecondTimeLine = function (timeLine1, timeLine2, timeLine1Age) {
        var timeLine1Dob = timeLine1.DateOfBirth;
        //The date of timeline1 at the specified age.
        var dateAtTimeLine1Age = this.AddYearsToDate(timeLine1Dob, timeLine1Age);
        var timeLine2Dob = timeLine2.DateOfBirth;
        var secondAge = this.GetAge(timeLine2Dob, dateAtTimeLine1Age);
        return secondAge;
    };
    UtilService.prototype.GetStartAgeRange = function (timeLine) {
        var ages = [];
        var startAge = timeLine.StartAge;
        var endAge = 1000;
        if (timeLine.EndAge <= 1000) {
            endAge = timeLine.EndAge;
        }
        for (var x = 0; x <= endAge; x++) {
            ages.push(x);
            if (x < startAge && ((x + 1) > startAge)) {
                ages.push(startAge);
            }
        }
        return ages;
    };
    UtilService.prototype.GetEndAgeRange = function (timeLine) {
        var ages = [];
        if (timeLine.StartAge == undefined) {
            timeLine.StartAge = 0;
        }
        var startAge = timeLine.StartAge;
        var endAge = 1000;
        var index = 0;
        for (var x = startAge; x <= endAge; x++) {
            ages.push(x);
            if (index == 0) {
                x = parseInt(x.toString());
            }
            index++;
        }
        return ages;
    };
    UtilService.prototype.GetEarlyDeathAgeRange = function (timeLine) {
        var ages = [];
        if (timeLine.StartAge == undefined) {
            timeLine.StartAge = 0;
        }
        var startAge = timeLine.StartAge;
        var endAge = timeLine.EndAge;
        var index = 0;
        for (var x = startAge; x <= endAge; x++) {
            ages.push(x);
            if (index == 0) {
                x = parseInt(x.toString());
            }
            index++;
        }
        return ages;
    };
    UtilService.prototype.anotherClone = function (item) {
        var tmpItem = {};
        for (var attr in item) {
            if (item.hasOwnProperty(attr)) {
                tmpItem[attr] = item[attr];
            }
        }
        ;
        return tmpItem;
    };
    UtilService.prototype.GenerateGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return UtilService;
}());
var ContributionUtil = (function () {
    function ContributionUtil() {
        this._contribution = new Contribution();
        this._utilsvc = new UtilService();
    }
    ContributionUtil.prototype.setcontribution = function (contrib) {
        this._contribution = contrib;
    };
    ContributionUtil.prototype.calculateContributions = function () {
        var trnsfrs = [];
        var previousval = this._contribution.BaseValue;
        switch (this._contribution.BaseDirection) {
            case Additional_Direction.None:
                for (var age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    var tmpTransfer = new Transfers();
                    tmpTransfer.SourceId = this._contribution.SourceId;
                    tmpTransfer.DestinationId = this._contribution.DestinationId;
                    tmpTransfer.DeltaDollar = this._contribution.BaseValue;
                    tmpTransfer.CurrentAge = age;
                    tmpTransfer.Id = this._utilsvc.GenerateGuid();
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Increasing:
                for (var age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    var tmp = this.increasingContribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Decreasing:
                for (var age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    var tmp = this.decreasingContribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Variable:
                for (var age = this._contribution.StartAge; age < this._contribution.EndAge; age++) {
                    var tmp = this.variableContribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
        }
        return trnsfrs;
    };
    ContributionUtil.prototype.increasingContribution = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._contribution.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._contribution.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    ContributionUtil.prototype.decreasingContribution = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval - (previousval * this._contribution.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval - this._contribution.AdditionalValue;
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    ContributionUtil.prototype.variableContribution = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._contribution.SourceId;
        tmpTransfer.DestinationId = this._contribution.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        var idx = this._contribution.VariableSchedule.map(function (x) { return x.Age; }).indexOf(age);
        switch (this._contribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._contribution.VariableSchedule[idx].CompoundPct);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._contribution.VariableSchedule[idx].Dollar);
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    return ContributionUtil;
}());
var CostsUtil = (function () {
    function CostsUtil() {
    }
    return CostsUtil;
}());
var DistributionUtil = (function () {
    function DistributionUtil() {
        this._distribution = new Distribution();
        this._utilsvc = new UtilService();
    }
    DistributionUtil.prototype.setDistribution = function (uiDistribution) {
        this._distribution = uiDistribution;
    };
    DistributionUtil.prototype.calculateDistributions = function () {
        var trnsfrs = [];
        var previousval = this._distribution.BaseValue;
        switch (this._distribution.BaseDirection) {
            case Additional_Direction.None:
                for (var age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    var tmpDistribution = new Transfers();
                    tmpDistribution.SourceId = this._distribution.SourceId;
                    tmpDistribution.DestinationId = this._distribution.DestinationId;
                    tmpDistribution.DeltaDollar = this._distribution.BaseValue;
                    tmpDistribution.CurrentAge = age;
                    tmpDistribution.Id = this._utilsvc.GenerateGuid();
                    var cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Increasing:
                for (var age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    var tmp = this.increasingDistribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpDistribution = tmp.tmpDistribution;
                    var cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Decreasing:
                for (var age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    var tmp = this.decreasingDistribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpDistribution = tmp.tmpDistribution;
                    var cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Variable:
                for (var age = this._distribution.StartAge; age < this._distribution.EndAge; age++) {
                    var tmp = this.variableDistribution(age, previousval);
                    previousval = tmp.previousval;
                    var tmpDistribution = tmp.tmpDistribution;
                    var cloned = this._utilsvc.anotherClone(tmpDistribution);
                    trnsfrs.push(cloned);
                }
                break;
        }
        return trnsfrs;
    };
    DistributionUtil.prototype.increasingDistribution = function (age, previousval) {
        var tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval + (previousval * this._distribution.AdditionalValue);
                tmpDistribution.CurrentAge = age;
                break;
            default:
                previousval = tmpDistribution.DeltaDollar = previousval + (this._distribution.AdditionalValue);
                tmpDistribution.CurrentAge = age;
                break;
        }
        return { tmpDistribution: tmpDistribution, previousval: previousval };
    };
    DistributionUtil.prototype.decreasingDistribution = function (age, previousval) {
        var tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval - (previousval * this._distribution.AdditionalValue);
                tmpDistribution.CurrentAge = age;
                break;
            default:
                previousval = tmpDistribution.DeltaDollar = previousval - this._distribution.AdditionalValue;
                tmpDistribution.CurrentAge = age;
                break;
        }
        return { tmpDistribution: tmpDistribution, previousval: previousval };
    };
    DistributionUtil.prototype.variableDistribution = function (age, previousval) {
        var tmpDistribution = new Transfers();
        tmpDistribution.SourceId = this._distribution.SourceId;
        tmpDistribution.DestinationId = this._distribution.DestinationId;
        tmpDistribution.Id = this._utilsvc.GenerateGuid();
        var idx = this._distribution.VariableSchedule.map(function (x) { return x.Age; }).indexOf(age);
        switch (this._distribution.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpDistribution.DeltaDollar = previousval + (previousval * this._distribution.VariableSchedule[idx].CompoundPct);
                tmpDistribution.CurrentAge = age;
                break;
            default:
                previousval = tmpDistribution.DeltaDollar = previousval + (this._distribution.VariableSchedule[idx].Dollar);
                tmpDistribution.CurrentAge = age;
                break;
        }
        return { tmpDistribution: tmpDistribution, previousval: previousval };
    };
    return DistributionUtil;
}());
var GrowthsUtil = (function () {
    function GrowthsUtil() {
    }
    return GrowthsUtil;
}());
var TransfersUtil = (function () {
    function TransfersUtil() {
        this._transfer = new UiTransferCharacter();
        this._utilsvc = new UtilService();
    }
    TransfersUtil.prototype.setTransfer = function (uitransfer) {
        this._transfer = uitransfer;
    };
    TransfersUtil.prototype.calculateTransfers = function () {
        var trnsfrs = [];
        var previousval = this._transfer.BaseValue;
        switch (this._transfer.BaseDirection) {
            case Additional_Direction.None:
                for (var age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    var tmpTransfer = new Transfers();
                    tmpTransfer.SourceId = this._transfer.SourceId;
                    tmpTransfer.DestinationId = this._transfer.DestinationId;
                    tmpTransfer.DeltaDollar = this._transfer.BaseValue;
                    tmpTransfer.CurrentAge = age;
                    tmpTransfer.Id = this._utilsvc.GenerateGuid();
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Increasing:
                for (var age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    var tmp = this.increasingTransfer(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Decreasing:
                for (var age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    var tmp = this.decreasingTransfer(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
            case Additional_Direction.Variable:
                for (var age = this._transfer.StartAge; age < this._transfer.EndAge; age++) {
                    var tmp = this.variableTransfer(age, previousval);
                    previousval = tmp.previousval;
                    var tmpTransfer = tmp.tmpTransfer;
                    var cloned = this._utilsvc.anotherClone(tmpTransfer);
                    trnsfrs.push(cloned);
                }
                break;
        }
        return trnsfrs;
    };
    TransfersUtil.prototype.increasingTransfer = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._transfer.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._transfer.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    TransfersUtil.prototype.decreasingTransfer = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval - (previousval * this._transfer.AdditionalValue);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval - this._transfer.AdditionalValue;
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    TransfersUtil.prototype.variableTransfer = function (age, previousval) {
        var tmpTransfer = new Transfers();
        tmpTransfer.SourceId = this._transfer.SourceId;
        tmpTransfer.DestinationId = this._transfer.DestinationId;
        tmpTransfer.Id = this._utilsvc.GenerateGuid();
        var idx = this._transfer.VariableSchedule.map(function (x) { return x.Age; }).indexOf(age);
        switch (this._transfer.AdditionalType) {
            case DollarPctCompound_Type.Percentage:
                previousval = tmpTransfer.DeltaDollar = previousval + (previousval * this._transfer.VariableSchedule[idx].CompoundPct);
                tmpTransfer.CurrentAge = age;
                break;
            default:
                previousval = tmpTransfer.DeltaDollar = previousval + (this._transfer.VariableSchedule[idx].Dollar);
                tmpTransfer.CurrentAge = age;
                break;
        }
        return { tmpTransfer: tmpTransfer, previousval: previousval };
    };
    return TransfersUtil;
}());
