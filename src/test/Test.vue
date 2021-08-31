<template>
  <div>
    <CustomInput v-model='msg' @click.native="test" />
  </div>
</template>

<script>
import CustomInput from '../components/CustomInput.vue'
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    test() {
      console.log('click test')
    }
  },
  components: {
    CustomInput
  }
};
</script>