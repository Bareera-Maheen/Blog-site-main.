import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CommentSection from "@/components/CommentSection";

// Define the Author and Post interfaces
interface Author {
  name: string;
  image: {
    asset: {
      url: string;
    };
  };
}

interface Post {
  _id: string;
  title: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: any; // PortableText value
  publishedAt: string;
  slug: {
    current: string;
  };
  author: Author;
}

// Fetch post based on slug
const fetchPost = async (slugs: string[]) => {
  const query = groq`
    *[_type == 'post' && slug.current in ["the-benefits-of-mindfulness-in-everyday-life", "don-t-stuck-in-one-thing"]] {
      _id,
      title,
      description,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      body,
      publishedAt,
      slug,
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

  const posts = await client.fetch(query, { slugs });

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts; // Return the posts from the query
};

// Params interface for dynamic route
interface Params {
  params: {
    slug: string; // This will be passed via dynamic routing
  };
}

// Main component
const Slugmain = async ({ params }: Params) => {
  const slugs = [params.slug, "the-benefits-of-mindfulness-in-everyday-life", "don-t-stuck-in-one-thing"];
  
  const posts = await fetchPost(slugs);

  if (!posts) {
    return (
      <div className="h-screen flex items-center justify-center font-extrabold text-7xl text-center">
        Post not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {posts.map((post: Post) => (
        <div key={post._id}>
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
            Published on:{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Comment section */}
          <CommentSection />
        </div>
      ))}
    </div>
  );
};

export default Slugmain;
 