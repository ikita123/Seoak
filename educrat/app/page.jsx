// import HomeOne from "@/components/homes/home";
import  Header  from "../components/layout/headers/HeaderThree";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "../components/homes/heros/HomeHero";

import Brands from "../components/common/Brands";
import Alumni from "../components/common/Alumni";
import Categories from "../components/homes/categories/Categories";
import Courses from "../components/homes/courses/FeaturedCourses";
import EventsOne from '../components/homes/events/EventsOne';
import EventsEight from '../components/homes/events/EventsEight';

// import TestimonialsOne from "../components/common/Testimonials";
import TestimonialsOne from "../components/common/Testimonials";
import Pricing from '../components/homes/pricing/Pricing'
import PricingCommon from '../components/common/Pricing'

import FeaturesOne from "../components/homes/features/FeaturesOne";
import WhyCourse from "../components/homes/WhyCourse";
import Instructors from "../components/common/Instructors";
import GetApp from "../components/homes/getApp/GetApp";
import Blog from "../components/homes/blogs/Blog";
import Join from "../components/homes/join/Join";
import FooterOne from "../components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";
import LearningPath from "@/components/homes/LearningPath/LearningPath";

export const metadata = {
  title: 'SEOAK',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function HomePage() {
  return (
    
    <>
    <Preloader/>
    <Header />
    
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
    
      <HomeHero />
      <Brands/>
      {/* <Categories /> */}
      
      <EventsOne/>
      <Pricing/>
      <Alumni/>
      <PricingCommon/>
      {/* <TestimonialsOne/> */}
      <LearningPath/>
      <EventsEight/>
      {/* <FeaturesOne/>
      <WhyCourse/>
      // <Instructors/>
      <GetApp/>
      <Blog/>
      <Join/> */}
      {/* <Blog/> */}
      <FooterOne/>
      
      
    </div>
  </>
  );
}
