import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftApp = () => {

    const [ categories, setCategories ] = useState( ['Valorant'] );

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            return;
        }

        console.log(newCategory);
        setCategories( [ newCategory, ...categories] )
    }

 
    return (
        <>
            <h1>GIftApp</h1>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) }
            />
   
            {
                categories.map( category => (
                    <GifGrid key={ category } category = { category } />
                ))
            }

        </>
    )
}