
import { groq } from "next-sanity"
import { client } from "../../sanity/lib/client"
import Hero from "@/components/Hero"
//import { Post } from "../../../type"
import Blogcontent from "@/components/Blogcontent"

const query = groq`*[_type == 'post']{
  _id,
  title,
  description,
  mainImage {
    asset -> { url }
  },
  author -> {
    name,
    image { asset -> { url } }
  },
  categories[] -> {
    title
  },
  publishedAt 
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
