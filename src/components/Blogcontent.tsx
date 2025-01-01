import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Assuming this is the correct path
import { Post as PostType } from "../../type"; // Adjust path if needed

interface Post {
  _id: string;
  title: string;

  mainImage: { asset: { url: string } }; 
  // Adjust based on your Sanity schema
  description:string;
  author:{
    name:string;
    image:{ asset: { url: string } };

  },
  categories:{
    title:string;
  },
}

const BlogContent = ({ posts }: { posts: Post[] }) => {
  return (
    <main className="bg-yellow-600 py-20 px-10 flex  border-stone-950 border flex-col gap-10 text-black">
      {posts.map((post) => (
        <div key={post._id} className="space-y-4 border border-zinc-100 rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <div className="flex  gap-10 h-[500px]">
          <Image
            src={urlFor(post?.mainImage).url() || "/fallback-image.jpg"} // Fallback image
            alt={post.title}
            width={50}
            height={50} // Adjust for the desired aspect ratio
            className="rounded-lg"
            layout="responsive" // Makes the image responsive
          />
          <div className="flex flex-col  space-y-20">
           <h2 className="w-[700px] ">{post. description}</h2>
        
        <div className="flex h-[100px] w-[100px]"><h2>{post.author.name}</h2>
        
       <h3><Image
            src={urlFor(post?.author.image).url() || "/fallback-image.jpg"} // Fallback image
            alt={post.title}
            width={50}
            height={50} // Adjust for the desired aspect ratio
            className="rounded-full"
            layout="responsive" // Makes the image responsive
          /></h3></div></div>
        </div> 
 </div>
      ))}
    </main>
  );
};

export default BlogContent;
