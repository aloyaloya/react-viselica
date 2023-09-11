import { makeAutoObservable } from "mobx";

class viselica {
    alphavite = [{letter:'а', status: 1}, {letter:'б', status: 1}, {letter: 'в', status: 1}, {letter: 'г', status: 1}, 
    {letter: 'д', status: 1}, {letter: 'е', status: 1}, {letter: 'ё', status: 1}, {letter: 'ж', status: 1}, 
    {letter: 'з', status: 1}, {letter: 'и', status: 1}, {letter: 'й', status: 1}, {letter: 'к', status: 1}, 
    {letter: 'л', status: 1}, {letter: 'м', status: 1}, {letter: 'н', status: 1}, {letter: 'о', status: 1}, 
    {letter: 'п', status: 1}, {letter: 'р', status: 1}, {letter: 'с', status: 1}, {letter: 'т', status: 1}, 
    {letter: 'у', status: 1}, {letter: 'ф', status: 1},  {letter: 'х', status: 1}, {letter: 'ц', status: 1},
    {letter: 'ч', status: 1}, {letter: 'ш', status: 1}, {letter: 'щ', status: 1}, {letter: 'ъ', status: 1}, 
    {letter: 'ы', status: 1}, {letter: 'ь', status: 1}, {letter: 'э', status: 1}, {letter: 'ю', status: 1}, 
    {letter: 'я', status: 1}]
    dictionary = ['антракт', 'сторожок', 'награбление', 'ихтиозавр', 'редкостность', 'выбрызгивание', 'полуколония', 'взвевание', 'фалда', 'сейнер', 'шлир', 'астрометрия', 'обводчик', 'лелеяние', 'расклёшивание', 'заслушание', 'метеоролог', 'пасс', 'радужина', 'завком', 'раскалённость', 'татуировщик', 'тачечник', 'непробиваемость', 'забурник', 'препаровка', 'скорм', 'неудача', 'необходимое', 'политипажня', 'босниец', 'размотка', 'улюлюкание', 'стригун', 'пропажа', 'дарительница', 'сламывание', 'натр', 'меринос', 'грум', 'растяжка', 'подсмаливание', 'откачка', 'ихтиоз', 'подсевание', 'техникум', 'затворница', 'главарь', 'телепатия', 'одночлен', 'мюрид', 'отжигание', 'беспрепятственность', 'турман', 'бубна', 'истолкователь', 'реактор', 'трифоль', 'правдоискательство', 'оборотень', 'духобор', 'яйцо', 'кантор', 'ассириология', 'меланхолия', 'раскалывание', 'извратитель', 'щегловка', 'эксцентризм', 'взбивание', 'вылетание', 'посёлок', 'пудра', 'докаливание', 'кардиограмма', 'тщеславие', 'ипомея', 'умерщвление', 'оцинковка', 'тренажёр', 'прилив', 'подлесье', 'переплясывание', 'расстройство', 'девясил', 'скреперист', 'подношение', 'промерзание', 'раскрадывание', 'капитуляция', 'биатлон', 'фиброма', 'многолюдность', 'льнопрядильщица', 'взрезывание', 'подцвечивание', 'президентура', 'раскаливание', 'испуг', 'клонирование']
    randomWord = [];
    rightWord = [];
    misstakeCounter = 0;
    gameStatus = 'start';

    constructor() {
        makeAutoObservable(this);
    }

    handleClick(letter) {
        for(let elem of this.alphavite) {
            if(letter === elem.letter) {
                if(this.randomWord.includes(letter)) {
                    elem.status = 2;
                    let success = 0;

                    for(let rightLetter of this.rightWord) {
                        if(letter == rightLetter.letter) {
                            rightLetter.status = true;
                        }
                    };

                    for(let i of this.rightWord) {
                        if(i.status === true) {
                            success++;
                        }
                    }

                    if(success === this.rightWord.length) {
                        this.gameStatus = 'victory'
                    }

                } else {
                    elem.status = 0;

                    this.misstakeCounter++;

                    if(this.misstakeCounter === 7) {
                        this.gameStatus = 'defeat';
                    } 
                }
            };
        };
    }

    startGame() {
        this.randomWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)].split('');
        this.rightWord = [];
        this.misstakeCounter = 0;
        this.gameStatus = 'game';

        console.log(this.randomWord)

        if(this.randomWord.length >= 12) {
            this.startGame();
        } else {
            for(let letter of this.alphavite) {
                letter.status = 1;
            }
            
            for(let letter of this.randomWord) {
                this.rightWord.push({letter: letter, status: false});
            }
        }
    }


}

export default new viselica();