<script>
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.getElementById('gender').value;
    var message = document.getElementById('message').value;
    var currentTime = new Date().toLocaleString();
    var submittedInfo = `
        <h2>Submitted Information</h2>
        <p>Time of Submission: ${currentTime}</p>
        <p>Name: ${name}</p>
        <p>Date of Birth: ${birthdate}</p>
        <p>Gender: ${gender}</p>
        <p>Message: ${message}</p>
    `;
    document.getElementById('submitted-info').innerHTML = submittedInfo;
    // Reset form
    document.getElementById('message-form').reset();
});
</script>