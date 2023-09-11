import { observer } from "mobx-react-lite";
import './Display.css';
import viselica from "../../store/viselica";
import { Icon } from '@iconify/react';

const Display = observer(() => {
    return (
        <div className="display-wrapper">
            <div className="display_word">
                {viselica.rightWord.map(item => {
                    return (
                        <div className={`word-letter ${item.status === false ? 'hidden' : ''}`}>
                            {item.status && (
                                <div className="word-letter_inner">
                                    {item.letter.toLocaleUpperCase()}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="display_handman">
                <Icon className='handman-detail detail_show detail_1' icon="pepicons-pop:line-x" width="280" height='280' />

                <Icon className={`handman-detail detail_2 ${viselica.misstakeCounter >= 1 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-s" width="330" height='330' />
                <Icon className={`handman-detail detail_3 ${viselica.misstakeCounter >= 2 ? 'detail_show' : 'detail_hidden'}`} icon="pepicons-pop:circle-big-filled" width="120" height='120' />
                <Icon className={`handman-detail detail_4 ${viselica.misstakeCounter >= 3 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-m" width="330" height='330' />
                <Icon className={`handman-detail detail_5 ${viselica.misstakeCounter >= 4 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-m" width="330" height='330' />
                <Icon className={`handman-detail detail_6 ${viselica.misstakeCounter >= 5 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-m" width="330" height='330' />
                <Icon className={`handman-detail detail_7 ${viselica.misstakeCounter >= 6 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-m" width="330" height='330' />
                <Icon className={`handman-detail detail_8 ${viselica.misstakeCounter >= 7 ? 'detail_show' : 'detail_hidden'}`} icon="ci:line-m" width="330" height='330' />
            </div>
        </div>
    )
})

export default Display;