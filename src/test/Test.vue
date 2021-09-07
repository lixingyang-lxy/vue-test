<template>
  <div>
    <!-- <CustomInput v-model="msg" @click.native="test" /> -->
    <CustomInput
      v-model="msg"
      @change="handleChange"
      @test="parentTest"
      @click.native="nativeClick"
    />
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
    handleChange(value) {
      console.log("emit: " + value);
    },
    parentTest(content) {
      console.log(this, "content: " + content);
    },
    nativeClick() {
      console.log("you clicked child");
    },
  },
  components: {
    CustomInput,
  },
};
</script>