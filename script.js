/* ==========================================================================
   Hamid Raza — Portfolio
   Navigation, project rendering, filtering, detail sheet, lightbox, reveal.
   No dependencies.
   ========================================================================== */
(function () {
  "use strict";

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Escape any value that ends up inside markup. */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ======================================================================
     1. Footer year
     ====================================================================== */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ======================================================================
     2. Sticky nav + mobile drawer
     ====================================================================== */
  var nav       = $("#nav");
  var navToggle = $("#navToggle");
  var navDrawer = $("#navDrawer");

  var onScroll = function () {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setDrawer(open) {
    if (!navDrawer || !navToggle) return;
    navDrawer.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      setDrawer(navToggle.getAttribute("aria-expanded") !== "true");
    });
  }
  if (navDrawer) {
    navDrawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) setDrawer(false);
    });
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setDrawer(false);
  });

  /* ======================================================================
     3. Scrollspy — highlight the section currently in view
     ====================================================================== */
  var sections = $$("main section[id]");
  var navAnchors = $$('#navLinks a[href^="#"], #navDrawer a[href^="#"]');

  if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
    var setActive = function (id) {
      navAnchors.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
      });
    };

    var spy = new IntersectionObserver(function (entries) {
      var best = null;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      });
      if (best) setActive(best.target.id);
    }, { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ======================================================================
     4. Scroll reveal
     ====================================================================== */
  function observeReveals(scope) {
    var items = $$("[data-reveal]", scope || document).filter(function (el) {
      return !el.classList.contains("is-visible");
    });
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ======================================================================
     5. Project rendering
     ====================================================================== */
  var projects = Array.isArray(window.PROJECTS) ? window.PROJECTS.slice() : [];
  var grid     = $("#projectGrid");
  var filterEl = $("#projectFilters");

  var ICON = {
    arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
    link:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>',
    check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'
  };

  function coverMarkup(project) {
    var cover = project.cover || {};
    if (cover.type === "phones" && Array.isArray(cover.shots)) {
      return '<div class="showcase">' + cover.shots.map(function (shot) {
        return '<img src="' + esc(shot.src) + '" alt="' + esc(shot.alt) + '" loading="lazy" decoding="async" width="150" height="325">';
      }).join("") + "</div>";
    }
    if (cover.src) {
      return '<img src="' + esc(cover.src) + '" alt="' + esc(cover.alt || project.title) +
             '" loading="lazy" decoding="async" width="760" height="760">';
    }
    return "";
  }

  function projectCard(project) {
    var featured = project.featured === true;
    var flags = (project.categories || []).slice(0, 2).map(function (cat, i) {
      return '<span class="chip' + (i === 0 && featured ? " chip--brand" : "") + '">' + esc(cat) + "</span>";
    }).join("");
    if (featured) flags = '<span class="chip chip--brand">Featured</span>' + flags;

    var tech = (project.tech || []).slice(0, featured ? 8 : 5).map(function (t) {
      return '<span class="chip chip--mono">' + esc(t) + "</span>";
    }).join("");
    var extra = (project.tech || []).length - (featured ? 8 : 5);
    if (extra > 0) tech += '<span class="chip chip--mono">+' + extra + "</span>";

    var stores = (project.stores || []).map(function (store) {
      var inner = ICON.check + esc(store.name);
      return store.url
        ? '<a class="store-badge" href="' + esc(store.url) + '" target="_blank" rel="noopener noreferrer">' + inner + "</a>"
        : '<span class="store-badge">' + inner + "</span>";
    }).join("");

    var links = "";
    if (project.links && project.links.github) {
      links += '<a class="link-inline link-inline--muted" href="' + esc(project.links.github) +
               '" target="_blank" rel="noopener noreferrer">' + ICON.github + "Code</a>";
    }
    if (project.links && project.links.live) {
      links += '<a class="link-inline link-inline--muted" href="' + esc(project.links.live) +
               '" target="_blank" rel="noopener noreferrer">' + ICON.link + "Live</a>";
    }

    var meta = [];
    if (project.company) meta.push(esc(project.company));
    if (project.year)    meta.push(esc(project.year));

    return '' +
      '<article class="project' + (featured ? " project--featured" : "") + '" ' +
        'data-project="' + esc(project.id) + '" ' +
        'data-categories="' + esc((project.categories || []).join("|")) + '">' +
        '<div class="project__media">' +
          '<div class="project__flags">' + flags + "</div>" +
          coverMarkup(project) +
        "</div>" +
        '<div class="project__body">' +
          "<div>" +
            '<h3 class="project__title">' + esc(project.title) + "</h3>" +
            (project.subtitle ? '<p class="project__subtitle">' + esc(project.subtitle) + "</p>" : "") +
          "</div>" +
          '<p class="project__desc">' + esc(project.description) + "</p>" +
          (stores ? '<div class="store-badges">' + stores + "</div>" : "") +
          '<div class="project__tech">' + tech + "</div>" +
          (meta.length ? '<p class="project__desc" style="font-size:var(--text-xs)">' + meta.join(" &middot; ") + "</p>" : "") +
          '<div class="project__foot">' +
            '<button class="link-inline" type="button" data-open="' + esc(project.id) + '" ' +
              'aria-label="View case study for ' + esc(project.title) + '">View case study' + ICON.arrow + "</button>" +
            links +
          "</div>" +
        "</div>" +
      "</article>";
  }

  function renderProjects() {
    if (!grid) return;

    var ordered = projects.slice().sort(function (a, b) {
      return (b.featured === true) - (a.featured === true);
    });

    grid.innerHTML = ordered.map(projectCard).join("");
    $$(".project", grid).forEach(function (el) { el.setAttribute("data-reveal", ""); });

    // Filters, derived from the data so new categories appear automatically.
    if (filterEl) {
      var counts = {};
      projects.forEach(function (p) {
        (p.categories || []).forEach(function (c) { counts[c] = (counts[c] || 0) + 1; });
      });
      var cats = Object.keys(counts).sort();

      if (cats.length < 2) {
        filterEl.hidden = true;
      } else {
        filterEl.innerHTML =
          '<button class="filter" type="button" data-filter="all" aria-pressed="true">All' +
            '<span class="count">' + projects.length + "</span></button>" +
          cats.map(function (c) {
            return '<button class="filter" type="button" data-filter="' + esc(c) + '" aria-pressed="false">' +
              esc(c) + '<span class="count">' + counts[c] + "</span></button>";
          }).join("");
      }
    }

    observeReveals(grid);
  }

  if (filterEl) {
    filterEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter");
      if (!btn) return;
      var value = btn.getAttribute("data-filter");

      $$(".filter", filterEl).forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });

      $$(".project", grid).forEach(function (card) {
        var cats = (card.getAttribute("data-categories") || "").split("|");
        var show = value === "all" || cats.indexOf(value) !== -1;
        card.classList.toggle("is-hidden", !show);
      });
    });
  }

  /* ======================================================================
     6. Project detail sheet
     ====================================================================== */
  var sheet      = $("#projectSheet");
  var sheetBody  = $("#sheetBody");
  var sheetClose = $("#sheetClose");
  var lastFocused = null;

  function detailMarkup(project) {
    var out = "";

    var flags = (project.categories || []).map(function (c) {
      return '<span class="chip chip--brand">' + esc(c) + "</span>";
    }).join(" ");

    out += '<div class="sheet__head">' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px">' + flags + "</div>" +
      '<h2 id="sheetTitle">' + esc(project.title) + "</h2>" +
      (project.subtitle ? '<p class="project__subtitle">' + esc(project.subtitle) + "</p>" : "") +
      (project.overview ? '<p class="lead">' + esc(project.overview) + "</p>"
                        : '<p class="lead">' + esc(project.description) + "</p>") +
      "</div>";

    // Meta strip
    var meta = "";
    if (project.role)    meta += "<div><dt>Role</dt><dd>" + esc(project.role) + "</dd></div>";
    if (project.company) meta += "<div><dt>Built at</dt><dd>" + esc(project.company) + "</dd></div>";
    if (project.year)    meta += "<div><dt>Year</dt><dd>" + esc(project.year) + "</dd></div>";
    if ((project.categories || []).length) {
      meta += "<div><dt>Type</dt><dd>" + esc(project.categories.join(", ")) + "</dd></div>";
    }
    if (meta) out += '<dl class="sheet__meta">' + meta + "</dl>";

    // Store availability
    if ((project.stores || []).length) {
      out += '<div class="sheet__section"><h3>Availability</h3><div class="store-badges">' +
        project.stores.map(function (s) {
          var inner = ICON.check + esc(s.name);
          return s.url
            ? '<a class="store-badge" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + inner + "</a>"
            : '<span class="store-badge">' + inner + "</span>";
        }).join("") + "</div></div>";
    }

    // Key features
    if ((project.features || []).length) {
      out += '<div class="sheet__section"><h3>Key features</h3><ul class="feature-list">' +
        project.features.map(function (f) {
          return "<li><strong>" + esc(f.title) + ":</strong> " + esc(f.text) + "</li>";
        }).join("") + "</ul></div>";
    }

    // Technical highlights
    if ((project.highlights || []).length) {
      out += '<div class="sheet__section"><h3>Technical highlights</h3><ul class="feature-list">' +
        project.highlights.map(function (h) {
          return "<li><strong>" + esc(h.title) + ":</strong> " + esc(h.text) + "</li>";
        }).join("") + "</ul></div>";
    }

    // Stack
    if ((project.tech || []).length) {
      out += '<div class="sheet__section"><h3>Technology</h3><div class="project__tech">' +
        project.tech.map(function (t) { return '<span class="chip chip--mono">' + esc(t) + "</span>"; }).join("") +
        "</div></div>";
    }

    // Gallery
    if ((project.gallery || []).length) {
      out += '<div class="sheet__section"><h3>Screens</h3>' +
        '<div class="gallery' + (project.wide ? " gallery--wide" : "") + '">' +
        project.gallery.map(function (g) {
          return '<button type="button" data-full="' + esc(g.full || g.src) + '" ' +
                   'data-caption="' + esc(g.alt) + '" aria-label="Enlarge: ' + esc(g.alt) + '">' +
                   '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy" decoding="async">' +
                 "</button>";
        }).join("") + "</div></div>";
    }

    // Links
    var links = "";
    if (project.links && project.links.github) {
      links += '<a class="btn btn--secondary" href="' + esc(project.links.github) +
               '" target="_blank" rel="noopener noreferrer">' + ICON.github + "View Code</a>";
    }
    if (project.links && project.links.live) {
      links += '<a class="btn btn--primary" href="' + esc(project.links.live) +
               '" target="_blank" rel="noopener noreferrer">' + ICON.link + "Live Demo</a>";
    }
    if (links) out += '<div class="btn-row">' + links + "</div>";

    return out;
  }

  function openProject(id) {
    var project = projects.filter(function (p) { return p.id === id; })[0];
    if (!project || !sheet || !sheetBody) return;

    lastFocused = document.activeElement;
    sheetBody.innerHTML = detailMarkup(project);
    sheet.hidden = false;
    sheet.classList.add("is-open");
    sheet.scrollTop = 0;
    document.body.style.overflow = "hidden";
    if (sheetClose) sheetClose.focus();

    if (history.replaceState) history.replaceState(null, "", "#p/" + id);
  }

  function closeProject() {
    if (!sheet || !sheet.classList.contains("is-open")) return;
    sheet.classList.remove("is-open");
    sheet.hidden = true;
    sheetBody.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    if (history.replaceState) history.replaceState(null, "", "#projects");
  }

  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-open], [data-open-project]");
    if (opener) {
      e.preventDefault();
      openProject(opener.getAttribute("data-open") || opener.getAttribute("data-open-project"));
      setDrawer(false);
      return;
    }
    if (e.target === sheet) closeProject();
  });

  if (sheetClose) sheetClose.addEventListener("click", closeProject);

  /* Focus trap inside the sheet */
  if (sheet) {
    sheet.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var focusables = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', sheet)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!focusables.length) return;
      var first = focusables[0];
      var last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ======================================================================
     7. Lightbox
     ====================================================================== */
  var lightbox        = $("#lightbox");
  var lightboxImage   = $("#lightboxImage");
  var lightboxCaption = $("#lightboxCaption");
  var lightboxClose   = $("#lightboxClose");
  var lightboxOpener  = null;

  function openLightbox(src, caption, opener) {
    if (!lightbox) return;
    lightboxOpener = opener || null;
    lightboxImage.src = src;
    lightboxImage.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    lightbox.classList.remove("is-open");
    lightbox.hidden = true;
    lightboxImage.src = "";
    // The detail sheet may still be open behind the lightbox.
    document.body.style.overflow = (sheet && sheet.classList.contains("is-open")) ? "hidden" : "";
    if (lightboxOpener && lightboxOpener.focus) lightboxOpener.focus();
  }

  document.addEventListener("click", function (e) {
    var thumb = e.target.closest(".gallery button");
    if (thumb) {
      openLightbox(thumb.getAttribute("data-full"), thumb.getAttribute("data-caption"), thumb);
      return;
    }
    if (e.target === lightbox) closeLightbox();
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  /* ======================================================================
     8. Global keyboard handling
     ====================================================================== */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (lightbox && lightbox.classList.contains("is-open")) { closeLightbox(); return; }
    if (sheet && sheet.classList.contains("is-open"))       { closeProject(); return; }
    if (navToggle && navToggle.getAttribute("aria-expanded") === "true") setDrawer(false);
  });

  /* ======================================================================
     9. Boot
     ====================================================================== */
  renderProjects();
  observeReveals();

  // Deep link support: /#p/<project-id> opens that case study directly.
  if (/^#p\//.test(window.location.hash)) {
    openProject(window.location.hash.replace("#p/", ""));
  }
})();
