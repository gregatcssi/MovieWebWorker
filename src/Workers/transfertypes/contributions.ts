import {Transfers, Additional_Direction, DollarPctCompound_Type,Contribution} from '../../model/moviemodel';
import {UtilService} from '../services/UtilService';

export class ContributionUtil {
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

