//Function to calculate result
function result() {
    $('#display').val((eval($('#display').val())))
}

$('.ac').click(() => {
    $('#display').val('')
})

$('.main-buttons').click((e) => {
    $('#display').val($('#display').val() + e.target.value)
    console.log(e.target.value)
})

//Function to allow Enter/Return key to calculate result
$(document).keydown(function (event) {
    if (event.key === 'Enter') {
        result()
    }
});

//Function to prevent Enter/Return key to keep pressing button
let btnClick = false;

$(document).keydown(function (event) {
    if (event.key === 'Enter' && !btnClick) {
        btnClick = true;
        event.preventDefault();
    }
});

$(document).keyup(function (event) {
    if (event.key === 'Enter') {
        btnClick = false;
    }
});
