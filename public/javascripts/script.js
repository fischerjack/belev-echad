

//Form selector
$(document).on('change', '.volunteerFormSelector', function() {
  let target = $(this).data('target');
  let show = $('option:selected', this).data('show');
  $(target).addClass('d-none');
  $(show).removeClass('d-none');
});

//On load, unhide default form
$(document).ready(() => {
    $('.volunteerFormSelector').trigger('change');
    $('[data-toggle="modal"][title]').tooltip();
});


