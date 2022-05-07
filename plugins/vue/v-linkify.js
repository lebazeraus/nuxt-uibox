import Vue from "vue"
import linkifyHtml from 'linkify-html'

Vue.directive('linkify', {
  bind: function(el) {
    el.innerHTML = linkifyHtml(el.innerHTML, { defaultProtocol: 'https' })
  }
})
