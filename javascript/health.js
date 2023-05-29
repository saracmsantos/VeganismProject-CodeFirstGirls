<script>
        function changeImage(imageUrl, textContent) {
        var imageContainer = document.getElementById("image-container");
        var col4Text = document.getElementById("col4-text");
        imageContainer.style.backgroundImage = "url('" + imageUrl + "')";
        col4Text.textContent = textContent;
        }
    </script>