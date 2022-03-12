import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import DetailSongCard from '../DetailSongCard'

test('Renders content', () => {

    const component = render(
        <DetailSongCard
            cover='cover-test'
            title='title-test'
            artist='artist-test'
            albumType='albumType-test'
            releaseDate='releaseDate-test'
            audio='audio-test' />);
    component.getByAltText('title-test cover')
    component.getByText('title-test')
    component.getByText('artist-test')
    component.getByText('albumType-test')
    component.getByText('releaseDate-test')
});