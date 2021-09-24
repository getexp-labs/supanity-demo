<template>
  <h1
    class="bg-green text-black bg-red"
    style=" padding: 8px;"
    @click="onClick"
  >
    {{ state.msg }} {{ state.msgDouble }}
  </h1>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue'

const $q = useQuasar()
const state = reactive({
  msg: 'Hello, ',
  msgDouble: computed(() => {
    return `${state.msg}_${state.msg}`
  })
})
const onClick = async () => {
  console.log('onClick')
  $q.notify(state, msgDouble)
}
onMounted(() => {
  console.log('[MyComponent] onMounted')
})
</script>
