
$('#page-header-user-dropdown').click(function() {
    if($(this).find('i').hasClass('mdi-chevron-up')){
        $(this).find('i').removeClass('mdi-chevron-up').addClass('mdi-chevron-down');
    }else{
        $(this).find('i').removeClass('mdi-chevron-down').addClass('mdi-chevron-up');
    }

  });


  (function($) {
    'use strict';
    $(function() {
    
      if ($('#lineChart').length) {
        var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
        var data = {
             
          labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: '3M',
              backgroundColor: '#2DCCD3',

              data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
              borderColor: [
                '#2DCCD3'
              ],
           
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: "#00263F"
            },
            {   
              label: '6M',
              backgroundColor: '#2DCCD3',
              data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
              borderColor: [
                '#2DCCD3'
              ],
              borderWidth: 2,
              fill: false,
              pointBackgroundColor: "#00263F"
            },
            {
                label: '1Y',
              backgroundColor: '#2DCCD3',
              data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
                borderColor: [
                  '#2DCCD3'
                ],
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: "#00263F"
            },
            {
                label: '3Y',
                backgroundColor: '#2DCCD3',
                data: [0, 5500, 5300, 8500, 9600, 6000, 9000, 10000],
                borderColor: [
                  '#2DCCD3'
                ],
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: "#00263F"
            }
          ]
        };
        var options = {
            responsive: true,

          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
                borderDash: [3, 3]
              },
              ticks: {
                min: 0
              },
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
                color: "#ffffff"
              }
            }]
          },
          elements: {
            line: {
              tension: 0.2
            },
            point: {
              radius: 4
            }
          },
        //   stepsize: 5000,

          title: {
            display: true,
            text: 'Show the chart',
            titleColor: '#2DCCD3',
            font: {
                size: 13,
                family: 'Roboto',
                weight: 'normal',
                },
            // padding: {
            //     bottom: 10
            // }
          },
          
          legend: {
            position: 'top',
          },
          plugins:{
            display: true,
            legend: true,
            
            
           
          }
         

          
        };

        var lineChart = new Chart(lineChartCanvas, {
          type: 'line',
          data: data,
          options: options
                
            
        });
      }
      
    
    });
  })(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DROPDOWLIST WITH IMAGES OR ICONS///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
  //Coins class contains all type of currency available in hedpay portal. Available in langArray array
//   var langArray = [];
// $('.Coins option').each(function(){
//   var img = $(this).attr("data-thumbnail");
//   var text = this.innerText;
//   var value = $(this).val();
//   var item = '<li class="col-12 row justify-content-start"><div class="col-sm-1 col-2"><img src="'+ img +'" alt="" value="'+value+'" /></div><span class="H-14 col-8 col-sm-5 text-left TextDark my-0">'+ text +'</span><span class="uno H-14 col-sm-6 col-2 text-left TextDark my-0 DashInfo"></span></li>';
//   langArray.push(item);
// })
  var langArray = [];
$('.Coin option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li class="col-12 row justify-content-start '+value+'"><div class="col-sm-1 col-2 pl-1 pr-4"><img src="'+ img +'" alt="" value="'+value+'" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-14 col-8 px-0 col-sm-9 text-left TextDark my-0">'+ text +'</span></li>';
  langArray.push(item);
})


//Money class contains a few currency types: USD, GBT, EUR. Available in Array_L array
var Array_L = [];
$('.Money option').each(function(){
var img = $(this).attr("data-thumbnail");
var text = this.innerText;
var value = $(this).val();
var item = '<li class="col-12 row justify-content-start"><div class="col-sm-1 col-2 pl-1 pr-4"><img src="'+ img +'" alt="" value="'+value+'" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-14 col-8 px-0 col-sm-9 text-left TextDark my-0">'+ text +'</span></li>';
Array_L.push(item);
})

//Settings class contains a few currency types: USD, GBT, EUR. Available in Array_L array
var Array_Settings = [];
$('.Settings option').each(function(){
var img = $(this).attr("data-thumbnail");
var text = this.innerText;
var value = $(this).val();
var item = '<li class="col-12 row justify-content-start"><div class="col-sm-1 col-2 pl-1 pr-4"><img src="'+ img +'" alt="" value="'+value+'" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-14 col-8 px-0 col-sm-9 text-left TextDark my-0">'+ text +'</span></li>';
Array_Settings.push(item);
})

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'USD');


