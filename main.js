$(document).ready(function(){

  $('.gameboard td').each( function () {
    $(this).html('<br />');
  });

    $('[data-toggle="tooltip"]').tooltip();

  console.log('hi');

  //  $("#newgame").click(function(){
  //    console.log('new game');
  //  });

  var squarearray = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
  var win = 0;

  function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
    };
  }

  document.getElementById("wincount").innerHTML = win;

  // var chooser = randomNoRepeats(squarearray);
  // var psquare = chooser();
  // var rc2 = chooser();
  // var rc3 = chooser();
  // var rc4 = chooser();
  // var rc5 = chooser();
  //
  // var pigsquare = "#tc" + psquare;
  // var fsquare = "#tc" + rc2;
  // var f2square = "#tc" + rc3;
  // var f3square = "#tc" + rc4;
  // var icsquare = "#tc" + rc5;
  //
  // var pig = $('<span class="glyphicon glyphicon-piggy-bank" aria-hidden="true">');
  // var fire = $('<span class="glyphicon glyphicon-fire" aria-hidden="true">');
  // var fire2 = $('<span class="glyphicon glyphicon-fire" aria-hidden="true">');
  // var fire3 = $('<span class="glyphicon glyphicon-fire" aria-hidden="true">');
  // var icecream = $('<span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true">');
  //
  // $(fsquare).html(fire);
  // $(f2square).html(fire2);
  // $(f3square).html(fire3);
  // $(icsquare).html(icecream);
  // $(pigsquare).html(pig);

  function newboard() {

    $('.gameboard td').each( function () {
      $(this).html('<br />');
    });

      var chooser = randomNoRepeats(squarearray);
      var psquare = chooser();
      var rc2 = chooser();
      var rc3 = chooser();
      var rc4 = chooser();
      var rc5 = chooser();

      var pigsquare = "#tc" + psquare;
      var fsquare = "#tc" + rc2;
      var f2square = "#tc" + rc3;
      var f3square = "#tc" + rc4;
      var icsquare = "#tc" + rc5;

      var pig = $('<span class="glyphicon glyphicon-piggy-bank" aria-hidden="true">');
      var fire = $('<span class="glyphicon glyphicon-fire fire1" aria-hidden="true">');
      var fire2 = $('<span class="glyphicon glyphicon-fire fire2" aria-hidden="true">');
      var fire3 = $('<span class="glyphicon glyphicon-fire fire3" aria-hidden="true">');
      var icecream = $('<span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true">');

      $(fsquare).html(fire);
      $(f2square).html(fire2);
      $(f3square).html(fire3);
      $(icsquare).html(icecream);
      $(pigsquare).html(pig);
}


  var pig = $('<span class="glyphicon glyphicon-piggy-bank" aria-hidden="true">');
  var fire = $('<span class="glyphicon glyphicon-fire fire1" aria-hidden="true">');
  var fire2 = $('<span class="glyphicon glyphicon-fire fire2" aria-hidden="true">');
  var fire3 = $('<span class="glyphicon glyphicon-fire fire3" aria-hidden="true">');
  var icecream = $('<span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true">');



    // newboard();

    // $("#" + pigspot).html('hi');
    // console.log("pig: " + $("#" + pigspot).splice(-2));
    // console.log("pig: " + totalpig);
    // console.log("fire1: " + totalfire1);
    // console.log("fire2: " + totalfire2);
    // console.log("fire3: " + totalfire3);
    // console.log("icecream: " + totalicecream);

  function winner() {
    win = Number(win + 1);
    movessofar = 0;
    // var currentwins = $("#scorebar").css("width").charAt(2);
    // var newwins = (currentwins + 2) + "%";
    // console.log(newwins);
    // $("#scorebar").css("width", newwins);
    document.getElementById("wincount").innerHTML = win;

    // var currentwinbar = $('.progress-bar-success').css('width');
    // var currentwinbarnum = Number(currentwinbar + 10);
    // $('.progress-bar-success').css('width', currentwinbarnum + "%");
    // if (Number(currentwinbar) < 50) {
    //   $('.progress-bar-success').css('width', "40%");
    // } else {
    //   var currentwinbarnum = Number(currentwinbar);
    //   var winbarsec = Number(100/currentwinbarnum);
    //   currentwinbarnum = Number(currentwinbarnum + winbarsec);
    //   $('.progress-bar-success').css('width', currentwinbarnum);
    // }

    // var highscore = document.getElementById("totalwins").innerHTML;
    // var bardivs = Number(100/highscore);
    // var highscore = Number((document.getElementById("totalwins").innerHTML) + bardivs);
    // $('#totalwins').html(highscore);
    // $(fsquare).html('<br />');
    // $(f2square).html('<br />');
    // $(f3square).html('<br />');
    // $(icsquare).html('<br />');
    // $(pigsquare).html('<br />');
    // var psquare = 0;
    // var rc2 = 0;
    // var rc3 = 0;
    // var rc4 = 0;
    // var rc5 = 0;
    // var pigsquare = "#tc" + psquare;
    // var fsquare = "#tc" + rc2;
    // var f2square = "#tc" + rc3;
    // var f3square = "#tc" + rc4;
    // var icsquare = "#tc" + rc5;

    newboard();
  }

  var highscores = 1;
  var newgameposs = true;
  var newboardposs = false;
  var piececol = false;
  var movessofar = 0;

  function starttimer() {
    var timeremain = 0;
    var timer = setInterval(function(){
      timeremain = Number(timeremain + 5);
      $('.progress-bar-danger').css('width', timeremain + "%");
    }, 1000);
    setTimeout(function(){
      clearInterval(timer);
      if ((Number(document.getElementById("wincount").innerHTML)) > (Number(document.getElementById("totalwins").innerHTML))) {
        document.getElementById("totalwins").innerHTML = Number(win);
      }
      document.getElementById("wincount").innerHTML = win;
      highscores = 1;
      movessofar = 0;
      win = 0;
      $('#highscoresMODAL').modal();
      $('.progress-bar-danger').css('width', "100%");
      $('.progress-bar-success').css('width', "0%");
      newgameposs = true;
      newboardposs = false;
      highscores = 1;
      movessofar = 0;
      $('.gameboard td').each( function () {
        $(this).html('<br />');
      });
    }, 20000);
  }



  $(document).keydown(function(e) {
    if (highscores == 0) {

      movessofar = movessofar + 10;

    var fire1spot = $('.fire1').parent().attr('id');
    var firstfire1char = fire1spot.charAt(2);
    var secondfire2char = fire1spot.charAt(3);
    var totalfire1 = Number(firstfire1char + secondfire2char);
    var fire2spot = $('.fire2').parent().attr('id');
    var firstfire2char = fire2spot.charAt(2);
    var secondfire2char = fire2spot.charAt(3);
    var totalfire2 = Number(firstfire2char + secondfire2char);
    var fire3spot = $('.fire3').parent().attr('id');
    var firstfire3char = fire3spot.charAt(2);
    var secondfire3char = fire3spot.charAt(3);
    var totalfire3 = Number(firstfire3char + secondfire3char);
    var icecreamspot = $('.glyphicon-ice-lolly-tasted').parent().attr('id');
    var firsticecreamchar = icecreamspot.charAt(2);
    var secondicecreamchar = icecreamspot.charAt(3);
    var totalicecream = Number(firsticecreamchar + secondicecreamchar);
    var pigspot = $('.glyphicon-piggy-bank').parent().attr('id'); //gets the td element holdiong the pig
    var firstpigchar = pigspot.charAt(2);
    var secondpigchar = pigspot.charAt(3);
    var totalpig = Number(firstpigchar + secondpigchar);


    // console.log(e.keyCode);
    if (e.keyCode == 38) { //UP
      if (totalpig <= 5) {
        console.log('cant move');
        movessofar = movessofar - 10;
      } else if ((totalpig - 5) == totalfire1 || (totalpig - 5) == totalfire2 || (totalpig - 5) == totalfire3) {
        newboard();
      } else if ((totalpig - 5) == totalicecream) {
        winner();
      } else if (((totalpig - 5) <= 25) && ((totalpig - 5) >= 1)) {
        if (totalpig < 10) {
          // $("#tc0" + totalpig).fadeOut();
          $("#tc0" + totalpig).html('<br />');
        } else {
          // $("#tc0" + totalpig).fadeOut();
          $("#tc" + totalpig).html('<br />');
        }
        totalpig = totalpig - 5;
        console.log(totalpig);
        if (totalpig < 10) {
          $("#tc0" + totalpig).html(pig);
        } else {
          $("#tc" + totalpig).html(pig);
        }
      }
  } else if (e.keyCode == 40) { //DOWN
    if (totalpig > 20) {
      console.log('cant move');
      movessofar = movessofar - 10;
    } else if ((totalpig + 5) == totalfire1 || (totalpig + 5) == totalfire2 || (totalpig + 5) == totalfire3) {
      newboard();
    } else if ((totalpig + 5) == totalicecream) {
      winner();
    } else if (((totalpig + 5) <= 25) && ((totalpig + 5) >= 1)) {
      if (totalpig < 10) {
        $("#tc0" + totalpig).html('<br />');
      } else {
        $("#tc" + totalpig).html('<br />');
      }
      totalpig = totalpig + 5;
      console.log(totalpig);
      if (totalpig < 10) {
        $("#tc0" + totalpig).html(pig);
      } else {
        $("#tc" + totalpig).html(pig);
      }
    }
  } else if (e.keyCode == 37) { //LEFT
    if (totalpig%5 == 1) {
      console.log('cant move');
      movessofar = movessofar - 10;
    } else if ((totalpig - 1) == totalfire1 || (totalpig - 1) == totalfire2 || (totalpig - 1) == totalfire3) {
      newboard();
    } else if ((totalpig - 1) == totalicecream) {
      winner();
    } else {// if (((totalpig%5 - 1) <= 25) && ((totalpig%5 - 1) >= 1)) {
      if (totalpig < 10) {
        $("#tc0" + totalpig).html('<br />');
      } else {
        $("#tc" + totalpig).html('<br />');
      }
      totalpig = totalpig - 1;
      console.log(totalpig);
      if (totalpig < 10) {
        $("#tc0" + totalpig).html(pig);
      } else {
        $("#tc" + totalpig).html(pig);
      }
    }
  } else if (e.keyCode == 39) { //RIGHT
    if (totalpig%5 == 0) {
      console.log('cant move');
      movessofar = movessofar - 10;
    } else if ((totalpig + 1) == totalfire1 || (totalpig + 1) == totalfire2 || (totalpig + 1) == totalfire3) {
      newboard();
    } else if ((totalpig + 1) == totalicecream) {
      winner();
    } else {//if (((totalpig%5) <= 25) && ((totalpig%5) >= 1)) {
      if (totalpig < 10) {
        $("#tc0" + totalpig).html('<br />');
      } else {
        $("#tc" + totalpig).html('<br />');
      }
      totalpig = totalpig + 1;
      console.log(totalpig);
      if (totalpig < 10) {
        $("#tc0" + totalpig).html(pig);
      } else {
        $("#tc" + totalpig).html(pig);
      }
    }
  }
  }
});

  // var rc2 = squarearray[Math.floor(Math.random()*squarearray.length)];

  // console.log(rc);

  // $('.gameboard td').each(function () {
  //   this.html('asdf');
  // });

  // $("td:contains('<span class='glyphicon glyphicon-fire' aria-hidden='true'>')").css('color', 'white');

  window.setInterval(function(){
    if (newgameposs == false) {
      $('.btn-danger').prop('disabled', true);
    } else {
      $('.btn-danger').prop('disabled', false);
    }
  }, 100);

  window.setInterval(function(){
    var totalwinsnum = Number(document.getElementById("totalwins").innerHTML);
    var wincountnum = Number(document.getElementById("wincount").innerHTML);
    var chunkpiece = Number(100/totalwinsnum);
    var currentbarlength = Number(wincountnum * chunkpiece);
    $('.progress-bar-success').css('width', currentbarlength + "%");
    if (Number(document.getElementById("scorebar").style.width.nodeValue) >= 100) {
      $('.progress-bar-success').css('width', "100%");
    }
  }, 100);

  window.setInterval(function(){
    if (newboardposs == false) {
      $('.btn-warning').prop('disabled', true);
    } else {
      $('.btn-warning').prop('disabled', false);
    }
  }, 100);

  window.setInterval(function(){
    $('.progress-bar-warning').css('width', movessofar + "%");
    if (movessofar >= 100) {
      newboard();
      movessofar = 0;
    }
  }, 100);

  window.setInterval(function(){
    if (piececol == true) {
      $('.glyphicon-piggy-bank').css("color","pink");
      $('.glyphicon-ice-lolly-tasted').css("color","brown");
      $('.glyphicon-fire').css("color","orange");
    } else {
      $('.glyphicon-piggy-bank').css("color","black");
      $('.glyphicon-ice-lolly-tasted').css("color","black");
      $('.glyphicon-fire').css("color","black");
    }
  }, 100);

  $('#newgameMODAL button:last').click(function() {
    highscores = 0;
    newgameposs = false;
    newboardposs = true;
    document.getElementById("wincount").innerHTML = "0";
    newboard();
    starttimer();
  });

  $('#newboardMODAL button:last').click(function() {

    if ($('.glyphicon-piggy-bank').parent().attr('id')) {
      newboard();
      console.log('if');
    } else {
      console.log('else');
      newboard();
      starttimer();
      document.getElementById("wincount").innerHTML = "0";
      highscores = 0;
      newgameposs = false;
    }
  });

  $('#highscoresMODAL button').click(function() {
  });

  $('#piececolor').click(function() {
    if (piececol == false) {
      document.getElementById("piececolor").innerHTML = "Black";
      piececol = true;
      // $('.btn-danger').prop('disabled', true);
    } else {
      document.getElementById("piececolor").innerHTML = "Colorful";
      piececol = false;
      // $('.btn-danger').prop('disabled', false);
    }
  });

  // $('#fliphighscores').click(function() {
  //   if (newgameposs == false) {
  //     newgameposs = true;
  //     console.log(newgameposs);
  //   } else {
  //     newgameposs = false;
  //     console.log(newgameposs);
  //   }
  // });

});
