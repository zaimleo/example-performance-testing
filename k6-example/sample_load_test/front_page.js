import http from 'k6/http';
import { sleep, check, group } from 'k6';

// Test configuration
export let options = {
    stages: [
        { target: 100, duration: "10s" },
        { target: 100, duration: "10s" },
        { target: 0, duration: "10s" }
    ],
    thresholds: {
        "http_req_duration": ["p(95)<500"],
        "http_req_duration{staticAsset:yes}": ["p(95)<100"],
        "check_failure_rate": ["rate<0.3"]
    }
};

// User scenario
export default function () {
    group ("Front Page", function(){
        //  Request for the front page
        let result = http.get('http://test.k6.io');

        // Make sure the status code is 200 OK
        check (result, {
            "Status is 200" : (r) => r.status ==200,
        });

        // Simulate user reading the page
        sleep(5);
    });

    group ("Front Page2", function(){
        //  Request for the front page
        let result = http.get('http://test.k6.io');

        // Make sure the status code is 200 OK
        check (result, {
            "Status is 200" : (r) => r.status ==200,
        });

        // Simulate user reading the page
        sleep(5);
    });
}