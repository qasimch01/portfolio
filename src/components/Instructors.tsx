'use client';
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
  {
    id: 1,
    name: 'Qasim Chaudhary',
    designation: 'FullStack Developer',
    image: '/courses/paspot (1).jpg', // Correct path relative to public
  },
  {
    id: 2,
    name: 'Ali Malik',
    designation: 'FullStack Mobile App Developer',
    image: '/courses/ali.jpg', // Correct path relative to public

  },
  {
    id: 3,
    name: 'Ahmad Talha',
    designation: 'Product Developer',
    image: '/courses/talha.jpg', // Correct path relative to public
  },
  {
    id: 4,
    name: 'Awais Malik',
    designation: 'UI&UX Designer',
    image: '/courses/awais.jpg', // Correct path relative to public

  },
  {
    id: 5,
    name: 'Hafiz Jawad',
    designation: 'FullStack Developer',
    image: '/courses/jwad.jpg', // Correct path relative to public

  },
  {
    id: 6,
    name: 'Awais Nadeem',
    designation: 'Business Developer',
    image: '/courses/awaiss.jpg', // Correct path relative to public
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Developers</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">Meet the talented professionals who will lead your business on its web and mobile app development journey.</p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
