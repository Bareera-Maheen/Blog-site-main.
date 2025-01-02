import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Assuming this is the correct path
//import { Post as PostType } from "../../type"; // Adjust path if needed
import Link from "next/link";


interface Post {
  _id: string;
  title: string;
  description: string;
  mainImage: { asset: { url: string } };
  author: {
    name: string;
    image: { asset: { url: string } };
  };
  body:string;
  
  categories: { title: string }[];
  publishedAt: string; 
  slug: { current: string }; 
}

const BlogContent = ({ posts }: { posts: Post[] }) => {
  return (
    <main className="bg-yellow-600 py-20 px-10 flex flex-col gap-10 text-black relative">
      {posts.map((post) => (
        <Link href={{pathname:`/post/${post?.slug?.current}`,query:{slug:post.slug?.current}}}
          key={post._id}
          className="space-y-4 border border-zinc-100 lg:w-full xl:w-full rounded-lg md:w-3/5 group overflow-hidden"
        >
          <h2 className="text-4xl font-bold hover:underline text-center">{post.title}</h2>
          <div className="relative flex flex-col md:flex-row gap-10">
            <div className="group overflow-hidden relative h-[500px]">
              <Image
                src={urlFor(post?.mainImage).url() || "/fallback-image.jpg"} // Fallback image
                alt={post.title}
                width={300} // Adjust width for a larger, responsive image
                height={400} // Adjust height for a proper aspect ratio
                className="rounded-2xl object-cover group-hover:scale-105 duration-500"
                layout="intrinsic" // Maintains aspect ratio based on width/height
              />
              <div className="absolute bottom-0 left-0 w-full h-full group-hover:hidden" />
              <div className="absolute hidden group-hover:flex items-center justify-center left-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg duration-500  ">
                <p className="text-lg font-semibold text-white">Click here to read more</p>
              </div>
            </div>

            {/* Description & Author */}
            <div className="flex flex-col space-y-6 md:w-2/5 p-4">
              {/* Categories */}
              <p className="text-xl bg-black text-white font-semibold cursor-pointer hover:text-3xl hover:text-center p-2 rounded-full">
                {post.categories.map((category) => category.title).join(", ")}
              </p>

              {/* Post Description */}
              <p className="text-lg text-gray-900">{post.description}</p>

              {/* Author Section */}
              <div className="flex items-center space-x-4">
                <Image
                  src={urlFor(post?.author.image).url() || "/fallback-image.jpg"} // Fallback image
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{post.author.name}</h3>
                </div>
              </div>

              {/* Published Date */}
              <p className="text-sm text-black">
                Published on:{" "}
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

          </div>
        </Link>
       
      ))}
      
    </main>
  );
};

export default BlogContent;
