"use client"

import React, { useState, useEffect } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import Tesla  from '../../assets/logos/tesla.svg'
import Apple  from '../../assets/logos/Apple.svg?url'
import Spot  from '../../assets/logos/spotify.svg'
import MSFT  from '../../assets/logos/microsoft.svg'
import Nvidia  from '../../assets/logos/nvidia-7.svg'
import SBUX  from '../../assets/logos/starbucks.svg'
import Google  from '../../assets/logos/google.svg'
import Meta  from '../../assets/logos/meta.svg'
import Netflix  from '../../assets/logos/netflix.svg'

import axios from "axios";


const companies = [
  { id: 'TSLA', name: 'Tesla', logo: `${Tesla}?height=40&width=40` },
  { id: 'SBUX', name: 'Starbucks', logo: `${SBUX}?height=40&width=40` },
  { id: 'NFLX', name: 'Netflix', logo: `${Netflix}?height=40&width=40` },
  { id: 'NVDA', name: 'Nvidia', logo: `${Nvidia}?height=40&width=40` },
  { id: 'MSFT', name: 'Microsoft', logo: `${MSFT}?height=40&width=40` },
  { id: 'SPOT', name: 'Spotify', logo: `${Spot}?height=40&width=40` },
  { id: 'AAPL', name: 'Apple', logo: `${Apple}?height=40&width=40` },
  { id: 'GOOGL', name: 'Google', logo: `${Google}?height=40&width=40` },
  { id: 'META', name: 'Meta', logo: `${Meta}?height=40&width=40` },
]

const timeFrames = [
  { id: 1, label: '1 Year' },
  { id: 2, label: '2 Years' },
  { id: 3, label: '3 Years' },
  { id: 4, label: '4 Years' },
]

export default function InvestmentCalculator() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0])
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1)
  const [investmentAmount, setInvestmentAmount] = useState(10)
  const [percentageGain, setPercentageGain] = useState(0)
  const [finalAmount, setfinalAmount] = useState(10)
  const [loading,setLoading]=useState(true);
  const [returnedData,setReturnedData]=useState({});
  let selectedDate = new Date();
  let year = selectedDate.getFullYear();
    let newYear = year - selectedTimeFrame;
    selectedDate.setFullYear(newYear);
    console.log(`Date: ${selectedDate.toLocaleDateString('en-CA')}`)
  useEffect(()=>{
    
    const fetchReturns= async (params)=>{
        const mainURL=import.meta.env.VITE_REVRIDGE_BACKEND_URL;
        const apiUrl=`${mainURL}/api/investment_calculator/?start=${selectedDate.toLocaleDateString('en-CA')}&symbol=${selectedCompany.id}&amount=${investmentAmount}`;
        try {
            const result=await axios.get(apiUrl)
            const data=result.data
            console.log(`perc: ${data['split']} ${typeof data['old_price']}`);
            setReturnedData(data)
            let f=calculateReturns(investmentAmount,data['split'],data['latest_price'],data['old_price'])
            let p = ((f - investmentAmount) / investmentAmount) * 100
            setPercentageGain(p)
            setfinalAmount(f)
          } catch (error) {
            console.log(`Error: ${error}`);
          }finally{
            setLoading(false);
          }
    }
    fetchReturns();

  },[selectedCompany, selectedTimeFrame])
  // Mock calculation - replace with actual calculation logic
  const calculateReturns = (amount,split,latest_price,old_price) => {
    // This is a mock calculation - replace with actual historical data and calculations
    let shares_at_old_price=amount/parseFloat(old_price)
    let shares_after_split=split*shares_at_old_price
    let new_amount=shares_after_split*parseFloat(latest_price)
    let perc_increase=100*((new_amount-amount)/amount)
    console.log(`Follow: ${new_amount}, ${parseFloat(latest_price)} ${parseFloat(old_price)}`)
    return new_amount
  }

   //finalAmount = calculateReturns(investmentAmount, selectedTimeFrame, selectedCompany)
   //percentageGain = ((finalAmount - investmentAmount) / investmentAmount) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        What if you invested in...
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-8">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => 
                setSelectedCompany(company)}
            className={`p-4 rounded-lg transition-all ${
              selectedCompany.id === company.id
                ? 'bg-gray-100 dark:bg-gray-800'
                : 'hover:bg-gray-50 dark:hover:bg-gray-900'
            }`}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-10 h-10 mx-auto"
            />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {timeFrames.map((timeFrame) => (
          <Button
            key={timeFrame.id}
            variant={selectedTimeFrame === timeFrame.id ? "default" : "outline"}
            onClick={() => {
                let year = selectedDate.getFullYear();
                let newYear = year - timeFrame.id;
                selectedDate.setFullYear(newYear);
                console.log(`Date: ${selectedDate}`)
                setSelectedTimeFrame(timeFrame.id)}}
          >
            {timeFrame.label}
          </Button>
        ))}
      </div>

      <Card className="p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-medium">If you invested</span>
          <span className="text-lg font-bold">${investmentAmount}</span>
        </div>

        <Slider
          value={[investmentAmount]}
          onValueChange={(value) => {
            console.log(`${parseFloat(value[0])} ${returnedData['split']}`)
            let f=calculateReturns(parseFloat(value[0]),returnedData['split'],returnedData['latest_price'],returnedData['old_price'])
            let p = ((f - value[0]) / value[0]) * 100
            if(parseFloat(value[0])<1){
                setPercentageGain(0)}
            else{
                setPercentageGain(p)}
            setfinalAmount(f)
            setInvestmentAmount(value[0])}}
          max={1000}
          step={10}
          className="mb-8"
        />

        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            You would have
          </p>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">
              ${Math.round(finalAmount)}
            </span>{percentageGain.toFixed(2)<1?<span className="flex items-center text-red-500 text-lg">
              <ArrowDown className="mr-1" />
              {percentageGain.toFixed(2)}%
            </span>:<span className="flex items-center text-emerald-500 text-lg">
              <ArrowUp className="mr-1" />
              {percentageGain.toFixed(2)}%
            </span>

            }
            
          </div>
        </div>
      </Card>
    </div>
  )
}