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
});
