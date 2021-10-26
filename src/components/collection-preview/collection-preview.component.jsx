import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss';
 
const ColectionPreview = ({title,items}) => (
     <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=> idx< 4)
                    .map(({id, ...otherItemProps}) =>(
                    <CollectionItem key={id} {...otherItemProps}/>
                    // <div key={item.id}>{item.name}</div>
                     ))
                 }
             </div>
     </div>
);

export default ColectionPreview;