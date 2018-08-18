$(function () {
    var $this = $('div.nav-left');

    $this.find('.nav-left-button.nav-dropdown').hover(function () {
        $('.dropdown-menu.nav-dropdown').show();
    }, function () {
        $('.dropdown-menu.nav-dropdown').hide();
    });
});