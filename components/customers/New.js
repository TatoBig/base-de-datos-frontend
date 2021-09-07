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

// const url = 'http://localhost:8081'

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await fetch('http://localhost:8081/app/customers/')
        .then(response => response.json())
        .then(data => console.log(data))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Fragment>
      <Card title="Título">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/customers')}>
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

/*    try {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ matrix: matrix }),
        headers: { 'Content-Type': 'application/json' }
      }
      await fetch(`${url}/solution1`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setDetResult(data.result)
        })
    } catch (e) {
      console.log(e)
    }
    */
