function test() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var cpw = document.getElementById("cpassword").value;
    var email = document.getElementById("emailid").value;
    var add = document.getElementById("addressid").value;
    var ph = document.getElementById("phoneid").value;
//alert(uid+pw+cpw+email+add+ph)
    localStorage.setItem("uid", uid);
    localStorage.setItem("pw", pw);
    localStorage.setItem("cpw", cpw);
    localStorage.setItem("email", email);
    localStorage.setItem("add", add);
    localStorage.setItem("ph", ph);
}
function testLogin() {
    var lem = document.getElementById("loginemail").value;
    var lpw = document.getElementById("loginpassword").value;
    var storedem=localStorage.getItem("email");
    var storedPw = localStorage.getItem("pw");
//alert(lem+lpw)
    // localStorage.setItem("lem", lem);
    // localStorage.setItem("lpw", lpw);
    if (lem===storedem&&lpw === storedPw) {
        var anchor = document.createElement("a");
        anchor.href = "third.html";
        anchor.click();  
    } 
    else {
        alert("Login failed. Please check your email and password.");
           
    }
    
}
