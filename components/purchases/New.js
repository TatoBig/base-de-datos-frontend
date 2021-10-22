import { Fragment, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Form from 'components/core/Form'
import Select from 'components/controls/Select'
import useProducts from 'hooks/useProducts'
import useProviders from 'hooks/useProviders'
import usePurchases from 'hooks/usePurchases'
import ChoseProducts from 'components/core/ChoseProducts'

const schema = yup.object().shape({
  proveedoresId: yup.string().required('Debe asignarse un proveedor')
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
    newPurchase
  } = usePurchases()

  const {
    getProviders,
    providers
  } = useProviders()

  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    getProviders()
    getProducts()
  }, [])

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    const response = await newPurchase(data)
    if (response === 'success') {
      router.push('/purchases')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Título">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/purchases')} disableButton={disabledButton}>
          <Select
            control={control}
            error={errors.proveedoresId}
            label="Proveedor"
            name="proveedoresId"
            items={providers.map(provider => {
              return {
                text: `${provider.nombres} ${provider.apellidos || ''}`,
                value: provider.id
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
