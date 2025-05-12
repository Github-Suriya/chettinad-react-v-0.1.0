<?php include('../include/header.php'); ?>
<style>
   
    #read_more_btn,
    #read_less_btn {
        background-color: rgb(0, 166, 224);
        border-radius: 57px;
        width: 144px;
        height: 42px;
        color: white;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        position: relative;
        overflow: hidden;
        text-decoration: none !important;
    }

    #read_more_btn::before,
    #read_less_btn::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.2);
        transition: all 0.4s ease-in-out;
    }

    #read_more_btn:hover::before,
    #read_less_btn:hover::before {
        left: 100%;
    }

    #read_more_btn:hover,
    #read_less_btn:hover {
        background-color: rgb(0 74 142);
        box-shadow: 0px 4px 15px rgba(0, 166, 224, 0.5);
        transform: scale(1.05);
    }

    .facility-card {
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        max-width: 250px;
        margin: auto;
        height: 229px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .facility-card:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
    .facility-img {
        transition: transform 0.3s ease-in-out;
        height: 150px;
        /* Reduce image size */
        object-fit: cover;
    }

    .facility-card:hover .facility-img {
        transform: scale(1.1);
    }

    .facility-card .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8f9fa;
        padding: 0px;
        text-align: center;
    }

  
.card-title {
    margin-bottom: .5rem;
    color: #fffbff;
    /* font-size:var(--thm-para-font-size); */
    font-weight: 600;
    background-color: var(--thm-bg);
    padding: 4px;
    font-size:var(--thm-para-font-size);
}

.college_title{
    margin-bottom: .5rem;
    color: var(--thm-bg);
    font-weight: 700;
    font-size:var(--thm-para-font-size);

}

    .pera-dec h3,.theme-heading-two,
    .facility_detail_section h2,
    .facility_section h2 {
        font-size:var(--thm-heading-font-size);
    font-weight: bold;
    color: #004C97;
    text-transform: uppercase;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
}

.pera-dec h3::after ,.theme-heading-two::after,
    .facility_detail_section h2::after,
    .facility_section h2::after{
    content: "■   ■   ■";
    font-size:var(--thm-heading-font-size);
    color: #0083D4;
    margin-top: 6px;
    letter-spacing: 6px;
    display: block;
    text-align: center;
}


    .univercity-life {
        border-radius: 50px 50px 50px 0;
        width: 100%;
        height: 50%;
    }

    .univercity-life::before {
    content: "";
    position: absolute;
    left: 26px;
    top: -25px;
    bottom: 73px;
    width: 96%;
    background: #00a6e0;
    border-radius: 50px 50px 50px 0;
    transform: rotate(5deg);
    z-index: -1;
    height: 333px;
}

.card_fac {
   
    box-shadow: 0px 4px 8px rgb(0 0 0 / 65%);
    text-align: center;
    margin: 15px;
    height: 444px;
}
.card_fac_text {
    text-align: center;
    padding: 17px 19px 17px 19px;
    line-height: var(--thm-para-line-height);
   font-size: var(--thm-para-font-size);
    color:var(--thm-para-color);
    font-weight: 500;
    position: relative;
    height: 185px;
}

