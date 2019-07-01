$(document).ready(function(){
    console.log('testing??');
    $('#add-burger').on('submit', function(event){
        event.preventDefault();
        console.log($(this));
        let burger = $("#add-burger [name='burger']").val();
        let eaten = false;
        $.ajax({
            url: '/',
            data: {
                burger,
                eaten: false
            },
            type: 'POST'
        }).done(function(response){
            console.log(response);
            location.reload();
        });
    });
    $(document).on('click','.devour',function(){
        console.log('devour it');
        let burgerId = $(this).data.id;
        $.ajax({
            url: '/',
            type: 'PUT',
            data: {id, update: {eaten: true}}
        }).done(function(response){
            console.log(response);
            location.reload();
        });
    });
});