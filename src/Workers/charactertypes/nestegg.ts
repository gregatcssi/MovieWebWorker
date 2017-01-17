import {NestEgg,Transfers, VariableSchedule, Additional_Direction, DollarPctCompound_Type, Character_Type, Transfer_Type, Growth, Cost,Contribution,Distribution} from '../../model/moviemodel';
import {DistributionUtil} from '../transfertypes/distributions';
import {GrowthsUtil} from '../transfertypes/growths';
import {ContributionUtil} from '../transfertypes/contributions';
import {TransfersUtil} from '../transfertypes/transfers';
import {CostsUtil} from '../transfertypes/costs';



export class NestEggScheduler{
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
