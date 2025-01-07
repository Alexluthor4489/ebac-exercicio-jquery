$(document).ready(function () {
    $('#formulario').on('submit', function (e) {
        e.preventDefault();

        let tarefa = $('#inputList').val();

        if (tarefa.trim() !== '') {
        
            $('#list').append(`<li>${tarefa}</li>`);

            $('#inputList').val('');
        }
    });

    $('#list').on('click', 'li', function () {
        $(this).toggleClass('itemList');
    });
});
