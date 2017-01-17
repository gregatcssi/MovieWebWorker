import {Distribution, Additional_Direction, DollarPctCompound_Type, TransferDistributionCost_Type, Cost,Transfers} from '../../model/moviemodel';
import {UtilService} from '../services/utilservice';

export class DistributionUtil {
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