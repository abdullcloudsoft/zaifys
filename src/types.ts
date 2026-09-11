export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'main' | 'bbq' | 'rice' | 'drinks';
  image: string;
  popular?: boolean;
  spicy?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}
