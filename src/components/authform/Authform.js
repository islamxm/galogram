import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import logoMain from '../../img/logo-main.svg';
import AuthInput from '../authInput/AuthInput';
import AuthInvite from '../authInvite/AuthInvite';
import Button from '../button/Button';
import authService from '../../services/authService';

import './Authform.scss';
import googlePlay from '../../img/google-play-badge.png';
import appleBadge from '../../img/apple-badge.svg';

//стандартный e-mail
const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

//латинские буквы нижнего регистра и цифры, не менее 6 символов
const regNickname = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/

//латинские буквы нижнего и верхнего регистра, цифры, спец. символы, не менее 8 символов
const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/;

const Authform = () => {
    const form = useRef(null);

    const service = new authService;
    
    const onPostData = (e) => {
        e.preventDefault();
        service.signIn(form.current)
    }

    return (
        <div className="authform">
            <div className="authform__inner">
                <div className="authform__item">
                    <div className="authform__item_in authform__main authform__panel">
                        <div className="authform__main_top">
                            <div className="authform__main_top_logo">
                                <img src={logoMain} alt="" />
                            </div>
                        </div>

                        <form ref={form} onSubmit={onPostData} className='authform__main_body'>
                            <div className="authform__main_item">
                                {/* инпут для email */}
                                <AuthInput 
                                    name='email' 
                                    placeholder='введите e-mail' 
                                    reg={regEmail} 
                                    type="text"
                                    required={true}/>
                            </div>
                            <div className="authform__main_item">
                                {/* инпут для никнейма */}
                                <AuthInput 
                                    name='username' 
                                    placeholder='введите никнейм' 
                                    type="text"
                                    reg={regNickname}/>

                            </div>
                            <div className="authform__main_item">
                                {/* инпут для пароля */}
                                <AuthInput 
                                    name='password'
                                    placeholder='введите пароль' 
                                    reg={regPassword} 
                                    type="password"
                                    required={true}/>
                            </div>

                            <AuthInvite/>

                            <div className="authform__action">
                                <Button classList={'button button__orange'}/>
                            </div>

                        </form>



                        


                    </div>
                </div>
                <div className="authform__item">
                    <div className="authform__item_in authform__ex authform__panel">
                        Есть аккаунт? <Link className='authform__ex_link' to='/login'>Вход</Link>
                    </div>
                </div>
                
                <div className="authform__item">
                    <div className="authform__item_in authform__download authform__panel">
                        <div className="authform__download_item">
                            <a href="#" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={googlePlay} alt="" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                            </a>
                        </div>
                        <div className="authform__download_item">
                            <a href="#" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={appleBadge} alt="" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Authform;