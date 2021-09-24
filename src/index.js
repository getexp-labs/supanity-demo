/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

 function extendConf (conf) {
  // conf.boot.unshift('~quasar-app-extension-sn-ext/src/boot/sn-init.js')
  // conf.build.transpileDependencies.push(/quasar-app-extension-sn-ext[\\/]src/)
  // conf.css.push('~quasar-app-extension-my-component/src/component/MyComponent.sass')

  conf.boot.unshift('~quasar-app-extension-sn/src/boot/sn-init.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-sn[\\/]src/)
  // conf.css.push('~supanity-demo/src/component/MyComponent.sass')
}

module.exports = function (api) {
  api.extendQuasarConf(extendConf)
}
