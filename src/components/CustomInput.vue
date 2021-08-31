<template>
  <div>
    <input type="text" :value="value" @input="test" />
    <!-- <input type="checkbox" :checked="checked" @change="test" /> -->
    <!-- <input type="button" value="click" /> -->
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    test(e) {
      this.$emit("input", e.target.value);
    },
  },
  // props: ["checked"],
  // model: {
  //   props: "checked",
  //   event: "change",
  // },
  // methods: {
  //   test(e) {
  //     this.$emit("change", e.target.checked);
  //   },
  // },
};
</script>