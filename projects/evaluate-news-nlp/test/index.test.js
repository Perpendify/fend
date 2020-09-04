const request = require('supertest');
import { app } from "../src/server/index"


describe('Testing GET response of root', function () {
    it('getting /', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=UTF-8")
            .expect(200, done);
    });
});

describe('Testing GET response of sentiment', function () {
    it('getting /sentiment', function (done) {
        request(app)
            .get('/sentiment')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('Testing GET response of /test', function () {
    it('getting /test', function (done) {
        request(app)
            .get('/test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
