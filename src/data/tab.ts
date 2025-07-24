interface Tab {
  id: string;
  label: string;
  href: string;
}

export const tabsets = {
  default: [
    { id: "home", label: "Home", href: "/" },
    { id: 'about', label: "About", href: '/about' },
    { id: "login", label: "Login", href: "/login"},
  ] as const,
  auth: [
    { id: 'login', label: "Login", href: "/login" },
    {id: "astro-hr", label: "Astro HR", href: "/astro-hr"}
  ] as const
}

export type TabSetKey = keyof typeof tabsets;