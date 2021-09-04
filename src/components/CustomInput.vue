<template>
  <div>
    <!-- <input type="text" :value="value" @input="test" /> -->
    <input type="checkbox" :checked="checked" @change="test" />
    <!-- <input type="button" value="click" /> -->
  </div>
</template>
<script>
export default {
  // props: ["value"],
  // methods: {
  //   test(e) {
  //     debugger
  //     this.$emit("input", e.target.value);
      
  //     this.$listeners.test('i am child')
  //   }
  // },
  props: ["checked"],
  model: {
    props: "checked",
    event: "change",
  },
  methods: {
    test(e) {
      this.$emit("change", e.target.checked);
      this.$listeners.test('i am child')
    },
  },
};
</script>