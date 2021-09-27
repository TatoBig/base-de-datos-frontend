import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'
import useProducts from 'hooks/useProducts'

const schema = yup.object().shape({
  nombreProducto: yup.string().required('Debe ingresar un nombre'),
  cantidad: yup.number().required('Debe ingresar una cantidad inicial'),
  precio: yup.number().required('Debe ingresar un precio')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { newProduct } = useProducts()

  const [disabledButton, setDisabledButton] = useState(false)

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    const response = await newProduct(data)
    if (response === 'success') {
      router.push('/products')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Crear producto">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/products')} disabledButton={disabledButton}>
          <Input
            error={errors.nombreProducto}
            control={control}
            label="Nombre"
            name="nombreProducto"
          />
          <Input
            error={errors.cantidad}
            control={control}
            label="Cantidad"
            name="cantidad"
          />
          <Input
            error={errors.precio}
            control={control}
            label="Precio"
            name="precio"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
