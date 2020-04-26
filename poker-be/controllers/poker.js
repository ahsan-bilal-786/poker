var { Session, SessionType, Pollings } = require("../models");

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

const savePoll = (req, res, next) => {
  const { userName, poll } = req.body;
  const { sessionId } = req.params;
  const where = {
    userName,
    sessionId,
  };
  return Pollings.findOne({ where })
    .then((inst) => {
      if (inst) {
        return inst.update({ poll });
      } else {
        return Pollings.create({ userName, poll, sessionId });
      }
    })
    .then((resp) => {
      return res.json(resp);
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
  getSessionByUuid,
};
