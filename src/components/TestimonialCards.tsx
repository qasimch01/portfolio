'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    "quote": "Partnering with Everse revolutionized our web presence and streamlined our mobile app development process. Their expertise in creating tailored solutions was a game-changer for our business.",
    "name": "Jordan Blake",
    "title": "CEO, Tech Innovators Inc."
  },
  {
    "quote": "Everse’s UI/UX design transformed our user experience, making our platform more intuitive and engaging. Their team’s creativity and attention to detail exceeded our expectations.",
    "name": "Taylor Green",
    "title": "Product Manager, Digital Solutions Co."
  },
  {
    "quote": "The end-to-end mobile app development service provided by Everse allowed us to launch a feature-rich app efficiently. Their support throughout the project was exceptional.",
    "name": "Alex Murphy",
    "title": "CTO, NextGen Apps"
  },
  {
    "quote": "Everse’s business development consulting was instrumental in refining our strategy and driving growth. Their insights and recommendations were practical and impactful.",
    "name": "Morgan Davis",
    "title": "Founder, Growth Partners LLC"
  },
  {
    "quote": "Our collaboration with Everse on cybersecurity solutions significantly improved our data protection and risk management. Their expertise in safeguarding our systems has been invaluable.",
    "name": "Jamie Taylor",
    "title": "Head of IT, SecureData Ltd."
  },
  ];


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

        <h2 className="text-3xl font-bold text-center mb-8 z-10">Experience Our Success: Client Success Stories</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
        items = {musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
      </div>

    </div>
  )
}

export default TestimonialCards