 const API_URL = 'https://jsonplaceholder.typicode.com'

const HTMLResponse = document.querySelector("#api");


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) => `<div class="clientes-container">
        <div><ul>${user.username} / ${user.address.city}</ul></div>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }); 

 
