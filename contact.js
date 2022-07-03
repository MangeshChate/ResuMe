document.querySelector(".contact_form").style.display = "none";
html = `hello
`
document.querySelector('#item1').addEventListener('click',function(e){
    document.body.scrollTop = 100;
    document.documentElement.scrollHeight=100;
    document.querySelector('.contact_form').style.display = "block"
    document.querySelector('.contact_form').style.position = "relative"
})



function sendEmail() {
    Email.send({
        Host: "jadhavjay586@gmail.com",
        Username: "jdhavjay586gmail.com",
        Password: "jay@123456789$",
        To: 'jadhavjay586@gmail.com',
        From: document.querySelector("#email").value,
        Subject: "New Contact From Enquiry",
        Body: "Name: " + document.getElementById("name").value +
            "<br>Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
   
}

