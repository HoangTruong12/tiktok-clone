import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language ':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChang={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17937206d75158670a293f5caa5b6dda~c5_100x100.jpeg?x-expires=1655262000&x-signature=JDz7LEPHMnfPmviiTkYS2kc7V2c%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="data:image/jpeg;base64,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"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
