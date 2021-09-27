import { useState } from 'react'
import { postOptions, _url } from 'services/Connection'

const useCustomers = () => {
  const [customers, setCustomers] = useState([])
  const [customerTypes, setCustomerTypes] = useState([])

  const getCustomers = async () => {
    try {
      await fetch(`${_url}/customers/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setCustomers(data)
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  const getCustomerTypes = async () => {
    try {
      await fetch(`${_url}/customers/type/`)
        .then(response => response.json())
        .then(data => setCustomerTypes(data))
    } catch (e) {
      console.log(e)
    }
  }

  const newCustomer = async (data) => {
    let response
    try {
      const allowedInput = []
      for (let i = 0; i < Object.keys(data).length - 1; i++) {
        allowedInput.push(`phone${i}`)
      }
      const phones = Object.keys(Object.keys(data)
        .filter(key => allowedInput.includes(key))
        .reduce((obj, key) => {
          obj[key] = data[key]
          return obj
        }, {}))
        .map(key => data[key])
      await fetch(`${_url}/customers/`, postOptions({
        cliente: {
          nombre: data.nombres,
          apellidos: data.apellidos,
          correo: data.correo,
          direccion: data.direccion,
          detalleCliente_id: data.customerType,
          telefonos: phones.map(phone => {
            return {
              telefono: phone
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

  const newCustomerType = async (data) => {
    let response
    try {
      await fetch(`${_url}/customers/type/`, postOptions({
        detalle_cliente: {
          nombre: data.name,
          descuento: data.discount
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
    getCustomers,
    newCustomer,
    customers,
    newCustomerType,
    getCustomerTypes,
    customerTypes
  }
}

export default useCustomers