////////////////////////////CUSTOMIZED BUTTONS//////////////////////////////

$('#Fund').html(langArray);
$('#Curr').html(Array_L);
$('#Asset').html(langArray);
$('#Settl').html(langArray);

//for contacts page
$('#CurrAddress').html(langArray);
$('#CurrAddress-Button').html(langArray[0]);
$('#CurrAddress-Button').attr('value', '0');
//SETTINGS CURRENCY
$('#SettingsCurr').html(Array_Settings);
$('#SettingsCurr-Button').html(Array_Settings[0]);
$('#SettingsCurr-Button').attr('value', 'CAD');


$('#Fund-Button').html(langArray[3]);
$('#Fund-Button').attr('value', 'HDP');
$('#Curr-Button').html(Array_L[0]);
$('#Curr-Button').attr('value', 'USD');
$('#Asset-Button').html(langArray[3]);
$('#Asset-Button').attr('value', 'HDP');
$('#Settl-Button').html(langArray[3]);
$('#Settl-Button').attr('value', 'HDP');


//setting the type of currency in the input of amount in Exchange page
$('.Currency-Type').val('HDP');
$('.Currency-Type').text('HDP');
$('#Conversion-Type').text('USD');
$('.Conversion-Type').text('USD');//for Convert-Step2 in Exchange page

$("#To").attr("src","Icons/USD.svg");//for Convert-Step2 in Exchange page
$("#From").attr("src","Icons/HDP.svg");//for Convert-Step2 in Exchange page
////////////////////////////////////////////////////////////////////////////


//change button stuff on click
$('.a li').click(function(e){
  if(e.target.closest(".a")!=null){
      var id=e.target.closest(".a").id;
      var img = $(this).find('img').attr("src");
      var value = $(this).find('img').attr('value');
      var text = this.innerText;

      var item = '<li class="col-12 row justify-content-start "><div class="col-sm-1 col-2 pl-1 pr-4"><img src="'+ img +'" alt="" style="width:20px; height:14px;margin-left:0;"/></div><span class="H-14 col-8 col-sm-9 px-0 text-left TextDark my-0">'+ text +'</span></li>';

      $('#'+id+'-Button').html(item);
      $('#'+id+'-Button').attr('value', value);
      $("#"+id).parent(".b-wallet").toggle();

      ////////////CUSTOMIZED FOR SETTINGS////////////////////////////////////////
      if(id=="SettingsCurr"){
        //remove lock from older currency
        $('.S-Coin').attr('checked', false);
        $('.S-Coin').attr('disabled', false);
        $('.S-Coin').removeClass('locked')

        //set lock
        $('#'+value+'-SettCheck').addClass('locked')
        $('#'+value+'-SettCheck').attr('checked', true);
        $('#'+value+'-SettCheck').attr('disabled', true);

      }
      //////////CUSTOMIZED FOR WALLET: HIDE COIN FORM THE OPTIONS BELOW///////////
        // $(".Exch-Rates-Box").show("slow");
        // $("."+value+"-Rates").hide("slow");

        if(id=='Asset'){
          //setting the type of currency in the input of amount
          if(value=='HDP'){
            console.log(value);
            $('.Asset-Value-A').text('Hdp.ф');
            $('.Asset-Value').text('HDP - Hdp.ф');
            $('.Asset-Symbol').text('ф');
          }else{
            console.log(value);

            $('.Asset-Value').html(value);
            $('.Asset-Symbol').html("");
          }
          $(".Asset-Image").attr("src","Icons/"+value+".svg");

          
        }

        if(id=='Settl'){
          //setting the type of currency in the input of amount
          if(value=='HDP'){
            console.log(value);
            $('.Settl-Value-A').text('Hdp.ф');
            $('.Settl-Value').text('HDP - Hdp.ф');
            $('.Settl-Symbol').text('ф');
          }else{
            console.log(value);

            $('.Settl-Value').html(value);
            $('.Settl-Symbol').html("");
          }
          $(".Settl-Image").attr("src","Icons/"+value+".svg");

          
        }

      ////////////////////////////////////////////////////////////////////////////

      //////////CUSTOMIZED FOR EXCHANGED: SET THE SAME CURRENCY LETTERS WHERE IS NEEDED///////////
        if(id=='Fund'){
          //setting the type of currency in the input of amount
          $('.Currency-Type').val(value);
          $('.Currency-Type').text(value);
          $("#From").attr("src","Icons/"+value+".svg");//for Convert-Step2
        }else if(id=='Curr'){
            $('#Conversion-Type').text(value);
            $('.Conversion-Type').text(value);//for Convert-Step2
            $("#To").attr("src","Icons/"+value+".svg");//for Convert-Step2
        }
      ////////////////////////////////////////////////////////////////////////////

      }
});
// $('.a li').click(function(){
//    var img = $(this).find('img').attr("src");
//    var value = $(this).find('img').attr('value');
//    var text = this.innerText;
//    var item = '<li class="col-12 row justify-content-start "><div class="col-sm-1 col-2"><img src="'+ img +'" alt="" /></div><span class="H-14 col-8 col-sm-5 text-left TextDark my-0">'+ text +'</span><span class="H-14 col-sm-6 col-2 TextDark text-left  my-0 DashInfo"> &nbsp;1</span></li>';
//   $('.btn-select').html(item);
//   $('.btn-select').attr('value', value);
//   $(".b").toggle();



