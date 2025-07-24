import type { Metadata } from "next";

type PageMetadata = {
  title: string;
  description: string;
  favicon: string;
  ogImage?: string;
}

export const getPageMetadata = (pathname: string): Metadata => {
  const metadataMap: Record<string, PageMetadata> = {
    "/": {
      title: "Astro HR - IT Job Matching Service in Cambodia",
      description: "Welcome to our website",
      favicon: "/favicon-home.ico",
      ogImage: "/og-login.jpg"
    },
    '/login': {
      title: 'Log In - Astro HR',
      description: 'Access your personal dashboard',
      favicon: '/favicon-login.ico',
      ogImage: '/og-login.jpg'
    },
    '/register': {
      title: 'Register - Astro HR',
      description: 'Join our community today',
      favicon: '/favicon-register.ico',
      ogImage: '/og-register.jpg'
    },
    '/media': {
      title: 'Media Gallery',
      description: 'Browse our media collection',
      favicon: '/favicon-media.ico',
      ogImage: '/og-media.jpg'
    },
    '/about': {
      title: 'About Us',
      description: 'Learn about our organization',
      favicon: '/favicon-about.ico',
      ogImage: '/og-about.jpg'
    },
  }

  const defaultMetadata: PageMetadata = {
    title: 'Default Page',
    description: 'Page description',
    favicon: '/favicon-default.ico',
    ogImage: '/og-default.jpg'
  };

  const pageMetadata = metadataMap[pathname] || defaultMetadata;

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    icons: {
      icon: pageMetadata.favicon,
    },
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: pageMetadata.ogImage ? [{ url: pageMetadata.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: pageMetadata.ogImage ? [pageMetadata.ogImage] : undefined,
    },
  }
}