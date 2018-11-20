import React from 'react';
import { connect } from 'dva';
import {
    Row,
    Col,
    Table,
    Form,
    Modal,
    Select,
    DatePicker,
} from 'antd';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            visible: false,
        }
    }

    componentDidMount() {
    }
    
   
    openModal = () => {
        this.setState({
            visible: true
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        
        return <div>
            <div >
                <Row style={{ marginTop: '15px' }}>
                    <Col span="3" className="common-title">
                        物料名称：
                    </Col>
                    <Col span="3" className="common-title">
                        部门：
                    </Col>
                    
                    <Col span="3" className="common-title" onClick= {this.openModal}>
                        日期：
                    </Col>
                    
                </Row>
                <div style={{ paddingTop: '24px' }}>
                    
                </div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {

    const {  } = state.home;

    return {
       
    }
}

export default connect(mapStateToProps)(Form.create({})(home));