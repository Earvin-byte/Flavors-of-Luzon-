

document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initBackToTop();
    routePage();
});

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function findRegionBySlug(slug) {
    return regions.find(function (region) {
        return region.slug === slug;
    });
}

function findDishById(id) {
    return dishes.find(function (dish) {
        return dish.id === id;
    });
}

function dishesByRegion(slug) {
    return dishes.filter(function (dish) {
        return dish.regionSlug === slug;
    });
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const searchToggle = document.querySelector(".search-toggle");
    const mobileSearch = document.querySelector(".mobile-search");
    const page = document.body.getAttribute("data-page");

    document.querySelectorAll("[data-nav]").forEach(function (link) {
        const nav = link.getAttribute("data-nav");
        if (nav === page || (nav === "regions" && (page === "region" || page === "dish"))) {
            link.classList.add("is-active");
            if (nav === page) {
                link.setAttribute("aria-current", "page");
            }
        }
    });

    if (toggle && mobileNav && header) {
        toggle.addEventListener("click", function () {
            const open = header.classList.toggle("is-menu-open");
            toggle.setAttribute("aria-expanded", String(open));
            if (open) {
                header.classList.remove("is-search-open");
                if (searchToggle) {
                    searchToggle.setAttribute("aria-expanded", "false");
                }
            }
        });

        mobileNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                header.classList.remove("is-menu-open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", function (event) {
            if (!header.contains(event.target)) {
                header.classList.remove("is-menu-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    if (searchToggle && mobileSearch && header) {
        searchToggle.addEventListener("click", function () {
            const open = header.classList.toggle("is-search-open");
            searchToggle.setAttribute("aria-expanded", String(open));
            if (open) {
                header.classList.remove("is-menu-open");
                if (toggle) {
                    toggle.setAttribute("aria-expanded", "false");
                }
                const input = mobileSearch.querySelector("input");
                if (input) {
                    input.focus();
                }
            }
        });
    }

    document.querySelectorAll(".site-search").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const input = form.querySelector("input[name='q']");
            const query = normalizeQuery(input ? input.value : "");
            if (!query) {
                event.preventDefault();
            }
        });
    });
}

