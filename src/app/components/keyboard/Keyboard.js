import { observer } from "mobx-react-lite";
import './Keyboard.css';
import viselica from "../../store/viselica";
import { useEffect } from "react";
import { Icon } from '@iconify/react';

const Keyboard = observer(() => {

    useEffect(() => {
        const onKeypress = (event) => {
            if(viselica.gameStatus === 'game') {
                viselica.handleClick(event.key);
            }
        }
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
    }, []);

    return (
        <div className="keyboard-wrapper">
                {viselica.alphavite.map(item => {
                    return (
                        <div 
                            onClick={() => viselica.handleClick(item.letter)} 
                            className={`letter-btn ${item.status === 0 ? 'nocorrect' : item.status === 2 ? 'correct' : 'default'}`}
                        >
                            <div className="letter_inner">
                                {item.letter.toLocaleUpperCase()}
                            </div>
                        </div>
                    )
                })}

                <div onClick={() => viselica.startGame()} className={`restart-btn`}>
                    <div className="letter-inner">
                        <Icon id='restart-icon' icon="solar:restart-linear" hFlip={true}/>
                    </div>
                </div>
        </div>
    )
})

export default Keyboard;