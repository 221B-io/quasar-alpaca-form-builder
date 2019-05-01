/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */


module.exports = function (api) {
    api.extendWebpack((cfg, { isClient, isServer }) => {
      cfg.resolve.alias.handlebars =
        "handlebars/dist/handlebars.min.js";
    });

    api.extendQuasarConf(conf => {


      // let requiredQuasarComponents = [
      //   'QStepper',
      //   'QStep',
      //   'QTabs',
      //   'QTab',
      //   'QSeparator',
      //   'QTabPanels',
      //   'QTabPanel',
      //   'QSelect',
      //   'QSpace',
      //   'QInput'
      // ]
      // conf.framework.components.push(requiredQuasarComponents)

      conf.boot.push(
        "~quasar-app-extension-alpaca-forms/src/boot/axios.js"
      );
      conf.boot.push(
        "~quasar-app-extension-alpaca-forms/src/boot/jquery.js"
      );
      conf.boot.push(
        "~quasar-app-extension-alpaca-forms/src/boot/alpaca.js"
      );
      conf.boot.push(
        "~quasar-app-extension-alpaca-forms/src/boot/alpacaBuilder.js"
      );

     
      conf.build.transpileDependencies.push(
        /quasar-app-extension-alpaca-forms[\\/]src[\\/]boot/
      );

    });
}
