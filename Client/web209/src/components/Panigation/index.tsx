import ReactPaginate from 'react-paginate';
type Props = {
    pageCount:number
}

export default function Pagination({ pageCount }: Props) {
    // const router = useRouter();

    const handlePageClick =(e:any) => {
        // filterSearch({ router, page: e.selected + 1});
        
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