import { Fragment } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'

const schema = yup.object().shape({
  firstName: yup.string().required('Debe ingresar un nombre'),
  lastName: yup.string().required('Debe ingresar un apellido'),
  nit: yup.string().required('Debe ingresar un NIT')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
      <Card title="Título">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/customers')}>
          <Input
            error={errors.name}
            control={control}
            label="Nombre"
            name="name"
          />
          <Input
            error={errors.cost}
            control={control}
            label="Costo"
            name="cost"
          />
          <Input
            error={errors.price}
            control={control}
            label="Precio"
            name="price"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
