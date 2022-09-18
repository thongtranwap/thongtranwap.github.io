$(document).ready(() => {
  $("#loading").hide();

  var progressTimer;
  $(document)
    .ajaxStart(function () {
      $("#loading").show();
      clearTimeout(progressTimer);
    })
    .ajaxStop(function () {
      progressTimer = setTimeout(function () {
        $("#loading").hide();
      }, 1000);
    });

  $("#load").on("click", function () {
    $.ajax({
      url: "BootLoader",
      type: "GET",
      success: loadBoot,
      error: ajaxFail,
    });
  });

  function loadBoot(data) {
    let element = "<img src='" + data + "' alt='Loading...' />";

    $("#boot").html(element);
  }

  function ajaxFail(path) {
    console.log("failed");
  }
});
