
import { lazy } from "react";
import Section from "./components/pages/homepage/HomePage";
const OurLeaders = lazy(() => import('./components/pages/aboutUs/OurLeaders'))
const OurStoryLine = lazy(() => import('./components/pages/aboutUs/OurStoryLine'));
const MissionVision = lazy(() => import('./components/pages/aboutUs/MissionVision'))

const LeadGeneration = lazy(() => import('./components/pages/solutions/LeadGeneration'));
const MarketResearch = lazy(() => import('./components/pages/solutions/MarketResearch'));
const StaffAugmentation = lazy(() => import('./components/pages/solutions/StaffAugmentation'));
const StaffingSolutions = lazy(() => import('./components/pages/solutions/StaffingSolutions'));
const TrainingAndDev = lazy(() => import('./components/pages/solutions/TrainingAndDev'));

const EngServices = lazy(() => import('./components/pages/services/EngServices'));
const HealthCareServices = lazy(() => import('./components/pages/services/health-care-services/HealthCareServices'));
const ItStaffing = lazy(() => import('./components/pages/services/ItStaffing'));
const NonItStaffing = lazy(() => import('./components/pages/services/NonItStaffing'));

const JobPostings = lazy(() => import('./components/pages/career/JobPostings'));
const EmployeeLogin = lazy(() => import('./components/pages/career/EmployeeLogin'));
const EmployerLogin = lazy(() => import('./components/pages/career/EmployerLogin'));
const ContactUs = lazy(() => import('./components/pages/contactUs/ContactUs'))

export const routes = [
    { path: "/", component: Section },
    { path: "aboutUs/mission-vision", component: MissionVision },
    { path: "aboutUs/our-storyline", component: OurStoryLine },
    { path: "aboutUs/our-leaders", component: OurLeaders },

    { path: "solutions/staffing-solutions", component: StaffingSolutions },
    { path: "solutions/lead-generation", component: LeadGeneration },
    { path: "solutions/training&dev", component: TrainingAndDev },
    { path: "solutions/Staff-augmentation", component: StaffAugmentation },
    { path: "solutions/market-research", component: MarketResearch },

    { path: "services/engineering-services", component: EngServices },
    { path: "services/health-care-services", component: HealthCareServices },
    { path: "services/it-staffing", component: ItStaffing },
    { path: "/services/non-it-staffing", component: NonItStaffing },

    { path: "services/health-care-services", component: JobPostings },
    { path: "career/employee-login", component: EmployeeLogin },
    { path: "career/employer-login", component: EmployerLogin },

    { path: "/Contact-us", component: ContactUs }
]