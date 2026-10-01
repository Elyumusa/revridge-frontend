import Navbar from '../components/ui/Navbar';
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';
import PageTitle from '../components/PageTitle';

export default function RootLayout() {
  return (
    <>
      <PageTitle />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[10px] focus:bg-primary focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}
