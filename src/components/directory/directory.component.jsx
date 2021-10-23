import React from "react";
import MenuItem from "../menu-item/menu-item.component"; 
import './directory.styles.scss';
class Directory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    ImageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Jackets',
                    ImageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    ImageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'WOmens',
                    ImageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'MEns',
                    ImageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }
    render() {
        return  <div  className='directory-menu' >
                {
                    this.state.sections.map(({title,id,ImageUrl,size}) => (
                        <MenuItem key={id} ImageUrl={ImageUrl} size={size} title={title}/>
                    ))
                }

            </div>
    }
} 
    


export default Directory;