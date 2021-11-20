$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.sidenav').sidenav();

    $('.sidenav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.sidenav').sidenav('close');
    });

    $('#addgame').click(function(){
        Stored.addgame();
    });

    $('ul').on('blur', '.home', function(){
        let id = $(this).data('task');   
        let task = $(this).html();      
        Stored.editgame(id, task);
    });

    $('ul').on('blur', '.away', function(){
        let id = $(this).data('task');   
        let task = $(this).html();      
        Stored.editaway(id, task);
    });

    $('ul').on('blur', '.result', function(){
        let id = $(this).data('task');   
        let task = $(this).html();      
        Stored.editscore(id, task);
    });

    $('ul').on('click', '.deleteTask', function(){
        console.log('taak wissen');
        let id = $(this).data('task');  
        Stored.deletegame(id);
    });
});

function onDeviceReady() {
    console.log('Device is ready');
    Picture.init();
    Data.init();
    Stored.init();
}


