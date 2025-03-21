import { DownArrowIcon, FacebookIcon, GithubIcon, GreenTickIcon, InstagramIcon, TwitterIcon } from "./icons";

export const HEADER_DATA_LIST = [
    {
        title: "Shop",
        path: "#shop",
        icon: <DownArrowIcon />,
    },
    {
        title: "On Sale",
        path: "#sale",
    },
    {
        title: "New Arrivals",
        path: "#arrivals",
    },
    {
        title: "Brands",
        path: "#brands",
    },
];

export const PARTNER_BRANDS_DATA_LIST = [
    { image: '/assets/images/png/brand-img-1.png', alt: "brand-img-1" },
    { image: '/assets/images/png/brand-img-2.png', alt: "brand-img-2" },
    { image: '/assets/images/png/brand-img-3.png', alt: "brand-img-3" },
    { image: '/assets/images/png/brand-img-4.png', alt: "brand-img-4" },
    { image: '/assets/images/png/brand-img-5.png', alt: "brand-img-5" },
];

export const NEW_ARRIVALS_DATA_LIST = [
    {
        image: "/assets/images/png/new-arrivals-slider-img-1.png",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'T-shirt with Tape Details',
        price: 120,
        rating: "4.5/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/new-arrivals-slider-img-1.png",
            "/assets/images/png/new-arrivals-slider-img-1.png",
            "/assets/images/png/new-arrivals-slider-img-1.png",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    },
    {
        image: "/assets/images/png/new-arrivals-slider-img-2.png",
        starImage: "/assets/images/png/three-star-img.png",
        title: 'Skinny Fit Jeans',
        price: 240,
        originalPrice: "$260",
        discount: "-20%",
        rating: "3.5/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/new-arrivals-slider-img-2.png",
            "/assets/images/png/new-arrivals-slider-img-2.png",
            "/assets/images/png/new-arrivals-slider-img-2.png",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#D32F2F", "#1976D2", "#388E3C"],
        sizes: ["28", "30", "32", "34", "36"],
    },
    {
        image: "/assets/images/png/new-arrivals-slider-img-3.png",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'Checkered Shirt',
        price: 180,
        rating: "4.5/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/new-arrivals-slider-img-3.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FFC107", "#8BC34A", "#00BCD4"],
        sizes: ["Small", "Medium", "Large"],
    },
    {
        image: "/assets/images/png/new-arrivals-slider-img-4.png",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'Sleeve Striped T-shirt',
        price: 130,
        originalPrice: "$160",
        discount: "-30%",
        rating: "4.5/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/new-arrivals-slider-img-4.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#F44336", "#9C27B0", "#3F51B5"],
        sizes: ["Small", "Medium", "Large"],
    },
];

