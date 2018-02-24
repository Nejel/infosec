import { BaseController } from 'airborne-base';
import JournalService from '../services/JournalService';

class JournalController extends BaseController {
    constructor(di) {
        super(di);
        this.service = new JournalService(di);
        this.rules = {
            first: {},
            second: {},
            third: {},
            fourth: {}
        };
    }
    first() {
        return this.service.first();
    }
    second() {
        return this.service.second();
    }
    third() {
        return this.service.third();
    }
    fourth() {
        return this.service.fourth();
    }
}

export default JournalController;
