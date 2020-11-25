import React from 'react';
import Parts from 'components/Parts/Parts';
import MdxLoader from 'containers/Service/Texts/MdxLoader';
import { calculateEasterDate } from 'domain/getDayInfo';

const DefatulExapostilari = ({ date }) => {
    const dateObj = new Date(date);

    const y = dateObj.getFullYear();

    const easterDate = calculateEasterDate(y);
    const weeksSinceEaster = Math.floor((dateObj.getTime() - easterDate.getTime()) / (3600 * 1000 * 24 * 7)) + 1;

    let matinsKey = null;
    if (weeksSinceEaster >= 9) {
        matinsKey = ((weeksSinceEaster - 9) % 11) + 1;
    } else if (1 < weeksSinceEaster) {
        matinsKey = [1, 3, 4, 7, 8, 10, 9][weeksSinceEaster - 2];
    }

    if (!matinsKey) {
        return null;
    }

    return <MdxLoader src={`Matins/Exapostilari/${matinsKey}`} />;
};

const Exapostilari = ({ date }) => {
    return (
        <>
            <Parts
                date={date}
                partNames={['shared.Эксапостиларии']}
                alwaysShowFallback
                fallback={<DefatulExapostilari date={date} />}
            />
        </>
    );
};

export default Exapostilari;