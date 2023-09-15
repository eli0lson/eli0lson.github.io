import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './body.css'

const Body = () => {

    const [gone, setGone] = useState(false);

    const className = () => {
        if (gone) {
            return ' gone';
        } else {
            return '';
        }
    }

    return (
    <div className='body'>
        <Button
            className={'nothing-yet custom-btn' + className()}
            href="#"
            onClick={() => setGone(!gone)}>
            if u click me i'll disappear :/
        </Button>
    </div>
    )
}

export default Body;