import { Fragment, useEffect } from 'react'

import { useRouter } from 'next/dist/client/router'
import EditIcon from '@material-ui/icons/Edit'
import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'
import DeleteIcon from '@material-ui/icons/Delete'

const List = () => {
  const router = useRouter()

  const { getCustomers, customers } = useCustomers()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'nit', name: 'NIT', align: 'right' }
  ]

  const options = [
    { name: 'Editar', icon: <EditIcon />, action: (row) => router.push(`/customers/${row.id}/edit`) },
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
            name: `${row.firstName} ${row.lastName || ''}`,
            nit: row.nit
          }
        })}
        options={options}
      />
    </Fragment>
  )
}

export default List
