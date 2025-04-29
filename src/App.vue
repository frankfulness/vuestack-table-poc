<script>
import { ref } from "vue";
import DataTable from "./components/DataTable.vue";

export default {
  name: "App",
  components: {
    DataTable,
  },
  setup() {
    const columns = [
      {
        header: "Name",
        accessorKey: "name",
        id: "name",
      },
      {
        header: "Age",
        accessorKey: "age",
        id: "age",
      },
      {
        header: "Status",
        accessorKey: "status",
        id: "status",
      },
      {
        header: "Role",
        accessorKey: "role",
        id: "role",
      },
    ];

    const data = ref([
      {
        id: 1,
        name: "John Doe",
        age: 28,
        status: "Active",
        role: "Developer",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 32,
        status: "Inactive",
        role: "Designer",
      },
      {
        id: 3,
        name: "Bob Johnson",
        age: 45,
        status: "Active",
        role: "Manager",
      },
      {
        id: 4,
        name: "Alice Brown",
        age: 24,
        status: "Active",
        role: "Developer",
      },
      {
        id: 5,
        name: "Charlie Wilson",
        age: 37,
        status: "Inactive",
        role: "Designer",
      },
    ]);

    return {
      columns,
      data,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Vue3 with Tanstack Table v8 PoC</h1>
    <div class="table-container">
      <DataTable :data="data" :columns="columns" />
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  color: #0369a1;
  font-size: 24px;
}

.table-container {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
