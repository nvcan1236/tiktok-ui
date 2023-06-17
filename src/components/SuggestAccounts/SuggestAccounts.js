import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';
import Section from '~/Layouts/components/Sidebar/Section/Section';
import * as suggestAccountService from '~/services/suggestAcountsServices';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    const [suggestAccounts, setSuggestAccounts] = useState([]);
    const [fullAccounts, setFullAccounts] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            const accountsCount = fullAccounts ? 15 : 5
            const result = await suggestAccountService.search(1, accountsCount);
            setSuggestAccounts(result);
        };
        fetchApi();
    }, [fullAccounts]);

    return (
        <Section>
            <div className={cx('wrapper')}>
                <div className={cx('separator')}></div>
                <label className={cx('label')}>{label}</label>
                {suggestAccounts.map(user => 
                    <AccountItem key={user.id} user={user} />
                )}

                <span onClick={()=>setFullAccounts(!fullAccounts)} className={cx('more-btn')}>{fullAccounts ? 'See less' : 'See more'}</span>
            </div>
        </Section>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
