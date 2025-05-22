import { PageAdminTemplate } from "../../templates/PageAdminTemplate.js";

export class PageDashboard extends PageAdminTemplate {
    constructor(req) {
        super(req);
        this.activeMenuIndex = this.req.user.isLoggedIn ? 3 : -1;
    }

    async main() {
        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">Dashboard</h1>
                        </div>
                    </div>
                    <div class="row">
                        <p class="col-12">Your email: ${this.req.user.email}</p>
                    </div>
                </div>
            </main>`;
    }
}