import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';

const Header = () => {

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await api.get(`${process.env.REACT_APP_API_URL}/api/menus`);
                setMenus(response.data);
            } catch (error) {
                console.error('Error fetching menus:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenus();
    }, []);
    
    const renderMenu = (menuItems) => {
        return menuItems.map((menu) => {
            const hasChildren = menu.children && menu.children.length > 0;
            const hasMegaMenuChildren = hasChildren && menu.children.some(child => child.type === 'megamenu');
    
            if (hasChildren) {
                return (
                    <li key={menu.id} className={hasMegaMenuChildren ? 'dropdown' : 'link-dropdown'}>
                        <a href={menu.url || '#'} className={hasMegaMenuChildren ? '' : 'link-dropdown-toggle'}>
                            {menu.title}
                            {!hasMegaMenuChildren && <i className="fa fa-caret-down"></i>}
                        </a>
    
                        {hasMegaMenuChildren ? (
                            <div className="megamenu">
                                <div className="row">
                                    {menu.children.map(child => (
                                        <div className="col-md-3" key={child.id}>
                                            <h3 className="megamenu-heading mb-2">{child.title}</h3>
                                            {/* If you want links inside megamenu, update this accordingly */}
                                            {child.extra_data ? (() => {
                                                try {
                                                const parsedData = JSON.parse(child.extra_data);
                                                return <p>{parsedData.groups?.[0] ?? "Not Available"}</p>;
                                                } catch (e) {
                                                return <p>Invalid extra_data format</p>;
                                                }
                                            })() : <p>Not Available</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <ul className="top-dropdown" style={{ display: 'none' }}>
                                {renderMenu(menu.children)}
                            </ul>
                        )}
                    </li>
                );
            }
    
            return (
                <li key={menu.id}>
                    <Link to={menu.url || '#'}>{menu.title}</Link>
                </li>
            );
        });
    };    

    console.log('Menus:' + menus);
    
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <header className="main-header header-style-one">

                <div className="header-top">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="header-top-left">

                                <div className="quick-link-box">
                                    <div className="link-box">
                                        <ul>
                                            {renderMenu(menus.filter(menu => menu.type === 'top-menu'))}
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <form className="search-form">
                                <label htmlFor="search">
                                    <input required="" autoComplete="off" placeholder="Search..." id="search" type="text" />
                                    <div className="icon">
                                        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="swap-on">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round"
                                                strokeLinecap="round"></path>
                                        </svg>
                                        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="swap-off">
                                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinejoin="round" strokeLinecap="round">
                                            </path>
                                        </svg>
                                    </div>
                                    <button type="reset" className="close-btn">
                                        <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </label>
                            </form>

                        </div>

                    </div>
                </div>
                <div className="header">
                    <div className="auto-container">
                        <div className="outer-box">

                            <div className="header-middle">
                                <div className="main-logo-box">
                                    <Link to="/">
                                        <img src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/care-logo.png" alt="care-logo" title="" />
                                    </Link>
                                </div>

                                <div className="nav-outer style1 clearfix">

                                    <nav className="right-menu">
                                        <ul className="d-flex justify-content-end gap-4 pt-3">
                                            {renderMenu(menus.filter(menu => menu.type === 'small-menu'))}
                                        </ul>
                                    </nav>

                                    <div className="mobile-nav-toggler">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                    </div>

                                    <nav className="main-menu style1 navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul className="navigation clearfix">
                                                {renderMenu(menus.filter(menu => menu.type === 'main-menu'))}
                                            </ul>
                                        </div>
                                    </nav>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="sticky-header">
                    <div className="container">
                        <div className="sticky-header__inner clearfix">

                            <div className="row">
                                <div className="col-md-2">
                                    <div className="logo ">
                                        <a href="#" className="img-responsive">
                                            <img src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/care-logo.png"
                                                alt="" title="" style={{ width:'200px' }} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="right-col ">
                                        <nav className="main-menu clearfix">
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon fa fa-times-circle"></span></div>
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <a href="#">
                                <img src="/chettinad-react/assets/images/care-logo-white.png" alt="" title="" style={{ width:'200px' }} />
                            </a>
                        </div>
                        <div className="menu-outer">
                        </div>
                    </nav>
                </div>

            </header>
        </>
    );
};

export default Header;