//   
   
// //   console.log(value);
// });

$(".btn-select").click(function(e){
  var id=e.target.closest(".btn-select").id;
      $("#"+id).siblings(".b-wallet").toggle();
});

// $(".btn-select").click(function(){
//         $(".b").toggle();
//     });

// //check local storage for the lang
// var sessionLang = localStorage.getItem('lang');
// if (sessionLang){
//   //find an item with value of sessionLang
//   var langIndex = langArray.indexOf(sessionLang);
//   $('.btn-select').html(langArray[langIndex]);
//   $('.btn-select').attr('value', sessionLang);
// } else {
//    var langIndex = langArray.indexOf('ch');
//   console.log(langIndex);
//   $('.btn-select').html(langArray[langIndex]);
//   //$('.btn-select').attr('value', 'en');
// }
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////ALL TABLES - ALL CHATS ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $('.Table-Hedpay').DataTable({
      "scrollX": true,
      paginate: true,
      searching: true,
      "ordering": true,
      "info": false,
      "language": {
        "paginate": {
            "previous": "<span class='Prev-Next'><i class='mdi mdi-chevron-left'></span>",
            "next": "<span class='Prev-Next'><i class='mdi mdi-chevron-right'></span>"
        }
        },
    });

    $('#Mailbox-Table').DataTable({
      "scrollX": true,
      paginate: true,
      searching: true,
      "ordering": false,
      "info": false,
      // "responsive":true,
      "language": {
        "paginate": {
            "previous": "<span class='Prev-Next'><i class='mdi mdi-chevron-left'></span>",
            "next": "<span class='Prev-Next'><i class='mdi mdi-chevron-right'></span>"
        }
        },
    });

    // $('#Mailbox-Table').children('label').append('<button type="button" class="Wallet-SearchButton "><img src="Icons/Profile/search-blue.svg" class="Wallet-SearchButton" /> </button>');
    // $('#Mailbox-Table_filter').children('label').append('<button type="button" class="Wallet-SearchButton "><img src="Icons/Profile/search-blue.svg" class="Wallet-SearchButton" /> </button>');

    $('.Table-Hedpay').children('label').append('<button type="button" class="Wallet-SearchButton "><img src="Icons/Profile/search-blue.svg" class="Wallet-SearchButton" /> </button>');
    $('.dataTables_filter').children('label').append('<button type="button" class="Wallet-SearchButton "><img src="Icons/Profile/search-blue.svg" class="Wallet-SearchButton" /> </button>');
});

