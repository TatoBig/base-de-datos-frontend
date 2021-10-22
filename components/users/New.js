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
  pass: yup.string().required('Debe ingresar una contraseña')
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
      <Card title="Nuevo usuario">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/users')} disableButton={disabledButton}>
          <Input
            error={errors.name}
            control={control}
            label="Nombre"
            name="name"
          />
          <Input
            error={errors.pass}
            control={control}
            label="Contraseña"
            name="pass"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
