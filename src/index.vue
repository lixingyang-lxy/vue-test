<template>
  <div>
    <v-table
      :tableTools="tableTools"
      :tableData="tableData"
      />
  </div>
</template>

<script>
import VTable from './components/v-table'

export default {
  data() {
    return {
      tableTools: this.$assistData.tableTools,
      tableData: this.$assistData.tableData
    }
  },
  components: {
    VTable
  },
  methods: {
    sort(e, key) {
      console.log(e, key)
    }
  }
}
</script>
