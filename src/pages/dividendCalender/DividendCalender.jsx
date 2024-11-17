"use client"

import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, AlertTriangle, AppleIcon, PlayIcon, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import axios from "axios";
import { Input } from '@/components/ui/input'

// Mock data for dividends
const mockDividends = [
  { id: 1, company: "Apple Inc.", symbol: "AAPL", amount: 0.24, paymentDate: "2024-05-15", ex_date: "2024-05-11" },
  { id: 2, company: "Microsoft Corporation", symbol: "MSFT", amount: 0.68, paymentDate: "2024-05-10", ex_date: "2024-05-06" },
  { id: 3, company: "Johnson & Johnson", symbol: "JNJ", amount: 1.19, paymentDate: "2024-05-22", ex_date: "2024-05-18" },
  { id: 4, company: "Procter & Gamble Co.", symbol: "PG", amount: 0.94, paymentDate: "2024-05-17", ex_date: "2024-05-13" },
  { id: 5, company: "Coca-Cola Company", symbol: "KO", amount: 0.46, paymentDate: "2024-05-30", ex_date: "2024-05-26" },
]

export default function DividendCalendar() {
  let currentDate= new Date();
  currentDate.setDate(1)
  const [date, setDate] = useState(currentDate)
  const [dividends, setDividends]=useState([])
  const [loading,setLoading]=useState(true);
  const [searchTerm, setSearchTerm] = useState("")

  /*const filteredDividends = mockDividends.filter(dividend => 
    new Date(dividend.paymentDate).getMonth() === date.getMonth() &&
    new Date(dividend.paymentDate).getFullYear() === date.getFullYear()
  )*/
  useEffect(()=>{
    const fetchDividends= async (params)=>{
        const mainURL=process.env.REACT_APP_REVRIDGE_BACKEND_URL;
        const apiUrl=`${mainURL}/api/div_calendar/?start=${date.toLocaleDateString('en-CA')}`;
        try {
            const result=await axios.get(apiUrl)
            const data=result.data
            if ('cash_dividends' in data && data['cash_dividends'].length!==0) {
                console.log(`dividend: ${data['cash_dividends'][0].ex_date}`)
                setDividends(data['cash_dividends'])
            }else{
                setDividends([])
            }
            
          } catch (error) {
            setDividends([])
            console.log(`Error: ${error}`);
          }finally{
            setLoading(false);
          }
    }
    fetchDividends();

  },[date])
  const handleSearch = () => {
    // In a real application, this would trigger an API call or filter the data
    console.log("Searching for:", searchTerm)
    const fetchDividends= async (params)=>{
      const apiUrl=`${mainURL}/api/div_cal_stock/?query=${searchTerm}`;
      try {
          const result=await axios.get(apiUrl)
          const data=result.data
          if ('cash_dividends' in data && data['cash_dividends'].length!==0) {
              console.log(`dividend in search: ${data['cash_dividends'][0].ex_date}`)
              setDividends(data['cash_dividends'])
          }else{
              setDividends([])
          }
          
        } catch (error) {
          setDividends([])
          console.log(`Error: ${error}`);
        }finally{
          setLoading(false);
        }
  }
  fetchDividends();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Understanding Dividends</CardTitle>
          <CardDescription className="text-lg">Your Gateway to Passive Income</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              Imagine you own a slice of a successful company. Now, what if that company decided to share its profits with you? That's essentially what a dividend is!
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When a company earns profits, it can choose to reinvest that money back into the business or distribute some of it to its shareholders. This distribution is called a dividend. It's like a "thank you" payment for believing in the company and investing your money.
            </p>
            <p className="text-lg leading-relaxed">
              Dividends are typically paid out regularly, often quarterly, and can provide a steady stream of income for investors. It's one of the ways you can earn money from stocks without having to sell your shares. Pretty cool, right?
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search for Stock Dividends</CardTitle>
          <CardDescription>Enter a stock symbol to find its dividend information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter stock symbol (e.g., AAPL)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dividend Calendar</CardTitle>
          <CardDescription>View upcoming dividend payments for your selected month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "MMMM yyyy") : <span>Pick a month</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    console.log(`newDate: ${newDate.toLocaleDateString('en-CA')}`)
                    newDate.setDate(1);
                    newDate && setDate(newDate)}}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              Showing dividends for {format(date, "MMMM yyyy")}
            </p>
          </div>

          {dividends.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Date</TableHead>
                    <TableHead>Ex-Dividend Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dividends.map((dividend) => (
                    <TableRow key={dividend.id}>
                      <TableCell className="font-medium">{dividend.symbol}</TableCell>
                      <TableCell>{dividend.symbol}</TableCell>
                      <TableCell>${dividend.rate.toFixed(2)}</TableCell>
                      <TableCell>{format(new Date(dividend.payable_date), "MMMM d, yyyy")}</TableCell>
                      <TableCell>{format(new Date(dividend.ex_date), "MMMM d, yyyy")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (searchTerm!=""?<p className="text-center text-muted-foreground py-4">The company you searched for either does not exist or was incorrectly entered. 
          <br/>Try entering the company name correctly or the company ticker symbol e.g the Ticker symbol for "The Coca-Cola Company" is "KO"</p>:
            <p className="text-center text-muted-foreground py-4">No dividends found for the selected month.</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Column Definitions</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Company:</strong> The name of the company paying the dividend.</li>
                  <li><strong>Symbol:</strong> The stock ticker symbol for the company.</li>
                  <li><strong>Amount:</strong> The dividend amount per share in USD.</li>
                  <li><strong>Payment Date:</strong> The date when the dividend will be paid to shareholders.</li>
                  <li><strong>Ex-Dividend Date:</strong> The date on or after which a security trades without its dividend. To receive the dividend, you must own the stock before this date.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Alert variant="warning" className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Investing Warning</AlertTitle>
            <AlertDescription>
              Investing in stocks carries risks, including the potential loss of principal. Past performance does not guarantee future results. Be sure to research thoroughly and consider consulting with a financial advisor before making investment decisions.
            </AlertDescription>
          </Alert>

          <Card className="w-full mt-6">
            <CardHeader>
              <CardTitle>Start Earning Dividends Today</CardTitle>
              <CardDescription>
                Found a stock you're interested in? Buy shares and start earning dividends today using our app.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto" size="lg">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button className="w-full sm:w-auto" size="lg">
                  <PlayIcon className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardFooter>
      </Card>
    </div>
  )
}