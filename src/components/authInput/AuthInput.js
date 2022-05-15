// REACT
import { useState } from 'react';


//EX LIBS
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';


//MODULES
import vars from '../vars/vars';

//STYLES
import './AuthInput.scss';


const modifiedErrorIcon = (
    <CloseOutlined style={{color: 'red'}}/>
)

const modifiedSuccessIcon = (
    <CheckOutlined style={{color: 'green'}}/>
)

const AuthInput = (props) => {

    //PROPS
    const {
            beforeEL,
            afterEl, 
            placeholder, 
            name, 
            reg, 
            type, 
            disabled, 
            required } = props;    

    // STATES

    // состояние для инпута
    const [inpValue, setInpValue] = useState('');
    
    //состояние для отражения были ли мы уже в инпуте или нет
    const [inpDirty, setInpDirty] = useState(false);

    //состояние ошибки
    const [inpStatus, setInpStatus] = useState(null);


    //functions

    //срабатывает тогда когда мы отводим фокус от инпута
    const onBlur = (e) => {
        setInpDirty(true);
    }

    //для того чтобы менять value у инпут и управлять через state
    const inpHandler = (e) => {
        setInpValue(e.target.value);

        if(!reg.test(String(e.target.value))) {
            setInpStatus(modifiedErrorIcon);
            // if(e.target.name === 'password') {
            //     setInpValue(e.target.value.replace(/./g, '•'))
            // }
        } else {
            setInpStatus(modifiedSuccessIcon);
        }

        
    } 

    let classList = 'authInput';

    const classListModify = () => {
        if(disabled) {
            return classList += ' disabled';
        }
        if(!disabled) {
            return classList;
        }
    }


    return( 
        <div className={classListModify()}>
            <div className="authInput__inner">
                {beforeEL ? <div className="authInput__before"></div> : null}
                <div className="authInput__main">

                    <input 
                        value={inpValue} 
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        onBlur={onBlur}
                        onChange={e => inpHandler(e)}
                        required={required}/>

                </div>
                {afterEl ? <div className="authInput__after"></div> : null}

                <div className="authInput__status">
                    {(inpDirty && inpStatus) ? inpStatus : null}
                </div>
            </div>
            
        </div>
    )
}

export default AuthInput;