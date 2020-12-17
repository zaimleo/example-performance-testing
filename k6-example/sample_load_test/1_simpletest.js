import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let result =  http.get('http://test.k6.io');
}