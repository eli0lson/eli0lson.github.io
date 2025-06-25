import React from 'react';
import { Button } from '@mui/material';

import './toggleButton.css';

type ToggleProps = {
    expand: boolean;
    setExpand: (val: boolean) => void;
    label: string;
    id: string;
}

const ToggleButton = (props: ToggleProps) => {
    
    const {
        expand,
        setExpand,
        label,
        id
    } = props;

    return (
        <div className={`buttonBack ${expand ? 'clicked' : ''}`}
            onClick={() => {
                setExpand(!expand)
            }}
            id={id}>
            <Button 
                className={`toggleButton ${expand ? 'clicked' : ''}`}
                variant="text"
                sx={{
                    textDecoration: `${expand ? "underline" : "none"}`
                }}>
                {label}
            </Button>
            <div className='cover'></div>
        </div>
    );
};

export default ToggleButton;