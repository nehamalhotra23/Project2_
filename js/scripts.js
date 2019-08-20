$(document).ready(function() {
  $("#submit").click(function() {
    var first = $("#que1").val();
    event.preventDefault();
    $(".card").hide();
    if (first === "ye") {
      $("#L5").show();
    } else if (first === "no") {
      $("#L3").show();
    } else {
      alert('Please select if you like coffee?');
    }
  });
  $("#submit").click(function() {
    var second = $("#que2").val();
    event.preventDefault();
    if (second === "hi") {
      $("#L5").show();
    } else if (second === "lo") {
      $("#L6").show();
    } else if (second === "mo") {
      $("#L4").show();
    } else {
      alert('Please select your stress level?');
    }
  });
  $("#submit").click(function() {
    var third = $("#que3").val();
    event.preventDefault();
    if (third === "es") {
      $("#L5").show();
    } else if (third === "on") {
      $("#L2").show();
    } else {
      alert('Please select if you like computers?');
    }
  });
  $("#submit").click(function() {
    var four = $("#que4").val();
    event.preventDefault();
    if (four === "Fd") {
      $("#L1").show();
    } else if (four === "hd") {
      $("L6").show();
    } else {
      alert('Please select your time prefrences?');
    }
  });
  $("#submit").click(function() {
    var five = $("#que5").val();
    event.preventDefault();
    if (five === "NW") {
      $("#L1").show();
    } else if (five === "OD") {
      $("#L5").show();
    } else {
      alert('Please select if you like to meet new people or not?');
    }
  });
  $("#submit").click(function() {
    $("#text").show();
  });
  $("#submit2").click(function() {
    var textNew = $("#exampleFormControlTextarea4").val();
    alert('Thank for providing feedback!!');
  });
});
