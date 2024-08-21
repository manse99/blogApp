

import React from 'react';
import { useParams } from 'react-router-dom';

const generatePage = async (page) => {
    const component = () => import(`./pages/${page}.js`);

    try {
        const PageComponent = (await component()).default;
        return React.createElement(PageComponent);
    } catch (err) {
        console.warn(err);
        return React.createElement(() => <div>404 - Page Not Found</div>);
    }
};

export default function PageRenderer() {
    const { page } = useParams();

    const [PageComponent, setPageComponent] = React.useState(null);

    React.useEffect(() => {
        generatePage(page).then(component => setPageComponent(component));
    }, [page]);

    return PageComponent;
}







































/*
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const generatePage = page => {
    
        const component = () => require(`./pages/${page}.js`).default

        try {
            return React.createElement(component())
        } catch (err) {
            console.warn(err)
            return React.createElement(() => 404)
        }
       
     }



        export default function PageRenderer() {
            const {
                params: { page }
            } = useRouteMatch()

            return generatePage(page)

}
*/