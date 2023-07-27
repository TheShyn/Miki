import ReactPaginate from 'react-paginate';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  pageCount: number ,
  scroll?: number
}

export default function Pagination({ pageCount, scroll = 0 }: Props) {
  const location = useLocation();
  const { pathname } = location;
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate()


  const handlePageClick = (e: any) => {
    const newPage = e.selected + 1
    searchParams.set('page', String(newPage));
    const newSearch = searchParams.toString();
    const newUrl = `${pathname}?${newSearch}`;
    navigate(newUrl)
    if(scroll) window.scrollTo({ top: scroll, behavior: 'smooth' });
  }
  return (
    <div>
      <ReactPaginate
        className="flex items-center float-right mt-12"
        pageLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
        pageClassName="mx-2"
        activeLinkClassName="bg-primary-text text-white select-none cursor-not-allowed hover:bg-primary-text"
        activeClassName="select-none"
        previousLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
        nextLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
      />
    </div>
  );
}