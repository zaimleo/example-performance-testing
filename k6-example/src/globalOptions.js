import {getProgramDetailInstance} from './talent_management/dashboardApi/tests/getProgramDetail.js'

export let options = {
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL3RhbGVudC5wdWxzaWZpLm1lIjp7InVzZXJfYWNjb3VudF9pZCI6MTI2LCJhY3RpdmVfY29tcGFueV9pZCI6NSwiY29tcGFueSI6W3siY29tcGFueV9pZCI6NSwiY29tcGFueV9zbHVnIjoibmVzdGxlIiwidXNlcl9yb2xlX2lkIjoyfSx7ImNvbXBhbnlfaWQiOjE1LCJjb21wYW55X3NsdWciOiJtYWxheXNpYW5haXJsaW5lIiwidXNlcl9yb2xlX2lkIjo0NH1dfSwiaHR0cHM6Ly9wdWxzaWZpLm1lIjp7ImZvcmNlX2NoYW5nZV9wYXNzd29yZCI6dHJ1ZSwicHVsc2lmaWFuIjpmYWxzZSwiYXBwX2lkIjo1fSwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWlkLnB1bHNpZmkubWUvIiwic3ViIjoiZ29vZ2xlLWFwcHN8a2hlbmd5ZWVAcHVsc2lmaS5tZSIsImF1ZCI6WyJodHRwczovL2FwaS5wdWxzaWZpLm1lLyIsImh0dHBzOi8vcHVsc2lmaS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTk5NTMzNjk2LCJleHAiOjE2MDc1ODUyNjcsImF6cCI6InhyYmwwME93U2JPOXZuMmMzQnlaWjFCRlo4SUtRQ0JmIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImp0aSI6ImE1ZGUwNTBlLTEwYjUtNDljZS1iNGM5LWM1NjM0Nzk1NzlhZCJ9.hzm5oMZZ8G1mSds56rhFOYwRro7Xm-j9LUYsn_zWbL4`,
    },
    thresholds: Object.assign(
        {},
        getProgramDetailInstance.threshold
    ),
    // stages: [
    //     { target: 100, duration: "10s" }, // simulate ramp-up of traffic from 1 to 100 users over 10s
    //     { target: 100, duration: "10s" }, // stay at 100 users for 10s
    //     { target: 0, duration: "10s" } // ramp-down to 0 users
    // ],
    vus: 2,
    iterations: 10,
    noUsageReport: true
};