.card_fac_text a {
    position: absolute;
    bottom: 10px;
    right: 5%;
}


    .card_fac img {

        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .section-banner {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .section-banner.bg-20 {
        background-image: url(../assets/images/main_bg.jpg);
        background-position: top;
        background-repeat: no-repeat;
        position: relative;
        height: 100vh;
    }

    .section-banner.bg-20::before {
        content: "";
        display: block;
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.1);
        pointer-events: none;
    }

    .banner-spacing {
        position: absolute;
        bottom: 10px;
        left: 10%;
    }

    .section-banner .section-info {
        position: absolute;
        bottom: -20%;
        left: 0%;
        padding: 30px 45px;
        background-image: url(../assets/images/shape-4.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #06a7e1;
        max-width: 628px;
        z-index: 2;
    }

    .section-banner .section-info h2 {
        color: #fff;
        font-family: var(--thm-font);
        font-size:var(--thm-heading-font-size);
    }

    .section-banner .section-info p {
        color: #EEEEEE;
        text-align: justify;
    }

    .nav-pills .nav-link.active {
        color: #06a7e1;
        background-color: transparent;
    }

    .nav-item .nav-link::before {
        left: 0;
        width: 0;
        bottom: 0;
        height: 1px;
        content: "";
        position: absolute;
        transition: 0.5s;
        background-color: #06a7e1;
    }

    .nav-item .nav-link {
        position: relative;
        color: #888;
        padding: 0;
        font-size:var(--thm-para-font-size);
        font-weight: 700;
        background-color: transparent;
    }

    .nav-item .nav-link:hover {
        color: #06a7e1;
    }

    .nav-item .nav-link:hover::before {
        width: 100%;
    }

    .nav-item .nav-link.active::before {
        width: 100%;
    }

    .nav-item {
        margin-right: 55px;
    }

    .ac-overview {
        padding-left: 20px;
    }

    .ac-overview .pera-dec p {
        margin-bottom: 30px;
        color:var(--thm-para-color);
        text-align: left;
    }

    .ac-overview .pera-dec ul li {
        margin-bottom: 10px;
    }

    .univercity-life .image {
        margin-bottom: 40px;
    }

    .ac-overview .pera-dec h3,
    .theme-heading-two {
        margin-bottom: 30px;
        font-size:var(--thm-heading-font-size);
    }

    .graduets-content .graduets-card {
        padding: 30px;
        margin-bottom: 25px;
        background-color: #f6f6f6;
        transition: 0.5s;
    }

    .graduets-content .graduets-card .content h6 {
        var(--thm-para-font-size): var(--thm-para-var(--thm-para-font-size));
        margin-bottom: 9px;
        transition: 0.5s;
        font-weight: 400;
    }

    .graduets-content .graduets-card .content p {
        transition: 0.5s;
        text-align: justify;
    }

    .graduets-content .graduets-card .content .arrow-btn {
        color: #004a8f;
    }

    .arrow-btn {
        margin-right: 40px;
        position: relative;
        display: inline-block;
        color: #06a7e1;
        var(--thm-para-font-size): var(--thm-para-var(--thm-para-font-size));
    }

    .arrow-btn::before {
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        content: "";
        position: absolute;
        transition: 0.5s;
        background-color: #06a7e1;
    }

    .graduets-content .graduets-card .content .arrow-btn::before {
        background-color: #004a8f;
    }

    .arrow-btn i {
        top: 2px;
        margin-left: 15px;
        position: absolute;
    }

    .arrow-btn::after {
        left: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        content: "";
        position: absolute;
        transition: 0.5s;
        background-color: #fff;
    }

    .graduets-content .graduets-card:hover {
        background-color: #06a7e1;
    }

    .graduets-content .graduets-card:hover .content h6 {
        color: #fff;
    }

    .graduets-content .graduets-card:hover .content p {
        color: rgba(255, 255, 255, 0.75);
    }

    .graduets-content .graduets-card .content .arrow-btn:hover {
        color: #fff;
    }

    .arrow-btn:hover::after {
        width: 100%;
    }

    .single-funfact-info {
        padding: 50px;
        margin-bottom: 25px;
        background-color: #004a8f;
    }

    .single-funfact-info h2 {
        font-size:var(--thm-para-font-size);
        margin-bottom: 15px;
        color: #fff;
    }

    .single-funfact-info p {
        color: rgba(255, 255, 255, 0.7);
    }

    .single-funfact-info .arrow-btn {
        color: #fff;
    }

    .single-funfact-info .arrow-btn::before {
        background-color: #fff;
    }

    .single-funfact-info h2 i {
        font-size:var(--thm-para-font-size);
        color: #e4b200;
        margin-right: 10px;
    }

    .col-lg-4:nth-child(2) .single-funfact-info {
        background-color: #06a7e1;
    }

    .col-lg-4:nth-child(2) .single-funfact-info p,
    .col-lg-4:nth-child(2) .single-funfact-info h2 i,
    .col-lg-4:nth-child(2) .single-funfact-info h2,
    .col-lg-4:nth-child(2) .single-funfact-info .arrow-btn {
        color: #000;
    }

    .col-lg-4:nth-child(2) .single-funfact-info .arrow-btn::before {
        background-color: #000;
    }

     .apply-area {
        background-color: #00a6e01a;
      
}

    .apply-area .container {
        position: relative;
    }

    .apply-image .bubble {
    position: absolute;
    width: 20px; /* Base size */
    height: 20px;
    background: rgba(0, 131, 212, 0.3); /* Light blue */
    border-radius: 50%;
    z-index: 1;
    opacity: 0.6;
    box-shadow: 0 0 8px rgba(0, 131, 212, 0.5);
    animation: floatBubble 4s infinite ease-in-out alternate;
}

/* Different sizes */
.bubble-1 { width: 12px; height: 12px; top: -10px; left: 10px; animation-delay: 0s; }
.bubble-2 { width: 15px; height: 15px; top: 5px; right: 20px; animation-delay: 0.5s; }
.bubble-3 { width: 18px; height: 18px; bottom: 10px; left: 30px; animation-delay: 1s; }
.bubble-4 { width: 25px; height: 25px; bottom: -15px; right: -10px; animation-delay: 1.5s; }
.bubble-5 { width: 14px; height: 14px; top: 50%; left: -20px; animation-delay: 2s; }
.bubble-6 { width: 20px; height: 20px; top: 30%; right: -25px; animation-delay: 2.5s; }

/* Floating Animation */
@keyframes floatBubble {
    0% { transform: translateY(0px) scale(1); opacity: 0.7; }
    100% { transform: translateY(-10px) scale(1.2); opacity: 1; }
}
.apply-image::before, .apply-image::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 80px;
    background: rgb(0 131 212 / 38%);
    border-radius: 50%;
    z-index: 1;
}

.apply-image::before {
    top: -20px;
    left: -30px;
}

.apply-image::after {
    bottom: -20px;
    right: -30px;
}

    .apply-image {
        position: relative;
        margin-left: -50px;
        margin-right: 50px;
        margin-bottom: 25px;
        display: inline-block;
    }

    .apply-image .image img {
        border-radius: 50px 50px 50px 50px;
        height: 100%;
        width: 100%;
    }

.user-help {
    background: rgb(6 167 225 / 26%);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 15px 20px;
    display: flex
;
    align-items: center;
    gap: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 50%;
    position: absolute;
    left: 24%;
    top: -43%;
}

    /* Hover effect */
    .user-help:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }

    .user-help .icon {
        background: linear-gradient(135deg, #06a7e1, #17345a);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #1F2A44;
    font-size:var(--thm-para-font-size);
   
    transition: all 0.3s ease-in-out;
} 

    .user-help .icon:hover {
        background: linear-gradient(135deg, #FFB400, #FFD700);
        box-shadow: 0 6px 12px rgba(255, 215, 0, 0.6);
    }

    /* Text styling */
    .user-help .content {
        display: flex;
        flex-direction: column;
    }

    .user-help .content span {
       font-size: var(--thm-para-font-size);
        color: var(--thm-bg);
        font-weight: 400;
    }

    .user-help .content a {
        font-size:var(--thm-para-font-size);
        font-weight: 700;
        color: var(--thm-bg);
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }

    .user-help .content a:hover {
        color: var(--thm-bg-2);
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.8);
    }
    

    .apply-content {
        margin-left: 10px;
        margin-bottom: 25px;
    }

    .apply-content .title {
        margin-bottom: 40px;
    }

    .apply-content .title h2 {
        font-size:var(--thm-heading-font-size);
        font-family: var(--thm-font);
        color: var(--thm-bg-2);
        
    }

  

    .apply-content .apply-content-card .icon {
        flex: 0 0 auto;
        font-size:var(--thm-para-font-size);
        margin-right: 20px;
        color: #06a7e1;
    }

    .apply-content .apply-content-card .content h3 {
        font-family: var(--thm-font);
        font-size:var(--thm-heading-font-size);
        margin-bottom: 17px;
    }

    .apply-content .apply-content-card .content p {
        text-align: justify;
        color:var(--thm-para-color);
    }

    .apply-content .apply-content-card .content h3 span {
        margin-right: 4px;
        color: #06a7e1;
    }

    .apply-content .apply-btn {
        margin-top: 20px;
    }

    .apply-content .apply-btn li {
        margin-right: 30px;
    }
    .step-number-icon {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between number and image */
}
.step-icon {
    width: 30px; /* Adjust size as needed */
    height: auto;
}
.content {
    display: flex;
    flex-direction: column;
}
    .default-btn {
    padding: 15px 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    background-color: #06a7e1;
   font-size: var(--thm-para-font-size);
    font-weight: 700;
    border-radius: 49%;
}

    .default-btn i {
    line-height: 0;
    font-size: var(--thm-para-font-size);
    margin-left: 19px;
    position: relative;
}

    .parralex_section {
        background-image: url(../assets/images/kelambakkam-bg.jpg);
        height: max-content;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #A4123F;
        position: relative;
        color: #fff;
        height: 700px;
    }

    .gallery-images-carousel {
        bottom: -62px;
    }

    .parralex_section::before {
        z-index: 2;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #004a8e;
        background-image: -webkit-gradient(linear, left top, right top, from(#004a8e), color-stop(#005fa3), color-stop(#0074b8), to(#004a8e));
        background-image: linear-gradient(to right, #004a8e, #005fa3, #0074b8, #004a8e);
        opacity: 0.8;
    }

    .explore-text {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .explore-text h3 {
        font-size:var(--thm-heading-font-size);
        font-family: var(--thm-font);
        color: #fff;
        line-height: 1;
    }

    .explore-text h6 {
        font-size:var(--thm-para-font-size);
        font-family: var(--thm-font);
        color: #fff;
        line-height: 1;
        margin-bottom: 1rem;
    }

    .explore-text p {
        letter-spacing: 1px;
        line-height: 2;
        text-align: justify;
    }

    .facility_section {
        padding: 50px 0;
    }

    .facility_single_item {
        border-radius: 20px;
        border: 1px solid rgba(3, 31, 66, 0.1);
        padding: 23px 23px 15px 23px;
        transition: 0.5s;
    }

    .tp-category-icon {
        margin-bottom: 40px;
    }

    span.cat-purple {
        background: linear-gradient(270deg, rgba(157, 97, 237, 0.14) 0%, rgba(157, 97, 237, 0.01) 100%);
    }

    .tp-category-icon span {
        height: 42px;
        width: 42px;
        line-height: 42px;
        text-align: center;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tp-category-icon .tp-icon_box-image-icon img {
        width: 30px;
        height: 30px;
    }

    .tp-category-title {
        color: #031F42;
        font-size: var(--thm-para-font-size);
        font-weight: 500;
        margin-bottom: 2px;
        font-family: var(--thm-font);
    }

    .tp-category-content span {
        color: #85878C;
        font-size: var(--thm-para-font-size);
        font-weight: 300;
        font-family: var(--thm-font);
    }

    .facility_single_item:hover {
        border-color: rgba(26, 115, 232, 0.5);
        transform: translateY(-4px);
    }

    .facility_single_item:hover .tp-category-title {
        color: #004a8e;
    }

    .facility_section h2 {
        font-family: var(--thm-font);
    }

    .overview_section {
        padding-top: 7rem;
        background-color: #00a6e01a;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        /*.banner-spacing {*/
        /*    padding: 130px 0 !important;*/
        /*    margin-bottom: 30px;*/
        /*}*/

        .section-banner .section-info {
            max-width: 500px;
            bottom: -40px;
        }
    }

    @media screen and (max-width: 370px) {

      .explore-text p{
        padding: 2px;
      }
    .univercity-life::before {
        top: -15px;
        height: 149px !important;
    }
}

    @media screen and (max-width: 400px) {
        
        .card_fac {
            height: 515px !important;
        }
        
        .card_fac_text {
            height: 255px !important;
        }
        
        .card-title {
            var(--thm-para-font-size): 1rem !important;
        }
        
        .theme-heading-two {
            var(--thm-para-font-size): 18px !important;
            margin-bottom: 15px !important;
        }
        
        .mobile-menu .close-btn {
            right: 20px !important;
        }
        
        .mobile-menu .navigation li.dropdown .dropdown-btn {
            right: 25px !important;
        }
        
    }
    

    @media only screen and (max-width: 767px) {
        
        /*.banner-spacing {*/
        /*    padding: 200px 0 !important;*/
        /*    margin-bottom: 0;*/
        /*}*/
        
        .section-banner.bg-20 {
            height: 70vh !important;
        }
        
        .banner-spacing {
            left: 0 !important;
        }
        
        .explore-text p {
            letter-spacing: 0 !important;
            line-height: inherit;
        }

        .section-banner .section-info {
            /*bottom: -25px;*/
            left: 0;
            right: 0;
            /*padding: 30px 20px;*/
            max-width: 300px;
            margin: 0;
            height: auto;
            padding: 10px !important;
        }
        
        .section-banner .section-info::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 25px;
            height: 25px;
            background: inherit;
            transform: translateY(-50%) rotate(45deg);
            z-index: -1;
        }
        
        .section-banner .section-info::after {
            right: -12px;
        }

        .nav-item .nav-link {
            padding: 15px 20px;
            font-size: var(--thm-para-font-size);;
        }

        .univercity-life::before {
            height: 206px;
            width: 91%;
            top: 0px;
        }
        
        .swiper {
            height: auto !important;
        }
        
        .gallery-images-carousel {
            bottom: 0 !important;
        }
        
        .ac-overview {
            padding-left: 0 !important;
        }
        
        .facility-card {
            max-width: 280px !important;
        }
        
        .parralex_section {
            height: fit-content;
        }
        
    }
    
    @media screen and (max-width: 576px) {
        
        .swiper-slide {
            width: 250px !Important;
            height: 250px !important;
        }
        
        .apply-roadmap {
            margin-top: 0 !important;
        }
        
        .apply-content .title {
            margin-bottom: 15px !important;
        }
        
    }

    

    /*accordion css start*/
    .accordion#accordionFacultyMedicine,
    .accordion#accordionCollegeNursing {
        .accordion-item {
            border-right: none;
            border-left: none;
        }

        .accordion-header {
            margin-bottom: 0;
        }

        .accordion-item .accordion-button {
            background-color: transparent;
            border: none;
            box-shadow: unset;
            color: #353688;
            font-family: var(--thm-font);
            font-size: var(--thm-para-font-size);
            font-weight: 500;
            padding: 10px;
        }

        .accordion-item .accordion-body {
            border-top: 1px solid #f3f3f6;
            padding-bottom: 20px;
            padding-left: 0;
            padding-top: 20px;
        }

        .accordion-button:not(.collapsed) {
            font-size: var(--thm-para-font-size);
            color: #353688 !important;
            font-weight: 500 !important;
        }
    }

    .accordion#accordionPanelsStayOpenExample {
        .accordion-item.programs {
            border: none;
            margin-bottom: 1rem;
        }

        .accordion-item.programs .accordion-button.programs {
            background-color: #F6F9FE;
            font-size: var(--thm-para-font-size);;
            font-weight: 500;
        }

        .accordion-item.programs .accordion-button.programs:hover {
            background-color: #eaeef5;
        }

        .accordion-button.programs::after {
            content: "+";
            font-family: var(--thm-font);
            font-weight: 600;
            font-size:var(--thm-para-font-size);
            width: auto;
            height: auto;
            background-image: none;
        }

        .accordion-button.programs:not(.collapsed) {
            background-color: #06da8c !important;
            font-size: var(--thm-para-font-size);
            color: #fff !important;
            font-weight: 500 !important;
        }

        .accordion-button.programs:not(.collapsed)::after {
            background-image: none !important;
        }
    }

    /*accordion css end*/
    .more-text {
        display: none;
    }

    /*Facility Datail Section Start*/
    .single_facility_detail .single_facility_detail_content {
        background-color: transparent;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: 0.5s;
    }

    .single_facility_detail:hover .single_facility_detail_content {
        background-color: #004a8e29;
    }

    .single_facility_detail:hover img {
        transform: scale(1.1);
    }

    .single_facility_detail .single_facility_detail_content p {
        margin: 0;
    }

    .single_facility_detail .single_facility_detail_content h3 {
        margin-bottom: 5px;
    }

    /*Facility Datail Section End*/
    .single_contact_divider {
        background-color: #06a6df;
        ;
        padding: 30px;
        border-right: 1px solid #333;
    }

    .single_contact_divider .icon {
        padding-bottom: 35px;
    }

    .single_contact_divider .icon i {
        color: #17345a;
        font-size:var(--thm-para-font-size);
        min-width: 40px;
        min-height: 40px;
    }

    .single_contact_divider h3 {
        font-size:var(--thm-para-font-size);
        text-transform: none;
        color: #fff;
        margin-bottom: 20px;
    }

    .single_contact_divider p {
        margin-bottom: 20px;
    }

    .single_contact_divider p a {
        color: #fff;
    }

    .contact_divider {
        background-color: #17345a;
        border-radius: 10px;
        overflow: hidden;
        position: absolute;
        z-index: 9;
        bottom: -240px;
        width: 100%;
    }

    .gallery_single_item p {
        padding-top: 20px;
        text-align: center !important;
    }

    .gallery-images-carousel .owl-dots .owl-dot {
        display: inline-block;
        vertical-align: middle;
        padding: 0;
        margin: 0 14px;
        background: 0 0;
        border: 0;
        border-radius: 0;
        outline: 0;
        -webkit-appearance: none;
    }

    .gallery-images-carousel .owl-dots .owl-dot span {
        display: inline-block;
        vertical-align: middle;
        width: 5px;
        height: 5px;
        border-radius: 3em;
        background-color: #525252;
        border: 1px solid #525252;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: .3s;
        transition: .3s;
    }

    .gallery-images-carousel .owl-dots .owl-dot.active span,
    .gallery-images-carousel .owl-dots .owl-dot:hover span {
        background-color: #525252;
        border-color: #525252;
        -webkit-transform: scale(1.4);
        -ms-transform: scale(1.4);
        transform: scale(1.4);
    }

    .gallery-images-carousel .owl-dots {
        margin: 45px 0 0 !important;
        text-align: center;
    }
    
    .apply-now {
        font-family: var(--thm-font);
    }

    .apply-now-btn {
        color: #fff;
        background-color: #299ff1;
        padding: 5px 10px;
        border-radius: 20px;
        display: inline-block;
        font-weight: 500;
        transition: 0.3s;
    }

    .apply-now-btn:hover {
        color: #299ff1;
        background-color: #fff;
    }
    @media (max-width: 370px){

        .explore-text  h3{
            margin-bottom: -38px !important;
        }
        .main-logo-box a img {
        width: 150px !important;
    }
    
    }
    @media (max-width: 768px) {
            .section-banner {
                padding: 50px 20px;
            }
            .section-info h2 {
                var(--thm-heading-font-size) !important;
            }
            .section-info p {
                var(--thm-para-font-size);
            }
        }
    @media (max-width: 576px) {
    .overview_section {
        padding: 40px 15px; 
    }

    .overview_section h3 {
        var(--thm-para-font-size): 1.4rem
        
        
        ; 
    }

    .overview_section p {
        var(--thm-para-font-size): 0.95rem;
        line-height: 1.5;
        text-align: left; 
    }

    .univercity-life img {
        width: 100%;
        height: auto;
        margin-top: 15px;
    }
    .apply-image{
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .apply-image::after{
        width: 8px;
    height: 12px;
    }
    .apply-image::before{
        width: 8px;
    height: 12px;
    }

    #read_more_btn {
        var(--thm-para-font-size): 0.9rem;
        padding: 8px 15px;
    }
    .apply-roadmap{
        padding: 15px !important;
    }
}

    @media (max-width: 991px) {
    .overview_section h3 {
        var(--thm-para-font-size): 1.8rem;
    }

    .overview_section p {
        var(--thm-para-font-size): 1rem;
    }

    .univercity-life img {
        margin-top: 20px;
    }
}

@media (max-width: 768px) {
    .overview_section {
        padding: 50px 20px;
    }

    .overview_section h3 {
        var(--thm-para-font-size): 1.6rem;
    }
}
.apply-roadmap {
    position: relative;
    padding-left: 40px;
    margin-top: 20px;
}
.apply-content-card {
    display: flex;
    align-items: flex-start;
    gap: 20px;
}
.roadmap-step {
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .step-number {
    background-color: #008cdd;
    color: white;
    font-weight: bold;
    width: 42px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    var(--thm-para-font-size);
}

.roadmap-line {
    width: 2px;
    height: 83px;
    background-color: #008cdd;
    margin-left: -3px;
}
.apply-content-card:last-child .roadmap-line {
    display: none; 
}
.default-btn {
    background: var(--thm-bg-2);
    color: white;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: bold;
    transition: 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
.default-btn:hover {
    background: var(--thm-bg);
    transform: translateY(-2px);
}
.contact-box {
            background: #0d2c41;
            padding: 20px;
            border-radius: 10px;
        }
        .contact-box img {
            var(--thm-para-font-size);
            color: #ff4c4c;
            margin-right: 10px;
            width: 8%;
          
        }
        .social-icons a {
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: white;
            color: #0d2c41;
            border-radius: 5px;
            font-size:var(--thm-para-font-size);
            margin: 5px;
            transition: 0.3s;
        }
        .social-icons a:hover {
            background: #ff4c4c;
            color: white;
        }
        .contact{
            background-color: var(--thm-bg-2);
            color: white;
        }
        /* .view-button {
    display: inline-block;
    margin-top: 15px;
    padding: 0px 20px;
    background: var(--thm-bg);
    color: white;
    var(--thm-para-font-size): 16px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
} */
/* .view-button:hover{
    background-color:var(--thm-bg);
    color: white;
} */

/* .owl-carousel.campus_carousel .owl-item img {
    aspect-ratio: 2 / 1;
}
.owl-carousel.campus_carousel .item {
    position: relative;
    text-align: center;
    transform: scale(0.8);
    transition: transform 0.5s ease-in-out;
}

.owl-carousel.campus_carousel .item.active.center {
    transform: scale(1);
}

.owl-carousel.campus_carousel .item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
} */
.swiper {
    width: 100%;
    height: 400px; /* Adjust height as needed */
}

.swiper-slide {
    width: 300px; /* Adjust width as needed */
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.swiper-button-prev,.swiper-button-next{
    display: none;
}
.contact {
    background: linear-gradient(135deg, #00a6e0, #004a8e);

    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.contact h3 {
    var(--thm-para-font-size): 1.8rem;
    color: white; /* White text */
}

.contact strong {
    color: white; /* White text for strong */
    var(--thm-para-font-size): 1.1rem;
}

.contact p {
    color: #f1f1f1; /* Light grey text */
    var(--thm-para-font-size): 1rem;
}

.icon {
    width: 40px;
    height: 40px;
    filter: brightness(0) invert(1); /* Converts black icons to white */
}

.contact-card .p-5 {
    padding: 2rem; /* Better spacing inside the card */
}
.caontact_container{
    background-color: #00a6e01a;
}
</style>

<body>
    <?php include('../include/nav.php'); ?>
    <!--Kelambakkam Campus-->
    <div class="section-banner bg-20 pt_80 pb_80">
        <div class="container banner-spacing">
            <div class="">
                <div class="section-info">
                    <h2 class="wow fadeIn mb-3" data-wow-duration="2s">Kelambakkam Campus</h2>
                    <p class="d-none d-lg-block wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">The Kelambakkam campus of CARE, a 100-acre green space on Chennai’s IT corridor, offers a serene,
                        eco-friendly environment with modern amenities, ensuring a bright future with sustainable
                        living, innovative learning, and vibrant campus life.</p>
                </div>
            </div>
        </div>
    </div>
    <!--Campus At A Glance-->
    <section class="overview_section pt_80 pb_80">
        <div class="container">
            <div class="row ">
                <div class="col-md-12">
                    <div class="ac-overview">
                        <div class="pera-dec">
                            <h3 class="wow fadeIn" data-wow-duration="2s">Campus at a Glance</h3>
                            <div class="row d-flex justify-content-center align-items-center gap-5">
                                <div class="col-md-6 col-lg-5 col-12  wow slideInUp" data-wow-duration="2s">
                                    <p> <span style="var(--thm-para-font-size): 25px;">Chettinad Academy of Research and Education  </span> has a 100 acre lush green campus at Kelambakkam on Old Mahabalipuram Road
                                        (OMR), popularly called the IT corridor of Chennai. Situated around 30 kms away
                                        from Chennai Raj Bhavan, the campus is serene and tranquil sans the hustle and
                                        bustle of the city and yet having access to all the modern day amenities.
                                        Sustainable future being the ultimate goal, all efforts go in to recycle water
                                        and to utilize rainwater through recharge wells and ponds, use of renewable
                                        energy sources is maximized through deployment of solar power panels, exclusive
                                        vehicle-free green zones are earmarked and are provided with bicycles for
                                        mobility.</p>
                                    <div class="my-3 text-lg-start text-center">
                                        <a href="#">
                                            <button id="read_more_btn" onclick="toggleReadMore();"
                                                class="text-decoration-underline">
                                                Read More
                                            </button></a>
                                    </div>
                                    <!--                                 
                                <p> The entire campus is Wi-Fi enabled making all the resources online accessible for the students all the time.Active engagement of students, staff and faculty not just in academics but also in extra curricular, sports and cultural activities makes the campus life at CARE a very vibrant one.</p> -->
                                </div>
                                <div class="col-md-6 col-lg-5 col-12 wow slideInUp" data-wow-duration="2s">
                                    <div class="university-life">
                                        <div class="image diagonal-stripes">
                                            <!-- Swiper Container -->
                                            <div class="swiper campusSwiper">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_10.jpg" alt="Another Slide">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_4.jpg" alt="Chettinad Campus">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_3.jpg" alt="Third Slide">
                                                    </div>
                                                   
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_5.jpg" alt="Third Slide">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_11.jpg" alt="Third Slide">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_6.jpg" alt="Third Slide">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_8.jpg" alt="Third Slide">
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <img src="/chettinaddemo/assets/images/facilities_9.jpg" alt="Third Slide">
                                                    </div>
                                                    <!-- <div class="swiper-slide">
                                                        <img src="../assets/images/b2.jpg" alt="Third Slide">
                                                    </div> -->
                                                </div>
                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <!-- 
                            <div class="col-12 wow fadeIn" data-wow-duration="2s">
                                <p> Apart from separate hostels for girls and boys, apartments and villas for staff, faculty and postgraduate students, with a huge food court offering food in various cuisines, sports facilities – both indoor and outdoor, swimming pool, banks among other facilities, meticulous care has gone in to making life inside the campus a self contained and vibrant one. Students coming from all corners of the country have an opportunity to exchange cultural values and traditions through many colorful cultural events organized throughout the year by the students council.</p>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Schools And Colleges-->
    <section>
        <div class="container">
            <div class="mt-3 mb-5 ac-overview pt_80 pb_80">
                <h3 class="theme-heading-two wow fadeIn" data-wow-duration="2s">Schools & Colleges</h3>
                <div class="row justify-content-center ">
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="/chettinaddemo/assets/images/pharm_science.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body">
                                <p class=" college_title">Chettinad School of Pharmaceutical Sciences</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="/chettinaddemo/assets/images/physiotherap.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body align-items-center d-flex justify-content-center">
                                <p class=" college_title">School Of Physiotherapy </p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A7487.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body align-items-center d-flex justify-content-center">
                                <p class=" college_title mb-0">Chettinad College of Nursing</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A6762.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body align-items-center d-flex justify-content-center">
                                <p class=" college_title mb-0">School of Architecture</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A7374.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body align-items-center d-flex justify-content-center">
                                <p class=" college_title mb-0">School of Law</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="/chettinaddemo/assets/images/occu_therapy.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body p-2">
                                <p class="college_title mb-0">Chettinad School of Occupational Therapy</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="/chettinaddemo/assets/images/medicine.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body p-2">
                                <p class="college_title mb-0">Chettinad Faculty of Medicine</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 col-sm-6 col-md-4 mb-4  wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div class="card facility-card">
                            <div class="overflow-hidden">
                                <img src="/chettinaddemo/assets/images/allied_science.jpg"
                                    class="card-img-top facility-img" alt="facility">
                            </div>
                            <div class="card-body p-2">
                                <p class="college_title mb-0">Chettinad Faculty of Allied Health Sciences</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
    <!--Vission Mission-->
    <section class="parralex_section explore-full-image ">
        <div class="explore-text">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-lg-4 col-12 d-flex align-items-center justify-content-center wow fadeIn" data-wow-duration="2s">
                        <h3 class="block-title bt-left-aligned py-5">Step into CARE</h3>
                    </div>
                    <div class="col-md-6">
                        <p class="wow fadeIn fw-bold" data-wow-duration="2s" data-wow-delay="0.2s">Discover a campus where learning meets innovation. Spread across 100 acres of greenery, CARE
                            offers a modern, student-friendly environment with world-class infrastructure, advanced
                            research facilities, and sustainable initiatives.</p>
                        <p class="wow fadeIn fw-bold" data-wow-duration="2s" data-wow-delay="0.4s">
                            Whether it's cutting-edge technology, interactive learning spaces, or a vibrant student
                            life, CARE provides the perfect foundation for academic and personal growth. Experience
                            excellence at CARE!</p>
                    </div>
                </div>
                <div class="row wow fadeIn" data-wow-duration="2s">
                    <div class="ac-overview p-0">
                        <div class="pera-dec">
                            <div class="gallery-images-carousel owl-carousel owl-theme">
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A8631.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A8703.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/4Z9A8794.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/Chettinad_.0027.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/DSC2935.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/DSC04650.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="gallery_single_item">
                                        <img src="https://care.edu.in/wp-content/uploads/2020/05/DSC05034.jpg"
                                            alt="gallery_image">
                                        <!--<p>Image Title</p>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Facilities Details-->
    <section class="facility_detail_section pt_80 pb_80">
        <div class="container mt-5">
            <h3 class="mb-4 wow fadeIn theme-heading-two" data-wow-duration="2s">Explore Our Campus</h3>
            
            <div class="owl-carousel owl-theme facility-carousel">
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_1.jpg" alt="Eco-friendly Campus">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Eco-friendly Campus</h5>
                            <p class="card-text card_fac_text">
                                The campus promotes sustainability with battery-operated vehicles, bicycles, and water management.
                                Extensive green spaces and solar-powered infrastructure enhance its eco-friendly environment.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <img src="/chettinaddemo/assets/images/facilities_2.jpg" alt="Practical Laboratory">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Practical Laboratory</h5>
                            <p class="card-text card_fac_text">
                                Departments feature well-equipped, ventilated labs providing students with hands-on training in their specialties.
                                These facilities ensure practical exposure and skill development.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <img src="/chettinaddemo/assets/images/facilities_3.jpg" alt="Lecture Theatre">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Lecture Theatre</h5>
                            <p class="card-text card_fac_text">
                                Eleven modern gallery-style lecture theatres equipped with advanced audio-visual aids enhance the learning experience.
                                These theatres accommodate various academic events and lectures.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3 ">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s" data-wow-delay="0">
                        <img src="/chettinaddemo/assets/images/facilities_4.jpg" alt="Auditorium">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Auditorium</h5>
                            <p class="card-text card_fac_text">
                                The air-conditioned auditorium, with international-standard acoustics, seats over 1,500, hosting major university functions.
                                A mini auditorium for smaller events accommodates about 400 attendees.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_5.jpg" alt="Library">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Library</h5>
                            <p class="card-text card_fac_text">
                                The 40,000 sq. ft. central library accommodates 500 readers and houses over 52,264 books, magazines, and journals.
                                It offers extensive resources for academic research and study.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_6.jpg" alt="Hostel">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Hostel</h5>
                            <p class="card-text card_fac_text">
                                CARE provides comfortable, secure hostels with spacious, well-ventilated rooms.
                                The mess offers hygienic multi-cuisine meals catering to diverse tastes.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-4">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_7.jpg" alt="Transport">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Transport</h5>
                            <p class="card-text card_fac_text">
                                Air-conditioned buses provide comfortable transportation for students residing in and around Chennai.
                                This ensures easy commuting to the institute and back.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-4">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_8.jpg" alt="Food Court">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Food Court</h5>
                            <p class="card-text card_fac_text">
                                The campus food court serves a variety of hygienic, quality food for students and staff.
                                Amenities include a bakery, ice cream parlor, fruit juice shop, and Café Coffee Day.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-4">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_9.jpg" alt="Banks & ATM">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Banks & ATM</h5>
                            <p class="card-text card_fac_text">
                                The campus offers comprehensive banking facilities, including an AXIS Bank extension counter.
                                ATMs from AXIS, ICICI, and HDFC banks ensure convenient financial services.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-4">View More</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="card card_fac wow fadeIn" data-wow-duration="2s">
                        <img src="/chettinaddemo/assets/images/facilities_10.jpg" alt="Attendance Monitoring">
                        <div class="card-body card_fac_body">
                            <h5 class="card-title card_fac_title">Attendance Monitoring</h5>
                            <p class="card-text card_fac_text">
                                A biometric and RFID based Attendance Management System with fingerprint recognition is installed in all lecture halls.
                                This ensures accurate tracking of student attendance across various facilities.
                                <a href="#" class="view-button align-items-center d-flex justify-content-center mt-3">View More</a>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--Apply Area-->
    <div class="apply-area pt_80 pb_80">
        <div class="container">
            <div class="row align-items-center wow slideInUp">
                <div class="col-lg-6 col-md-6 col-12 wow slideInUp">
                    <div class="apply-image">
                        <div class="image">
                            <img src="../assets/images/apply-img.jpg" alt="apply-bg">
                        </div>
                        <span class="bubble bubble-1"></span>
                        <span class="bubble bubble-2"></span>
                        <span class="bubble bubble-3"></span>
                        <span class="bubble bubble-4"></span>
                        <span class="bubble bubble-5"></span>
                        <span class="bubble bubble-6"></span>
                       
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 wow slideInUp">
                    <div class="apply-content">
                        <div class="title text-center wow fadeIn" data-wow-duration="2s">
                            <h2>How To Apply At CARE</h2>
                        </div>
                        <div class="apply-roadmap">
                            <!-- Step 1 -->
                            <div class="apply-content-card d-flex gap-3 wow fadeIn" data-wow-duration="2s">
                                <!-- Step Number & Icon -->
                                <div class="roadmap-step d-flex flex-column align-items-center">
                                    <div class="step-number-icon d-flex align-items-center">
                                        <div class="step-number">1</div>
                                        <!-- <img src="/chettinaddemo/assets/images/rocket.png" alt="Rocket" class="step-icon"> -->
                                    </div>
                                    <div class="roadmap-line"></div>
                                </div>
                            
                                <!-- Step Content -->
                                <div class="content">
                                    <h3> Choose Your Campus</h3>
                                    <p>➡️ Select your preferred location: <strong>Kelambakkam</strong> or <strong>Manamai</strong></p>
                                </div>
                            </div>
                            
                            <!-- Step 2 -->
                            <div class="apply-content-card d-flex gap-3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <!-- Step Number & Icon -->
                                <div class="roadmap-step d-flex flex-column align-items-center">
                                    <div class="step-number-icon d-flex align-items-center">
                                        <div class="step-number">2</div>
                                        <!-- <img src="/chettinaddemo/assets/images/books.png" alt="Books" class="step-icon"> -->
                                    </div>
                                    <div class="roadmap-line"></div>
                                </div>
                            
                                <!-- Step Content -->
                                <div class="content">
                                    <h3>Pick Your Course</h3>
                                    <p>➡️ Explore a wide range of programs and choose the one that suits your career goals.</p>
                                </div>
                            </div>
                            
                            <!-- Step 3 -->
                            <div class="apply-content-card mb-0 border-bottom-0 d-flex gap-3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                <!-- Step Number & Icon -->
                                <div class="roadmap-step d-flex flex-column align-items-center">
                                    <div class="step-number-icon d-flex align-items-center">
                                        <div class="step-number">3</div>
                                        <!-- <img src="/chettinaddemo/assets/images/apply-now.png" alt="Apply Now" class="step-icon"> -->
                                    </div>
                                    <div class="roadmap-line"></div>
                                </div>
                            
                                <!-- Step Content -->
                                <div class="content">
                                    <h3> Apply & Get Started!</h3>
                                    <p>➡️ Your journey begins here – make the right choice today! </p>
                                </div>
                            </div>
                            
                        </div>
                        <ul class="list-unstyled ps-5 mb-0 apply-btn wow fadeIn" data-wow-duration="2s">
                            <li class="d-inline-block">
                                <a class="text-decoration-none default-btn" href="https://admission.care.edu.in/" target="_blank">
                                    Apply Now <i class="flaticon-right-arrow"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>

 <!--Contact us-->
 <section class="contact_container pt_80 pb_80">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-5 col-md-5 col-12 wow slideInUp mb-3" data-wow-duration="2s">
                <div class="card contact-card shadow-lg">
                    <div class="contact fw-bold pt_80 p-5">
                        <h3 class="fw-bold d-flex justify-content-center align-items-center text-white">Get in touch</h3>
            
                        <div class="d-flex align-items-start mt-4">
                            <img src="/chettinaddemo/assets/images/location.png" alt="Location" class="me-3 icon">
                            <div>
                                <strong>Address</strong>
                                <p class="mb-0">Kelambakkam, Chennai - 603 103</p>
                            </div>
                        </div>               
            
                        <div class="d-flex align-items-start mt-4">
                            <img src="/chettinaddemo/assets/images/mail.png" alt="Email" class="me-3 icon">
                            <div>
                                <strong>Email</strong>
                                <p class="mb-0">enquiry@care.edu.in</p>
                            </div>
                        </div>
            
                        <div class="d-flex align-items-start mt-4">
                            <img src="/chettinaddemo/assets/images/phone.png" alt="Phone" class="me-3 icon">
                            <div>
                                <strong>Phone</strong>
                                <p class="mb-0">+91 844 789 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="col-lg-5 col-md-5 col-12 mb-3 wow slideInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <iframe src="https://www.google.com/maps/d/embed?mid=1SvC_i9HR8u4ihVxEP6kmxEztA2N_7fc&ehbc=2E312F&noprof=1" height="400" style="width:100%"></iframe>
            </div>   
        </div>

    </div>
 </section>


    <?php include('../include/footer.php'); ?>
    <?php include('../include/footer-js.php'); ?>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            let counters = document.querySelectorAll(".counter");
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.textContent, 10);
                        let count = 1;
                        let speed = Math.max(5, 50 / target);
                        function updateCounter() {
                            counter.textContent = count;
                            if (count < target) {
                                count++;
                                setTimeout(updateCounter, speed);
                            }
                        }
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            counters.forEach(counter => observer.observe(counter));
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".campusSwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 30, 
                    stretch: 0, 
                    depth: 300, 
                    modifier: 1,
                    slideShadows: false, 
                },
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
            });
        });
        
        function toggleReadMore() {
            const readMoreContent = document.getElementById('read_more_content');
            const readMoreBtn = document.getElementById('read_more_btn');
            const readLessBtn = document.getElementById('read_less_btn');
            if (readMoreContent.style.display === 'none') {
                readMoreContent.style.display = 'block';
                readMoreBtn.style.display = 'none';
            } else {
                readMoreContent.style.display = 'none';
                readMoreBtn.style.display = 'inline-block';
            }
        }

        $(document).ready(function () {

            $(".read-more").click(function (e) {
                e.preventDefault();
                var moreText = $(this).prev(".more-text");
                if (moreText.is(":visible")) {
                    moreText.slideUp();
                    $(this).text("Read more");
                } else {
                    moreText.slideDown();
                    $(this).text("Read less");
                }
            });

            $(".facility-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay:true,
                autoplayTimeout: 3000,
                items: 3,
                responsive:{
                0: { items: 1 },  
                768: { items: 2 }, 
                1024: { items: 3 } 
            }
            });
            
            $(".campus_carousel").owlCarousel({
                loop: true,                
                margin: 10,               
                nav: false,                 
                dots: true,                
                autoplay: true,           
                autoplayTimeout: 2000,     
                autoplayHoverPause: true,  
                animateOut: 'fadeOut',     
               
                items:1,
            });

        });

    </script>
</body>