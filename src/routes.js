import Home from '/src/routes/Home.svelte';

import About from '/src/routes/About.svelte';
import Contact from '/src/routes/Contact.svelte';


export default {
    '/': Home,
   
    '/about': About,
    '/contact': Contact
    // The catch-all route must always be last
  
};
