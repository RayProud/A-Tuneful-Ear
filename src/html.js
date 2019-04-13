module.exports = function template(content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>A Tuneful Ear</title>
        </head>
        <body>
            <div id="app">${content}</div>
            <script src="./client.js"></script>
        </body>
    </html>
    `;
};
