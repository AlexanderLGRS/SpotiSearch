import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { getByText, render } from '@testing-library/react';
import SongCard from '../SongCard'

test('Renders content', () => {

    const component = render(
        <SongCard
            cover='cover-test'
            title='title-test'
            artist='artist-test'
            albumType='albumType-test'
            releaseDate='releaseDate-test'
            audio='audio-test' />);
            component.getByAltText('title-test cover')
            component.getByText('title-test')
            component.getByText('artist-test')
});