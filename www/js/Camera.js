let Picture = function () {
    let init = function() {
// trekken van foto
        $('#make').on('click',
        function takePicture() {
            navigator.camera.getPicture(cameraSuccess,cameraError,
                {
                    quality: 70,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    destinationType: Camera.DestinationType.FILE_URI,
                    saveToPhotoAlbum: true
                });
        });
        //tonen van foto
        let cameraSuccess = function(imageData){
            let foto = $('#photo')[0];
            foto.style.display = 'block';
            foto.src = imageData;
        };
        // error bericht
        let cameraError = function(message){
            alert('Failed: ' + message);
        };
        // ophalen gallerij
    $("#select").on('click',
    function uploadPicture() {
        navigator.camera.getPicture(onSucces, onFail,
            {
                quality: 30,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                destinationType: Camera.DestinationType.FILE_URI
            });
        });
            // tonen foto
        let onSucces = function(imageURI) {
            let foto = $('#photo')[0];
            foto.src = imageURI;
        };
         // error bericht
        let onFail = function(message) {
            alert('Failed: ' + message);
        };

    };

    return {
        init: init
    };
}();
