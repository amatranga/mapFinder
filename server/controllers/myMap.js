const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Map.fetchAll()
    .then(maps => {
      res.status(200).send(maps);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
