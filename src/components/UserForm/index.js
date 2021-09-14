import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='email'
        {...email}
      />
      <input
        type='password'
        placeholder='password'
        {...password}
      />
      <button>send</button>
    </form>
  )
}
