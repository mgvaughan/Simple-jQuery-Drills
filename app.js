$(document).ready(function () {

    $('input:submit').prop('disabled', true);

    $('input:text').keypress(function () {
        $('#btnSubmit').prop('disabled', false);
    })

    // $('<div>').appendTo('body');

    // $('#btnSubmit').on("click", function () {
    //     $('#btnSubmit').prop('disabled', true);
    //     let text = $('input:text').val();
    //     alert(text);
    //     $('<h2>' + text + '</h2>').appendTo('div')
    //     $('h2').hover(function (e) {
    //         $(e.target).css({
    //             'background-color': 'blue',
    //             'border-radius': '20px'
    //         })
    //     })
    //     return false;
    // })

    $('<ul></ul>').appendTo('body');

    $('#btnSubmit').on("click", function () {
        $('#btnSubmit').prop('disabled', true);
        let text = $('input:text').val();
        $('<li>' + text + '</li>').appendTo('ul')
        $('li').attr('class', 'list');
        $('li').on("click", function (e) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            $(e.target).css({ 'background-color': color })
        })
        $('li').on("dblclick", function (e) {
            $(e.target).remove()
        })
        return false;
    })

})