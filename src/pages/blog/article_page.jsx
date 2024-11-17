import React from 'react'
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useNavigate } from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom';
// Mock data for a single blog post
/*const blogPost = {
  id: 1,
  title: "Understanding Market Trends in 2024",
  content: `
    <p>The financial markets are constantly evolving, and staying ahead of the curve is crucial for investors. As we look towards 2024, several key trends are emerging that could shape the investment landscape.</p>
    
    <h2>1. The Rise of Sustainable Investing</h2>
    <p>Environmental, Social, and Governance (ESG) factors are becoming increasingly important to investors. Companies with strong ESG profiles are likely to see increased interest from both institutional and retail investors.</p>
    
    <h2>2. Artificial Intelligence in Finance</h2>
    <p>AI and machine learning are revolutionizing financial analysis and decision-making. From algorithmic trading to risk assessment, AI is becoming an indispensable tool in the financial sector.</p>
    
    <h2>3. Cryptocurrency and Blockchain</h2>
    <p>Despite volatility, cryptocurrencies and blockchain technology continue to gain traction. Institutional adoption and regulatory clarity could further legitimize this asset class.</p>
    
    <h2>4. Shift Towards Passive Investing</h2>
    <p>The trend towards passive investing, particularly through ETFs, is expected to continue. However, there's also growing interest in factor-based and smart beta strategies.</p>
    
    <h2>Conclusion</h2>
    <p>As we navigate the complex world of finance in 2024, staying informed about these trends will be crucial. Investors should remain adaptable and open to new opportunities while maintaining a balanced, long-term perspective.</p>
  `,
  date: "May 15, 2024",
  author: "Jane Doe",
  category: "Market Analysis",
}*/

const ArticlePage=() => {
    const location = useLocation();
    const blogPost = location.state;
    const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // This will navigate to the previous page
  }
    return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4" onClick={handleGoBack}>
        <ArrowLeft className="mr-2" size={20} />
        Back to Blog
      </Button>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 mb-8">
          <div className="flex items-center mr-4 mb-2">
            <Calendar size={16} className="mr-1" />
            <span>{blogPost.date}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <User size={16} className="mr-1" />
            <span>{blogPost.author}</span>
          </div>
          <div className="flex items-center mb-2">
            <Tag size={16} className="mr-1" />
            <span>{blogPost.category}</span>
          </div>
        </div>

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <div className="mt-8 pt-4 border-t">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <Button variant="outline">Twitter</Button>
            <Button variant="outline">Facebook</Button>
            <Button variant="outline">LinkedIn</Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ArticlePage