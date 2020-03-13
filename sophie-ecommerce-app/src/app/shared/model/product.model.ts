import { ICategory } from './category.model';

export interface ITag{
    id:number,
    name:string
}

export interface IReview{
    name: string,
    comment?: string,
    rating?:number,
    reviewDate?: Date
}

export interface IProdImage{
    url:string
}

export interface IProduct{
    id: number,
    name: string,
    category:ICategory,
    description:string,
    excerpt:string,
    cost:number,
    reduced_cost?:number,
    discount?:string,
    createdOn?:string,
    lastUpdate?:string,
    availibility?:string,
    ratings?:IReview[],
    tags?:ITag[],
    avg_rating?:number,
    images: IProdImage[],
    quantity: number
}