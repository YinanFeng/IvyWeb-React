import { connect } from 'react-redux';
import Root from '../components/root/Root';
import { chooseTab } from '../reducer/TabReducer';

const mapStateToProps = (state) => ({
    currentTab: state.TabSelected,
})

const mapDispatchToProps = dispatch => ({
    onTabClicked: id => dispatch(chooseTab(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);