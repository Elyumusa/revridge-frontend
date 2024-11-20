import React, { useState, useRef } from 'react';
import { BookOpen } from "lucide-react"
import { Input } from "../input"
import { Button } from '../button';
import axios from 'axios';

const SubscribeToNewsletter = () => {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault()
      // Here you would typically send the email to your backend
      if(!isValidEmail(email)){
        setErrorMessage('Invalid email address.');
        return;
      }
      try {
        const response= await axios.post('http://127.0.0.1:8000/email_list/',{email});
        //console.log(`status: ${response.status}`)
      if(response.status===201){
        setIsSubmitted(true)
        setErrorMessage('')
      }else{
        setErrorMessage('An error occurred. Please try again later.');
        setIsSubmitted(false)
      }
      //console.log("Email submitted:", email)
      } catch (error) {
        if (error.response && error.response.status === 400) {
          if (`${error.response.data}`.includes("Email is already on the waiting list")) {
            setErrorMessage(`Wow, so Great News........Your Email is already on our subscribers list, thank you once again for joining our prestigous community, check your email for further details😊`);
          }else{
          setErrorMessage(`${error.response.data}`);}
      } else {
          setErrorMessage(`An error occurred. Please try again later. ${error}`);
      }
      setIsSubmitted(false)
    }   
    }
    function isValidEmail(email){
      const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <BookOpen className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get the latest blog posts and market insights delivered directly to your inbox.
              </p>
              <div className="w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
              {errorMessage && <p>{errorMessage}</p>}
              {isSubmitted && (
                <p className="text-green-600 dark:text-green-400">Thank you for subscribing!</p>
              )}
              </div>
            </div>
          </div>
        </section>
  )
}

export default SubscribeToNewsletter
