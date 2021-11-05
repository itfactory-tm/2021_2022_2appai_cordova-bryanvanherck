let Stored = function () {

    let _game = ["wedstrijden"];

    let _setLocalStorage = function(){
        localStorage.setItem('Wedstrijd & score ', JSON.stringify(_game));  // localStorage.setItem('key', 'value')
        _gameList();
    };

    let _gameList = function(){
        $('.collection').empty();    // li-tags in collection verwijderen

        for(let i = 0; i < _game.length; i++) {
            let item = `<li class="collection-item avatar"> 
			<i class="material-icons circle red deleteTask" data-task="${i}">delete_forever</i>
			<div class="title" data-task="${i}" contenteditable>${_game[i]}</div>
			</li>`;
            $('ul.collection').append(item);
        }
    };

    let init = function(){
        let game_str = localStorage.getItem('Wedstrijd & score ');
        if (game_str !== null) {
            _game = [];   //array legen
            _game = JSON.parse(game_str);
        }
        _gameList();
    };

    // / Tekst aan de array toevoegen
    let addgame = function(){
        _game.push(`Wedstrijd & score ${_game.length}`);  
        _setLocalStorage();
    };

    // Splicen uit de array
    let deletegame = function(id){
        if(confirm('Deze wedstrijd wissen?')) {
            _game.splice(id, 1);   
            _setLocalStorage();
        }
    };

    let editgame = function(id, game){
        _game[id] = game;
        _setLocalStorage();
    };

    return {
        init: init,
        addgame: addgame,
        deletegame : deletegame,
        editgame : editgame
    };

}();