function Print(){
  let text=$('.Chat-Box').val();
  let message='<div class="Chat-Messages-User p-2 position-relative my-2"><div class="Chat-User"></div><p class="H-14 TextDark mb-0">      <span class="fontW-600 TextBlue">You: </span>      <span class="Body-Text">'+ text+'</p></div>';
  $('.Chat-Body').append(message);

  $('.Chat-Box').val('');
}
$('.Chat-Header').click(function (e){
  if($('.Chat-Header').hasClass('Opened')){
    $('.Chat-Header').removeClass('Opened');

  }else{
    $('.Chat-Header').addClass('Opened');

  }
});

$('.Chat-Box').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    Print();
  }
});

// $('#Menu-DD').click(function (){
//   console.log($('.page-content').hasClass('TopSpace'));

//   if($('.page-content').hasClass('TopSpace')){
//     alert('hola');
//     $('.page-content').removeClass('TopSpace');
//   }else{
//     $('.page-content').addClass('TopSpace');
//   }
// });

function OpenMenuTop(){
  console.log($('.page-content').hasClass('TopSpace'));

  if($('.page-content').hasClass('TopSpace')){
    $('.page-content').removeClass('TopSpace');
  }else{
    $('.page-content').addClass('TopSpace');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////ALL TABLES - ALL CHATS END///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////WALLET PAGE JS://////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////WALLET BOXES CLICKED///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
let boxes = document.querySelectorAll(".WB");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', (e) => {
      boxersClicked(e);
    })

}

