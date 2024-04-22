document.getElementById("openForm").addEventListener("click", function() {
    var userInfoWindow = window.open("", "_blank", "width=400,height=500");
    var formContent = `
        <h2>User Information</h2>
        <form id="userInfoForm">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName"><br><br>
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName"><br><br>
            <label for="phoneNumber">Phone Number:</label><br>
            <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"><br><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br><br>
            <label for="comment">Additional Comment:</label><br>
            <textarea id="comment" name="comment"></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `;
    userInfoWindow.document.write(formContent);
    userInfoWindow.document.getElementById("userInfoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var firstName = userInfoWindow.document.getElementById("firstName").value;
        var lastName = userInfoWindow.document.getElementById("lastName").value;
        var phoneNumber = userInfoWindow.document.getElementById("phoneNumber").value;
        var email = userInfoWindow.document.getElementById("email").value;
        var comment = userInfoWindow.document.getElementById("comment").value;
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Phone Number: " + phoneNumber);
        console.log("Email: " + email);
        console.log("Additional Comment: " + comment);
        userInfoWindow.close();
    });
});