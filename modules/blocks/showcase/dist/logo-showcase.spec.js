import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogoShowcase } from './logo-showcase.composition';
it.skip('should have an alt attribute', () => {
    const { getByAltText } = render(React.createElement(BasicLogoShowcase, null));
    const rendered = getByAltText('Moodys');
    expect(rendered).toBeTruthy();
});
it.skip('should have src attribute', () => {
    const { getByTestId } = render(React.createElement(BasicLogoShowcase, null));
    const rendered = getByTestId('test-logo-showcase').childNodes[0];
    expect(rendered).toContainHTML('src');
});
it.skip('should have loading attribute', () => {
    const { getByTestId } = render(React.createElement(BasicLogoShowcase, null));
    const rendered = getByTestId('test-logo-showcase').childNodes[0];
    expect(rendered).toContainHTML('loading');
});
//# sourceMappingURL=logo-showcase.spec.js.map