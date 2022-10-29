import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import * as chaiHttp from 'chai-http';

import { app } from '../app';
import { Response } from 'superagent';
import * as jwt from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';
import { modelLogin, validLogin, invalidLogin, token, userModel } from './mocks/login.mock';

chai.use(chaiHttp); 

const { expect } = chai;

describe('Tests the Login Route', () => {

 describe('when accessing the /login/validate route with a token', () => {

  afterEach(() => {
    sinon.restore();
  })
    it('if is a invalid token: should return a status of 401', async () => {
        const httpResponse = await chai
          .request(app).get('/login/validate').set({WrongAuthorization: 'tokenErrado'});
    
        expect(httpResponse.status).to.equal(401);
        // expect(httpResponse.body).to.deep.equal({ message: "Token must be a valid token" });
      })
    
      it('if is a valid token: should return a status of 200', async () => {
        sinon.stub(jwt, 'sign').returns(token as any);
        const response = await chai.request(app).post('/login').send(validLogin);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.key('token');
        expect(response.body).to.deep.equal({token: token});
      });
    
      it('if is a verified token: should return a status of 200', async () => {
        sinon.stub(jwt, 'verify').returns(userModel as any);
        const response = await chai.request(app).get('/login/validate').set({Authorization: token});

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({role: 'admin'});
      });
    })

  describe('when some fields is missing', () => {

    it('email: should return a status of 400', async () => {
      const httpResponse = await chai.request(app).post('/login').send({
        password: validLogin.password,
      })

      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ "message": "All fields must be filled" })
    })

    it('password: should return a status of 400', async () => {
        const httpResponse = await chai.request(app).post('/login').send({
        email: validLogin.email,
      })

      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ "message": "All fields must be filled" })
    })
  });

  describe('when any field is invalid', () => {
    afterEach(() => sinon.restore());
    
    it('email: should return a status of 401', async () => {
      sinon
      .stub(UserModel, 'findOne')
      .onFirstCall().resolves(null)
      .onSecondCall().resolves(modelLogin as UserModel);

      const httpResponse = await chai.request(app)
      .post('/login').send({ email: invalidLogin.email, password: validLogin.password });

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });

    })

    it('password: should return a status of 401', async () => {
      sinon
      .stub(UserModel, 'findOne')
      .onFirstCall().resolves(null)
      .onSecondCall().resolves(modelLogin as UserModel);

      const httpResponse = await chai.request(app)
      .post('/login').send({ email: validLogin.email, password: invalidLogin.password });

      expect(httpResponse.status).to.be.equal(401);
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' });

    })
  })
  
  // describe('when the request is complete and all fields are valid', () => {
      //   afterEach(() => sinon.restore());
    
      //   it('should return a status of 200 and a token', async () => {
      //     sinon
      //     .stub(UserModel, 'findOne')
      //     .onFirstCall().resolves(null)
      //     .onSecondCall().resolves(modelLogin as UserModel);
    
      //   const httpResponse = await chai.request(app)
      //     .post('/login').send(validLogin);
    
      //   expect(httpResponse.status).to.be.equal(200);
      //   expect(httpResponse.body).to.haveOwnProperty('token');
    
      // });    
      // });
    });