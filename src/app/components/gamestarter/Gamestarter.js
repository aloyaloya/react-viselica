import { observer } from "mobx-react-lite";
import viselica from "../../store/viselica";
import './Gamestarter.css';
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

const Gamestarter = observer(() => {

    useEffect(() => {
        const onKeypress = (event) => {
            if(viselica.gameStatus !== 'game') {
                if(event.key === 'Enter') {
                    viselica.startGame();
                }
            }
        }
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
    }, []);

    return (
    <>
        <CSSTransition
          in={viselica.gameStatus === 'start'}
          timeout={300}
          classNames="show"
          unmountOnExit
        >
            <div className='gamestarter'>
                <div className='container'>
                    <div onClick={() => viselica.startGame()} className="title btn">Начать игру</div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition
          in={viselica.gameStatus === 'defeat'}
          timeout={300}
          classNames="hidden"
          unmountOnExit
        >
            <div className='gamestarter'>
                <div className='container'>
                    <div className="title">Вы проиграли!</div>
                    <div className="secondary">Вашим словом было:</div>
                    <div className="word">"{viselica.randomWord.join('')}"</div>
                    <div onClick={() => viselica.startGame()} className="title btn">Начать заново</div>
                </div>
            </div>
        </CSSTransition>
        <CSSTransition
          in={viselica.gameStatus === 'victory'}
          timeout={300}
          classNames="hidden"
          unmountOnExit
        >
            <div className='gamestarter'>
                <div className='container'>
                    <div className="title">Вы победили!</div>
                    <div className="secondary">Вашим словом было:</div>
                    <div className="word">"{viselica.randomWord.join('')}"</div>
                    <div onClick={() => viselica.startGame()} className="title btn">Начать заново</div>
                </div>
            </div>
        </CSSTransition>
    </>
    )
})

export default Gamestarter;