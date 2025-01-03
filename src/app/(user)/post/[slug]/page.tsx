import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CommentSection from "@/components/CommentSection";


// Define Post interface without categories
// interface Post {
//   _id: string;
//   title: string;
//   description: string;
//   mainImage: { asset: { url: string } };
//   author: {
//     name: string;
//     image: { asset: { url: string } };
//   };
//   body: any;
//   publishedAt: string;
//   slug: { current: string };
// }

// Fetch post without categories field
const fetchPost = async (slug: string) => {
   

  const query = groq`*[_type == 'post' && slug.current in ["don-t-stuck-in-one-thing", "the-benefits-of-mindfulness-in-everyday-life"]] {
    _slug,
    title,
    description,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    body,  
    author->{
      name,
      image {
        asset->{
          _id,
          url
        }
      }
    }
  }
  
    `;

  const post = await client.fetch(query, { slug });

  if (!post || post.length === 0) {
    return null;
  }

  return post[0]; // Return the first post from the query
}

// Main Slug Component without categories rendering
const Slugmain = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchPost(params.slug);

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center font-extrabold text-7xl text-center">
        Post not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-xl mb-6">{post.description}</p>

      {post.mainImage?.asset?.url && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={1200}
          height={800}
          className="rounded-lg mb-6"
        />
      )}

      {post.author && (
        <div className="flex items-center mb-6">
          {post.author.image?.asset?.url && (
            <Image
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
          )}
          <h2 className="text-xl font-semibold">Written by {post.author.name}</h2>
        </div>
      )}

      <div className="prose">
        <h3 className="text-lg font-semibold">Body:</h3>
        <PortableText value={post.body} />
      </div>

      <p className="text-sm text-yellow-600">
                Published on:{post.publishedAt}
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <CommentSection/>
    </div>
  );
};

export default Slugmain;
