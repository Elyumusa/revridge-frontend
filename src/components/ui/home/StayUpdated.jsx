import React, { useState, useRef } from 'react';
import { AppleIcon, BarChart3, BookOpen, DollarSign, Lock, Mail, PlayIcon, Smartphone, TrendingUp, Users } from "lucide-react"
import { Input} from '../input';
import { Button} from '../button';
import axios from 'axios';
const StayUpdated = ({stayUpdatedSectionRef}) => {
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
        const mainURL=import.meta.env.VITE_REVRIDGE_BACKEND_URL;
        const response= await axios.post(`${mainURL}/email_list/`,{email});
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
            setErrorMessage(`Wow, so Great News........Your Email is already on our waiting list, thank you once again for embarking on your finance journey with us:), check your email for further details😊`);
          }else{
          setErrorMessage(`${error.response.data}`);}
      } else {
          setErrorMessage(`An error occurred. Please try again later. ${error}`);
      }
      setIsSubmitted(false)
      setIsSubmitted(false)
    }   
    }
    function isValidEmail(email){
      const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  return (
    <section ref={stayUpdatedSectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Mail className="h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join our email list to be the first to know when we launch and receive exclusive investment insights.
              </p>
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
                <p className="text-green-600 dark:text-green-400">Thank you for subscribing and embarking on your finance journey with us, check your email for further details😊!</p>
              )}
            </div>
          </div>
        </section>
  )
}

export default StayUpdated
