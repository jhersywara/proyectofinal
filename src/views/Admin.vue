<template>
  <div class="container py-4">

    <h1 class="text-center mb-5">
      📊 Panel de Administración
    </h1>

    <!-- Tarjetas -->

    <div class="row g-4 mb-5">

      <div class="col-md-3">
        <div class="card text-bg-primary shadow">
          <div class="card-body text-center">
            <h5>Total Productos</h5>
            <h2>{{ tienda.productos.length }}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-success shadow">
          <div class="card-body text-center">
            <h5>Carrito</h5>
            <h2>{{ tienda.cantidadCarrito }}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-warning shadow">
          <div class="card-body text-center">
            <h5>Ingresos</h5>
            <h2>Bs {{ tienda.ingresosTotales }}</h2>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card text-bg-danger shadow">
          <div class="card-body text-center">
            <h5>Más vendido</h5>
            <h6>{{ tienda.productoMasVendido?.nombre }}</h6>
          </div>
        </div>
      </div>

    </div>

    <!-- Gráficas -->

    <div class="row">

      <div class="col-md-6">

        <div class="card shadow">

          <div class="card-header fw-bold">
            Ventas por Producto
          </div>

          <div class="card-body">
            <Bar :data="datosBarra"/>
          </div>

        </div>

      </div>

      <div class="col-md-6">

        <div class="card shadow">

          <div class="card-header fw-bold">
            Stock Disponible
          </div>

          <div class="card-body">
            <Pie :data="datosPie"/>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useTiendaStore } from '../stores/tienda'

import {
Chart as ChartJS,
Title,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale,
ArcElement
} from 'chart.js'

import { Bar, Pie } from 'vue-chartjs'

ChartJS.register(
Title,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale,
ArcElement
)

const tienda = useTiendaStore()

const datosBarra = computed(() => ({
  labels: tienda.productos.map(p => p.nombre),

  datasets: [
    {
      label: 'Productos Vendidos',
      data: tienda.productos.map(p => p.vendidos),

      backgroundColor: [
        '#0d6efd',
        '#198754',
        '#ffc107',
        '#dc3545',
        '#6f42c1'
      ],

      borderColor: [
        '#084298',
        '#146c43',
        '#ffca2c',
        '#b02a37',
        '#59359c'
      ],

      borderWidth: 2,
      borderRadius: 8
    }
  ]
}))

const datosPie = computed(() => ({
  labels: tienda.productos.map(p => p.nombre),

  datasets: [
    {
      data: tienda.productos.map(p => p.stock),

      backgroundColor: [
        '#0d6efd',
        '#198754',
        '#ffc107',
        '#dc3545',
        '#6f42c1'
      ],

      borderColor: '#ffffff',
      borderWidth: 2,
      hoverOffset: 15
    }
  ]
}))

</script>