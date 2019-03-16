$(document).ready(function() {
    $(".btn").on("click", function() {
        /**
         * When we click on an element that has
         * a 'btn' class, this event will be fired.
         */
        var impInf = [{
            fname : "Thomas",
            lname : "Heinz",
            phone : "2013303456",
            email : "thomas323@aol.com",
            message : "NA"
            }];

        var fnameInput = document.getElementById("fname").val();
        var lnameInput = document.getElementById("lname").val();
        var phoneInput = document.getElementById("phone").val();
        var emailInput = document.getElementById("email").val();
        var messaInput = document.getElementById("message").val();

        var messageBox  = document.getElementById("display");

        var insertObject = {};

        for(var i = 0; i < impInf.length; i++){

                insertObject.fname = fnameInput;
                insertObject.lname = lnameInput;
                insertObject.phone = phoneInput;
                insertObject.email = emailInput;
                insertObject.message = messaInput;

                messageBox.innerHTML = "<h4>You have successfully sent your message. Thanks!</h4>";

                break;
        }
        impInf.push(insertObject);
    });
});



































