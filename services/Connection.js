export const _url = 'https://proyectobddos.herokuapp.com/app/'

export const postOptions = (body) => {
  return {
    method: 'POST',
    body: JSON.stringify(
      body
    ),
    headers: { 'Content-Type': 'application/json' }
  }
}
