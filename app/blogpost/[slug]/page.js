
import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {
  // const slug = (await params).slug
  // const blog = {
  //   title: "Sample Blog Title",
  //   author: "John Doe",
  //   description: "This is a sample blog post.",
  //   date: "2023-10-01",
  //   content:
  //     "<p>This is <strong>dangerously</strong> set inner HTML content.</p>",
  // };

   const filepath=`content/${params.slug}.md`
   if(!fs.existsSync(filepath))
   {
      notFound()
      return
   }
   
    const fileContent=fs.readFileSync(filepath,"utf-8")
   const{content,data} = matter(fileContent)

   const processor= unified()
   .use(remarkParse)
   .use(remarkRehype)
   .use(rehypeDocument, {title: '👋🌍'})
   .use(rehypeFormat)
   .use(rehypeStringify)
   .use(rehypePrettyCode,{
    theme:"github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
   })
   
   const htmlContent=(await processor.process(content)).toString()

  return (
    <div className="max-w-5xl mx-auto p-6  rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className=" mb-2">
        Description: <span className="italic">&quot;{data.description}&quot;</span>
      </p>
      
      <div className="flex gap-2">
      <p className=" mb-2">By 
        Author: <span className="font-semibold">{data.author}</span>
      </p>
      <p className=" mb-4">
        Date: <span className="font-light">{data.date}</span>
      </p>
      </div>
      
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}