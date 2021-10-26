import React from 'react';
import { ShopData } from './shop.data';
import ColectionPreview from '../../components/collection-preview/collection-preview.component';
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps}) => (
                        <ColectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Shop;