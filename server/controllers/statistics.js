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
