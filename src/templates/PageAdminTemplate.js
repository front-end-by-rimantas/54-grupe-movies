import { PageTemplate } from "./PageTemplate.js";

export class PageAdminTemplate extends PageTemplate {
    constructor(req) {
        super(req);
        this.activeMenuIndex = -1;
        this.pageJS = '';
    }

    notLoggedInContent() {
        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">Error: private page</h1>
                        </div>
                    </div>
                    <div class="row">
                        <a class="btn btn-primary" href="/login">Login</a>
                    </div>
                </div>
            </main>`;
    }

    async render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.header()}
                ${this.req.user.isLoggedIn ? await this.main() : this.notLoggedInContent()}
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}