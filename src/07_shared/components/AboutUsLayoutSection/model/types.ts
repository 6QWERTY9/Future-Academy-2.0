import type { IAboutUsTextBlockProps, IAdvantageProps } from "@shared/types/about-us-section";

export interface IAboutUsSectionProps {
    textBlock: IAboutUsTextBlockProps;
}

export interface IAdvantageBlockProps {
    title: string;
    advantages: IAdvantageProps[];
}

