



document.getElementById('imageInput').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();
    
    reader.onload = function(event) {
        document.getElementById('previewImage').src = event.target.result;
    };
    
    reader.readAsDataURL(file);
});


document.getElementById('nextButton').addEventListener('click', function() {
    console.log('Next button clicked');
    // Add any additional actions you want to perform when the button is clicked
});
