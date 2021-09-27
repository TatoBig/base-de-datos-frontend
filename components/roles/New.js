import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'

const schema = yup.object().shape({
  name: yup.string().required('Debe ingresar un nombre'),
  lastname: yup.string().required('Debe ingresar un apellido'),
  direction: yup.string().required('Debe ingresar una direccion'),
  email: yup.string().required('Debe ingresar un correo electronico'),
  position: yup.string().required('Debe ingresar una posicion')
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
      <Card title="Nuevo Rol">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/roles')} disableButton={disabledButton}>
          <Input
            error={errors.name}
            control={control}
            label="Nombre"
            name="name"
          />
          <Input
            error={errors.pass}
            control={control}
            label="Apellido"
            lastname="lastname"
          />
          <Input
            error={errors.direction}
            control={control}
            label="Direccion"
            direction="direction"
          />
          <Input
            error={errors.email}
            control={control}
            label="Correo"
            email="email"
          />
          <Input
            error={errors.position}
            control={control}
            label="Posicion"
            position="position"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
