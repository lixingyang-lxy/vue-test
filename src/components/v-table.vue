<template>
  <div class="v-table">
    <h3>{{ title }}</h3>
    <table class="table" border="1">
      <thead>
        <tr>
          <th
            v-for="(column, index) in tableToolscp.columns"
            :key="index + 'tableTools'"
            @click="sort($event, column.key)"
            :colspan="column.colspan"
            :rowspan="column.rowspan"
          >
            {{ column.label }}
            <template v-if="column.children">
              <th
                v-for="(columnChildren, index) in column.children"
                :key="index"
                :colspan="columnChildren.colspan"
                :rowspan="columnChildren.rowspan"
              >
                {{ columnChildren.label }}
              </th>
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rows, index) in tableDatacp" :key="index + 'rows'">
          <td
            v-for="(row, index) in rows"
            :key="index + 'row'"
            :rowspan="row.rowspan"
            v-text="!row.rowspan ? row : ''"
          ></td>
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
      required: true,
    },
    // 表格数据
    tableData: {
      type: Array,
      default() {
        return [];
      },
      required: true,
    },
    customMerge: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      title: "a Table Component",
      flag: true,
      tableToolscp: JSON.parse(JSON.stringify(this.tableTools)),
      tableDatacp: this.tableData.concat([]),
    };
  },
  created() {
    this.tableToolscp.columns.forEach((e, index) => {});
  },
  methods: {
    compareValue(arr, row) {},
    sort(e, key) {
      let tb = this.tableData.concat([]);
      this.flag = !this.flag;
      this.$nextTick(() => {
        tb.sort((a, b) => {
          return this.flag
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key]);
          // return a[key].charCodeAt() < b[key].charCodeAt();
        });
        this.tableDatacp = tb;
      });
    },
    getTargetElement(element, list) {
      Array.isArray(list) &&
        list.forEach((li, index) => {
          return element === li ? index : -1;
        });
    },
  },
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

.table tr:hover {
  background-color: #e0e0e0;
}

.table > tbody > tr:not(:last-child) {
  border-bottom: 1px solid #cbcbcb;
}
</style>
