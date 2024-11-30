"use client"

import React, { useState, useCallback } from 'react'
import ReactConfetti from 'react-confetti'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios';
export default function DownloadAppButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
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
        console.log(`status: ${response.status}`)
      if(response.status===201){
        setIsSubmitted(true)
        setSuccessMessage(`Thank you for joining our waitlist! We'll notify ${email} when the app is ready.`)
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setIsDialogOpen(false)
      setEmail("")
      setSuccessMessage("")
    }, 5000)
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
    <div className="flex flex-col items-center">
      <Button 
        onClick={() => setIsDialogOpen(true)}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Download App
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>App Not Yet Available</DialogTitle>
            <DialogDescription>
              Our mobile and Android apps are still in development. Join our waitlist to be notified when they're ready!
            </DialogDescription>
          </DialogHeader>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage ? (
            <div className="text-center py-4">
              <p className="text-green-600 font-semibold">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="col-span-3"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Join Waitlist</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  )
}