function initBackToTop() {
    const button = document.querySelector(".back-to-top");
    if (!button) {
        return;
    }

    window.addEventListener("scroll", function () {
        button.classList.toggle("is-visible", window.scrollY > 480);
    });

    button.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function routePage() {
    const page = document.body.getAttribute("data-page");

    if (page === "home" || page === "regions") {
        renderRegionCards(document.querySelector("#region-grid"));
    }

    if (page === "region") {
        renderRegionPage();
    }

    if (page === "dish") {
        renderDishPage();
    }

    if (page === "search") {
        renderSearchPage();
    }

    if (page === "gallery") {
        initGallery();
    }

    if (page === "contact") {
        initContact();
    }
}

function renderRegionCards(container) {
    if (!container) {
        return;
    }

    // Generate the region cards dynamically
    container.innerHTML = regions.map(function (region) {
        return (
            '<a class="region-card" href="region.html?region=' + encodeURIComponent(region.slug) + '">' +
                '<div class="region-card__visual">' +
                    '<div class="region-card__media">' +
                        '<img src="' + escapeHtml(region.image) + '" alt="Scenes from ' + escapeHtml(region.name) + '" loading="lazy">' +
                    "</div>" +
                    '<div class="region-card__caption">' +
                        "<span>" + escapeHtml(region.shortName) + "</span>" +
                    "</div>" +
                "</div>" +
                '<p class="region-card__text">' + escapeHtml(region.description) + "</p>" +
                '<span class="region-card__cta">Explore Region →</span>' +
            "</a>"
        );
    }).join("");
}

function renderDishCards(list, extraClass) {
    return list.map(function (dish) {
        return (
            '<article class="dish-card' + (extraClass ? " " + extraClass : "") + '">' +
                '<a class="dish-card__media" href="dish.html?id=' + encodeURIComponent(dish.id) + '">' +
                    '<img src="' + escapeHtml(dish.image) + '" alt="Photo of ' + escapeHtml(dish.name) + ', a dish from ' + escapeHtml(dish.region) + '" loading="lazy">' +
                "</a>" +
                "<h3>" + escapeHtml(dish.name) + "</h3>" +
                '<p class="dish-card__desc">' + escapeHtml(dish.description) + "</p>" +
                '<p class="dish-card__region">' + escapeHtml(dish.region) + "</p>" +
                '<a class="btn btn--red" href="dish.html?id=' + encodeURIComponent(dish.id) + '">View Recipe<span class="visually-hidden"> for ' + escapeHtml(dish.name) + '</span></a>' +
            "</article>"
        );
    }).join("");
}

function renderRegionPage() {
    const slug = getQueryParam("region");
    const region = findRegionBySlug(slug);
    const banner = document.querySelector("#region-banner");
    const grid = document.querySelector("#dish-grid");
    const title = document.querySelector("#region-title");
    const intro = document.querySelector("#region-intro");
    const crumb = document.querySelector("#region-crumb");

    if (!region) {
        if (title) {
            title.textContent = "Region not found";
        }
        if (intro) {
            intro.textContent = "The selected Luzon region could not be found. Return home and choose a region from the list.";
        }
        if (grid) {
            grid.innerHTML = '<p class="empty-note">No dishes to display.</p>';
        }
        document.title = "Region not found | Flavors of Luzon";
        return;
    }

    document.title = region.name + " | Flavors of Luzon";
    setMetaDescription(region.description);

    if (crumb) {
        crumb.textContent = region.name;
    }
    if (title) {
        title.textContent = region.name;
    }
    if (intro) {
        intro.textContent = region.intro;
    }
    if (banner) {
        banner.removeAttribute("style");
    }

    const list = dishesByRegion(region.slug);
    if (grid) {
        grid.innerHTML = list.length
            ? renderDishCards(list)
            : '<p class="empty-note">Dish entries for this region can be added in js/data.js.</p>';
    }
}

function renderDishPage() {
    const id = getQueryParam("id");
    const dish = findDishById(id);
    const root = document.querySelector("#dish-root");

    if (!root) {
        return;
    }

    if (!dish) {
        document.title = "Dish not found | Flavors of Luzon";
        root.innerHTML =
            '<div class="page-shell">' +
                '<a class="back-link" href="index.html">← Back to Home</a>' +
                "<h1>Dish not found</h1>" +
                "<p>The selected dish could not be found. Try search or browse by region.</p>" +
            "</div>";
        return;
    }

    document.title = dish.name + " | Flavors of Luzon";
    setMetaDescription(dish.description + " from " + dish.region + ". Read its history, ingredients, and cooking steps.");

    const ingredients = dish.ingredients.map(function (item) {
        return "<li>" + escapeHtml(item) + "</li>";
    }).join("");

    const instructions = dish.instructions.map(function (step, index) {
        return "<li><span>" + (index + 1) + ".</span> " + escapeHtml(step) + "</li>";
    }).join("");

    root.innerHTML =
        '<div class="page-shell dish-page">' +
            '<a class="back-link" href="region.html?region=' + encodeURIComponent(dish.regionSlug) + '">&larr; Back to ' + escapeHtml(dish.region) + "</a>" +
            "<h1>" + escapeHtml(dish.name) + "</h1>" +
            '<p class="region-badge">' + escapeHtml(dish.region) + "</p>" +
            '<div class="dish-hero">' +
                '<img src="' + escapeHtml(dish.image) + '" alt="Photo of ' + escapeHtml(dish.name) + ', a dish from ' + escapeHtml(dish.region) + '">' +
            "</div>" +
            '<div class="dish-split">' +
                '<section class="dish-history">' +
                    "<h2>History &amp; Background</h2>" +
                    "<p>" + escapeHtml(dish.history) + "</p>" +
                "</section>" +
                '<section class="dish-ingredients">' +
                    "<h2>Ingredients</h2>" +
                    '<ul class="ingredient-list">' + ingredients + "</ul>" +
                "</section>" +
                '<section class="dish-instructions">' +
                    "<h2>Cooking Instructions</h2>" +
                    '<ol class="instruction-list">' + instructions + "</ol>" +
                "</section>" +
            "</div>" +
        "</div>";
}

function renderSearchPage() {
    const raw = getQueryParam("q") || "";
    const query = normalizeQuery(raw);
    const heading = document.querySelector("#search-heading");
    const count = document.querySelector("#search-count");
    const grid = document.querySelector("#search-grid");
    const empty = document.querySelector("#search-empty");

    if (heading) {
        heading.textContent = query
            ? 'Search results for: "' + raw.trim() + '"'
            : "Search results";
    }

    if (!query) {
        if (count) {
            count.textContent = "Enter a dish name, region, or keyword to begin.";
        }
        if (grid) {
            grid.innerHTML = "";
        }
        if (empty) {
            empty.hidden = false;
        }
        document.title = "Search | Flavors of Luzon";
        return;
    }

    const results = searchDishes(query);
    document.title = 'Search results for "' + raw.trim() + '" | Flavors of Luzon';

    if (count) {
        count.textContent = results.length === 1
            ? "1 dish matched your search."
            : results.length + " dishes matched your search.";
    }

    if (!results.length) {
        if (grid) {
            grid.innerHTML = "";
        }
        if (empty) {
            empty.hidden = false;
        }
        if (count) {
            count.textContent = "";
        }
        return;
    }

    if (empty) {
        empty.hidden = true;
    }
    if (grid) {
        grid.innerHTML = renderDishCards(results);
    }
}


// Contact form delivery: messages are sent to the group email through the free
// FormSubmit service (formsubmit.co). The first message sent from the live site
// triggers an activation email; click its link once and later messages arrive normally.
// Set this to "" to run the form in demo mode (validation only, nothing is sent).
const FORM_ENDPOINT = "https://formsubmit.co/ajax/webdevemailcs@gmail.com";

function setMetaDescription(text) {
    const desc = document.querySelector('meta[name="description"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (desc) { desc.setAttribute("content", text); }
    if (ogDesc) { ogDesc.setAttribute("content", text); }
    if (ogTitle) { ogTitle.setAttribute("content", document.title); }
}

function initGallery() {
    const grid = document.querySelector("#gallery-grid");
    const filters = document.querySelector("#gallery-filters");
    const count = document.querySelector("#gallery-count");
    const box = document.querySelector("#lightbox");
    if (!grid || !filters || !box) { return; }

    let active = "all";
    let visible = dishes.slice();
    let current = 0;

    filters.innerHTML =
        '<button type="button" class="chip is-active" data-filter="all" aria-pressed="true">All regions</button>' +
        regions.map(function (r) {
            return '<button type="button" class="chip" data-filter="' + escapeHtml(r.slug) + '" aria-pressed="false">' + escapeHtml(r.shortName) + "</button>";
        }).join("");

    function render() {
        visible = active === "all" ? dishes.slice() : dishesByRegion(active);
        grid.innerHTML = visible.map(function (d, i) {
            return '<li><button type="button" class="gallery-item" data-index="' + i + '">' +
                '<img src="' + escapeHtml(d.image) + '" alt="Photo of ' + escapeHtml(d.name) + ', a dish from ' + escapeHtml(d.region) + '" width="800" height="600" loading="lazy">' +
                "<span>" + escapeHtml(d.name) + "</span></button></li>";
        }).join("");
        count.textContent = visible.length + (visible.length === 1 ? " photo shown" : " photos shown");
    }

    function show(i) {
        current = (i + visible.length) % visible.length;
        const d = visible[current];
        const img = document.querySelector("#lb-img");
        img.src = d.image;
        img.alt = "Photo of " + d.name + ", a dish from " + d.region;
        document.querySelector("#lb-title").textContent = d.name;
        document.querySelector("#lb-region").textContent = d.region;
        document.querySelector("#lb-link").href = "dish.html?id=" + encodeURIComponent(d.id);
        if (!box.open) { box.showModal(); }
    }

    filters.addEventListener("click", function (e) {
        const chip = e.target.closest(".chip");
        if (!chip) { return; }
        active = chip.getAttribute("data-filter");
        filters.querySelectorAll(".chip").forEach(function (c) {
            const on = c === chip;
            c.classList.toggle("is-active", on);
            c.setAttribute("aria-pressed", String(on));
        });
        render();
    });

    grid.addEventListener("click", function (e) {
        const item = e.target.closest(".gallery-item");
        if (item) { show(Number(item.getAttribute("data-index"))); }
    });

    document.querySelector("#lb-prev").addEventListener("click", function () { show(current - 1); });
    document.querySelector("#lb-next").addEventListener("click", function () { show(current + 1); });
    document.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
    box.addEventListener("click", function (e) { if (e.target === box) { box.close(); } });
    box.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { show(current - 1); }
        if (e.key === "ArrowRight") { show(current + 1); }
    });

    render();
}

