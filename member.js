function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    if (member == "member") {
        window.location.href = "skillsMember.html";
    }
    else {
        alert("Incorrect Password");
    }
}