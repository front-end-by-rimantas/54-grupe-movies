export class PageTemplate {
    constructor() {
    }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Movies</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Projekto pavadinimas" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="stylesheet" href="/css/main.css">
            </head>`;
    }

    header(activeMenuIndex = -1) {
        const menu = [
            { href: '/', text: 'Home' },
            { href: '/about', text: 'About us' },
            { href: '/users', text: 'Users' },
            { href: '/add-text', text: 'Add text' },
        ];

        let menuHTML = '';

        for (let i = 0; i < menu.length; i++) {
            const link = menu[i];
            const active = i === activeMenuIndex ? 'active' : '';
            menuHTML += `<a class="link ${active}" href="${link.href}">${link.text}</a>`;
        }

        return `
            <header class="main-header">
                <img class="logo" src="/img/logo.png" alt="Logo">
                <nav class="main-nav">${menuHTML}</nav>
            </header>`;
    }

    main() {
        return '<main>DEMO CONTENT</main>';
    }

    footer() {
        return `
            <footer class="container">
                <div class="row">
                    <p class="col-12">&copy; ${new Date().getFullYear()} - All rights deserved.</p>
                </div>
            </footer>`;
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.header()}
                ${this.main()}
                ${this.footer()}
                <script src="/js/main.js"></script>
            </body>
            </html>`;
    }
}