<template>
  <div>
    <!-- <CustomInput v-model="msg" @click.native="test" /> -->
    <CustomInput v-model="msg" @test="parentTest" @click.native="test" />
  </div>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    test() {
      console.log("click test");
    },
    parentTest(content) {
      console.log(this, "content: " + content);
    },
  },
  components: {
    CustomInput,
  },
};
</script>