function boxersClicked(e) {
  var id=e.target.closest(".WB").id;
 
  if($("#"+id+">div.Wallet-Hide-ProggressBar").css('display') == 'block' ){
    
    $("#"+id+">div.Wallet-Show-ProggressBar").show("slow");
    $("#"+id+">div.Wallet-Hide-ProggressBar").hide("slow");

    $("#"+id).removeClass("Wallet-Box");
    //Wallet-Box
  }else if($("#"+id+">div.Wallet-Show-ProggressBar").css('display') == 'block' ){
    
    $(".WB >div.Wallet-Show-ProggressBar").show("slow");
    $(".WB >div.Wallet-Hide-ProggressBar").hide("slow");
    $(".WB").removeClass("Wallet-Box");

    $("#"+id+">div.Wallet-Show-ProggressBar").hide("slow");
    $("#"+id+">div.Wallet-Hide-ProggressBar").show("slow");

    $("#"+id).addClass("Wallet-Box");

    //ADD FUNDS BUTTON, THE CURRENCY WOULD BE SET IN THE DROPDOWNLIST
    //Set the button value to the first el of the array
    var d=$('#Fund').children('li.'+id);

       //FOR: WALLET PAGE / EXCHANGE PAGE //////////////////////
      $('#Fund-Button').html(d);
      $('#Fund-Button').attr('value', id);
      // $('#Fund').html(langArray);
       ///////////////EXCHANGE PAGE: setting the type of currency in the input of amount
       $('.Currency-Type').val(id);
       $('.Currency-Type').text(id);
       $("#From").attr("src","Icons/"+id+".svg");//for Convert-Step2
 
 
      }
 
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////WALLET BOXES CLICKED END///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



function VerifyCard(value){
  if(value.length<16){
      $('#CardNumber').addClass("MissingInfo");
      $('.V-Gray').show();
      $('.V-Orange').hide();
      $('.MC-Gray').show();
      $('.MC-Orange').hide();
  }else{
      $('#CardNumber').removeClass("MissingInfo");
      if(value.length==19){
          if(value[0]=='4'){
              $('.V-Gray').hide();
              $('.V-Orange').show();

              $('.MC-Gray').show();
              $('.MC-Orange').hide();
          }
      }else if(value.length==16){
          $('.MC-Gray').hide();
          $('.MC-Orange').show();

          $('.V-Gray').show();
          $('.V-Orange').hide();
      }else if(value.length>19){
          
          $('#CardNumber').val(value.slice(0,-1));
      }
  }
  console.log(value);
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////WALLET PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////EXCHANGE PAGE JS://////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////Switch /////////////////////////////////////////
function Switch(){
  var from=$('.Currency-Type').val();
  var to=$('#Conversion-Type').text();

          var selectedto=$('#Fund').children('li.'+from);//switched
          var selectedFrom=$('#Fund').children('li.'+to);//switched

  $('#Fund-Button').html(selectedFrom);
  $('#Fund-Button').attr('value', to);
  $('#Fund').html(langArray);

  $('#Curr-Button').html(selectedto);
  $('#Curr-Button').attr('value', from);
  $('#Curr').html(langArray);
  
  //FOR EXCHANGE PAGE CONVERT STEP 2 //////////////////////
  $('.Currency-Type').val(to);
  $('.Currency-Type').text(to);
  $("#From").attr("src","Icons/"+to+".svg");//for Convert-Step2


  $('.Conversion-Type').text(from);
  $('#Conversion-Type').text(from);
  $("#To").attr("src","Icons/"+from+".svg");//for Convert-Step2

}




//////////////////////////////////////////////////Switch end/////////////////////////////////////
//////////////////////////////////////////////////Convert/////////////////////////////////////

function WalletConvertion(){
  var Fund= $('#Fund-Button').val(); //button value for the type of currency
  $('.Fund-Value').html(Fund);

  var curr= $('#Curr-Button').val(); //button value for the type of currency
  $('.Curr-Value').html(curr);

}

$('#Amount-Wallet').keyup(function() {
  var amount=this.value;
  var conv= "$" + (amount*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  $('.Amount-Wallet').html(conv);

  var rate=$('.Rate-Wallet').html();
  rate=rate.replace(',','');
console.log(rate);
  conv= "$" + (amount*rate).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  $('.Convertion-Wallet').html(conv);//for Convert-Step2

});

function TransferWallet(){
  var Asset= $('#Asset-Button').val(); //button value for the type of currency
  $('.Asset-Value').html(Asset);

  var curr= $('#Curr-Button').val(); //button value for the type of currency
  $('.Curr-Value').html(curr);

}

// function Convert(){
  
//   var amount= $('#Amount').val();
//   var rate= $('#Rate-Exch').text();

//   $('#Total-Exchanged').text(amount*rate);
//   $('.Total-Exchanged').text(amount*rate);//for Convert-Step2

//   $('.Total-Converted').show("slow");

//   if($('.Convert-Button').text()=="Convert"){
//       $('.Amount').text(amount);//for Convert-Step2
//       $('.Rate-Exch').text(rate);//for Convert-Step2
     

//       GoToWallet('Convert-Step1','Convert-Step2')
//   }else{
//       $('.Convert-Button').text("Convert");

//   }
// }




//////////////////////////////////////////////////Convert end/////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////EXCHANGE PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


function GoTo(from, to){
  $('.'+from).hide();
  $('.'+to).show("slow");
}


//go up
function irArriba(){
  $('.Go-Up').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
      if($(this).scrollTop() > 0){ $('.Go-Up').slideDown(600); }else{ $('.Go-Up').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }

  irArriba();




////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////FAQ PAGE JS STARTS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

  function ShowAns(button){


    $(".Questions>div>p").hide();//listo
    $(".Questions>div>ul").hide();//listo
    $(".Questions>div>aside").hide();//listo
    
    $(".Questions>div>div>button").removeClass("ActiveButton");//listo
    $(".Questions>div>div>p").removeClass("ActiveText");//listo
    $(".Questions>div>div>ul").removeClass("ActiveText");//listo
    $(".Questions>div>div>aside").removeClass("ActiveText");//listo
    
    
    if($(button).find('i').hasClass('fa-minus')){
       $(".Questions>div>div>button").find('i').removeClass("fa-minus").addClass('fa-plus');//
    
    }else{
       $(".Questions>div>div>button").find('i').removeClass('fa-minus').addClass('fa-plus');//
       // $(".Questions>div>div>button").find('i').addClass('fa-plus');//
    
       $(button).find('i').removeClass("fa-plus").addClass('fa-minus');//
    
    
        $(button).addClass("ActiveButton");//
        $(button).siblings().addClass("ActiveText");//
        
        $(button).parent().siblings().show();//
    }
    
    
    
    }
    function Category(Cat){
    console.log(Cat);
    $('.Questions').children().show();
    
    switch(Cat){
        case 'Category':
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category)').hide();
        break;
        case 'Category1':
        //$( "#Category1" ).css('transition-delay', '0.3s');
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category1)').hide();
        //$(".Questions").children(!"div."+Cat).hide();
        break;
        case 'Category2':
        $(".Categories").children().removeClass("Active");
        $("#"+Cat).addClass("Active");
        $('.Questions > div:not(.Category2)').hide();
        break;
        case 'Category3':
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category3)').hide();
        break;
        case 'Category4':
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category4)').hide();
        break;
        case 'Category5':
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category5)').hide();
        break;
        case 'Category6':
        $(".Categories").children().removeClass("Active");
        $("#"+ Cat).addClass("Active");
        $('.Questions > div:not(.Category6)').hide();
        break;
        default:
        $(".Categories").children().removeClass("Active");
        $("#All").addClass("Active");
        $('.Questions').children().show();
        break;
    }
    // $( "p" ).removeClass( "myClass yourClass" )
    // $( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
    }
    
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////FAQ PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////PROFILE PAGE JS STARTS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


