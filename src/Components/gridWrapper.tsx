import React from 'react';
import Body from './body.js';

import './gridWrapper.css';

type GridWrapperProps = {
    
}

const GridWrapper = (props: GridWrapperProps) => {

    return (
        <div className='top'>
            <div className='wrapper'>
                <div className='middle'>
                    <div className='keycap'>
                        <div className='screen'>
                            <div className='buttons'>
                                <div className='top-left circle'></div>
                                <div className='right circle'></div>
                            </div>
                            <Body />
                            <div className='buttons bottom'>
                                <div className='bot-left circle'></div>
                                <div className='right circle'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GridWrapper;