var { Session, SessionType, Pollings } = require("../models");

const saveSession = (req, res, next) => {
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
          err.message || "Some error occurred while fetching the Session.",
      });
    });
};

const savePoll = (req, res, next) => {
  const payload = {
    userName: req.body.userName,
    poll: req.body.poll,
    sessionId: req.params.sessionId,
  };
  return Pollings.create(payload)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while saving the Poll.",
      });
    });
};

const getPolls = (req, res, next) => {
  return Pollings.findAll({
    where: {
      sessionId: req.params.sessionId,
    },
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while fetching Polls.",
      });
    });
};

const getSessionTypes = (req, res, next) => {
  return SessionType.findAll({
    attributes: ["id", "title"],
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetch Session Types.",
      });
    });
};

module.exports = {
  saveSession,
  getSession,
  savePoll,
  getPolls,
  getSessionTypes,
};
