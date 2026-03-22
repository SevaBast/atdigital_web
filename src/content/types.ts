// =============================================
// Content Type Definitions
// =============================================

export interface NavLink {
  name: string;
  href: string;
}

export interface NavigationContent {
  logo: string;
  links: NavLink[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    services: string;
    academia: string;
  };
  features: string[];
}

export interface PartnerLogo {
  name: string;
  image: string;
}

export interface PartnersContent {
  title: string;
  logos: PartnerLogo[];
}

export interface Service {
  name: string;
  icon: string;
  description: string;
  benefits: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  categories: ServiceCategory[];
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  media: { type: "image" | "video"; src: string };
}

export interface ProductsContent {
  title: string;
  subtitle: string;
  categories: ProductCategory[];
}

export interface ReferenceProject {
  name: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface ReferenceCategory {
  id: string;
  name: string;
  projects: ReferenceProject[];
}

export interface ReferencesContent {
  title: string;
  subtitle: string;
  categories: ReferenceCategory[];
}

export interface ContactInfo {
  company: string;
  address: string;
  phone: string;
  email: string;
  ico: string;
  dic: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  contactInfoTitle: string;
  contact: ContactInfo;
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
    };
    button: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    captchaLabel: string;
    captchaError: string;
  };
  mapCenter: {
    lat: number;
    lng: number;
  };
}

export interface Article {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readingTime: number;
  tags: string[];
  pdfUrl: string | null;
  content: string; // Markdown content
}

export interface AcademiaContent {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  filterByTags: string;
  allTags: string;
  readingTime: string;
  downloadPdf: string;
  articles: Article[];
}

export interface FooterContent {
  copyright: string;
  links: {
    privacy: string;
    terms: string;
  };
}

export interface SiteContent {
  navigation: NavigationContent;
  hero: HeroContent;
  partners: PartnersContent;
  services: ServicesContent;
  products: ProductsContent;
  references: ReferencesContent;
  about: AboutContent;
  academia: AcademiaContent;
  footer: FooterContent;
}
