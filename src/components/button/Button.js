


import authService from '../../services/authService';

import './Button.scss';

const Button = (props) => {

    const {classList, icon, text} = props;
    
    return(
        <button className={'button ' + classList}>
            <div className="button__text">Регистрация</div>
        </button>
    )
}


export default Button;