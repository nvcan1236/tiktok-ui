import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly  from '~/components/Layouts/HeaderOnly'
import routeConfig from '~/configs/routeConfigs';

export const publicRoutes = [
    {path: routeConfig.home, component: Home},
    {path: routeConfig.following, component: Following},
    {path: routeConfig.profile, component: Profile},
    {path: routeConfig.upload, component: Upload, layout: HeaderOnly},
]

export const privateRoutes = [

]