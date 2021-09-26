import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'

const schema = yup.object().shape({
  nameproduct: yup.string().required('Debe ingresar un nombre'),
  amount: yup.string().required('Debe ingresar un monto'),
  price: yup.string().required('Debe ingresar un precio')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const [disabledButton, setDisabledButton] = useState(false)

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Nuevo inventario">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/inventory')} disableButton={disabledButton}>
          <Input
            error={errors.nameproduct}
            control={control}
            label="NombreProducto"
            nameproduct="nameproduct"
          />
          <Input
            error={errors.amount}
            control={control}
            label="Monto"
            monto="amount"
          />
          <Input
            error={errors.price}
            control={control}
            label="Precio"
            price="price"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
