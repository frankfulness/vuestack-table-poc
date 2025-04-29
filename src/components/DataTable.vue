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
    const table = createTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
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
  <div class="table-container">
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
          :class="[
            rowIndex % 2 === 0 ? 'bg-white' : 'bg-muted',
            'hover:bg-hover transition-colors duration-200',
          ]"
        >
          <td v-for="column in columns" :key="column.id" class="table-cell">
            <span
              v-if="column.accessorKey === 'status'"
              :class="
                row[column.accessorKey] === 'Active'
                  ? 'status-active'
                  : 'status-inactive'
              "
            >
              {{ row[column.accessorKey] }}
            </span>
            <span v-else>
              {{ row[column.accessorKey] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
