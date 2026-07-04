<template>

<div class="container py-5">

<h1 class="mb-4">

🛒 Carrito de Compras

</h1>

<div
v-if="tienda.carrito.length==0"
class="alert alert-warning">

No existen productos en el carrito.

</div>

<table
v-else
class="table table-bordered table-hover">

<thead class="table-dark">

<tr>

<th>Producto</th>

<th>Precio</th>

<th>Cantidad</th>

<th>Subtotal</th>

<th>Acciones</th>

</tr>

</thead>

<tbody>

<tr
v-for="p in tienda.carrito"
:key="p.id">

<td>{{ p.nombre }}</td>

<td>Bs {{ p.precio }}</td>

<td>

<div class="d-flex justify-content-center align-items-center gap-2">

<button
class="btn btn-danger btn-sm"
@click="tienda.disminuir(p.id)">

-

</button>

<strong>

{{ p.cantidad }}

</strong>

<button
class="btn btn-success btn-sm"
@click="tienda.aumentar(p.id)">

+

</button>

</div>

</td>

<td>

Bs {{ p.precio*p.cantidad }}

</td>

<td>

<button
class="btn btn-outline-danger btn-sm"
@click="tienda.eliminarCarrito(p.id)">

Eliminar

</button>

</td>

</tr>

</tbody>

</table>

<div
v-if="tienda.carrito.length>0"
class="card shadow mt-4">

<div class="card-body">

<h3>

Total: Bs {{ tienda.totalCarrito }}

</h3>

<div class="mt-3 d-flex gap-3">

<button
class="btn btn-danger"
@click="vaciar">

Vaciar carrito

</button>

<button
class="btn btn-success"
@click="comprar">

Finalizar compra

</button>

</div>

</div>

</div>

</div>

</template>

<script setup lang="ts">

import { useTiendaStore } from '../stores/tienda'

const tienda=useTiendaStore()

function vaciar(){

if(confirm("¿Vaciar el carrito?")){

tienda.vaciarCarrito()

}

}

function comprar(){

if(confirm("¿Desea finalizar la compra?")){

tienda.finalizarCompra()

alert("Compra realizada correctamente.")

}

}
</script>