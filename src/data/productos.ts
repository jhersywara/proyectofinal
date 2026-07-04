export interface Producto {
  id: number
  nombre: string
  precio: number
  stock: number
  vendidos: number
  imagen: string
}

export interface ProductoCarrito extends Producto {
  cantidad: number
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Nike Air Max',
    precio: 350,
    stock: 15,
    vendidos: 12,
    imagen: '/productos/nike.jpg'
  },
  {
    id: 2,
    nombre: 'Adidas Predator',
    precio: 420,
    stock: 8,
    vendidos: 6,
    imagen: '/productos/adidas.jpg'
  },
  {
    id: 3,
    nombre: 'Polera Puma',
    precio: 180,
    stock: 20,
    vendidos: 18,
    imagen: '/productos/puma.jpg'
  },
  {
    id: 4,
    nombre: 'Short Under Armour',
    precio: 140,
    stock: 25,
    vendidos: 10,
    imagen: '/productos/underarmour.jpg'
  },
  {
    id: 5,
    nombre: 'Guantes Gym',
    precio: 90,
    stock: 40,
    vendidos: 25,
    imagen: '/productos/guantes.jpg'
  }
]