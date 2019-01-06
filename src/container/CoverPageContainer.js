import { connect } from 'react-redux'
import Cover from '../components/cover/Cover'
import { chooseNav } from '../reducer/TabReducer'

const mapDispatchToProps = (dispatch) => ({
  onNavChoose: nav => dispatch(chooseNav(nav))
})

export default connect(null, mapDispatchToProps)(Cover)
