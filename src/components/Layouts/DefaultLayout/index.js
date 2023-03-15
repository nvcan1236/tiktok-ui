import Header from '../components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
        </>
    );
}

export default DefaultLayout;
