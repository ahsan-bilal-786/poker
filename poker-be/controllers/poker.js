var { Session, SessionType } = require("../models");

const saveSession = (req, res, next) => {
  console.log(req.body);
  return Session.create(req.body)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Session.",
      });
    });
};

const getSession = (req, res, next) => {
  return Session.findByPk(req.params.id, {
    include: [{ model: SessionType }],
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Session.",
      });
    });
};

const getSessionByUuid = (req, res, next) => {
  return Session.findOne({
    where: {
      uuid: req.params.uuid,
    },
    include: [{ model: SessionType }],
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error fetching the Session by UUId.",
      });
    });
};

module.exports = {
  saveSession,
  getSession,
  getSessionByUuid,
};
