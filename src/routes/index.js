import Header from '../templates/Header.js';
import Home from '../pages/Home.js';
import Character from '../templates/Character.js';
import Error404 from '../pages/Error404.js';


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
};

export default router;