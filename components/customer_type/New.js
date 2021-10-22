import { Fragment, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from 'components/core/Card'
import Input from 'components/controls/Input'
import Form from 'components/core/Form'
import useCustomers from 'hooks/useCustomers'

const schema = yup.object().shape({
  name: yup.string().required('Debe ingresar un nombre'),
  discount: yup.number().required('Debe ingresar una cantidad')
})

const New = () => {
  const router = useRouter()
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { newCustomerType } = useCustomers()

  const [disabledButton, setDisabledButton] = useState(false)

  const onSubmit = async (data) => {
    setDisabledButton(true)
    const response = await newCustomerType(data)
    if (response === 'success') {
      router.push('/customer-type')
    }
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Título">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} onCancel={() => router.push('/customer-type')} disableButton={disabledButton}>
          <Input
            error={errors.name}
            control={control}
            label="Nombre"
            name="name"
          />
          <Input
            error={errors.discount}
            control={control}
            label="Descuento"
            name="discount"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

export default New
