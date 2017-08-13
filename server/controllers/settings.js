const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Setting.fetchAll()
    .then(settings => {
      res.status(200).send(setting);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getById = (req, res) => {
  models.Setting.where({ id: req.params.id }).fetch()
    .then(setting => {
      res.status(200).send(settings);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.updateById = (req, res) => {
  models.Setting.where({ id: req.params.id }).fetch()
    .then(setting => {
      setting.set({
        value: req.body.settingValue
      }).save();
    })
    .catch(err => {
      res.status(500).send(err);
    }); 
};
