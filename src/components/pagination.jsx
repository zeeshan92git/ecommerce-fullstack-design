import React from 'react';
import { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';

function Pagination({currentPage,setcurrentPage,itemsPerPage}) {

    const { productsData } = useContext(AppContext);
    const totalPages = Math.ceil(productsData.length / itemsPerPage);
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setcurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const maxVisiblePages = 3; // Show only 3 page buttons at a time
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
                className="sm:px-3 px-2 sm:py-2 py-1 border border-stone-500 rounded-md text-stone-500 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MdChevronLeft className="sm:text-xl text-lg" />
            </button>

            {visiblePages.map((page) => (
                <button key={page} onClick={() => goToPage(page)}
                    className={`sm:px-3 px-2 sm:py-2 py-1 border border-stone-300 rounded-md ${currentPage === page
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "text-stone-500"
                        }`}>{page}</button>))}

            <button
                onClick={shiftWindowRight}
                disabled={pageWindowStart + maxVisiblePages > totalPages}
                className="sm:px-3 px-2 sm:py-2 py-1 border border-stone-300 rounded-md text-stone-500 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <MdChevronRight className="sm:text-xl text-lg" />
            </button>
        </div>
    )
}

export default Pagination;