# How to publish a post on *Left for the Reader*

Short version: **add one Markdown file to `_posts/` and push.** GitHub rebuilds
the site within a minute or two. There is nothing to install, nothing to run.

---

## 1. Make the file

Create a file in `_posts/` named exactly:

```
YYYY-MM-DD-some-words-from-the-title.md
```

for example `_posts/2026-09-14-what-proofs-are-for.md`. The date in the filename
sets the publication date and the ordering; the words after it become the URL,
so this post lands at `https://kkapulkin.github.io/blog/what-proofs-are-for/`.

## 2. Put this at the top

```markdown
---
layout: post
title: "What proofs are for"
date: 2026-09-14
summary: >-
  One or two sentences shown under the title on the blog index
  and in the RSS feed. Optional — if you leave it out, the first
  paragraph is used instead.
---
```

Keep the three dashes above and below. `layout: post` and `title` are the only
required lines; `date` should match the filename.

## 3. Write

Everything below the closing `---` is the post. Plain paragraphs separated by a
blank line are all you need:

```markdown
Most of what I want to say fits in ordinary paragraphs, so most posts
will be nothing but ordinary paragraphs.

**A point being made.** The run-in bold at the start of a paragraph is
styled for exactly this, the way the AI-and-math piece uses it.
```

Other things you can use:

| You write | You get |
|---|---|
| `*word*` / `**word**` | *italic* / **bold** |
| `## Heading` | a section heading |
| `[text](https://example.com)` | a link |
| `> quoted line` | an indented pull quote |
| `- item` on consecutive lines | a bulleted list |
| `---` on its own line | a horizontal rule |
| `![caption](/img/figure.png)` | an image (put the file in `img/`) |

**Mathematics** works too. Inline math goes in `\( ... \)` and display math in
`$$ ... $$`:

```markdown
Every fibration \( p : E \to B \) induces the long exact sequence

$$ \cdots \to \pi_n(F) \to \pi_n(E) \to \pi_n(B) \to \pi_{n-1}(F) \to \cdots $$
```

MathJax loads only on post pages, so posts without math cost nothing.

## 4. Push

```
git add _posts/2026-09-14-what-proofs-are-for.md
git commit -m "New post: What proofs are for"
git push
```

That's it. The post appears at the top of `/blog/`, gets its own page, and goes
into `/feed.xml` automatically.

---

## Writing ahead of time

A post dated in the future stays hidden until that date passes, so you can write
several and let them appear on schedule. (`future: false` in `_config.yml`
controls this; set it to `true` if you'd rather see them immediately.)

## Previewing before you push

Optional, and only worth setting up if you want it. macOS ships Ruby 2.6, which
is too old for current Jekyll, so install a newer one first:

```
brew install ruby
export PATH="$(brew --prefix ruby)/bin:$PATH"
gem install bundler jekyll
```

Then, from the repository:

```
jekyll serve
```

and open <http://127.0.0.1:4000/blog/>. Edits show up on reload.

## Where things live

| Path | What it is |
|---|---|
| `_posts/` | your posts — the only directory you need to touch |
| `blog.html` | the blog index page (masthead, post list) |
| `_layouts/post.html` | the frame around a single post |
| `_includes/` | shared header, footer, `<head>`, hero figure, MathJax |
| `css/blog.css` | all blog styling; the main site's `css/style.css` is untouched |
| `feed.xml` | RSS feed, generated from your posts |
| `_config.yml` | title, tagline, contact address |

## Changing the title or tagline

Both live at the top of `_config.yml`. The masthead on `blog.html` spells the
title out in styled pieces (`Left <span class="accent">for the</span> Reader`),
so if you rename the blog, change it there as well.
