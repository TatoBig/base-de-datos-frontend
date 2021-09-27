import { Fragment, useEffect } from 'react'

import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'
import { Button, Tooltip, Typography } from '@material-ui/core'

const List = () => {
  const { getCustomers, customers } = useCustomers()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'address', name: 'Direccion' },
    { id: 'correo', name: 'Correo' },
    { id: 'type', name: 'Tipo de Cliente' },
    { id: 'phones', name: 'Teléfonos' }
  ]

  useEffect(() => {
    getCustomers()
  }, [])

  useEffect(() => {
    console.log(customers)
  }, [customers])

  return (
    <Fragment>
      <Table
        headers={headers}
        rows={customers.map(row => {
          return {
            id: row.id,
            name: `${row.nombre} ${row.apellidos || ''}`,
            address: row.direccion || '',
            correo: row.correo || '',
            type: row.detalleCliente.nombre,
            phones:
            <Tooltip title={
              row.telefonoList?.map((phone, index) => (
                <Fragment key={index}>
                  <Typography variant="subtitle2" align="center">Telefono: {phone?.numero}</Typography>
                  <Typography variant="subtitle2" align="center">--------------------------</Typography>
                </Fragment>
              ))
            } interactive>
              <Button>{row.telefonoList?.length}</Button>
            </Tooltip>
          }
        })}
      />
    </Fragment>
  )
}

export default List
