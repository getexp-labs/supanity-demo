import MyComponent from '../components/MyComponent.vue'

export default ({ app }) => {
  // we globally register our component in the app
  console.log('[sn-init] start')
  app.component('MyComponent', MyComponent)
}