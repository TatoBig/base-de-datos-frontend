import { useState } from 'react'
import { postOptions, _url } from 'services/Connection'

const useProviders = () => {
  const [providers, setProviders] = useState([])

  const getProviders = async () => {
    try {
      await fetch(`${_url}/providers/`)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setProviders(data)
          }
        })
    } catch (e) {
      console.log(e)
    }
  }

  const newProvider = async (data) => {
    let response
    try {
      await fetch(`${_url}/providers/`, postOptions({
        proveedor: {
          nombres: data.nombres,
          apellidos: data.apellidos,
          direccion: data.direccion,
          correo: data.correo
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
    newProvider,
    getProviders,
    providers
  }
}

export default useProviders