$('.profile').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 6,
  slidesToScroll: 1,
  // centerMode: true,
  responsive: [
      {
      breakpoint: 1600,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
      }
      },
      {
      breakpoint: 1400,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
      }
      },
      {
      breakpoint: 1150,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
      },
      {
      breakpoint: 993,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
      },
      {
      breakpoint: 920,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
      },
      {
      breakpoint: 712,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
      },
      {
      breakpoint: 475,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
      }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
  
  $(".slick-arrow").html("");

  // $('.Profile-Button').click(function(e){
  //     var id=e.target.id;

  //     if($(this).hasClass("Profile-Button-Active")){
  //         $(this).removeClass("Profile-Button-Active");
  //         $(this).siblings('div').removeClass("Profile-Div-Active");
  //         $(this).find('i').removeClass("fa-minus").addClass('fa-plus');
  //         if(id !=""){
  //             $('.'+ id).hide("slow");
  //         }
  //         $(this).parent("div").siblings("div").hide("slow");

  //     }else{
  //         $(this).addClass("Profile-Button-Active");
  //         $(this).siblings('div').addClass("Profile-Div-Active");
  //         $(this).find('i').removeClass("fa-plus").addClass('fa-minus');
  //         if(id !=""){
  //             $('.'+ id).show("slow");
  //         }else{
  //             $(this).parent("div").siblings("div.First-Box").show("slow");
  //         }

  //     }
      
  // });

  function OpenProfile(Buttid,Boxid){
    if($('#'+Buttid).hasClass("Profile-Button-Active")){
      $('#'+Buttid).removeClass("Profile-Button-Active");
      $('#'+Buttid).siblings('div').removeClass("Profile-Div-Active");
      $('#'+Buttid).find('i').removeClass("fa-minus").addClass('fa-plus');
      if(Boxid !=""){
          $('#'+ Boxid).hide("slow");
      }
      $('#'+Buttid).parent("div").siblings("div").hide("slow");

  }else{
      $('#'+Buttid).addClass("Profile-Button-Active");
      $('#'+Buttid).siblings('div').addClass("Profile-Div-Active");
      $('#'+Buttid).find('i').removeClass("fa-plus").addClass('fa-minus');
      if(Boxid !=""){
          $('#'+ Boxid).show("slow");
      }else{
          $('#'+Buttid).parent("div").siblings("div.First-Box").show("slow");
      }

  }
  
  }

  function CloseProfile(param){
      $('#'+param).removeClass("Profile-Button-Active");
      $('#'+param).siblings('div').removeClass("Profile-Div-Active");
      $('#'+param).find('i').removeClass("fa-minus").addClass('fa-plus');
      if(param !=""){
          $('.'+ param).hide("slow");
      }
      $('#'+param).parent("div").siblings("div").hide("slow");
  }


  $('.Password-Change-Button').click(function(e){
      $('.passwordChange').show("slow");
  });

  $('.Details').click(function(e){
      var id=e.target.id;
      var name=id.split("-");

      $('.'+id).show("slow");
      $('.'+name[1]).hide("slow");

  });
  
  $('.Avatar-Button').click(function(e){
      document.getElementById('Avatar').click();
     
  });
  $('#Avatar').change(function(e){

    var input = document.getElementById("Avatar");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = input;
        img.src = event.target.result;
        $('.Avatar-Changed').attr("src",img.src);
    }

    // var i=document.getElementById("Avatar").files[0].name;
    //   var img=$('#Avatar').val(); 
    

    //   console.log(i);
    //   if(e.files!=""){
    //       $('.Avatar-Changed').attr("src",i);
    //   }
  });

  // $('#KYC-File').change(function(e){
  //   $('.KYC-YourIdPhoto').show('slow');
  // });

  // function KYCProfile(){
  //   $('.Steps-KYC').show('slow');
    
  // }
  function ShowUpdatedKYC(){
    $('.KYC-Updated').show('slow');
    
  }

