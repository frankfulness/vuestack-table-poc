<script>
import { createTable, getCoreRowModel } from "@tanstack/vue-table";
import { computed } from "vue";

export default {
  name: "DataTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // Simpler table configuration without pagination or sorting for now
    const table = createTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      // TODO: Removed for now
      // getSortedRowModel: getSortedRowModel(),
      // getPaginationRowModel: getPaginationRowModel(),
    });

    const rows = computed(() =>
      table.getRowModel().rows.map((row) => row.original)
    );

    return {
      table,
      rows,
      columns: props.columns,
    };
  },
};
</script>

<template>
  <div class="table-wrapper">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.id" class="table-header">
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="row.id"
          :class="rowIndex % 2 === 0 ? 'row-even' : 'row-odd'"
          class="table-row"
        >
          <td v-for="column in columns" :key="column.id" class="table-cell">
            {{ row[column.accessorKey] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.table-header {
  background-color: #f1f5f9;
  color: #334155;
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #e2e8f0;
}

.table-cell {
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
}

.row-even {
  background-color: white;
}

.row-odd {
  background-color: #f8fafc;
}

.table-row:hover {
  background-color: #f0f9ff;
}
</style>
