import { Fragment, useEffect } from 'react'

import useProviders from 'hooks/useProviders'

import Table from 'components/core/Table'

const List = () => {
  const { getProviders, providers } = useProviders()

  const headers = [
    { id: 'id', name: 'Código' },
    { id: 'name', name: 'Nombre' },
    { id: 'address', name: 'Direccion' },
    { id: 'correo', name: 'Correo' }
  ]

  useEffect(() => {
    getProviders()
  }, [])

  useEffect(() => {
    console.log(providers)
  }, [providers])

  return (
    <Fragment>
      <Table
        headers={headers}
        rows={providers.map(row => {
          return {
            id: row.id,
            name: `${row.nombres} ${row.apellidos || ''}`,
            address: row.direccion || '',
            correo: row.correo || ''
          }
        })}
      />
    </Fragment>
  )
}

export default List
