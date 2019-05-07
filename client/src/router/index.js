import Router from 'vue-router';

import Map from '@/components/Map';
import BucketList from '@/components/BucketList';

export default new Router({
    routes: [
        // Route to Map component
        {
            path: '/',
            component: Map,
            name: 'map'
        },
        // Route to BucketList component
        {
            path: '/BucketList',
            component: BucketList,
            name: 'bucketList'
        }
    ]
});
