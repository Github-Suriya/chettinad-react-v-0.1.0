import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';

const Header = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await api.get(`${process.env.REACT_APP_API_URL}/api/menus`);
                setMenus(response.data.data);
            } catch (err) {
                console.error('Error fetching menus:', err);
                setError('Failed to load menus');
            } finally {
                setLoading(false);
            }
        };

        fetchMenus();
    }, []);

    const groupItemsByColumn = (items) => {
        const columnGroups = {};
        const columnOrder = [];
        
        items.forEach(item => {
            if (!columnGroups[item.column_class]) {
                columnGroups[item.column_class] = [];
                columnOrder.push(item.column_class);
            }
            columnGroups[item.column_class].push(item);
        });
        
        return columnOrder.map(columnClass => ({
            columnClass,
            items: columnGroups[columnClass]
        }));
    };

    const renderMegaMenuContent = (menu) => {
        if (!menu.items || menu.items.length === 0) return null;

        const columnGroups = groupItemsByColumn(menu.items);

        return (
            <div className="megamenu">
                <div className="row">
                    {columnGroups.map((group) => (
                        <div key={group.columnClass} className={group.columnClass}>
                            {group.items.map((item) => {
                                switch(item.type) {
                                    case 'heading':
                                        return (
                                            <h3 key={item.id} className="megamenu-heading mb-2">
                                                {item.title}
                                            </h3>
                                        );
                                    case 'link':
                                        return (
                                            <ul key={item.id} className="right-seperator">
                                                <li>
                                                    <a href={item.url || '#'}>{item.title}</a>
                                                </li>
                                            </ul>
                                        );
                                    case 'image':
                                        return (
                                            <img 
                                                key={item.id}
                                                src={item.content} 
                                                alt={item.alt || item.title} 
                                                className="img-fluid" 
                                                style={{ width: '100%' }}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderMenu = (menuItems, menuType = 'main') => {
        return menuItems.map((menu) => {
            const hasChildren = menu.children && menu.children.length > 0;
            const isMegaMenu = menu.type === 'megamenu';
            const isDropdown = hasChildren && !isMegaMenu;

            if (menuType === 'mobile') {
                return (
                    <li key={menu.id}>
                        <Link to={menu.url || '#'}>{menu.title}</Link>
                        {hasChildren && (
                            <ul className="sub-menu">
                                {renderMenu(menu.children, 'mobile')}
                            </ul>
                        )}
                    </li>
                );
            }

            if (isDropdown) {
                return (
                    <li key={menu.id} className="link-dropdown">
                        <a href={menu.url || '#'} className="link-dropdown-toggle">
                            {menu.title}
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="top-dropdown">
                            {renderMenu(menu.children)}
                        </ul>
                    </li>
                );
            }

            if (isMegaMenu) {
                return (
                    <li key={menu.id} className="dropdown">
                        <a href={menu.url || '#'}>{menu.title}</a>
                        {renderMegaMenuContent(menu)}
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

    if (loading) return <div className="loading-spinner">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <header className="main-header header-style-one">
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="header-top-left">
                            <div className="quick-link-box">
                                <div className="link-box">
                                    <ul>
                                        {renderMenu(menus.filter(menu => menu.type === 'top-menu'), 'top')}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <form className="search-form">
                            <label htmlFor="search">
                                <input required autoComplete="off" placeholder="Search..." id="search" type="text" />
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

            {/* Main Header */}
            <div className="header">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="header-middle">
                            <div className="main-logo-box">
                                <Link to="/">
                                    <img 
                                        src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/care-logo.png" 
                                        alt="care-logo" 
                                    />
                                </Link>
                            </div>

                            <div className="nav-outer style1 clearfix">
                                <nav className="right-menu">
                                    <ul className="d-flex justify-content-end gap-4 pt-3">
                                        {renderMenu(menus.filter(menu => menu.type === 'small-menu'), 'small')}
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
                                            {renderMenu(menus.filter(menu => 
                                                menu.type === 'main-menu' || menu.type === 'megamenu'
                                            ))}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header */}
            <div className="sticky-header">
                <div className="container">
                    <div className="sticky-header__inner clearfix">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="logo">
                                    <Link to="/">
                                        <img 
                                            src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/care-logo.png"
                                            alt="care-logo"
                                            style={{ width: '200px' }} 
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="right-col">
                                    <nav className="main-menu clearfix">
                                        <ul className="navigation clearfix">
                                            {renderMenu(menus.filter(menu => 
                                                menu.type === 'main-menu' || menu.type === 'megamenu'
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn"><span className="icon fa fa-times-circle"></span></div>
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link to="/">
                            <img 
                                src="/chettinad-react/assets/images/care-logo-white.png" 
                                alt="care-logo"
                                style={{ width: '200px' }} 
                            />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation">
                            {renderMenu(menus, 'mobile')}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;