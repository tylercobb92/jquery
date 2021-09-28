

$('#submit-btn').on('click', function (e) {
    e.preventDefault();
    const movieTitle = $("input[type='text']").val();
    const movieRating = $("input[type='number'").val();

    if (movieTitle && movieRating >= 1 && movieRating <= 5) {
        $('ul').append('<li>' + movieTitle + ': ' + movieRating + '</li>');
        $('li').last().append('<button class="delete-btn">Delete</button>');
        $('.delete-btn').on('click', function () {
            this.parentElement.remove();
        });
        $('form').trigger('reset');
    }


})