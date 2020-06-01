import React, { useContext } from 'react';
import { css } from 'emotion';
import { DotsMenuContext } from 'components/DotsMenu/DotsMenu';
import Button from 'components/Button/Button';
import ShareIcon from 'components/ShareIcon/ShareIcon';
import useDay from 'hooks/useDay';

const Share = ({ date }) => {
    const { toggleOpen } = useContext(DotsMenuContext);
    const dayQuery = useDay(date);
    const day = dayQuery.data;
    return (
        <Button
            onClick={() => {
                toggleOpen();
                navigator.share({
                    title: 'Православное богослужение',
                    text: day?.title,
                    url: window.location.href,
                });
            }}
            className={css`
                padding: 6px 6px !important;
                width: 100%;
                text-align: left;
            `}
        >
            <ShareIcon />{' '}
            <span
                className={css`
                    font-size: 13px;
                `}
            >
                Поделиться
            </span>
        </Button>
    );
};
export default Share;
