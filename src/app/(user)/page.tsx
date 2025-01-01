
import { groq } from "next-sanity"
import { client } from "../../sanity/lib/client"
import Hero from "@/components/Hero"
import { Post } from "../../../type"
import Blogcontent from "@/components/Blogcontent"

const query = groq`*[_type == 'post']{
  _id,
  title,
  description,  // Post's description
  mainImage {
    asset->{
      _id,
      url   // Get the image URL
    }
  },
  author-> {
    name,
    image {
      asset->{
        _id,
        url   // Get the author image URL
      }
    }
  },
  categories[]-> {
    title
  }
}



`

export default async function Home() {
  // Fetch the posts from Sanity
  const posts = await client.fetch(query)

  return (
    <main>
      <Hero />
     
<div><Blogcontent posts={posts}/></div>
    </main>
  )
}