//snap picture
// const canvasElement = document.getElementById('KYC-Picture');
// const webcam = new Webcam(canvasElement, 'user');

// webcam.start()
//   .then(result =>{
//     console.log("webcam started");
//   })
//   .catch(err => {
//     console.log(err);
// });

// function Ask_Permition(){
//   let picture = webcam.snap();
//   document.querySelector('#download-photo').href = picture;
// }

function IdentityDocument(option){
  console.log(option.value);
  var doc=option.value;
  
  switch (doc){
    case 'Passport':
      $('.DocSelected').show('slow');
      $('.Img-Doc-pass').show('slow');
      $('.Img-Doc-greeg').hide('slow');
      $('.Img-Doc-citi').hide('slow');

    break;
    case 'OfficialCard':
      $('.DocSelected').show('slow');
      $('.Img-Doc-pass').hide('slow');
      $('.Img-Doc-greeg').hide('slow');
      $('.Img-Doc-citi').show('slow');
    break;
    case 'DLicense':
      $('.DocSelected').show('slow');
      $('.Img-Doc-pass').hide('slow');
      $('.Img-Doc-greeg').show('slow');
      $('.Img-Doc-citi').hide('slow');

    break;
    default:
      $('.DocSelected').hide('slow');
      $('.Img-Doc-pass').hide('slow');
      $('.Img-Doc-greeg').hide('slow');
      $('.Img-Doc-citi').hide('slow');
      break;


  }

}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////PROFILE PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CONTACTS PAGE JS STARTS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
function AddContact(){
  $('#Contact-info').show('slow');

  $('.Contact-info').hide('slow');
  $('.Contact-Button').hide('slow');

  $('.CurrencyInfo').show('slow');
  $('.BankInfo').show('slow');

  //change background
  $('.Contacts').addClass('Div-Gray-Open');


}
function setFavorites(){
  $('#Favorites-Table').children('tbody').children('tr').children('td').children('div').children('.icon-table-star').attr('checked', true); 
  $('#Saved-Table').children('tbody').children('tr').children('td').children('div').children('.icon-table-star').attr('checked', false);
}
function SendtoTable(row){
  var name=$(row).parents('table').attr('id');

  var to=$('#Saved-Table').DataTable(); //to initiate it
  var from= $('#'+name).DataTable();

  if(name=="Favorites-Table"){
    to= $('#Saved-Table').DataTable();
  }else{
    to= $('#Favorites-Table').DataTable();
  }

  var tableRow = from.row($(row).parents('td').parents('tr'));

  var r=from.rows(tableRow.index()).data();

  //add row
  to.rows.add(r).draw();

  //delete row
  from.row(tableRow).remove().draw(false);
  
  setFavorites();
}

$('#AddCurrency').on( 'click', function () {
  var t = $('#Currency-table').DataTable();
  var address= $('#Address-Currency').val();
  var coin=$('#CurrAddress-Button').val();

 if(address!='' && coin != '0'){
      t.row.add( [
        coin,
        address,
        '<a href="javascript:void(0)" onclick="Remove(this)"><span class="RedColor"><i class="fas fa-trash-alt"></i></span></a>'
    ] ).draw( false );

    //show table
    $('#Currency-table').show('slow')

     //restart fields
    $('#Address-Currency').val('');
    $('#CurrAddress').children('.' +coin).hide();
    $('#CurrAddress-Button').html('Choose currency');

 }else if(address=='') {
  Swal.fire({
    title: 'Please add an address',
    confirmButtonClass: 'btn mt-2 Btn-Blue'
  })
 }else if(coin == '0') {
  Swal.fire({
    title: 'Choose a currency',
    confirmButtonClass: 'btn mt-2 Btn-Blue'
  })
 }
  

} );


