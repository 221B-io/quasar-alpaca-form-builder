import alpaca from "alpaca";

export default async ({ Vue }) => {
  Vue.prototype.$alpaca = alpaca;
};
