import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import HeaderOnly  from '~/Layouts/HeaderOnly'
import config from '~/configs';

export const publicRoutes = [
    {path: config.route.home, component: Home},
    {path: config.route.following, component: Following},
    {path: config.route.profile, component: Profile},
    {path: config.route.upload, component: Upload, layout: HeaderOnly},
]

export const privateRoutes = [

]