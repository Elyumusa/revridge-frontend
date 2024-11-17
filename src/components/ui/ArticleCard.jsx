import {useState,React} from 'react'
import {FaMapMarker} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle }  from './card';


const ArticleCard = ({post}) => {
  return (
    post.content === "" ?(<a href={post.url} target="_blank" rel="noopener noreferrer"><Card>
    <CardHeader>
      <CardTitle>{post.headline}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-500 dark:text-gray-400">{post.headline}</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {post.created_at} • {post.author}
      </div>
      <div className="text-sm font-medium">{post.symbols}</div>
    </CardFooter>
  </Card></a>):(<Link to="/article" state={post}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.headline}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">{post.headline}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.created_at} • {post.author}
                    </div>
                    <div className="text-sm font-medium">{post.symbols.length>3?post.symbols.slice(0,3).join(', '):post.symbols.join(', ')}</div>
                  </CardFooter>
                </Card></Link>)
    
  )
}

export default ArticleCard
