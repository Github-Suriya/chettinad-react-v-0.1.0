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
            const isMegaMenu = menu.type === 'main-menu' && hasChildren;
            const extraData = menu.extra_data ?? null;

            if (hasChildren) {
            return (
                <li key={menu.id} className={isMegaMenu ? 'dropdown' : 'link-dropdown'}>
                <a href={menu.url || '#'} className={isMegaMenu ? '' : 'link-dropdown-toggle'}>
                    {menu.title}
                    {!isMegaMenu && <i className="fa fa-caret-down"></i>}
                </a>

                {isMegaMenu ? (
                    <div className="megamenu">
                    <div className="row">
                        {menu.children.map((child) => {
                        const childExtraData = child.extra_data ?? null;
                        
                        // Campus layout (special case)
                        if (childExtraData?.is_campus) {
                            return (
                            <div className={`col-md-${extraData?.columns === 2 ? '6' : '3'}`} key={child.id}>
                                <a href="#" className="campus-link pb-2" style={{ color: 'var(--thm-bg)' }}>
                                <strong>{child.title}</strong>
                                </a>
                                {!extraData?.mobile_only && (
                                <>
                                    <img 
                                    src="/chettinaddemo/assets/images/sketch11.png" 
                                    alt={`${child.title} image`} 
                                    className="img-fluid" 
                                    width="50%" 
                                    />
                                    <p className="px-5 pt-2" style={{
                                    fontSize: 'var(--thm-para-font-size)',
                                    textAlign: 'justify',
                                    fontWeight: 500
                                    }}>
                                    {childExtraData.description}
                                    <br />
                                    <a 
                                        href={childExtraData.link_url} 
                                        className="readmore align-items-center d-flex justify-content-center"
                                        style={{ color: 'var(--thm-bg)' }}
                                    >
                                        <i className="fa fa-hand-o-right"></i> &nbsp;{childExtraData.link_text}
                                    </a>
                                    </p>
                                </>
                                )}
                            </div>
                            );
                        }

                        // Section heading
                        if (childExtraData?.is_heading) {
                            return (
                            <div className={`col-md-${extraData?.columns === 4 ? '2' : '3'}`} key={child.id}>
                                <h3 className="megamenu-heading mb-2">{child.title}</h3>
                                {childExtraData.description && (
                                <p style={{
                                    fontSize: 'var(--thm-para-font-size)',
                                    textAlign: 'left',
                                    fontWeight: 500
                                }} className="mt-2 pe-5">
                                    {childExtraData.description}
                                </p>
                                )}
                                {childExtraData.is_readmore && (
                                <a href="#" className="readmore mt-1" style={{ color: 'var(--thm-bg)' }}>
                                    Discover More <i className="fa fa-long-arrow-right"></i>
                                </a>
                                )}
                            </div>
                            );
                        }

                        // Regular menu item
                        return (
                            <div className={`col-md-${extraData?.columns === 4 ? '3' : '2'}`} key={child.id}>
                            {childExtraData?.parent_heading ? (
                                <ul className={childExtraData.right_seperator ? 'right-seperator' : ''}>
                                <li>
                                    <a href={child.url || '#'}>{child.title}</a>
                                </li>
                                </ul>
                            ) : (
                                <ul>
                                <li>
                                    <a href={child.url || '#'}>{child.title}</a>
                                </li>
                                </ul>
                            )}
                            </div>
                        );
                        })}

                        {/* Image column for special layouts */}
                        {extraData?.has_image && !extraData.mobile_only && (
                        <div className="col-md-4 d-none d-md-flex">
                            <img 
                            src="/chettinaddemo/assets/images/bg-image.webp" 
                            alt="bg-image" 
                            className="img-fluid" 
                            />
                        </div>
                        )}

                        {/* Carousel for Academics */}
                        {extraData?.has_carousel && (
                        <div className="col-md-4 d-none d-md-flex">
                            <div className="research-banner-carousel owl-carousel owl-theme">
                            <div className="item">
                                <img 
                                src="/chettinaddemo/assets/images/DSC04650.webp" 
                                alt="schools-colleges-bg.webp" 
                                className="img-fluid" 
                                />
                            </div>
                            <div className="item">
                                <img 
                                src="/chettinaddemo/assets/images/images_0011_HOSTEL-B.jpg" 
                                alt="schools-colleges-bg.webp" 
                                className="img-fluid" 
                                />
                            </div>
                            <div className="item">
                                <img 
                                src="/chettinaddemo/assets/images/4Z9A8712.webp" 
                                alt="schools-colleges-bg.webp" 
                                className="img-fluid" 
                                />
                            </div>
                            </div>
                        </div>
                        )}
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