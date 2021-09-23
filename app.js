$('DOM').ready(function () {
    console.log("Let's get ready to party with jQuery!")
});

$('img').addClass('image-center');

$('p').last().remove();

$('h1').css('font-size', Math.floor(Math.random() * 101));

$('ol').append('<li>Puppies are great!</li>');

$('aside').replaceWith("<p>I apologize for the list, it won't happen again!</p>");

$('body').on('change', 'input', function () {
    let $R = $('input').eq(0).val();
    let $G = $('input').eq(2).val();
    let $B = $('input').eq(1).val();
    $('body').css('background-color', 'rgb(' + $R + ',' + $G + ',' + $B + ')');
})

$('img').on('click', function () {
    $(this).remove()
})

