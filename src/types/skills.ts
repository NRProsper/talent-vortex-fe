export interface Slide {
  id: number;
  category: string;
  logo: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface Category {
  id: string;
  name: string;
}
