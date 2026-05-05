import type React from "react";

export interface ICategoryTab {
    title: string;
    age: string;
    Icon: React.ElementType;

    id: string;

    className?: string;
}

export interface IFillterTag {
    text: string;

    id: string;

}