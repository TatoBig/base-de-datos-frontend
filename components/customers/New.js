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
  firstName: yup.string().required('Debe ingresar un nombre'),
  lastName: yup.string().required('Debe ingresar un apellido'),
  customerType: yup.string().required('Es necesario asignar un tipo de cliente')
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