export const TOP_SELLING_DATA_LIST = [
    {
        image: "/assets/images/png/top-selling-slider-img-1.png",
        starImage: "/assets/images/png/five-star-img.png",
        title: 'T-shirt with Tape Details',
        price: 212, originalPrice: "$232", discount: "-20%",
        rating: "5.0/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/top-selling-slider-img-1.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    },
    {
        image: "/assets/images/png/top-selling-slider-img-2.png",
        starImage: "/assets/images/png/four-star-img-2.png",
        title: 'Skinny Fit Jeans',
        price: 145,
        rating: "4.0/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/top-selling-slider-img-2.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    },
    {
        image: "/assets/images/png/top-selling-slider-img-3.png",
        starImage: "/assets/images/png/three-star-img-2.png",
        title: 'Checkered Shirt',
        price: 80,
        rating: "3.0/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/top-selling-slider-img-3.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    },
    {
        image: "/assets/images/png/top-selling-slider-img-4.png",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'Sleeve Striped T-shirt',
        price: 210,
        rating: "4.5/",
        totalRating: "5",
        sideImages: [
            "/assets/images/png/top-selling-slider-img-4.png",
            "/path/to/side-image2.jpg",
            "/path/to/side-image3.jpg",
        ],
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        reviews: [
            {
                author: "John Doe",
                content: "Great product!",
                date: "2025-03-18T12:00:00Z",
            },
            {
                author: "Jane Smith",
                content: "Very useful, would recommend!",
                date: "2025-03-19T12:00:00Z",
            },
        ],
        colors: ["#FF5733", "#33FF57", "#3357FF"],
        sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    },
];

export const HAPPY_CUSTOMERS_DATA_LIST = [
    {
        name: "Sarah M.",
        tickIcon: <GreenTickIcon />,
        starsImage: "/assets/images/png/five-star-img.png",
        alt: "rating-star-img",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        name: "Alex K.",
        tickIcon: <GreenTickIcon />,
        starsImage: "/assets/images/png/five-star-img.png",
        alt: "rating-star-img",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        name: "James L.",
        tickIcon: <GreenTickIcon />,
        starsImage: "/assets/images/png/five-star-img.png",
        alt: "rating-star-img",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name: "Mooen",
        tickIcon: <GreenTickIcon />,
        starsImage: "/assets/images/png/five-star-img.png",
        alt: "rating-star-img",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
];

export const SOCIAL_LIST = [
    {
        icon: <TwitterIcon />,
        link: "https://x.com/?lang=en",
    },
    {
        icon: <FacebookIcon />,
        link: "https://facebook.com",
    },
    {
        icon: <InstagramIcon />,
        link: "https://instagram.com",
    },
    {
        icon: <GithubIcon />,
        link: "https://github.com",
    },
];

export const FOOTER_LIST = [
    {
        title: "Company",
        name: "About",
        nameTwo: "Features",
        nameThree: "Works",
        nameFour: "Career",
    },
    {
        title: "Help",
        name: "Customer Support",
        nameTwo: "Delivery Details",
        nameThree: "Terms & Conditions",
        nameFour: "Privacy Policy",
    },
    {
        title: "FAQ",
        name: "Account",
        nameTwo: "Manage Deliveries",
        nameThree: "Orders",
        nameFour: "Payments",
    },
    {
        title: "Resources",
        name: "Free eBooks",
        nameTwo: "Development Tutorial",
        nameThree: "How to - Blog",
        nameFour: "Youtube Playlist",
    },
];

export const FOOTER_PAYMENT_BADGE_LIST = [
    { image: '/assets/images/png/footer-badge-1.png', alt: "badge-img-1" },
    { image: '/assets/images/png/footer-badge-2.png', alt: "badge-img-2" },
    { image: '/assets/images/png/footer-badge-3.png', alt: "badge-img-3" },
    { image: '/assets/images/png/footer-badge-4.png', alt: "badge-img-4" },
    { image: '/assets/images/png/footer-badge-5.png', alt: "badge-img-5" },
];

export const REVIEWS_DATA_LIST = [
    {
        reviewStar: "/assets/images/png/four-star-img.png",
        alt: "review-stars",
        name: "Samantha D.",
        date: "August 14, 2023",
        review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
    },
    {
        reviewStar: "/assets/images/png/three-star-img.png",
        alt: "review-stars",
        name: "Ethan R.",
        date: "August 16, 2023",
        review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
    },
    {
        reviewStar: "/assets/images/png/four-star-img-2.png",
        alt: "review-stars",
        name: "Alex M.",
        date: "August 15, 2023",
        review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
    },
    {
        reviewStar: "/assets/images/png/four-star-img-2.png",
        alt: "review-stars",
        name: "Olivia P.",
        date: "August 17, 2023",
        review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
    },
    {
        reviewStar: "/assets/images/png/four-star-img-2.png",
        alt: "review-stars",
        name: "Liam K.",
        date: "August 18, 2023",
        review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
    },
    {
        reviewStar: "/assets/images/png/four-star-img.png",
        alt: "review-stars",
        name: "Ava H.",
        date: "August 19, 2023",
        review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
    }
];

export const ALSO_LIKE_DATA_LIST = [
    {
        image: "/assets/images/png/also-like-product-img-4.png",
        alt: "product-img-1",
        starImage: "/assets/images/png/four-star-img-2.png",
        title: 'Polo with Contrast Trims',
        price: 212,
        originalPrice: "$242",
        discount: "-20%",
        rating: "4.0/",
    },
    {
        image: "/assets/images/png/also-like-product-img-3.png",
        alt: "product-img-2",
        starImage: "/assets/images/png/three-star-img.png",
        title: 'Gradient Graphic T-shirt',
        price: 145,
        rating: "3.5/",
    },
    {
        image: "/assets/images/png/also-like-product-img-3.png",
        alt: "product-img-3",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'Polo with Tipping Details',
        price: 180,
        rating: "4.5/",
    },
    {
        image: "/assets/images/png/also-like-product-img-4.png",
        alt: "product-img-4",
        starImage: "/assets/images/png/four-star-img.png",
        title: 'Black Striped T-shirt',
        price: 120,
        originalPrice: "$150",
        discount: "-30%",
        rating: "5.0/",
    },
];