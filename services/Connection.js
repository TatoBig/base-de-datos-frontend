export const _url = 'http://localhost:8080/app'

export const postOptions = (body) => {
  return {
    method: 'POST',
    body: JSON.stringify(
      body
    ),
    headers: { 'Content-Type': 'application/json' }
  }
}
