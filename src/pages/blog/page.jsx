import { useState,useEffect } from "react";
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { BookOpen, ChevronRight, Search, TrendingUp } from "lucide-react"
import axios from "axios";
import { Link } from 'react-router-dom';
import ArticleCard from "../../components/ui/ArticleCard";
import {useQuery} from 'react-query';
import SubscribeToNewsletter from "@/components/ui/blog/SubscribeToNewsletter";
export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Market Trends in 2024",
      excerpt: "An in-depth analysis of the current market trends and predictions for the coming year.",
      date: "May 15, 2024",
      author: "Jane Doe",
      category: "Market Analysis",
    },
    {
      title: "The Impact of AI on Stock Trading",
      excerpt: "Exploring how artificial intelligence is revolutionizing the stock trading industry.",
      date: "May 10, 2024",
      author: "John Smith",
      category: "Technology",
    },
    {
      title: "Beginner's Guide to Diversifying Your Portfolio",
      excerpt: "Learn the basics of portfolio diversification and why it's crucial for long-term investing success.",
      date: "May 5, 2024",
      author: "Alice Johnson",
      category: "Investing Basics",
    },
  ]
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
useEffect(()=>{
    const fetchJobs=async (params) => {
      const mainURL=import.meta.env.VITE_REVRIDGE_BACKEND_URL;
      const apiUrl=`${mainURL}/api/posts/`
    try {
      const result=await axios.get(apiUrl)
      const data=result.data
      console.log(`data: ${data['news'][0].author}`)
      setArticles(data['news'])
    } catch (error) {
      console.log(`Error: ${error}`);
    }finally{
      setLoading(false);
    }
    }
    fetchJobs();
    
  },[])
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revridge Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay informed with the latest insights, market analysis, and investing tips from our trusted news sources.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SubscribeToNewsletter/>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {["Market Analysis", "Technology", "Investing Basics", "Company News", "Economic Trends"].map(
                (category, index) => (
                  <Button key={index} variant="outline">
                    {category}
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Posts</h2>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input placeholder="Search blog posts" className="pl-8" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((post, index) => (
                <ArticleCard key={index} post={post}/>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>
                Load More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Revridge Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}



/*import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, ChevronRight, Search, TrendingUp } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Market Trends in 2024",
      excerpt: "An in-depth analysis of the current market trends and predictions for the coming year.",
      date: "May 15, 2024",
      author: "Jane Doe",
      category: "Market Analysis",
    },
    {
      title: "The Impact of AI on Stock Trading",
      excerpt: "Exploring how artificial intelligence is revolutionizing the stock trading industry.",
      date: "May 10, 2024",
      author: "John Smith",
      category: "Technology",
    },
    {
      title: "Beginner's Guide to Diversifying Your Portfolio",
      excerpt: "Learn the basics of portfolio diversification and why it's crucial for long-term investing success.",
      date: "May 5, 2024",
      author: "Alice Johnson",
      category: "Investing Basics",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <TrendingUp className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Revridge</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="/support">
            Support
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Revridge Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay informed with the latest insights, market analysis, and investing tips from our experts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Latest Posts</h2>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input placeholder="Search blog posts" className="pl-8" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} • {post.author}
                    </div>
                    <div className="text-sm font-medium">{post.category}</div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>
                Load More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {["Market Analysis", "Technology", "Investing Basics", "Company News", "Economic Trends"].map(
                (category, index) => (
                  <Button key={index} variant="outline">
                    {category}
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <BookOpen className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get the latest blog posts and market insights delivered directly to your inbox.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Revridge Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}*/