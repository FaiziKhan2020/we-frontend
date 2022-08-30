import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import QAhomePage from '~/components/QAhomePage/QAhomePage';
const HomepageDefaultPage = () => {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    // }, []);
    return (
        <div>
            <main id="homepage-1">
                <QAhomePage />
            </main>
        </div>
    );
};

export default HomepageDefaultPage;
