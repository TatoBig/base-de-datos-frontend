import { Fragment } from 'react'

import { useForm } from 'react-hook-form'
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
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <Input
            error={errors.firstName}
            control={control}
            label="Nombre"
            name="firstName"
          />
          <Input
            error={errors.lastName}
            control={control}
            label="Apellido"
            name="lastName"
          />
          <Input
            error={errors.nit}
            control={control}
            label="NIT"
            name="nit"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
