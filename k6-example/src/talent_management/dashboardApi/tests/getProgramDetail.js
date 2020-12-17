import http from 'k6/http';
import { group } from 'k6';

import { options } from '../../../globalOptions.js';
import { API1_NAME, API1_BASE_URL } from '../../../constants.js';

import BaseTest from '../../../baseTest.js';

class getProgramDetail extends BaseTest {
    constructor() {
        super('Program Detail');
        this.API_NAME = API1_NAME;
        this.URL = `${API1_BASE_URL}`;
    }

    test() {
        group(this.TEST_NAME, () => {
        const response = http.get(this.URL, options, {
            tags: { id: this.TEST_NAME },
        });
        console.log(`result: ${JSON.stringify(response)}`);
        this.check(response);
        });
    }
}

export const getProgramDetailInstance = new getProgramDetail();

export default () => getProgramDetailInstance.test();