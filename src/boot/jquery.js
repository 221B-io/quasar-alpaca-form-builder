import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

export default async ({ Vue }) => {
  Vue.prototype.$jquery = jQuery;
};
