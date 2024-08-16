/*import React from 'react'
import { useMatch } from 'react-router-dom';

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err)
        return React.createElement(() => 404)
    }
}

export default function PageRenderer () {
    const {
        params: { page }
    } = useMatch

    return generatePage(page)
}
*/

import React from 'react';
import { useMatch } from 'react-router-dom';

const generatePage = async (page) => {
    try {
        const component = (await import(`./pages/${page}`)).default;
        return React.createElement(component);
    } catch (err) {
        console.warn(err);
        return React.createElement(() => <h1>404 - Page Not Found</h1>);
    }
};

export default function PageRenderer() {
    const match = useMatch("/:page"); // Adjust the route pattern as needed

    if (!match || !match.params) {
        return <h1>404 - Page Not Found</h1>;
    }

    const { page } = match.params;

    const PageComponent = generatePage(page);

    return <>{PageComponent}</>;
}