function initContact() {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");
    if (!form) { return; }

    const rules = {
        name: function (v) { return v.trim().length < 2 ? "Enter your name (at least 2 characters)." : ""; },
        email: function (v) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ? "" : "Enter a valid email like name@example.com."; },
        region: function (v) { return v ? "" : "Choose a region."; },
        message: function (v) { return v.trim().length < 20 ? "Write at least 20 characters." : ""; }
    };

    function check(key) {
        const field = form.elements[key];
        const msg = rules[key](field.value);
        document.querySelector("#err-" + key).textContent = msg;
        field.classList.toggle("is-invalid", Boolean(msg));
        field.setAttribute("aria-invalid", String(Boolean(msg)));
        return !msg;
    }

    function say(text, ok) {
        status.hidden = false;
        status.textContent = text;
        status.classList.toggle("is-error", !ok);
    }

    Object.keys(rules).forEach(function (key) {
        form.elements[key].addEventListener("blur", function () { check(key); });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const valid = Object.keys(rules).map(check).every(Boolean);
        if (!valid) {
            say("Please fix the highlighted fields.", false);
            const bad = form.querySelector(".is-invalid");
            if (bad) { bad.focus(); }
            return;
        }
        if (!FORM_ENDPOINT) {
            say("Demo mode: your message was checked but not sent. The site owner needs to add a form endpoint.", false);
            return;
        }
        const body = {};
        Object.keys(rules).forEach(function (key) { body[key] = form.elements[key].value.trim(); });
        body._subject = "Flavors of Luzon contact message";
        body._template = "table";
        body._captcha = "false";
        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify(body)
        }).then(function (res) {
            if (res.ok) { say("Thank you! Your message was sent.", true); form.reset(); }
            else { say("Sorry, the message could not be sent. Please try again later.", false); }
        }).catch(function () {
            say("Network problem. Please check your connection and try again.", false);
        });
    });
}
