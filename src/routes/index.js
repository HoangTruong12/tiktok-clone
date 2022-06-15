import routesConfig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    {
        path: routesConfig.home,
        components: Home,
    },
    {
        path: routesConfig.following,
        components: Following,
    },
    {
        path: routesConfig.profile,
        components: Profile,
    },
    {
        path: routesConfig.upload,
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        components: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
