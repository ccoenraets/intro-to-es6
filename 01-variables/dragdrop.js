var gallery = document.getElementById("gallery");

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {

    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';

    var files = event.dataTransfer.files;

    for (var i=0; i<files.length; i=i+1) {
        var file = files[i];
        if (file.type.match(/(image.*)/)) {
            var reader = new FileReader();
            reader.onloadend = function() {
                console.log(gallery.innerHTML);
                gallery.innerHTML = gallery.innerHTML +
                    "<img src='" + reader.result +"'/>";
            };
            reader.readAsDataURL(file);
        }
    }

}