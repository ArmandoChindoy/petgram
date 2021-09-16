import { Button } from './styles'
import PropTypes from 'prop-types'
export const SubmitButton = ({ disable, children, onClick }) => <Button disabled={disable} onClick={onClick}>{children}</Button>

SubmitButton.propTypes = {
  disbled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
