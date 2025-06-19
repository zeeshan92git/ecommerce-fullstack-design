import React from 'react';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const products = [
  {
    image: "/images/phone.jpeg",
    name: "Apple iPhone 13",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 5000,
    oldPrice: 899,
    orders: 154,
    rating: 4.7,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['8GB RAM', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Samsung Galaxy S21",
    description: "High-performance Android phone with an amazing display.",
    price: 10000,
    oldPrice: 799,
    orders: 154,
    rating: 4.5,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Xiaomi Poco X5",
    description: "Budget phone with powerful features and smooth UI.",
    price: 5000,
    oldPrice: 349,
    orders: 154,
    rating: 4.2,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "OnePlus Nord CE",
    description: "Smooth Oxygen OS experience with solid hardware.",
    price: 5000,
    oldPrice: 399,
    orders: 154,
    rating: 4.3,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 5000,
    orders: 154,
    oldPrice: 299,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    rating: 4.0,
    orders: 154,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Apple iPhone 13",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 5000,
    oldPrice: 899,
    orders: 154,
    rating: 4.7,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['8GB RAM', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Samsung Galaxy S21",
    description: "High-performance Android phone with an amazing display.",
    price: 10000,
    oldPrice: 799,
    orders: 154,
    rating: 4.5,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Xiaomi Poco X5",
    description: "Budget phone with powerful features and smooth UI.",
    price: 5000,
    oldPrice: 349,
    orders: 154,
    rating: 4.2,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "OnePlus Nord CE",
    description: "Smooth Oxygen OS experience with solid hardware.",
    price: 5000,
    oldPrice: 399,
    orders: 154,
    rating: 4.3,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 5000,
    orders: 154,
    oldPrice: 299,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    rating: 4.0,
    orders: 154,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Apple iPhone 13",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 5000,
    oldPrice: 899,
    orders: 154,
    rating: 4.7,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['8GB RAM', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Samsung Galaxy S21",
    description: "High-performance Android phone with an amazing display.",
    price: 10000,
    oldPrice: 799,
    orders: 154,
    rating: 4.5,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Xiaomi Poco X5",
    description: "Budget phone with powerful features and smooth UI.",
    price: 5000,
    oldPrice: 349,
    orders: 154,
    rating: 4.2,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "OnePlus Nord CE",
    description: "Smooth Oxygen OS experience with solid hardware.",
    price: 5000,
    oldPrice: 399,
    orders: 154,
    rating: 4.3,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 5000,
    orders: 154,
    oldPrice: 299,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    rating: 4.0,
    orders: 154,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Apple iPhone 13",
    description: "Latest iPhone with A15 Bionic chip and improved battery life.",
    price: 5000,
    oldPrice: 899,
    orders: 154,
    rating: 4.7,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['8GB RAM', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Samsung Galaxy S21",
    description: "High-performance Android phone with an amazing display.",
    price: 10000,
    oldPrice: 799,
    orders: 154,
    rating: 4.5,
    starsCount: 5,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-7.jpeg",
    name: "Xiaomi Poco X5",
    description: "Budget phone with powerful features and smooth UI.",
    price: 5000,
    oldPrice: 349,
    orders: 154,
    rating: 4.2,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "OnePlus Nord CE",
    description: "Smooth Oxygen OS experience with solid hardware.",
    price: 5000,
    oldPrice: 399,
    orders: 154,
    rating: 4.3,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 5000,
    orders: 154,
    oldPrice: 299,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/t-8.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/watch.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    rating: 4.0,
    orders: 154,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  },
  {
    image: "/images/phone.jpeg",
    name: "Huawei P40 Lite",
    description: "Great camera system with long battery life.",
    price: 269,
    oldPrice: 299,
    orders: 154,
    rating: 4.0,
    starsCount: 4,
    category: "Automobiles",
    brand: "Oppo",
    features: ['Super Power', 'Large Memory'],
    condition: 'new'
  }
];

function Pagination({currentPage,setcurrentPage,itemsPerPage}) {
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setcurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const maxVisiblePages = 2; // Show only 2 page buttons at a time
    const [pageWindowStart, setPageWindowStart] = useState(1);

    // Handle left/right group movement
    const shiftWindowLeft = () => {
        const newStart = Math.max(1, pageWindowStart - maxVisiblePages);
        setPageWindowStart(newStart);
        goToPage(newStart);
    };

    const shiftWindowRight = () => {
        const newStart = Math.min(totalPages - maxVisiblePages + 1, pageWindowStart + maxVisiblePages);
        setPageWindowStart(newStart);
        goToPage(newStart);
    };

    // Get visible pages
    const visiblePages = Array.from({ length: maxVisiblePages }, (_, i) => {
        const page = pageWindowStart + i;
        return page <= totalPages ? page : null;
    }).filter(Boolean);


    return (
        <div className="flex gap-2 items-center justify-center ">
            <button
                onClick={shiftWindowLeft}
                disabled={pageWindowStart === 1}
                className="px-3 py-1 border border-stone-300 rounded-md text-stone-500 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MdChevronLeft className="text-xl" />
            </button>

            {visiblePages.map((page) => (
                <button key={page} onClick={() => goToPage(page)}
                    className={`px-3 py-1 border border-stone-300 rounded-md ${currentPage === page
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-stone-500"
                        }`}>{page}</button>))}

            <button
                onClick={shiftWindowRight}
                disabled={pageWindowStart + maxVisiblePages > totalPages}
                className="px-3 py-1 border border-stone-300 rounded-md text-stone-500 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MdChevronRight className="text-xl" />
            </button>
        </div>
    )
}

export default Pagination;