let Stored = function () {

    let _game = ["Thuisploeg"];

    let _away = ["Uitploeg"];

    let _score = ["Score"]

    let _setLocalStorage = function(){
        localStorage.setItem('Thuisploeg ', JSON.stringify(_game));  // localStorage.setItem('key', 'value')
        localStorage.setItem('Uitploeg ', JSON.stringify(_away));
        localStorage.setItem('Score ', JSON.stringify(_score));
        _gameList();
    };

    /* let _gameList = function(){
        $('.collection').empty();    // li-tags in collection verwijderen

        for(let i = 0; i < _game.length; i++) {
            let item = `<li class="collection-item avatar"> 
			<i class="material-icons circle teal deleteTask" data-task="${i}">remove</i>
			<div class="text" data-task="${i}" contenteditable>${_game[i]}</div>
            <div class="text" data-task="${i}" contenteditable>${_away[i]}</div>
            <div class="text" data-task="${i}" contenteditable>${_score[i]}</div>
			</li>`;
            $('ul.collection').append(item);
        }
    }; */


let _gameList = function(){
        $('.collection').empty();    // li-tags in collection verwijderen

        for(let i = 0; i < _game.length; i++) {
            let item = `<li class="collection-item avatar"> 
			<i class="material-icons circle teal deleteTask" data-task="${i}">remove</i>
            <div class = "row">
			<div class="home col s5" data-task="${i}" contenteditable>${_game[i]}</div>
            <div class="col s2 center "> VS </div>
            <div class="away col s5 center" data-task="${i}" contenteditable>${_away[i]}</div>
            <div class="result col s12 center" data-task="${i}" contenteditable>${_score[i]}</div>
            </div>
			</li>`;
            $('ul.collection').append(item);
        }
    };


    let init = function(){
        let game_str = localStorage.getItem('Thuisploeg ');
        if (game_str !== null) {
            _game = [];   //array legen
            _game = JSON.parse(game_str);
        }

        let away_str = localStorage.getItem('Uitploeg ');
        if (away_str !== null) {
            _away = [];   //array legen
            _away = JSON.parse(away_str);
        }


        let score_str = localStorage.getItem('Score ');
        if (score_str !== null) {
            _score = [];   //array legen
            _score = JSON.parse(score_str);
        }

        _gameList();
    };

    // / Tekst aan de array toevoegen
    /* let addgame = function(){
        _game.push(`Wedstrijd & score ${_game.length}`);  
        _setLocalStorage();
    }; */


    let addgame = function(){
        _game.push(`Thuisploeg`); 
        _away.push(`Uitploeg`); 
        _score.push(`Score`);
        _setLocalStorage();
    }; 

    // Splicen uit de array
    let deletegame = function(id){
        if(confirm('Deze wedstrijd wissen?')) {
            _game.splice(id, 1);   
            _away.splice(id, 1);
            _score.splice(id, 1);
            _setLocalStorage();
        }
    };

    let editgame = function(id, game){
        _game[id] = game;
        _setLocalStorage();
    };

    let editaway = function(id, Away){
        _away[id] = Away;
        _setLocalStorage();
    };

    let editscore = function(id, score){
        _score[id] = score;
        _setLocalStorage();
    };

    return {
        init: init,
        addgame: addgame,
        deletegame : deletegame,
        editgame : editgame,
        editaway : editaway,
        editscore : editscore


    };

}();