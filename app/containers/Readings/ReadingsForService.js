import React from 'react';
import { forEachObjIndexed } from 'ramda';
import ReadingItem from './ReadingItem';

const isGospel = zachalo =>
    zachalo.includes('Мк.') || zachalo.includes('Мф.') || zachalo.includes('Лк.') || zachalo.includes('Ин.');

// sort gospel readings last
const sortGospel = (a, b) => {
    const isAGospel = isGospel(a.readingVerse);
    const isBGospel = isGospel(b.readingVerse);
    if (isAGospel && !isBGospel) {
        return 1;
    }
    if (!isAGospel && isBGospel) {
        return -1;
    }
    return 0;
};

const ReadingsForService = ({ readingsForService }) => {
    // flatten readings
    const readingVersesWithType = [];
    forEachObjIndexed((readingVerses, type) => {
        readingVerses.forEach(readingVerse => {
            readingVersesWithType.push({
                readingVerse,
                type,
            });
        });
    }, readingsForService);

    return (
        <>
            {readingVersesWithType.sort(sortGospel).map(({ readingVerse, type }) => (
                <ReadingItem key={readingVerse} readingVerse={readingVerse} type={type} />
            ))}
        </>
    );
};

export default ReadingsForService;
