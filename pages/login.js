import { Fragment, useState } from 'react'
import Login from 'layouts/Login'
import Card from 'components/core/Card'
import Form from 'components/core/Form'
import Input from 'components/controls/Input'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { login } from 'store/login'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
import firebase from 'services/Firebase'

const schema = yup.object().shape({
  username: yup.string().required('Debe ingresar un nombre'),
  password: yup.string().required('Debe ingresar una contraseña')
})

const loginPage = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const router = useRouter()
  const dispatch = useDispatch()

  const [disabledButton, setDisabledButton] = useState(false)

  const onSubmit = (data) => {
    setDisabledButton(true)
    const auth = getAuth()
    signInWithEmailAndPassword(auth, data.username, data.password)
      .then((userCredential) => {
        dispatch(login({
          status: true,
          username: userCredential?.user?.email
        }))
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code)
        console.log(error.message)
      })
    setDisabledButton(false)
  }

  return (
    <Fragment>
      <Card title="Ingresar - Proyecto Base De Datos 2">
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit} disableButton={disabledButton}>
          <Input
            error={errors.username}
            control={control}
            label="Nombre de usuario"
            name="username"
          />
          <Input
            error={errors.password}
            control={control}
            label="Contraseña"
            name="password"
            type="password"
          />
        </Form>
      </Card>
    </Fragment>
  )
}

loginPage.layout = Login

export default loginPage
