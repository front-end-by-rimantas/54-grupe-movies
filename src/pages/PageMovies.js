import { moviesData } from "../data/movies.js";
import { formatMovieDuration } from "../lib/formatMovieDuration.js";
import { PageTemplate } from "../templates/PageTemplate.js";

export class PageMovies extends PageTemplate {
    constructor() {
        super();
        this.activeMenuIndex = 1;
    }

    moviesList() {
        let HTML = '';

        for (const item of moviesData) {
            HTML += `
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="/img/${item.thumbnail}" class="card-img-top" style="height: 225px;">
                        <div class="card-body">
                            <a href="/movies/${item.slug}" class="h4">${item.title}</a>
                            <p class="card-text">${item.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/movies/${item.slug}" class="btn btn-sm btn-outline-secondary">Read more</a>
                                </div>
                                <small class="text-body-secondary">${formatMovieDuration(item.durationInMinutes)}</small>
                            </div>
                        </div>
                    </div>
                </div>`;
        }

        return `
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">${HTML}</div>
            </div>`;
    }

    main() {
        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-1">All movies</h1>
                        </div>
                    </div>
                </div>
                ${this.moviesList()}
            </main>`;
    }
}