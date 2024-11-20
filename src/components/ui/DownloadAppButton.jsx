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

export default function DownloadAppButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    // Simulate email submission
    //console.log("Email submitted:", email)
    setSuccessMessage(`Thank you for joining our waitlist! We'll notify ${email} when the app is ready.`)
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setIsDialogOpen(false)
      setEmail("")
      setSuccessMessage("")
    }, 5000)
  }, [email])

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