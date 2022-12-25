import React, { FC, useState } from 'react';
import './Reactions.css';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import { IconButton } from '@mui/material';
import ReactionPicker, { Theme } from 'emoji-picker-react';

interface CoolamReactionPickerProps {
    onReactionPick: ({ code, emoji }: { code: string, emoji: string }) => void;
}

const CoolamReactionPicker: FC<CoolamReactionPickerProps> = ({ onReactionPick }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function onEmojiClick({ unified, emoji }: { unified: string, emoji: string }) {
        setIsOpen(false);
        onReactionPick({ emoji, code: unified });
    }

    return (
        <div>
            {isOpen && <ReactionPicker theme={Theme.AUTO} onEmojiClick={onEmojiClick} />}
            <IconButton onClick={() => setIsOpen(true)} >
                <AddReactionOutlinedIcon fontSize='large' />
            </IconButton>
        </div>
    );
}



export default CoolamReactionPicker;