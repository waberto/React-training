import React, { useContext } from 'react';
import { FirebaseContext } from '../firebase'
import {
    FiHeart,
    FiX,
    FiMessageCircle,
    FiUpload,
    FiRefreshCw
} from 'react-icons/fi'
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale'
import IconContainer from './IconContainer';

const Message = () => {
    const { user } = useContext(FirebaseContext)
    return (
        <div className='message-form'>
            <div>
                <img src="https://pbs.twimg.com/profile_images/992786435970338817/go9joLCV_400x400.jpg"
                    alt="Profil"
                    className="profil-picture"
                />
            </div>
            <div className='message'>
                <header>
                    <h3>Waberi Houssein</h3>
                    <span>· {formatDistanceToNow(1589913648817, { locale: fr })}</span>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {user && (
                    <footer>
                        <IconContainer color='blue'>
                            <FiMessageCircle />
                        </IconContainer>
                        <IconContainer color='green'>
                            <FiRefreshCw />
                        </IconContainer>
                        <IconContainer color='red' count='5'>
                            <FiHeart />
                        </IconContainer>
                        <IconContainer color='blue'>
                            <FiUpload />
                        </IconContainer>
                        <IconContainer color='red'>
                            <FiX />
                        </IconContainer>
                    </footer>
                )}
            </div>
        </div>
    );
}

export default Message;