const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Achievement.fetchAll()
    .then(achievements => {
      res.status(200).send(achievements);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getById = (req, res) => {
  models.Achievement.where({ id: req.params.id }).fetch()
    .then(achievement => {
      res.status(200).send(achievement);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.update = (req, res) => {
  models.Achievement.where({ id: req.params.id }).fetch()
    .then(achievement => {
      achievement.set({
        completed: req.body.completed,
        completedDate: req.body.completedDate
      }).save();
      res.status(200).send(achievement);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
