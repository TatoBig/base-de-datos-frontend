import { Fragment, useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'
import useCustomers from 'hooks/useCustomers'
import PhoneInputs from 'components/customers/PhoneInputs'
import Select from 'components/controls/Select'

const schema = yup.object().shape({
  nombres: yup.string().required('Debe ingresar un nombre'),
  customerType: yup.string().required('Debe asignar un tipo de cliente')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const {
    getCustomerTypes,
    customerTypes,
    newCustomer
  } = useCustomers()

  const [disabledButton, setDisabledButton] = useState(false)

  useEffect(() => {
    getCustomerTypes()
  }, [])

  useEffect(() => {
    console.log(customerTypes)
  }, [customerTypes])

  const onSubmit = async (data) => {
    setDisabledButton(true)
    console.log(data)
    const response = await newCustomer(data)
    if (response === 'success') {
      router.push('/customers')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Título">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/customers')} disableButton={disabledButton}>
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
          <Select
            control={control}
            error={errors.customerType}
            label="Tipo de cliente"
            name="customerType"
            items={customerTypes.map(type => {
              return {
                text: type.nombre,
                value: type.id
              }
            })}
          />
          <PhoneInputs
            control={control}
            errors={errors}
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
