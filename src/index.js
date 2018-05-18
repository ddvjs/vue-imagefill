import Imagefill from "./lib";

export default {
  install(Vue) {
    Object.keys(Imagefill).forEach(key => {
      Vue.directive(key, Imagefill[key]);
    });
  }
};
