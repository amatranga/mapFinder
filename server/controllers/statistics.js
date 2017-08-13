const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Statistic.fetchAll()
    .then(statistics => {
      res.status(200).send(statistics);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getById = (req, res) => {
  models.Statistic.where({ id: req.params.id }).fetch()
    .then(stat => {
      res.status(200).send(stat);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.update = (req, res) => {
  models.Statistic.where({ id: req.params.id }).fetch()
    .then(stat => {
      stat.set({
        value: req.body.value
      }).save();
      res.status(200).send(stat);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
