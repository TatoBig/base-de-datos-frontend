import { Fragment } from 'react'
import styles from 'styles/Home.module.css'

const Login = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.container}>
        {children}
      </div>
    </Fragment>
  )
}

export default Login
