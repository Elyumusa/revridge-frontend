import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle, ArrowUpCircle, ArrowDownCircle, Minus } from 'lucide-react'
import axios from "axios";
import StockChart from '@/components/ui/StockChart';
export default function StockTradingBot() {
  const [ticker, setTicker] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [stockData, setStockData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulating API call to backend
    const mainURL=import.meta.env.VITE_TRADING_BOT_URL;
      const apiUrl=`${mainURL}/trading_bot/?symbol=${ticker}`;
      try {
          const result=await axios.get(apiUrl)
          const data=result.data.analysis_result
          const stock_quotes= result.data.stock_data
          console.log(`Data returned successfully: ${data.explanation}`);
          let action = data.buy==true?"Buy":
          data.sell==true?"Sell":data.hold==true?"Hold":"Hold";
          const chartData = stock_quotes.map(quote => ({
            "time": quote.time.split("T")[0], // Assuming 'time' is in a format compatible with your charting library
            "price": quote.close_price, // Replace 'price' with the actual field for the stock price
        }));
        setStockData(chartData); 
          //const formattedText = result.analysis.replace(/\n/g, '<br />'); 
          setResult({
            action:action,
            analysis:data.explanation,
            data: [
                { name: 'Jan', price: 4000 },
                { name: 'Feb', price: 3000 },
                { name: 'Mar', price: 5000 },
                { name: 'Apr', price: 4800 },
                { name: 'May', price: 6000 },
                { name: 'Jun', price: 5500 },
              ]
          })
        } catch (error) {
          //setDividends([])
          //console.log(`Error: ${error}`);
        }finally{
          setLoading(false);
        }
    // setTimeout(() => {
    //   setResult({
    //     action: 'Buy',
    //     analysis: 'Based on recent market trends and company performance, our model suggests a strong buy recommendation for this stock. The company has shown consistent growth in revenue and earnings, and the current market conditions appear favorable for further appreciation.',
    //     data: [
    //       { name: 'Jan', price: 4000 },
    //       { name: 'Feb', price: 3000 },
    //       { name: 'Mar', price: 5000 },
    //       { name: 'Apr', price: 4800 },
    //       { name: 'May', price: 6000 },
    //       { name: 'Jun', price: 5500 },
    //     ]
    //   })
    //   setLoading(false)
    // }, 1000)
  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Stock Trading Bot</h1>
        
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter ticker symbol (e.g., AAPL)"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              required
            />
            <button
              className="flex-shrink-0 bg-gray-900 hover:bg-gray-700 border-gray-900 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </form>

        {result && (
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                {result.action === 'Buy' && <ArrowUpCircle className="text-green-500 mr-2" size={24} />}
                {result.action === 'Sell' && <ArrowDownCircle className="text-red-500 mr-2" size={24} />}
                {result.action === 'Hold' && <Minus className="text-yellow-500 mr-2" size={24} />}
                <h2 className="text-2xl font-bold">{result.action}</h2>
              </div>
              <p className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: result.analysis.replace(/\n/g, '<br />')}} />
              {/* <p className="text-gray-600 mb-6">{result.analysis}</p> */}
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                <StockChart data={stockData} /> 
                  {/* <LineChart data={result.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart> */}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Trading Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <AlertCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Always do your own research before making investment decisions.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Diversify your portfolio to manage risk.</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Set stop-loss orders to limit potential losses.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}