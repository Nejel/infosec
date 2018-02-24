import { BaseService } from 'airborne-base';
import JournalMapper from '../mappers/JournalMapper';

class JournalService extends BaseService {
    constructor(di) {
        super(di);
        this.mapper = new JournalMapper(di);
    }
    first() {
        return this.mapper.first();
    }
    second() {
        return this.mapper.second();
    }
    third() {
        return this.mapper.third();
    }
    fourth() {
        return this.mapper.fourth();
    }
}

export default JournalService;
