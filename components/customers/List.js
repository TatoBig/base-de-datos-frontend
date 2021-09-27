import { Fragment, useEffect } from 'react'

import { useRouter } from 'next/dist/client/router'
import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'
import DeleteIcon from '@material-ui/icons/Delete'

const List = () => {
  const router = useRouter()

  const { getCustomers, customers } = useCustomers()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'customerType', name: 'Tipo de Cliente' }
  ]

  const options = [
    { name: 'Borrar', icon: <DeleteIcon />, action: (row) => router.push(`/customers/${row.id}/delete`) }
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
            customerType: row.detalleCliente.nombre
          }
        })}
        options={options}
      />
    </Fragment>
  )
}

export default List
