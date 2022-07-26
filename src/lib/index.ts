export interface Topic {
  title: string;
  image: {
    type?: string;
    src: string;
    alt?: string;
  };
  importance: string;
  help: string;
  seeAlso: string[];
}
