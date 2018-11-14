import React from 'react';
import {Link} from 'react-router-dom';

const renderBlocks = ({blocks}) => {
    if(blocks) {
        return(
            blocks.map(block => {
                const image = {
                    backgroundImage: `url(/images/blocks/${block.image})`
                }
                return(
                    <div key={block.id} className={`item ${block.type}`}>
                        <div className="veil"></div>
                        <div className="image" style={image}></div>
                        <div className="title"><Link to="/scorers">{block.title}</Link></div>
                    </div>
                )
            })
        )
    }
}
const Blocks = (props) => {
    return(
        <div className="home_block">
            {renderBlocks(props)}
        </div>
    )
}

export default Blocks;