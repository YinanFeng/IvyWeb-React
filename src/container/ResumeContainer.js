import { connect } from 'react-redux';
import ResumePage from '../components/resumePage/ResumePage';
import { chooseTab } from '../reducer/TabReducer';

const mapStateToProps = (state) => ({
    currentTab: state.TabSelected,
})

const mapDispatchToProps = dispatch => ({
    onTabClicked: id => dispatch(chooseTab(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResumePage);