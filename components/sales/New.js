import { Fragment, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Form from 'components/core/Form'
import Select from 'components/controls/Select'
import useProducts from 'hooks/useProducts'
import useSales from 'hooks/useSales'
import useCustomers from 'hooks/useCustomers'
import ChoseProducts from 'components/core/ChoseProducts'

const schema = yup.object().shape({
  clienteId: yup.string().required('Debe asignarse un cliente')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const {
    getProducts,
    products
  } = useProducts()

  const {
    getCustomers,
    customers
  } = useCustomers()

  const {
    newSale
  } = useSales()

  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    getCustomers()
    getProducts()
  }, [])

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    const response = await newSale(data)
    if (response === 'success') {
      router.push('/sales')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Crear venta">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/sales')} disableButton={disabledButton}>
          <Select
            control={control}
            error={errors.clienteId}
            label="Cliente"
            name="clienteId"
            items={customers.map(customer => {
              return {
                text: `${customer.nombre} ${customer.apellidos || ''}`,
                value: customer.id
              }
            })}
          />
          <ChoseProducts
            control={control}
            errors={errors}
            products={products}
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
