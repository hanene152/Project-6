document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const params = new URLSearchParams();

    for (const pair of formData) {
        params.append(pair[0], pair[1]);
    }

    fetch('/submit', {
        method: 'POST',
        body: params
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('messages').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
});
