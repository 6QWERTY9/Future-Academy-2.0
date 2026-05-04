import LayoutPage from "@widgets/LayoutPage/LayoutPage"
import { HeroSection } from "./components/HeroSection/HeroSection"

import { Mascot } from "@shared/components/Mascot"

export const HomePage = () => {
    return (
        <LayoutPage headerTheme="light">
            <HeroSection/>
            <Mascot
                position="bottom"
                offsetX="-40px"
                offsetY="-50px"
                bubbleProps={{
                    
                    title: 'Кем вы хотите стать?',
                    children: <p>Пора найти себя и выбрать подходящий курс</p>,
                    footer: <span>Удачи!</span>,
                    maxWidth: '260px'
                    
                }}

                owlProps={{
                    width: 168,
                    className: 'owl'
                }}
            />
            
        </LayoutPage>
    )
}