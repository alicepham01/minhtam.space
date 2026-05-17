# minhtam.space

Personal site of Minh Tam — Urban Researcher & GIS Specialist.  
Built with Jekyll, hosted on GitHub Pages.

---

## Quick reference

### Add a new project card (homepage grid)

Edit `_data/projects.yml` — add a block at the top:

```yaml
- title: Your Project Title
  category: design          # design | research | writing
  year: 2025
  description: One sentence describing the project.
  image: your-photo.jpg     # file in assets/images/projects/ — leave blank for gradient
  link: /research/2025/your-project/
  featured: true
```

Save → push → done. No HTML to touch.

---

### Write a new blog post

Create a file in `_posts/` named exactly: `YYYY-MM-DD-your-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-06-01
category: writing           # writing | research
description: One line summary shown in listings and cards.
tags: [gis, urbanism]
image:                      # optional — file in assets/images/projects/
---

Your content here in Markdown.

## A heading

Normal paragraph text. **Bold**, *italic*, [links](https://example.com).

![Image caption]({{ '/assets/images/projects/photo.jpg' | relative_url }})
```

Push the file → GitHub Pages builds it automatically.

---

### Add a project image

1. Drop your `.jpg` or `.png` into `assets/images/projects/`
2. Reference it by filename in `_data/projects.yml` or a post's front matter

```yaml
image: my-photo.jpg
```

---

### Update navigation

Edit `_data/navigation.yml`. Labels and URLs only — no HTML:

```yaml
links:
  - label: Work
    url: "/#work"
  - label: New Section
    url: /new-section/
```

---

### Update your bio / About page

Edit `about/index.html` — look for the `<!-- ✏️ -->` comments.

---

## Local development (optional)

```bash
# Install Ruby + Bundler first, then:
bundle install
bundle exec jekyll serve
# → open http://localhost:4000
```

## Deploy

```bash
git add .
git commit -m "update: describe what changed"
git push
```

GitHub Pages rebuilds in ~30 seconds.

---

## File map

```
minhtam.space/
├── _config.yml              ← site-wide settings (title, email, socials)
├── _data/
│   ├── navigation.yml       ← nav links
│   └── projects.yml         ← ALL project cards — edit here
├── _includes/
│   ├── head.html            ← <head> tag (meta, fonts, CSS link)
│   ├── nav.html             ← top navigation bar
│   └── footer.html          ← footer
├── _layouts/
│   ├── default.html         ← base page wrapper
│   └── post.html            ← individual post/project page
├── _posts/                  ← blog posts (Markdown)
│   └── YYYY-MM-DD-title.md
├── assets/
│   ├── css/main.css         ← all styles
│   ├── images/projects/     ← project photos
│   └── js/main.js           ← filter + scroll behavior
├── writing/index.html       ← writing listing page
├── research/index.html      ← research listing page
├── about/index.html         ← about page
├── index.html               ← homepage
├── CNAME                    ← minhtam.space (don't edit)
├── Gemfile                  ← Jekyll dependencies
└── .gitignore
```
