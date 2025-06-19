import React from 'react';
import { Button } from '@mui/material';

import './toggleButton.css';

type ToggleProps = {
    expand: boolean;
    setExpand: (val: boolean) => void;
    label: string;
}

const ToggleButton = (props: ToggleProps) => {
    
    const {
        expand,
        setExpand,
        label
    } = props;

    return (
        <div className={`buttonBack ${expand ? 'clicked' : ''}`}
            onClick={() => {
                setExpand(!expand)
            }}>
            <div className='cover'></div>
            <Button 
                className={`toggleButton ${expand ? 'clicked' : ''}`}
                variant="text"
                sx={{
                    textDecoration: `${expand ? "underline" : "none"}`
                }}>
                {label}
            </Button>
        </div>
    );
};

export default ToggleButton;