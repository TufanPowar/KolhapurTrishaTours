export interface LocationSeoPage {
  slug: string;
  title: string;
  heading: string;
  description: string;
  keywords: string;
  content: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string;
  content: string[];
  publishedOn: string;
}
