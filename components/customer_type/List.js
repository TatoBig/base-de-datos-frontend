import { Fragment, useEffect } from 'react'

import { useRouter } from 'next/dist/client/router'
import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'
import DeleteIcon from '@material-ui/icons/Delete'

const List = () => {
  const router = useRouter()

  const { getCustomerTypes, customerTypes } = useCustomers()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'discount', name: 'Descuento', align: 'right' }
  ]

  const options = [
    { name: 'Borrar', icon: <DeleteIcon />, action: (row) => router.push(`/customers/${row.id}/delete`) }
  ]

  useEffect(() => {
    getCustomerTypes()
  }, [])

  useEffect(() => {
    console.log(customerTypes)
  }, [customerTypes])

  return (
    <Fragment>
      <Table
        headers={headers}
        rows={customerTypes.map(row => {
          return {
            id: row.id,
            name: row.nombre,
            discount: `Q${row.descuento}`
          }
        })}
        options={options}
      />
    </Fragment>
  )
}

export default List
