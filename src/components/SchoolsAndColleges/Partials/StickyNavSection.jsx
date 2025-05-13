import React, { useState, useEffect, useRef } from 'react';

const StickyNavSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const underlineRef = useRef(null);
  const tabsRef = useRef(null);
  
  const aboutPageUrl = "https://datalock.in/chettinaddemo/college/college-of-nursing/about.php";
  const menuItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'programs', label: 'Programs' },
    { id: 'principal', label: 'Principal Speak' },
    { id: 'faculty', label: 'Faculty Members' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'student-life', label: 'Student life' },
    { id: 'news', label: 'News & Events' },
    { id: 'more', label: 'Find Out More' }
  ];

  // Move underline under active menu item
  const moveUnderline = (activeItem) => {
    if (activeItem && underlineRef.current) {
      const rect = activeItem.getBoundingClientRect();
      underlineRef.current.style.left = `${activeItem.offsetLeft}px`;
      underlineRef.current.style.width = `${rect.width}px`;
    }
  };

  // Scroll to section
  const scrollToSection = (targetId) => {
    const currentPage = window.location.href;
    
    if (currentPage.includes("about.php")) {
      const target = document.getElementById(targetId);
      if (target) {
        const yOffset = -100;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      window.location.href = `${aboutPageUrl}#${targetId}`;
    }
  };

  // Handle tab click
  const handleTabClick = (tabId, e) => {
    setActiveTab(tabId);
    scrollToSection(tabId);
    moveUnderline(e.currentTarget);
  };

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      const offset = 150;
      const scrollPosition = window.scrollY + offset;
      
      if (sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight;

        if (scrollPosition <= lastSectionBottom) {
          sections.forEach(section => {
            const top = section.offsetTop - offset;
            if (window.scrollY >= top) {
              current = section.getAttribute("id");
            }
          });
        }

        if (current) {
          setActiveTab(current);
          const activeTabElement = tabsRef.current?.querySelector(`[data-target="#${current}"]`);
          if (activeTabElement) {
            moveUnderline(activeTabElement);
            if (window.innerWidth <= 768) {
              activeTabElement.scrollIntoView({ 
                behavior: "smooth", 
                inline: "center", 
                block: "nearest" 
              });
            }
          }
        }
      }
    };

    // Initialize underline position
    const activeTabElement = tabsRef.current?.querySelector('.active');
    if (activeTabElement) {
      moveUnderline(activeTabElement);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      const activeTabElement = tabsRef.current?.querySelector('.active');
      if (activeTabElement) moveUnderline(activeTabElement);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <section className="navigation_section sticky-nav">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div className="col-md-1 text-end">
            <img 
              src="/chettinad-react/assets/images/chettinad-logo-single.png" 
              alt="course-logo" 
              className="img-fluid" 
              style={{ width: '40%' }} 
            />
          </div>
          <div className="col-md-11">
            <div className="tab-menu py-1" ref={tabsRef}>
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={activeTab === item.id ? 'active' : ''}
                    data-target={`#${item.id}`}
                    onClick={(e) => handleTabClick(item.id, e)}
                  >
                    {item.label}
                  </li>
                ))}
                <div className="underline" ref={underlineRef}></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyNavSection;