type MediaTableItemSchema = {
  id: number;
  image: string;
  date: string;
  category: string;
  username: string;
  tags: string[];
  description: string;
};
type Content = {
  tm: string;
  en: string;
  ru: string;
};
type FAQItemSchema = {
  id: number;
  answer: Content;
  question: Content;
};
