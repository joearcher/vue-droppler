var droppler = require('./src/Droppler.vue')
droppler.install = function(Vue, options) {
    options = options || { name: 'droppler' }
    Vue.component(options.name, droppler)
}
module.exports = droppler
