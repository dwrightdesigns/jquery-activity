jQuery(document).ready(function ($) {
  //hide all panels to start
  let panels = $(".inner").hide();

  //Show first panel on load
  panels.first().show();

  //On click of panel title
  $(".toggle").click(function() {
    let $this = $(this);

    //Slide up all other panels
    panels.slideUp();

    //Slide down target panel
    $this.next().slideDown();
    
    return false;
  });

});