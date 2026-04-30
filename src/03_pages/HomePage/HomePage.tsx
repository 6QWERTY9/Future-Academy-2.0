import LayoutPage from "@widgets/LayoutPage/LayoutPage"
import { HeroSection } from "./components/HeroSection/HeroSection"

export const HomePage = () => {
    return (
        <LayoutPage headerTheme="light">
            <HeroSection/>
        </LayoutPage>
    )
}