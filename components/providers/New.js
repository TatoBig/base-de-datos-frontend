import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'
import useProviders from 'hooks/useProviders'

const schema = yup.object().shape({
  nombres: yup.string().required('Debe ingresar un nombre')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { newProvider } = useProviders()

  const [disabledButton, setDisabledButton] = useState(false)

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    const response = await newProvider(data)
    if (response === 'success') {
      router.push('/providers')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Crear Proveedor">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/providers')} disableButton={disabledButton}>
          <Input
            error={errors.nombres}
            control={control}
            label="Nombre"
            name="nombres"
          />
          <Input
            error={errors.apellidos}
            control={control}
            label="Apellido"
            name="apellidos"
          />
          <Input
            error={errors.direccion}
            control={control}
            label="Dirección"
            name="direccion"
          />
          <Input
            error={errors.correo}
            control={control}
            label="Correo"
            name="correo"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
