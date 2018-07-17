import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './src/components/App';

const result = ReactDomServer.renderToString(<App />);
const html = `
<!doctype html>
<html>
<head>
    <title>Healthy Food Shop</title>
    <link
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" 
        integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" 
        crossorigin="anonymous"
    />
</head>
<body>
    <div class="container" id="app">${result}</div>
</body>
</html>`;

export default html;
