document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleInputChange);
});

function handleInputChange(event) {
    var input = event.target;
    var file = input.files[0];
    console.log(file);
    debugger
    Tesseract.recognize(file).progress(function(message) {
        console.log(message);
    }).then(function(result) {
        var contentArea = document.getElementById('document-content');
        contentArea.innerHTML = result.text;
    }).catch(function(err) {
        console.error(err);
    });
}
