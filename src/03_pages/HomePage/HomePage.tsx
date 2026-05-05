import LayoutPage from "@widgets/LayoutPage/LayoutPage"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { CourseFilterSection } from "./components/CourseFilterSection/CourseFilterSection"





export const HomePage = () => {
    return (
        <LayoutPage headerTheme="light">
            <HeroSection/>
            <CourseFilterSection/>
            
        </LayoutPage>
    )
}