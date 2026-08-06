<?xml version="1.0" encoding="UTF-8"?>
<!--
  Makes /feed.xml readable when a person opens it in a browser.

  Feed readers ignore this file entirely: they parse the RSS underneath.
  It only exists so that clicking "RSS feed" shows a page rather than a
  wall of raw XML. Everything here is driven by the feed itself, so new
  posts appear without touching this file.
-->
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom"
                exclude-result-prefixes="atom">

  <xsl:output method="html" encoding="UTF-8" indent="yes"
              doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> · RSS feed</title>
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="stylesheet" href="/css/blog.css"/>
      </head>
      <body>

        <header class="site-nav">
          <div class="wrap">
            <a class="brand" href="/blog/">
              <span class="glyph" data-fig="glyph"></span>
              <xsl:text> </xsl:text>
              <xsl:value-of select="/rss/channel/title"/>
            </a>
            <nav class="nav-links" aria-label="Primary">
              <a href="/blog/">All posts</a>
              <a href="/index.html">Chris Kapulkin</a>
            </nav>
          </div>
        </header>

        <section class="lftr-hero feed-hero">
          <div class="wrap">
            <p class="eyebrow">RSS feed</p>
            <h1 class="lftr-title">Subscribe</h1>
            <p class="feed-note">
              You're looking at the feed for
              <a href="/blog/"><xsl:value-of select="/rss/channel/title"/></a>.
              Copy the address below into a feed reader — NetNewsWire, Feedly,
              Inoreader, Thunderbird — and new posts will arrive on their own.
              There is no mailing list and nothing to sign up for.
            </p>
            <p class="feed-url">
              <code><xsl:value-of select="/rss/channel/atom:link/@href"/></code>
            </p>
          </div>
        </section>

        <hr class="rule"/>

        <section class="lftr-archive">
          <div class="wrap">
            <div class="section-head">
              <p class="eyebrow">In this feed</p>
            </div>

            <div class="lftr-list">
              <xsl:for-each select="/rss/channel/item">
                <article class="lftr-item">
                  <a class="lftr-item-link">
                    <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                    <p class="lftr-when">
                      <!-- pubDate is RFC-822: "Wed, 05 Aug 2026 00:00:00 -0500".
                           XSLT 1.0 has no date handling, so take the day part. -->
                      <xsl:value-of select="substring(pubDate, 1, 16)"/>
                    </p>
                    <div class="lftr-item-body">
                      <h2><xsl:value-of select="title"/></h2>
                      <p class="lftr-excerpt"><xsl:value-of select="description"/></p>
                      <p class="lftr-more">Read <span aria-hidden="true">→</span></p>
                    </div>
                  </a>
                </article>
              </xsl:for-each>
            </div>
          </div>
        </section>

        <footer class="site-foot">
          <div class="wrap">
            <div class="col">
              <span class="fine">© Chris Kapulkin</span>
            </div>
            <div class="col">
              <a href="/blog/">All posts</a>
              <a href="/index.html">Home</a>
            </div>
          </div>
        </footer>

        <script src="/js/figures.js"></script>
        <script src="/js/site.js"></script>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
