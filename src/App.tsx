import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, Route
} from 'react-router-dom'
import RootLayout from './pages/layout'
import HomePage from './pages/page'
import SupportPage from './pages/support/page'
import StockPredictorPage from './pages/stock-predictor/page'
import CompliancePage from './pages/compliance/page'
import BlogPage from './pages/blog/page'
import AboutPage from './pages/about/page'
import NotFoundPage from './pages/notfound/NotFoundPage'
import ArticlePage from './pages/blog/article_page.jsx'
import DividendCalendar from './pages/dividendCalender/DividendCalender'
import DownloadAppPage from './pages/appPage/DownloadAppPage';
import StockTradingBot from './pages/tradingBot/tradingBot';
import FAQPage from './pages/faq/page';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='/stock-predictor' element={<StockPredictorPage />} />
        <Route path='/trading-bot' element={<StockTradingBot />} />
        <Route path='/compliance' element={<CompliancePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/article' element={<ArticlePage />} />
        <Route path='/div_calendar' element={<DividendCalendar />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/download' element={<DownloadAppPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
