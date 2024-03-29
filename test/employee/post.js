process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const requrest = require('supertest');

const app = require('../../app');
const conn = require('../../db');
let user = "user-test" + Math.round(Math.random(100));
let password = Date.now();


describe('POST /employees', () => {
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

    it('OK, creating new employees works', (done) => {
        requrest(app).post('/employees')
            .send({ username: user, password: password, role: 'employee' })
            .then((res) => {
                const { body } = res;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('username');
                expect(body).to.contain.property('password');
                expect(body).to.contain.property('role');
                done();
            })
            .catch(err => done(err))
    })
})
