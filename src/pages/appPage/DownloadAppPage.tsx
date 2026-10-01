import { Play } from "lucide-react";
import Footer from "@/components/ui/home/Footer";
import HowExecutionWorks from "@/components/ui/home/HowExecutionWorks";
import { AppleMark } from "@/components/ui/StoreMarks";
import Reveal from "@/components/ui/home/Reveal";
import { appCutouts, appScreens } from "@/assets/appScreens";
import { PLAY_STORE_URL, TESTFLIGHT_URL } from "@/lib/storeLinks";

// The waitlist modal below (email capture -> /email_list/) is retired now that
// the iOS beta is public on TestFlight, but kept commented rather than deleted
// in case a future closed phase needs it again:
//
// import { FormEvent, useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { CheckCircle2, Loader2, X } from "lucide-react";
// import { getEmailValidationError, parseApiError } from "@/utils/errorHandler";
//
// function useWaitlistModal() {
//   const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [message, setMessage] = useState("");
//
//   const openerRef = useRef<HTMLButtonElement>(null);
//   const dialogRef = useRef<HTMLDivElement>(null);
//
//   function closeWaitlist() {
//     setIsWaitlistOpen(false);
//     setStatus("idle");
//     setMessage("");
//     setEmail("");
//     setName("");
//     openerRef.current?.focus();
//   }
//
//   // A modal needs an escape route and somewhere to put focus; without these the
//   // dialog traps keyboard users behind the page they came from.
//   useEffect(() => {
//     if (!isWaitlistOpen) return;
//     dialogRef.current?.focus();
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") closeWaitlist();
//     }
//     document.addEventListener("keydown", onKeyDown);
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.removeEventListener("keydown", onKeyDown);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [isWaitlistOpen]);
//
//   async function submitEmail(event: FormEvent) {
//     event.preventDefault();
//     const validationError = getEmailValidationError(email);
//     if (validationError) {
//       setStatus("error");
//       setMessage(validationError);
//       return;
//     }
//     setStatus("loading");
//     try {
//       const mainURL = import.meta.env.VITE_REVRIDGE_BACKEND_URL;
//       const response = await axios.post(`${mainURL}/email_list/`, {
//         email,
//         name,
//         source: "download_page",
//       });
//       if (response.status === 201) {
//         setStatus("success");
//         setMessage(
//           `You're on the list. We'll notify ${email} when the iOS beta is ready.`,
//         );
//       }
//     } catch (error) {
//       const errorMessage = parseApiError(error);
//       setStatus(
//         errorMessage.toLowerCase().includes("already") ? "success" : "error",
//       );
//       setMessage(
//         errorMessage.toLowerCase().includes("already")
//           ? "You're already on the iOS beta list."
//           : errorMessage,
//       );
//     }
//   }
//
//   return { isWaitlistOpen, setIsWaitlistOpen, email, setEmail, name, setName,
//     status, message, openerRef, dialogRef, closeWaitlist, submitEmail };
// }
//
// The modal markup itself used to render at the end of this component:
//
// {isWaitlistOpen && (
//   <div
//     className="fixed inset-0 z-[80] flex items-center justify-center bg-[#00322D]/55 p-4"
//     role="dialog"
//     aria-modal="true"
//     aria-labelledby="waitlist-title"
//     onMouseDown={(event) => {
//       if (event.currentTarget === event.target) closeWaitlist();
//     }}
//   >
//     <div
//       ref={dialogRef}
//       tabIndex={-1}
//       className="w-full max-w-md rounded-[14px] border border-border bg-white p-6 shadow-[0_28px_80px_rgba(0,50,45,.28)] outline-none"
//     >
//       <div className="flex items-start justify-between gap-4">
//         <div>
//           <h2 id="waitlist-title" className="text-2xl font-[730]">
//             Join the iOS beta
//           </h2>
//           <p className="mt-2 text-sm leading-6 text-muted-foreground">
//             We'll email you when a beta place is available.
//           </p>
//         </div>
//         <button
//           onClick={closeWaitlist}
//           aria-label="Close"
//           className="rounded-lg p-2 text-muted-foreground hover:bg-secondary"
//         >
//           <X size={19} />
//         </button>
//       </div>
//       {status === "success" ? (
//         <div className="mt-8 rounded-[10px] border border-[#2E7D32]/25 bg-[#2E7D32]/5 p-5 text-[#2E7D32]">
//           <CheckCircle2 size={24} />
//           <p className="mt-3 leading-6">{message}</p>
//           <button className="store-action mt-6 w-full" onClick={closeWaitlist}>
//             Done
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={submitEmail} className="mt-7">
//           <label className="block text-sm font-[650]">
//             Name{" "}
//             <span className="font-normal text-muted-foreground">(optional)</span>
//             <input
//               className="mt-2 h-12 w-full rounded-[10px] border border-input px-4 outline-none focus:border-primary"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//               autoComplete="name"
//             />
//           </label>
//           <label className="mt-5 block text-sm font-[650]">
//             Email
//             <input
//               className="mt-2 h-12 w-full rounded-[10px] border border-input px-4 outline-none focus:border-primary"
//               type="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               autoComplete="email"
//               required
//             />
//           </label>
//           {status === "error" && (
//             <p className="mt-4 text-sm text-[#B71C1C]" role="alert">
//               {message}
//             </p>
//           )}
//           <button
//             className="store-action store-action--filled mt-6 w-full"
//             disabled={status === "loading"}
//           >
//             {status === "loading" ? (
//               <>
//                 <Loader2 className="animate-spin" size={17} />
//                 Joining…
//               </>
//             ) : (
//               "Join the beta"
//             )}
//           </button>
//         </form>
//       )}
//     </div>
//   </div>
// )}

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <header className="page-hero border-b border-border">
          <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1>
                Your wealth journey, in your pocket.
              </h1>
              <p className="section-copy mt-6">
                Learn the basics, make a plan, invest on the LuSE, and keep
                track of everything you are building.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="pill-btn pill-btn--white"
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Play size={19} />
                  Get Android
                </a>
                {/* Was a button opening the waitlist modal (see the commented
                    block above); the beta is public now, so this links
                    straight to TestFlight. */}
                <a
                  className="pill-btn pill-btn--white"
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AppleMark size={19} />
                  Get iOS Beta
                </a>
              </div>
              <p className="mt-5 text-sm">
                Android is available now. iOS is in beta.
              </p>
            </div>
            {/* Transparent cutouts: the flat grey plate of the standard device
                shots read as a hole against the teal hero. */}
            <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center">
              <img
                src={appCutouts.invest.src}
                alt={appScreens.invest.alt}
                width={appCutouts.invest.width}
                height={appCutouts.invest.height}
                className="relative z-10 w-[47%] max-w-[250px] -rotate-2 drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
              />
              <img
                src={appCutouts.grow.src}
                alt={appScreens.grow.alt}
                width={appCutouts.grow.width}
                height={appCutouts.grow.height}
                className="-ml-[6%] mt-10 w-[47%] max-w-[250px] translate-y-6 rotate-2 drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
              />
            </div>
          </div>
        </header>

        <section className="bg-white py-20 md:py-28">
          <div className="site-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="display-lg mx-auto max-w-[14ch]">
                One app. Three connected decisions.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                ["01", "Learn before the decision", "Plain-language lessons help you understand the basics and the risks."],
                ["02", "Invest when you are ready", "Explore LuSE-listed companies and submit eligible orders through licensed broker partners."],
                ["03", "Grow the whole picture", "Set goals, use planning tools, and track your net worth in the same journey."],
              ].map(([number, title, copy], index) => (
                <Reveal key={number} delay={index * 0.08}>
                  <div className="h-full rounded-[28px] bg-[#F5F7F6] p-8">
                    <span className="lime-marker tabular grid h-12 w-12 place-items-center rounded-full text-sm font-[760]">{number}</span>
                    <h3 className="mt-8 text-xl font-[680] tracking-[-.025em]">{title}</h3>
                    <p className="mt-3 leading-7 text-[color:var(--meta-ink)]">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <HowExecutionWorks />
      </main>
      <Footer />
      {/* The waitlist modal that used to render here is commented out at the
          top of this file, alongside its state and handlers. */}
    </div>
  );
}
