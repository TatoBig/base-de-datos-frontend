import { useState } from 'react'

const url = 'http://localhost:8081/app/customers/'

const useCustomers = () => {
  const [customers, setCustomers] = useState([])

  const getCustomers = async () => {
    try {
      await fetch(url)
        .then(response => response.json())
        .then(data => setCustomers(data))
    } catch (e) {
      console.log(e)
    }
  }

  const newCustomer = async (data) => {
    let response
    try {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          nit: data.nit,
          createdAt: '2020-10-10'
        }),
        headers: { 'Content-Type': 'application/json' }
      }
      await fetch(url, requestOptions)
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
    customers
  }
}

export default useCustomers
