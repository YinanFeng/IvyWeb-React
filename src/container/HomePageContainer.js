import { connect } from 'react-redux';
import HomePage from '../components/homePage/HomePage';
// import TabReducer from '../reducer/TabReducer';


const mapStateToProps = (state) => ({
    currentImage: state.currentImage,
    images: state.images,
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);