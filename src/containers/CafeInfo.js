import { connect } from 'react-redux'; 
 
import CafeInfo from '../components/CafeInfo';
import { inputCafeName, findCafeInfo} from '../actions/CafeInfo';

const mapStateToProps = state => {
  return {
    filteredcafeInfo: state.filteredcafeInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputCafeName: (name)=> {
      dispatch(inputCafeName(name))
    },
    findCafeInfo: ()=> {
      dispatch(findCafeInfo());
    }
  }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(CafeInfo); 