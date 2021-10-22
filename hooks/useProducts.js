import { useState } from 'react'
import { postOptions, _url } from 'services/Connection'

const useProducts = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      await fetch(`${_url}/inventario/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setProducts(data)
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  const newProduct = async (data) => {
    let response
    try {
      await fetch(`${_url}/inventario/`, postOptions({
        inventario: {
          nombreProducto: data.nombreProducto,
          cantidad: data.cantidad,
          precio: data.precio
        }
      }))
        .then(response => response.json())
        .then(result => {
          console.log(result)
          response = 'success'
        })
    } catch (e) {
      console.log(e)
      response = 'error'
    }
    return response
  }

  return {
    newProduct,
    getProducts,
    products
  }
}

export default useProducts
