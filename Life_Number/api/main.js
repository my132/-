const Baseapi = require('./base.js')
const CONFIG = require('../config/main.js')
module.exports = {
  getimglingshu: (data) => {
    return Baseapi.request(CONFIG.url1, false, 'get', data)
  },
}