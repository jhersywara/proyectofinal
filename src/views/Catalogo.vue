<template>
  <div class="container py-5">

    <h1 class="text-center mb-4">
      Catálogo de Productos
    </h1>

    <div class="row mb-4">

      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar producto..."
          v-model="buscar"
        >
      </div>

      <div class="col-md-6">
        <select class="form-select" v-model="filtro">
          <option value="todos">Todos</option>
          <option value="disponible">Con Stock</option>
          <option value="agotado">Sin Stock</option>
        </select>
      </div>

    </div>

    <div class="row g-4">

      <div
        class="col-md-4"
        v-for="producto in productosFiltrados"
        :key="producto.id"
      >

        <div class="card h-100 shadow-lg border-0">

          <img
            :src="producto.imagen"
            class="card-img-top"
            style="height:250px;object-fit:cover"
          >

          <div class="card-body">

            <h4>{{ producto.nombre }}</h4>

            <h5 class="text-success">
              Bs {{ producto.precio }}
            </h5>

            <p>

              <span
                class="badge bg-success"
                v-if="producto.stock>0"
              >

                Stock {{ producto.stock }}

              </span>

              <span
                class="badge bg-danger"
                v-else
              >

                Agotado

              </span>

            </p>

            <button
              class="btn btn-primary w-100"
              :disabled="producto.stock==0"
              @click="agregar(producto)"
            >

              Agregar al carrito

            </button>

          </div>

        </div>

      </div>

    </div>

    <!-- Toast -->

    <div
      class="toast-container position-fixed bottom-0 end-0 p-3"
    >

      <div
        class="toast show text-bg-success"
        v-if="mostrarToast"
      >

        <div class="toast-body">

          ✔ Producto agregado correctamente

        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'
import { useTiendaStore } from '../stores/tienda'
import type { Producto } from '../data/productos'

const tienda = useTiendaStore()

const buscar = ref('')

const filtro = ref('todos')

const mostrarToast = ref(false)

const productosFiltrados = computed(() => {

  return tienda.productos.filter((p: Producto) => {

    const coincideNombre = p.nombre
      .toLowerCase()
      .includes(buscar.value.toLowerCase())

    const coincideFiltro =
      filtro.value === 'todos'
        ? true
        : filtro.value === 'disponible'
        ? p.stock > 0
        : p.stock === 0

    return coincideNombre && coincideFiltro

  })

})

function agregar(producto: Producto) {

  tienda.agregarCarrito(producto)

  mostrarToast.value = true

  setTimeout(() => {

    mostrarToast.value = false

  }, 2000)

}

</script>