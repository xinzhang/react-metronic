// if (jQuery().datepicker) { 
    $('.date-picker').datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: true,
        format: "dd/mm/yyyy",
    })
    .change(function() {
        let event = document.createEvent("HTMLEvents");
        event.initEvent("dateChange", true, true);

        $('#dateInput')[0].dispatchEvent(event);
    });

    
    //$('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
// }
