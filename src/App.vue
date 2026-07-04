<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">

<div class="container">

<router-link
class="navbar-brand fw-bold"
to="/">

🏪 SportShop

</router-link>

<button
class="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#menu">

<span class="navbar-toggler-icon"></span>

</button>

<div
class="collapse navbar-collapse"
id="menu">

<ul class="navbar-nav ms-auto">

<li class="nav-item">
<router-link class="nav-link" to="/">
Inicio
</router-link>
</li>

<li class="nav-item">
<router-link class="nav-link" to="/nosotros">
Nosotros
</router-link>
</li>

<li class="nav-item">
<router-link class="nav-link" to="/catalogo">
Catálogo
</router-link>
</li>

<li class="nav-item">

<router-link class="nav-link position-relative" to="/carrito">

🛒 Carrito

<span
class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

{{ tienda.cantidadCarrito }}

</span>

</router-link>

</li>

<li class="nav-item">
<router-link class="nav-link" to="/admin">
Dashboard
</router-link>
</li>

</ul>

</div>

</div>

</nav>

<div class="container-fluid p-0">

  <RouterView/>

</div>

<footer class="bg-dark text-white mt-5">

<div class="container py-4">

<div class="row">

<div class="col-md-4">

<h4>SportShop</h4>

<p>

La mejor tienda deportiva.

</p>

</div>

<div class="col-md-4">

<h5>Contacto</h5>

<p>

📞 77777777

</p>

<p>

✉ contacto@sportshop.com

</p>

</div>

<div class="col-md-4">

<h5>Síguenos</h5>

<i class="bi bi-facebook fs-3 me-3"></i>

<i class="bi bi-instagram fs-3 me-3"></i>

<i class="bi bi-whatsapp fs-3"></i>

</div>

</div>

<hr>

<div class="text-center">

© 2026 SportShop

</div>

</div>

</footer>

</template>

<script setup lang="ts">
import { useTiendaStore } from './stores/tienda'

const tienda = useTiendaStore()

</script>