/* ============================================================
   PORTFOLIO APP — Renders everything from config.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderNav();
    renderHero();
    renderAbout();
    renderEducation();
    renderCertifications();
    renderSkills();
    renderLanguages();
    renderProjects();
    renderActivities();
    renderContact();
    renderFooter();
    initParticles();
    initCursorGlow();
    initScrollReveal();
    initNavScroll();
    initMobileMenu();
    lucide.createIcons();
});

/* ── Theme ──────────────────────────────────────────────────── */
function initTheme() {
    const saved = localStorage.getItem("portfolio-theme");
    const theme = saved || CONFIG.theme.default;
    document.documentElement.setAttribute("data-theme", theme);

    document.getElementById("theme-toggle").addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
    });
}

/* ── Nav ────────────────────────────────────────────────────── */
function renderNav() {
    document.getElementById("nav-logo").textContent = `{ ${CONFIG.initials} }`;
}

function initNavScroll() {
    const nav = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    });
}

function initMobileMenu() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
            toggle.classList.remove("active");
            links.classList.remove("open");
        })
    );
}

/* ── Hero ───────────────────────────────────────────────────── */
function renderHero() {
    document.getElementById("hero-name").textContent = CONFIG.name;
    document.getElementById("hero-subtext").textContent = CONFIG.heroSubtext;
    typewriter(CONFIG.taglines);
}

