import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { getByText, render } from '@testing-library/react';
import Form from '../Form'

test('Renders content', () => {
    const component = render(<Form />);
    component.getByText('Search your songs')
    component.getByPlaceholderText('Artist or songs')
    component.getByText('Search')
});