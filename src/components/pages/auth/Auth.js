//GLOBAL 
import { Row, Col } from 'antd';


//MODULES
import MainSlider from '../../mainSlider/MainSlider';
import Authform from '../../authform/Authform';


//STYLES
import '../../../styles/global.scss';
import './Auth.scss';



const Auth = () => {
    return(
        <div className="auth">
            <div className="container">
                <Row justify='center' align='middle'>


                    <Col span={12}>
                        <MainSlider/>
                    </Col>
                
                    <Col align='middle' span={12}>
                        <Authform/>
                    </Col>

                    
                </Row>
            </div>
        </div>
    )
}

export default Auth;