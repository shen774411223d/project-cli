import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

function importStore(r = require.context('../store', true, /[^(index)].js$/)) {
	const cache = {}
	r.keys().map(key => cache[key.replace(/(.*\/)*([^.]+).js/ig,"$2")] = r(key).default)
	return cache
}

export default new Vuex.Store({
  modules: importStore()
})
