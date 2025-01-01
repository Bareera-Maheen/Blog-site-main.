import { Image, Slug } from "sanity";

// types.ts
export interface Author {
    description: string;
    image:ImageData;
    name:string;
    slug:Slug;

  }
  
  export interface Category {
    title: string;
  }
  
  export interface ImageData {
    _type:"image"
    asset: {
      _ref: string;
    };
  }
  
  export interface Post {
    title: string;
    slug: Slug;
    content: string;
    description:string;
    author: Author;
    categories: Category[];
    mainImage: ImageData ;
  }
  