import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/ui/home/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="page-hero min-h-[62vh]">
        <div className="site-container route-frame">
          <h1 className="font-[760] tracking-[-0.04em]">
            This page is off the map.
          </h1>
          <p className="section-copy mt-6">
            The link may have moved, or the address may be incomplete.
          </p>
          <Link className="store-action store-action--filled mt-8" to="/">
            <ArrowLeft size={18} />
            Back to Revridge
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
