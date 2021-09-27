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
      await fetch(`${_url}/customers/`, postOptions({
        cliente: {
          nombre: data.firstName,
          apellidos: data.lastName,
          detalleCliente_id: data.customerType
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
