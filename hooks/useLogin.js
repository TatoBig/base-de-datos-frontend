import { postOptions, _url } from 'services/Connection'

const useLogin = () => {
  const login = async (data) => {
    let response
    let username
    try {
      await fetch(`${_url}/users/login/`, postOptions({
        login: {
          username: data.username,
          password: data.password
        }
      }))
        .then(response => response.json())
        .then(result => {
          console.log(result)
          response = 'success'
          username = result.nombreUsuario
        })
    } catch (e) {
      console.log(e)
      response = 'error'
    }
    return {
      response: response,
      username: username
    }
  }

  return {
    login
  }
}

export default useLogin
