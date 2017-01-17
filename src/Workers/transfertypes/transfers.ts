import {NestEgg,Transfers, VariableSchedule, Additional_Direction, DollarPctCompound_Type, Character_Type, Transfer_Type, Growth, Cost,UiTransferCharacter} from '../../model/moviemodel';
import {UtilService} from '../services/utilservice';

export class TransfersUtil {
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

