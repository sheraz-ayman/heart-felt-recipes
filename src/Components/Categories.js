import React from 'react'
import "./Categories.css"

const Category = ({image,name}) =>{
  return (
    <div className='container'>
      <button className='btn-img'><img src={image} className='images' /> </button> 
       <p className='titles'>{name}</p>
    </div>
  )
}

const categories = [
    {
      image: 'https://th.bing.com/th/id/OIP.fX3gJv4u5PXrFufk807G-QHaHa?pid=ImgDet&rs=1',
      name: 'Main Courses',
    },
    {
      image: 'https://th.bing.com/th/id/R.9110705d3c57a28b51a3113a0c18762c?rik=CqEEgj7nokWZ6Q&pid=ImgRaw&r=0',
      name: 'Salads',
    },
    {
      image: 'https://th.bing.com/th/id/R.bb9766caf4c60f0b994fef22f150fd51?rik=wgQBRd9sICk8MA&pid=ImgRaw&r=0',
      name: 'Appetizers',
    },
    {
      image: 'https://th.bing.com/th/id/R.7f9a21a896e625906f6ce6a0b8e46e4e?rik=Sb%2bJ8ZHpHnTEOg&riu=http%3a%2f%2feclecticrecipes.com%2fwp-content%2fuploads%2f2012%2f10%2fsoup-4.jpg&ehk=Y6vMf6XQ2qEaLYvb5CZpbFyJikYjQtqxNBz2cibydjA%3d&risl=&pid=ImgRaw&r=0',
      name: 'Soups',
    },
    {
      image: 'https://s-media-cache-ak0.pinimg.com/736x/18/7b/58/187b58a35bd58c9a402110cdd34c84fb--middle-eastern-desserts-oriental-recipes.jpg',
      name: 'Dessert',
    },
  ];


const DisplayCategories = () => {
    return (
      <div className='big-Container'> 
          {categories.map((categories, index) => (
            <Category
              key={index}
              image={categories.image}
              name={categories.name}
            />
          ))}
        </div>
    );
  };

export default DisplayCategories;