import Router from 'vue-router';

import Map from '@/components/Map';

export default new Router({
    routes: [
        // Route to Map component
        {
            path: '/Map',
            component: Map
        }
        // Route to BucketList component
    ]
});
