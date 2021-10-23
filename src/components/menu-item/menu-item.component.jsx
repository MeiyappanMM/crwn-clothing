import React from "react";
import '../menu-item/menu-item.styles.scss';
const Menu_Item = ({title,ImageUrl,size}) =>{
    return  <div className={`${size} menu-item`} >
                <div className='background-image'
                style={{
                backgroundImage: `url(${ImageUrl})`
                }}
                />
                <div className='content' >
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
                
}


export default Menu_Item ;