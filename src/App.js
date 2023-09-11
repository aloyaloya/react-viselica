import './App.css';
import { observer } from "mobx-react-lite";
import Display from './app/components/display/Display';
import Keyboard from './app/components/keyboard/Keyboard';
import { useEffect } from 'react';
import viselica from './app/store/viselica';
import Gamestarter from './app/components/gamestarter/Gamestarter';

const App = observer(() => {
    // useEffect(() => {
    //   viselica.startGame();
    // }, []);

    return (
      <div className='app-container'>
        <Gamestarter/>
        <Display/>
        <Keyboard/>
      </div>
    )
})

export default App;