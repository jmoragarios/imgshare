$('#post-comment').hide();

$('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
});

$('#bnt-like').click(function (e) {
    e.preventDefault();
    const imgId = $(this).data('id');
    
    $.post('/images/'+ imgId + '/like')
    .done(data => {
        $('.likes-count').text(data.likes);
    });
});

$('#btn-delete').click(function (e){
    e.preventDefault();
    let $this = $(this);
    const response = confirm('Are you sure you want to delete this image?');
    if (response){
        let imgId = $this.data('id');
        $.ajax({
            url: '/images/'+imgId,
            type: 'DELETE'
        }).done(function (result){
            $this.removeClass('btn-danger').addClass('btn-success');
            var i = $this.find('i').removeClass('fa-times').addClass('fa-check');
            $this.text("");
            $this.append(i).append("Deleted");
            toastr.options.timeOut = 3000;
            toastr.options.fadeOut = 500;
            toastr.options.fadeIn = 500;
            toastr.options.positionClass = 'toast-top-right';
            toastr['success']('Image Deleted!');

        })
        
    }
});

function Toast(type, css, msg) {
    this.type = type;
    this.css = css;
    this.msg = 'This is positioned in the ' + msg + '. You can also style the icon any way you like.';
}