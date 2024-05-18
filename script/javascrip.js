document.addEventListener('DOMContentLoaded', function () {
    var viewBtns = document.querySelectorAll('.view-btn');
    var modalImg = document.getElementById('modalImg');

    viewBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var imgSrc = this.previousElementSibling.src;  // asumsikan bahwa <img> selalu tepat sebelum tombol dalam markup HTML
            modalImg.src = imgSrc;
            $('#photoModal').modal('show');
        });
    });
});
