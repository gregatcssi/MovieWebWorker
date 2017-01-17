import {NestEggScheduler} from './charactertypes/nestegg';

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


