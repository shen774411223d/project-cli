const pulgins = {}

pulgins.install = function(Vue, options) {
  Vue.mixin({
    methods: {
      getLS() {
        return '10086'
      }
    },
  })
}

export default pulgins