import { useState } from 'react'
import { useSelector } from 'react-redux'
import { postOptions, _url } from 'services/Connection'

const useSales = () => {
  const [sales, setSales] = useState([])
  const {
    username
  } = useSelector(state => state.login)

  const getSales = async () => {
    try {
      await fetch(`${_url}/ventas/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setSales(data)
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  const newSale = async (data) => {
    let response
    const allowedInput = []
    for (let i = 0; i < Object.keys(data).length - 1; i++) {
      allowedInput.push(`input${i}`)
    }
    const products = Object.keys(data)
      .filter(key => allowedInput.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key]
        return obj
      }, {})

    const allowedQuantity = []
    for (let i = 0; i < Object.keys(data).length - 1; i++) {
      allowedQuantity.push(`quantity${i}`)
    }
    const quantities = Object.keys(Object.keys(data)
      .filter(key => allowedQuantity.includes(key))
      .reduce((obj, key) => {
        obj[key] = data[key]
        return obj
      }, {})).map(key => data[key])

    console.log(products)
    console.log(quantities)

    let total = 0
    Object.keys(products).forEach((key, index) => {
      total = (products[key].precio * quantities[index]) + total
    })

    console.log(username)

    try {
      await fetch(`${_url}/ventas/`, postOptions({
        venta: {
          usuarioId: username,
          total: total,
          yapagado: true,
          clienteId: parseInt(data.clienteId),
          detalle_venta: Object.keys(products).map((key, index) => {
            return {
              cantidad: quantities[index],
              precio: products[key].precio,
              productoId: products[key].codigoProducto
            }
          })
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
    newSale,
    getSales,
    sales
  }
}

export default useSales
