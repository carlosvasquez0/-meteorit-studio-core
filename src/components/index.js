// File to export all components
import Vue from 'vue'
import MeteoritTitlebar from './Chrome/TitleBar.vue'

const Components = {
  MeteoritTitlebar
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
