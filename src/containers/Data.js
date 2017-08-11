import { connect } from 'react-redux'; 
 
import Data from '../components/Data';

const mapStateToProps = state => {
  return {
    records: state.records
  }
}

export default connect(mapStateToProps)(Data); 