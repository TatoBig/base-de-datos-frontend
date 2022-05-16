import { Fragment, useEffect, useState } from 'react'

import useCustomers from 'hooks/useCustomers'

import Table from 'components/core/Table'
import { Box, Button, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import ArrowBack from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    flexDirection: 'row-reverse'
  }
})

const List = () => {
  const { getCustomers, customers } = useCustomers()

  const classes = useStyles()
  const [page, setPage] = useState(0)

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
    getCustomers(page)
  }, [page])

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
            nit: row.nit,
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
      <Box className={classes.pagination}>
        <IconButton disabled={customers.length !== 10} onClick={() => setPage(page + 1)}>
          <ArrowForward />
        </IconButton>
        <IconButton disabled={page === 0} onClick={() => setPage(page - 1)}>
          <ArrowBack />
        </IconButton>
      </Box>
    </Fragment>
  )
}

export default List
