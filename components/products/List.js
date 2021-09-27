import { Fragment, useEffect } from 'react'

import Table from 'components/core/Table'
import useProducts from 'hooks/useProducts'

const List = () => {
  const { getProducts, products } = useProducts()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'nombreProducto', name: 'Nombre' },
    { id: 'cantidad', name: 'Cantidad' },
    { id: 'precio', name: 'Precio' }
  ]

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <Fragment>
      <Table
        headers={headers}
        rows={products.map(row => {
          return {
            id: row.codigoProducto,
            nombreProducto: row.nombreProducto,
            cantidad: row.cantidad,
            precio: `Q ${row.precio}.00`
          }
        })}
      />
    </Fragment>
  )
}

export default List
