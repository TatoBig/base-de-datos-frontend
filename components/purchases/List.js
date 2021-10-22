import { Fragment, useEffect } from 'react'

import Table from 'components/core/Table'
import usePurchases from 'hooks/usePurchases'
import { Button, Tooltip, Typography } from '@material-ui/core'

const List = () => {
  const { getPurchases, purchases } = usePurchases()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'user', name: 'Autorizado por' },
    { id: 'provider', name: 'Proveedor' },
    { id: 'total', name: 'Total' },
    { id: 'products', name: 'Productos comprados' }
  ]

  useEffect(() => {
    getPurchases()
  }, [])

  useEffect(() => {
    console.log(purchases)
  }, [purchases])

  return (
    <Fragment>
      <Table
        headers={headers}
        rows={purchases.map(row => {
          return {
            id: row.id,
            user: row.usuario?.nombreUsuario,
            provider: `${row.proveedores?.nombres} ${row.proveedores?.apellidos ?? ''}`,
            total: `Q ${row.total}.00`,
            products:
              <Tooltip title={
                row.detalleCompraList?.map((detalle, index) => (
                  <Fragment key={index}>
                    <Typography variant="subtitle2" align="center">Producto: {detalle.inventario?.nombreProducto}</Typography>
                    <Typography variant="subtitle2" align="center">Cantidad: {detalle.cantidad}</Typography>
                    <Typography variant="subtitle2" align="center">Precio individual: Q {detalle.precio}.00</Typography>
                    <Typography variant="subtitle2" align="center">Total: Q {detalle.precio * detalle.cantidad}.00</Typography>
                    <Typography variant="subtitle2" align="center">--------------------------</Typography>
                  </Fragment>
                ))
              } interactive>
                <Button>{row.detalleCompraList?.length}</Button>
              </Tooltip>
          }
        })}
      />
    </Fragment>
  )
}

export default List
