import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { getByText, render } from '@testing-library/react';
import Header from '../Header'

test('Renders content', () => {
    const component = render(<Header />);
    component.getByText('SpotiSearch')
    component.getByAltText('Spotify logo')
});