<script setup lang="ts">
defineProps({
  max: {
    type: Number,
    default: 1000
  }
})

const count = defineModel<number>('count', { default: 0 })

const emit = defineEmits(['on-add'])

const inc = () => {
  count.value++
  emit('on-add', count.value)
}
</script>

<template>
  <div
    class="setup"
    @click="inc"
  >
    {{ count }}
  </div>
</template>
