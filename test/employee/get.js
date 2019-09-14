process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const requrest = require('supertest');

const app = require('../../app');
const conn = require('../../db');

describe('GET /employees', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch(err => done(err));
    })

    after((done) => {
        conn.close()
            .then(() => done())
            .catch(err => done(err));
    })

    it('OK, get all employees', (done) => {
        requrest(app).get('/employees')
            .then((res) => {
                done();
            })
            .catch(err => done(err))
    })
})
