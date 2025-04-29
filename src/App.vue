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
  <div class="max-w-4xl mx-auto p-6 bg-background">
    <h1 class="text-3xl mb-8 font-bold text-custom-navy">
      Vue 3, TailwindCSS, & Tanstack Table v8
    </h1>

    <div class="p-6 bg-card rounded-lg border border-border shadow-md">
      <DataTable :data="data" :columns="columns" />
    </div>
  </div>
</template>
