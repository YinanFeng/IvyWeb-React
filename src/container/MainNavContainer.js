import { connect } from 'react-redux';
import WelcomePage from "../components/welcomePage/WelcomePage";
import { chooseNav } from "../reducer/TabReducer"

const mapStateToProps = (state) => ({
    currentNav: state.NavSelect,
});

const mapDispatchToProps = (dispatch) => ({
    onNavChoose: nav => dispatch(chooseNav(nav)),
});

export default connect(mapStateToProps,mapDispatchToProps)(WelcomePage);