function typewriter(words) {
    const el = document.getElementById("hero-tagline");
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseEnd = 2000;
    const pauseStart = 500;

    function tick() {
        const current = words[wordIndex];
        if (!deleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(tick, pauseEnd);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(tick, pauseStart);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }
    tick();
}

/* ── About ──────────────────────────────────────────────────── */
function renderAbout() {
    const textEl = document.getElementById("about-text");
    CONFIG.about.paragraphs.forEach((p) => {
        const para = document.createElement("p");
        para.textContent = p;
        textEl.appendChild(para);
    });

    if (CONFIG.about.resumeLink && CONFIG.about.resumeLink !== "#") {
        const link = document.createElement("a");
        link.href = CONFIG.about.resumeLink;
        link.className = "btn btn-outline";
        link.style.marginTop = "var(--space-md)";
        link.innerHTML = '<i data-lucide="file-text" style="width:16px;height:16px"></i> View Resume';
        link.target = "_blank";
        textEl.appendChild(link);
    }

    const statsEl = document.getElementById("about-stats");
    CONFIG.about.stats.forEach((stat) => {
        const card = document.createElement("div");
        card.className = "stat-card";
        card.innerHTML = `
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;
        statsEl.appendChild(card);
    });
}

/* ── Education ──────────────────────────────────────────────── */
function renderEducation() {
    const timeline = document.getElementById("education-timeline");
    CONFIG.education.forEach((edu, index) => {
        const item = document.createElement("div");
        item.className = "timeline-item reveal";
        item.style.animationDelay = `${index * 0.15}s`;
        item.innerHTML = `
      <div class="timeline-marker">
        <span class="timeline-icon">${edu.icon}</span>
        <div class="timeline-line"></div>
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3 class="timeline-title">${edu.degree}</h3>
          <span class="timeline-year">${edu.year}</span>
        </div>
        <p class="timeline-institution">${edu.institution}</p>
      </div>
    `;
        timeline.appendChild(item);
    });
}

/* ── Certifications ─────────────────────────────────────────── */
function renderCertifications() {
    const grid = document.getElementById("cert-cards");
    CONFIG.certifications.forEach((cert) => {
        const card = document.createElement("div");
        card.className = "cert-card reveal";
        card.innerHTML = `
      <span class="cert-icon">${cert.icon}</span>
      <div class="cert-info">
        <h4 class="cert-name">${cert.name}</h4>
        <span class="cert-status ${cert.status.toLowerCase()}">${cert.status}</span>
      </div>
    `;
        grid.appendChild(card);
    });
}

/* ── Skills ─────────────────────────────────────────────────── */
function renderSkills() {
    const grid = document.getElementById("skills-grid");
    CONFIG.skills.forEach((cat) => {
        const card = document.createElement("div");
        card.className = "skill-category reveal";
        card.innerHTML = `
      <div class="skill-category-header">
        <span class="skill-category-icon">${cat.icon}</span>
        <h3 class="skill-category-title">${cat.category}</h3>
      </div>
      ${cat.items
                .map(
                    (s) => `
        <div class="skill-item">
          <div class="skill-info">
            <span class="skill-name">${s.name}</span>
            <span class="skill-percent">${s.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-level="${s.level}"></div>
          </div>
        </div>`
                )
                .join("")}
    `;
        grid.appendChild(card);
    });
}

/* ── Languages ──────────────────────────────────────────────── */
function renderLanguages() {
    const grid = document.getElementById("languages-grid");
    CONFIG.languages.forEach((lang) => {
        const card = document.createElement("div");
        card.className = "language-card reveal";
        card.innerHTML = `
      <div class="language-header">
        <h4 class="language-name">${lang.name}</h4>
        <span class="language-level">${lang.level}</span>
      </div>
      <div class="language-bar">
        <div class="language-bar-fill" data-level="${lang.proficiency}"></div>
      </div>
    `;
        grid.appendChild(card);
    });
}

/* ── Projects ───────────────────────────────────────────────── */
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    CONFIG.projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card reveal";
        card.innerHTML = `
      <div class="project-header">
        <span class="project-icon">${project.icon}</span>
        <div class="project-tags">
          ${project.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="project-highlights">
        ${project.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
    `;
        grid.appendChild(card);
    });
}

/* ── Activities ─────────────────────────────────────────────── */
function renderActivities() {
    const grid = document.getElementById("activities-grid");
    CONFIG.activities.forEach((activity) => {
        const card = document.createElement("div");
        card.className = "activity-card reveal";
        card.innerHTML = `
      <span class="activity-icon">${activity.icon}</span>
      <div class="activity-info">
        <h4 class="activity-title">${activity.title}</h4>
        <p class="activity-description">${activity.description}</p>
      </div>
    `;
        grid.appendChild(card);
    });
}

/* ── Contact ────────────────────────────────────────────────── */
function renderContact() {
    const info = document.getElementById("contact-info");
    info.innerHTML = `
    <h3 class="contact-heading">${CONFIG.contact.heading}</h3>
    <p class="contact-subtext">${CONFIG.contact.subtext}</p>
    <div class="contact-details">
      <div class="contact-detail-item">
        <i data-lucide="mail" style="width:18px;height:18px;color:var(--accent)"></i>
        <a href="mailto:${CONFIG.contact.email}">${CONFIG.contact.email}</a>
      </div>
    </div>
    <div class="contact-socials">
      ${CONFIG.contact.socials
            .map(
                (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${s.name}">
          <i data-lucide="${s.icon}" style="width:20px;height:20px"></i>
        </a>`
            )
            .join("")}
    </div>
  `;

    // Initialize EmailJS
    if (CONFIG.contact.emailjs) {
        emailjs.init(CONFIG.contact.emailjs.publicKey);
    }

    // Form handler — sends email directly via EmailJS
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = document.getElementById("form-submit");
        const status = document.getElementById("form-status");
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const message = document.getElementById("form-message").value;

        if (!CONFIG.contact.emailjs) {
            // Fallback to mailto if EmailJS not configured
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:${CONFIG.contact.email}?subject=${subject}&body=${body}`;
            return;
        }

        btn.disabled = true;
        btn.innerHTML = '<i data-lucide="loader" style="width:18px;height:18px"></i> Sending...';
        lucide.createIcons();
        status.textContent = "";
        status.className = "form-status";

        emailjs.send(CONFIG.contact.emailjs.serviceId, CONFIG.contact.emailjs.templateId, {
            from_name: name,
            from_email: email,
            message: message,
            to_email: CONFIG.contact.email,
        })
            .then(() => {
                status.textContent = "✅ Message sent successfully!";
                status.className = "form-status success";
                document.getElementById("contact-form").reset();
            })
            .catch(() => {
                status.textContent = "❌ Failed to send. Please try again.";
                status.className = "form-status error";
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerHTML = '<i data-lucide="send" style="width:18px;height:18px"></i> Send Message';
                lucide.createIcons();
            });
    });
}

/* ── Footer ─────────────────────────────────────────────────── */
function renderFooter() {
    document.getElementById("footer-name").textContent = CONFIG.name;
    document.querySelector(".footer-year").textContent = `© ${new Date().getFullYear()} — All rights reserved.`;
}

/* ── Cursor Glow ────────────────────────────────────────────── */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        });
    }
}

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    // Animate skill bars
                    entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
                        bar.style.width = bar.dataset.level + "%";
                    });

                    // Animate language bars
                    entry.target.querySelectorAll(".language-bar-fill").forEach((bar) => {
                        bar.style.width = bar.dataset.level + "%";
                    });
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ── Particles ──────────────────────────────────────────────── */
function initParticles() {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];
    const count = 60;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            const theme = document.documentElement.getAttribute("data-theme");
            const color = theme === "dark" ? "255,255,255" : "0,0,0";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    function drawLines() {
        const theme = document.documentElement.getAttribute("data-theme");
        const color = theme === "dark" ? "124,92,255" : "109,74,255";
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
            p.update();
            p.draw();
        });
        drawLines();
        requestAnimationFrame(animate);
    }
    animate();
}
