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
        $.ajax({
            url: "/submit",
            type: "POST",
            data:{
                  email: email,
                 },success:function (responseData) {
                  window.location="/Success";
                 }
               })
            }
            else{
          alert("Please provide valid email");
    }
         }

    function isValidMail(mail) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    }

});
