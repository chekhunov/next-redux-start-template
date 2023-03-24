require('dotenv').config()

const siteUrl = process.env.NEXT_PUBLIC_APP

const transform = (config, path) => {
  const lastmod = config.autoLastmod ? new Date().toISOString() : undefined

  const transformConfig = {
    loc: path,
    lastmod,
    changefreq: config.changefreq
  }

  if (path === '/') {
    return {
      ...transformConfig,
      priority: 1
    }
  }

  if (path === '/search') {
    return {
      ...transformConfig,
      priority: 0.9
    }
  }

  if (
    path === '/professionals' ||
    path === '/subscription' ||
    path === '/careers'
  ) {
    return {
      ...transformConfig,
      priority: 0.7
    }
  }

  if (
    path === '/contact-us' ||
    path === '/about-us' ||
    path === '/cancellation-policy' ||
    path === '/help-centre' ||
    path === '/subscribe-to-updates' ||
    path === '/media'
  ) {
    return {
      ...transformConfig,
      priority: 0.6
    }
  }

  return {
    ...transformConfig,
    priority: config.priority
  }
}

module.exports = {
  siteUrl,
  changefreq: 'monthly',
  priority: 0.5,
  sitemapSize: 1000,
  generateRobotsTxt: true,
  exclude: [
    '/profile/*',
    '/reset-password*',
    '/forgot-password*',
    '/email-confirmation',
    '/verify'
  ],
  transform,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/professional-account-pages.xml`,
      `${siteUrl}/media-pages.xml`,
      `${siteUrl}/static-pages.xml`
    ]
  }
}
