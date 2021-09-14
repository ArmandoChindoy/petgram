import { UserForm } from '../components/UserForm'
import Context from '../Context'
export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <UserForm onSubmit={activateAuth} />
        )
      }}
    </Context.Consumer>
  )
}
