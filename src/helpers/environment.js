let APIURL = '';

switch (window.location.hostname) {
    case `localhost` || '127.0.0.1':
        APIURL = 'http://localhost:3001';
        break;
    case 'pawciousmemories-server.herokuapp.com':
        APIURL = 'https://pawciousmemories-server.herokuapp.com'
}

export default APIURL;