$('#AddBank').on( 'click', function () {
  var t = $('#Bank-table').DataTable();
  var bank= $('#Bank-P').val();
  var account=$('#Account-N').val();

 if(bank!='' && account != '0'){
      t.row.add( [
        bank,
        account,
        '<a href="javascript:void(0)" onclick="Remove(this)"><span class="RedColor"><i class="fas fa-trash-alt"></i></span></a>'
    ] ).draw( false );

    //show table
    $('#Bank-table').show('slow')
     //restart fields
    $('#Bank-P').val('');
    $('#Code').val('');
    $('#Routing').val('');
    $('#BankCode').val('');
    $('#Account-N').val('');

 }else {
  Swal.fire({
    title: 'Please complete the form',
    confirmButtonClass: 'btn mt-2 Btn-Blue'
  })
}
  

} );

function Remove(row){
  var t = $('.Table-Hedpay').DataTable();

  var tableRow = t.row($(row).parents('tr'));
  t.row(tableRow).remove().draw(false);
} 

function CloseDiv (element){
  $('.'+element).hide('slow');
  $('#'+element).removeClass("Profile-Button-Active");

  $('#'+element).find('i').removeClass("fa-minus").addClass('fa-plus');
} 

function OpenAccounts(e){
  if($(e).siblings('.Accounts-List-td').hasClass('Open')){
    $(e).siblings('.Accounts-List-td').children('ul').hide('slow');
    $(e).siblings('.Accounts-List-td').removeClass('Open');

  }else{
    $(e).siblings('.Accounts-List-td').children('ul').show('slow');
    $(e).siblings('.Accounts-List-td').addClass('Open');
  }

}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CONTACTS PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////FUND PACKAGES PAGE JS STARTS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

$('#Amount-Transfer').keyup(function() {
  var amount=this.value;
  var conv=  (amount*1).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  $('.Amount-Transfer').html(conv);

});



function AddStakeTable(){
  var t = $('#Stake-Table').DataTable();
  var LockDate= $('.LockDate').text();
  var ReleaseDate=$('.ReleaseDate').text();
  var EndDate=$('.EndDate').text();
  var amount=$('.Amount-Transfer').text()+ " HDP.Ф";
  var rate= $(".RS-Stake").text();

  t.row.add( [
      '<img src="Icons/HDP.svg" />',
      LockDate,
      ReleaseDate,
      EndDate,
      '<p class="mb-0 OrangeColor fontW-500 Locked">Locked </p>',
      amount, 
      rate,
      '0 HDP.Ф',
      '<button type="button" class="Ref-Button Bg-Gray H-16 TextWhite col-10" style="height: 35px;">Withdraw</button>'
  ] ).draw( false );

}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////FUND PACKAGES PAGE JS ENDS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////MAILBOX PACKAGES PAGE JS STARTS//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

$('.Mailbox-Chk').change(function() {
  if($(this).find('i').hasClass('mdi-chevron-up')){
    $('.Ul-Mail').hide('slow');
    $(this).find('span').removeClass('TextBlue').addClass('TextDark')
    $(this).find('i').removeClass('mdi-chevron-up').addClass('mdi-chevron-down');
  }else{
    $('.Ul-Mail').show('slow');
    $(this).find('span').removeClass('TextDark').addClass('TextBlue')
    $(this).find('i').removeClass('mdi-chevron-down').addClass('mdi-chevron-up');
  }

});


$('#Mailbox-btn').click(function(){
  if($(this).find('i').hasClass('fa-chevron-circle-up')){
    $('.MailMenu').hide('slow');
    $(this).find('i').removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
  
  
  }else{
    $('.MailMenu').show('slow');
    $(this).find('i').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
  }
  
});

$('.Fav-Mail').change(function(){
  if(!$(this).is(':checked')){
    $(this).parents('tr').removeClass('Mail-Active');
  }else{
    $(this).parents('tr').addClass('Mail-Active');
  }
})