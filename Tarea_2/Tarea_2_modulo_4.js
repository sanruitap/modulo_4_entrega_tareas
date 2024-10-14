const url = 'https://randomuser.me/api/';

document.getElementById('fetch-button').addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('user-image').src = user.picture.large;
            document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('user-gender').textContent = `Género: ${user.gender}`;
            document.getElementById('user-email').textContent = `Email: ${user.email}`;
            document.getElementById('user-phone').textContent = `Celular: ${user.phone}`;
        })
        .catch(error => console.error('Error:', error));
});
