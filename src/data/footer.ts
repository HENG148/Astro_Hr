export interface FooterData {
  companyInfo: {
    logo: string;
    description: string;
    followCount: number;
    socialLinks: SocialLink[];
    copyright: string;
  };
  contactInfo: {
    title: string;
    items: ContactItem[];
  };
  links: {
    privacyPolicy: string;
  }
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactItem {
  icon: string;
  content: string | string[];
}

export interface IconComponentProps {
  icon: string;
  className?: string;
}

export const footerData = {
  companyInfo: {
    logo: '/11.png',
    description: "Astro HR is Cambodia's #1 Job Matching Service Specialized in IT.",
    followCount: 10370,
    socialLinks: [
      {
        name: 'LinkedIn',
        url: '',
        icon: '/icon/linkedin.png'
      },
      {
        name: 'Facebook',
        url: 'https://web.facebook.com/rong.sokheng.96',
        icon: '/icon/facebook.png'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/__heng0_',
        icon: '/icon/instagram.png'
      },
      {
        name: 'Telegram',
        url: 'https://t.me.HenGApril',
        icon: '/icon/telegram1.png'
      },
      {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@heng.png',
        icon: '/icon/tik-tok1.png'
      },
    ],
    copyright: '2025 Astro HR ( Cambodia ) Co.., Ltd. All Right Reserved',
  },
  contactInfo: {
    title: 'Our Contacts',
    items: [
      {
        icon: 'location',
        content: '#12, Street 2001, Phum Papark Khang Tboung, Songkat Kakab, Khan Porsenchey, Phnom Penh, Cambodia'
      },
      {
        icon: 'phone',
        content: '+855 17 540 260'
      },
      {
        icon: 'email',
        content: 'rongsokheng148@gmail.com',
      },
      {
        icon: 'hours',
        content: ['Monday -- Friday', '8:00am - 6:00pm']
      }
    ]
  },
  links: {
    privacyPolicy: '/privacy-policy'
  }
}