import { defineStore } from 'pinia'
import { productos, type Producto, type ProductoCarrito } from '../data/productos'

export const useTiendaStore = defineStore('tienda', {
  state: () => ({
    productos: productos as Producto[],
    carrito: JSON.parse(
      localStorage.getItem('carrito') || '[]'
    ) as ProductoCarrito[]
  }),

  getters: {
    cantidadCarrito: (state): number => {
      return state.carrito.reduce(
        (total: number, producto: ProductoCarrito) => total + producto.cantidad,
        0
      )
    },

    totalCarrito: (state): number => {
      return state.carrito.reduce(
        (total: number, producto: ProductoCarrito) =>
          total + producto.precio * producto.cantidad,
        0
      )
    },

productoMasVendido: (state): Producto | undefined => {
  return [...state.productos].sort(
    (a: Producto, b: Producto) => b.vendidos - a.vendidos
  )[0]
},

    ingresosTotales: (state): number => {
      return state.productos.reduce(
        (total: number, producto: Producto) =>
          total + producto.precio * producto.vendidos,
        0
      )
    }
  },

  actions: {
    guardar() {
      localStorage.setItem(
        'carrito',
        JSON.stringify(this.carrito)
      )
    },

    agregarCarrito(producto: Producto) {
      const existe = this.carrito.find(
        (p: ProductoCarrito) => p.id === producto.id
      )

      if (existe) {
        if (existe.cantidad < existe.stock) {
          existe.cantidad++
        }
      } else {
        this.carrito.push({
          ...producto,
          cantidad: 1
        })
      }

      this.guardar()
    },

    aumentar(id: number) {
      const producto = this.carrito.find(
        (p: ProductoCarrito) => p.id === id
      )

      if (producto && producto.cantidad < producto.stock) {
        producto.cantidad++
      }

      this.guardar()
    },

    disminuir(id: number) {
      const producto = this.carrito.find(
        (p: ProductoCarrito) => p.id === id
      )

      if (!producto) return

      if (producto.cantidad > 1) {
        producto.cantidad--
      } else {
        this.eliminarCarrito(id)
      }

      this.guardar()
    },

    eliminarCarrito(id: number) {
      this.carrito = this.carrito.filter(
        (p: ProductoCarrito) => p.id !== id
      )

      this.guardar()
    },

    vaciarCarrito() {
      this.carrito = []

      this.guardar()
    },

finalizarCompra() {

  this.carrito.forEach(item => {

    const producto = this.productos.find(
      p => p.id === item.id
    )

    if (producto) {

      producto.vendidos += item.cantidad

      producto.stock -= item.cantidad

    }

  })

  this.carrito = []

  this.guardar()

}
    
  }
})