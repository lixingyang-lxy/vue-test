<template>
  <div class="v-table">
    <h3>{{ title }}</h3>
    <table class="table" border="1" >
      <thead>
        <tr>
          <th
            v-for="(column, index) in tableTools.columns"
            :key="index + 'tableTools'"
            @click="sort($event, column.key)"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rows, index) in tableData" :key="index + 'rows'">
          <td v-for="(row, index) in rows" :key="index + 'row'">{{ row }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "v-table",
  props: {
    // 表头数据
    tableTools: {
      type: Object,
      default() {
        return {};
      },
      required: true
    },
    // 表格数据
    tableData: {
      type: Array,
      default() {
        return [];
      },
      required: true
    }
  },
  methods: {
    sort(e, key) {
      let tb = this.tableData.concat([])
      this.$nextTick(() => {
        console.log(tb.sort((a, b)=>{
          return a[key] < b[key]
        }))
      })
    }
  },
  data() {
    return {
      title: "a Table Component",
    };
  },
  mounted() {
    console.log(this.tableData + "tableTools")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

.table td,
.table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: center;
  vertical-align: bottom;
}

.table td {
  background-color: transparent;
}

.table > tbody > tr:nth-child(2n + 1) td {
  background-color: #f2f2f2;
}
</style>
