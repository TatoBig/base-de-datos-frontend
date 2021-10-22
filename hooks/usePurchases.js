import { useState } from 'react'
import { useSelector } from 'react-redux'
import { postOptions, _url } from 'services/Connection'

const usePurchases = () => {
  const [purchases, setPurchases] = useState([])
  const {
    username
  } = useSelector(state => state.login)

  const getPurchases = async () => {
    try {
      await fetch(`${_url}/compras/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setPurchases(data)
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  const newPurchase = async (data) => {
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

    try {
      await fetch(`${_url}/compras/`, postOptions({
        compra: {
          usuarioId: username,
          total: total,
          yapagado: true,
          proveedoresId: parseInt(data.proveedoresId),
          detalle_compra: Object.keys(products).map((key, index) => {
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
    newPurchase,
    getPurchases,
    purchases
  }
}

export default usePurchases
