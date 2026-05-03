import LayoutPage from "@widgets/LayoutPage/LayoutPage"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { SpeechBubble } from "@shared/components/Mascot/ui/SpeechBubble"

export const HomePage = () => {
    return (
        <LayoutPage headerTheme="light">
            <HeroSection/>
            <div>
                <SpeechBubble 
                title="Кем вы хотите стать?"
                children={<p>Пора найти себя и выбрать подходящий курс</p>}
                footer={<footer><span>Удачи!</span></footer>}
                maxWidth={'260px'}
                tailPosition="bottom"
                />
                
            </div>
            
        </LayoutPage>
    )
}