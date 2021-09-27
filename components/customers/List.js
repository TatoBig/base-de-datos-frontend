import { Fragment, useEffect } from 'react'

import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'

const List = () => {
  const { getCustomers, customers } = useCustomers()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'address', name: 'Direccion' },
    { id: 'correo', name: 'Correo' },
    { id: 'type', name: 'Tipo de Cliente' }
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
            type: row.detalleCliente.nombre
          }
        })}
      />
    </Fragment>
  )
}

export default List
