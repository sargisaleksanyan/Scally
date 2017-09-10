$(function() {
$("#subscribe").click(function () {
    let email = $("input#email").val();
    $("input#email").val('');
    subSrcibe(email);
})
    $("#subscribe2").click(function () {
        let email = $("input#mailinput").val();
        $("input#mailinput").val('');
        subSrcibe(email);
    })

    function subSrcibe(email,id){
    if(isValidMail(email)) {
      //  $(id).val('');
        $.ajax({
            url: "http://scally.co/submit",
            type: "POST",
            data:{
                  email: email,
                 },success:function (responseData) {

                //let resp=responseData;
                  window.location="/Success";
                 }
               })
            }
         }
/*        $.ajax({
            url: "/http://62.202.26.90:8088/search",
            method: "POST",
            crossDomain: true,
            async: false,
            timeout: 40000,
            cache: true,
            data: {
                //  name: name,
                query: 'Armen',
            },
            success: function (responseData, textStatus, jqXHR) {
                var value = responseData.someKey;
                console.log(value);
            },
            error: function (responseData, textStatus, errorThrown) {
                console.log(responseData);
                console.log(textStatus);
                console.log(errorThrown);
                //alert('POST failed.');
            },
        })


    } }),
      /* $.ajax({
            url: "http://62.202.26.90:8088/url",
            method: "POST",
            crossDomain:true,
             async: false,
            timeout: 40000,
            cache:true,
            success: function(responseData, textStatus, jqXHR) {
               var value = responseData.someKey;
               console.log(value);
           },
           error: function (responseData, textStatus, errorThrown) {
                console.log(responseData);
                console.log(textStatus);
                console.log(errorThrown);
               //alert('POST failed.');
           },
         //  crossDomain: true,

            data: {
                //  name: name,
              //  url: "https://shopinamerica.am/am/shop",
                //   url: "http://www.bbc.com/",
                url: "https://www.google.am/search?q=convert+canvas+with+background+to+image+and+save&cad=h",
            }}).done(function (response) {
               console.log(response);
            })
           }
      })*/
        /* $.ajax({
         url: "http://62.202.26.90:8088/search",
         method: "POST",
         crossDomain:true,
         async: false,
         timeout: 20000,
         cache:true,
         success: function(responseData, textStatus, jqXHR) {
         var value = responseData.someKey;
         console.log(value);
         },
         error: function (responseData, textStatus, errorThrown) {
         console.log(responseData);
         console.log(textStatus);
         console.log(errorThrown);
         //alert('POST failed.');
         },
         //  crossDomain: true,

         data: {
         //  name: name,
         //  url: "https://shopinamerica.am/am/shop",
         //   url: "http://www.bbc.com/",
             query: "Armen",
         }}).done(function (response) {
         console.log(response);
         })
         }
         })*/
    function isValidMail(mail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    }

});
