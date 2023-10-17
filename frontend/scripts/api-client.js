const apiUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api'
    : 'https://softwire-work-experience-oct-2023-backend.vercel.app/api';

const get = async (path) => {
    const response = await fetch(`${apiUrl}${path}`, { method: 'GET' });
    return response.json()
}

const post = async (path, body) => {
    const content = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    const response = await fetch(`${apiUrl}${path}`, content);
    return response.json();
}

export default { get, post }