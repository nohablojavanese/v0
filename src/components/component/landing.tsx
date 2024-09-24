// /**
// * This code was generated by v0 by Vercel.
// * @see https://v0.dev/t/jMfHfVC3WV8
// * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
// */

// /** Add fonts into your Next.js project:

// import { IBM_Plex_Sans } from 'next/font/google'
// import { Chivo } from 'next/font/google'

// ibm_plex_sans({
//   subsets: ['latin'],
//   display: 'swap',
// })

// chivo({
//   subsets: ['latin'],
//   display: 'swap',
// })

// To read more about using these font, please visit the Next.js documentation:
// - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
// - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
// **/
// import Link from "next/link"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// export function Landing() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link href="#" className="flex items-center justify-center" prefetch={false}>
//           <FeatherIcon className="h-6 w-6" />
//           <span className="sr-only">Quill Publishing</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Features
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Discover
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             Pricing
//           </Link>
//           <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
//             About
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Unlock Your Publishing Potential
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Quill Publishing is a powerful platform that empowers writers, creators, and publishers to bring
//                     their ideas to life. Effortlessly craft, format, and publish captivating content.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Link
//                     href="#"
//                     className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                     prefetch={false}
//                   >
//                     Get Started
//                   </Link>
//                   <Link
//                     href="#"
//                     className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                     prefetch={false}
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//               <img
//                 src="/placeholder.svg"
//                 width="550"
//                 height="550"
//                 alt="Hero"
//                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
//               />
//             </div>
//           </div>
//         </section>
//         <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Publishing Experience</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Quill Publishing offers a suite of powerful tools to help you create, format, and publish content with
//                   ease.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
//               <div className="flex flex-col justify-center space-y-4">
//                 <ul className="grid gap-6">
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Intuitive Editor</h3>
//                       <p className="text-muted-foreground">
//                         Craft your content with a user-friendly, distraction-free editor.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Formatting Options</h3>
//                       <p className="text-muted-foreground">
//                         Easily apply professional-grade formatting to your articles, books, and more.
//                       </p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="grid gap-1">
//                       <h3 className="text-xl font-bold">Powerful Analytics</h3>
//                       <p className="text-muted-foreground">
//                         Gain valuable insights into your content's performance and audience engagement.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//               <img
//                 src="/placeholder.svg"
//                 width="550"
//                 height="310"
//                 alt="Features"
//                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
//               />
//             </div>
//           </div>
//         </section>
//         <section id="discover" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discover</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Captivating Content</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Browse through a curated selection of trending articles, featured authors, and popular collections.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
//               <div className="flex flex-col justify-between space-y-4">
//                 <div>
//                   <h3 className="text-xl font-bold">Trending Now</h3>
//                   <ul className="mt-4 space-y-2">
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <FeatherIcon className="h-5 w-5" />
//                           <span>The Art of Storytelling</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <FeatherIcon className="h-5 w-5" />
//                           <span>Mastering SEO for Writers</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <FeatherIcon className="h-5 w-5" />
//                           <span>The Future of Digital Publishing</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Featured Authors</h3>
//                   <div className="mt-4 grid grid-cols-2 gap-4">
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <div className="text-center">
//                         <h4 className="text-sm font-medium">John Doe</h4>
//                         <p className="text-xs text-muted-foreground">Fiction Writer</p>
//                       </div>
//                     </Link>
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <Avatar>
//                         <AvatarImage src="/placeholder-user.jpg" />
//                         <AvatarFallback>JD</AvatarFallback>
//                       </Avatar>
//                       <div className="text-center">
//                         <h4 className="text-sm font-medium">Jane Doe</h4>
//                         <p className="text-xs text-muted-foreground">Lifestyle Blogger</p>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-between space-y-4">
//                 <div>
//                   <h3 className="text-xl font-bold">Featured Collections</h3>
//                   <ul className="mt-4 space-y-2">
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <FeatherIcon className="h-5 w-5" />
//                           <span>Inspiring Memoirs</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <FeatherIcon className="h-5 w-5" />
//                           <span>Thought-Provoking Essays</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href="#"
//                         className="group flex items-center justify-between rounded-md bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
//                         prefetch={false}
//                       >
//                         <div className="flex items-center space-x-2">
//                           - <FeatherIcon className="h-5 w-5" />
//                           <span>Poetic Masterpieces</span>
//                         </div>
//                         <ChevronRightIcon className="h-5 w-5 opacity-50 group-hover:opacity-100" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Popular Genres</h3>
//                   <div className="mt-4 grid grid-cols-2 gap-4">
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <BookIcon className="h-8 w-8" />
//                       <h4 className="text-sm font-medium">Fiction</h4>
//                     </Link>
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <FeatherIcon className="h-8 w-8" />
//                       <h4 className="text-sm font-medium">Poetry</h4>
//                     </Link>
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <PenIcon className="h-8 w-8" />
//                       <h4 className="text-sm font-medium">Nonfiction</h4>
//                     </Link>
//                     <Link
//                       href="#"
//                       className="group flex flex-col items-center justify-center space-y-2 rounded-md bg-background px-4 py-4 transition-colors hover:bg-accent hover:text-accent-foreground"
//                       prefetch={false}
//                     >
//                       <BookmarkIcon className="h-8 w-8" />
//                       <h4 className="text-sm font-medium">Memoir</h4>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }


// function BookmarkIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
//     </svg>
//   )
// }


// function ChevronRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9 18 6-6-6-6" />
//     </svg>
//   )
// }


// function FeatherIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
//       <path d="M16 8 2 22" />
//       <path d="M17.5 15H9" />
//     </svg>
//   )
// }


// function PenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//     </svg>
//   )
// }
