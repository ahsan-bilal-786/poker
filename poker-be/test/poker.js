const models = require("../models");
const app = require("../app");
const faker = require("faker");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe.only("Poker!", () => {
  it("Create Session", (done) => {
    const firstName = faker.name.firstName();
    const company = faker.company.companyName();

    models.SessionType.findOne({
      where: { title: "Fibonacci" },
    }).then((session) => {
      chai
        .request(app)
        .post("/poker/")
        .send({
          title: company,
          creatorName: firstName,
          sessionTypeId: session.id,
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.creatorName).to.equals(firstName);
          expect(res.body.title).to.equals(company);
          expect(res.body.sessionTypeId).to.equals(session.id);
          done();
        });
    });
  });

  it("Fetch Session", (done) => {
    const { Session, SessionType } = models;
    const sessionType = { title: "t-shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
    };
    let sessionId = -1;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        sessionId = resp.id;
        return Session.create(session);
      })
      .then((resp) => {
        chai
          .request(app)
          .get(`/poker/${resp.id}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.creatorName).to.equals(session.creatorName);
            expect(res.body.title).to.equals(session.title);
            expect(res.body.sessionTypeId).to.equals(sessionId);
            done();
          });
      });
  });

  it("Save multiple session polls", (done) => {
    const pollData = () => {
      return {
        userName: faker.name.firstName(),
        poll: faker.random.arrayElement(["XS", "S", "M", "L", "XL"]),
      };
    };
    const sessionType = { title: "t-shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
    };
    let sessionId = -1;
    const payload = [pollData(), pollData(), pollData()];
    const pollToSession = (sessionId, data) => {
      return new Promise((resolve, reject) => {
        return chai
          .request(app)
          .post(`/poker/${sessionId}/poll`)
          .send(data)
          .then((res) => {
            return resolve(res);
          });
      });
    };

    const { Session, SessionType } = models;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        sessionId = resp.id;
        return Session.create(session);
      })
      .then((resp) => {
        return Promise.all([
          pollToSession(resp.id, payload[0]),
          pollToSession(resp.id, payload[1]),
          pollToSession(resp.id, payload[2]),
        ]);
      })
      .then((res) => {
        expect(res.length).to.equals(3);

        /**
         * Verifying the data of first session poll
         */

        expect(res[0]).to.have.status(200);
        expect(res[0].userName).to.equals(payload[0].userName);
        expect(res[0].creatorName).to.equals(payload[0].creatorName);

        /**
         * Verifying the data of Second session poll
         */

        expect(res[1]).to.have.status(200);
        expect(res[1].userName).to.equals(payload[1].userName);
        expect(res[1].creatorName).to.equals(payload[1].creatorName);

        /**
         * Verifying the data of third session poll
         */

        expect(res[2]).to.have.status(200);
        expect(res[2].userName).to.equals(payload[2].userName);
        expect(res[2].creatorName).to.equals(payload[2].creatorName);

        done();
      });
  });

  it("Fetch all session polls", (done) => {
    const pollData = () => {
      return {
        userName: faker.name.firstName(),
        poll: faker.random.arrayElement(["XS", "S", "M", "L", "XL"]),
      };
    };
    const sessionType = { title: "t-shirts" };
    let session = {
      title: faker.company.companyName(),
      creatorName: faker.name.firstName(),
    };
    let sessionId = -1;
    const payload = [pollData(), pollData(), pollData()];
    const pollToSession = (sessionId, data) =>
      Pollings.create({ ...data, sessionId });

    const { Session, SessionType, Pollings } = models;
    SessionType.findOne({
      where: sessionType,
    })
      .then((resp) => {
        session = {
          ...session,
          sessionTypeId: resp.id,
        };
        return Session.create(session);
      })
      .then((resp) => {
        sessionId = resp.id;
        return Promise.all([
          pollToSession(resp.id, payload[0]),
          pollToSession(resp.id, payload[1]),
          pollToSession(resp.id, payload[2]),
        ]);
      })
      .then((res) => {
        chai
          .request(app)
          .get(`/poker/${sessionId}/poll`)
          .end((err, res) => {
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res.body.length).to.equals(3);

            /**
             * Verifying the data of first session poll
             */

            expect(res.body[0].userName).to.equals(payload[0].userName);
            expect(res.body[0].creatorName).to.equals(payload[0].creatorName);

            /**
             * Verifying the data of Second session poll
             */

            expect(res.body[1].userName).to.equals(payload[1].userName);
            expect(res.body[1].creatorName).to.equals(payload[1].creatorName);

            /**
             * Verifying the data of third session poll
             */

            expect(res.body[2].userName).to.equals(payload[2].userName);
            expect(res.body[2].creatorName).to.equals(payload[2].creatorName);

            done();
          });
      });
  });
});
