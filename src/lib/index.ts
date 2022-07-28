export interface Topic {
  title: string;
  image: {
    type: string;
    src: string;
    alt: string;
  };
}

export interface TopicExt extends Topic {
  content: {
    importance: string;
    solutions: string;
  };
}
