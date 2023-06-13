const phones = require('../data/phones.json');


module.exports.list = (req, res, next) => { res.json(phone) }

module.exports.detail = (req, res, next) => {
  const phoneId = parseInt(req.params.id)
  const phoneDetail = phones.find((phone) => phone.id === phoneId)
  res.json(phoneDetail)
}