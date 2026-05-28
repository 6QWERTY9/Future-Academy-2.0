import LayoutPage from "@widgets/LayoutPage/LayoutPage"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { CourseFilterSection } from "./components/CourseFilterSection/CourseFilterSection"

import { AboutUs } from "@widgets/AboutUs"
import { aboutUsData } from "./model/data"





export const HomePage = () => {
    return (
        <LayoutPage headerTheme="light">
            <HeroSection/>
            <CourseFilterSection/>
            <AboutUs className="home-page__about-us"{...aboutUsData}/>
        </LayoutPage>
    )
}