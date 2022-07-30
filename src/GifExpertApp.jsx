import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Programmer']);

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories] );
                    //  ([cat => [...newCategory, 'Valorant']]);
    }

  return (
   <>
            {/* titulo */}
        <h1>Write the gif you want</h1>

         
          <AddCategory 
    
            onNewCategory= { onAddCategory }
          />

          {
          categories.map( category =>   (
                  <GifGrid key= {category} 
                  category = {category} 
                  />
              ))
          }
          
      

   </>
  )
}
