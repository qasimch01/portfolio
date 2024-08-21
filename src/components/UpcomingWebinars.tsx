'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars = [
        {
          title: 'Web Application Development',
          description:
            'Build and deploy robust and scalable web applications tailored to your business needs.',
          slug: 'web-application-development',
          isFeatured: true,
        },
        {
          title: 'Mobile App Development',
          description:
            'Create high-performance mobile apps for iOS and Android that engage users and drive results.',
          slug: 'mobile-app-development',
          isFeatured: true,
        },
        {
          title: 'UI/UX Design Services',
          description:
            'Design intuitive and visually appealing interfaces to enhance user experience and engagement.',
          slug: 'ui-ux-design-services',
          isFeatured: true,
        },
        {
          title: 'Business Development Strategy',
    description:
      'Develop effective business strategies to drive growth and expand your market presence.',
    slug: 'business-development-strategy',
    isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Digital Transformation Solutions',
    description:
      'Transform your business processes with cutting-edge technology and innovative solutions.',
    slug: 'digital-transformation-solutions',
    isFeatured: true,
        },
        {
          title: 'Cloud Services and Solutions',
          description:
            'Leverage cloud technology for scalable, secure, and cost-effective IT solutions.',
          slug: 'cloud-services-solutions',
          isFeatured: true,
        },
      ];
    
  return (
    <div className="p-12 bg-gra-900">
<div className="max=w-7xl mx-auto px-4 sm:px-6">

    <div className="text-center">
    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Feature Webinars</h2>
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"> Enhance your Website Journy</p>
    </div>
    <div className="mt-10">

    <HoverEffect items={featuredWebinars.map(webinar=>(
{
    title : webinar.title,
    description: webinar.description,
    link:"/"
}
    ))} />
    </div>
    {/* <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}

</div>

    </div>
  )
}

export default UpcomingWebinars