import Banner from "@/sections/Home/Banner";
import AboutSection from "@/sections/Home/AboutSection";
import BestSeller from "@/sections/Home/BestSeller";
import AlbumLastest from "@/sections/Home/Album";
import CateSection from "@/sections/Home/CategorieSection";
import Breadcum from "@/components/Breadcum";
import Table from "@/components/Table";
import Page from "@/components/Page";
export default function Home() {
  // const columns = [
  //   {title: "Name", name: "name"},
  //   {title: "Price", name: "price"},
  // ]

  // const data = [
  //   {
  //     name: "heehhe",
  //     price:123
  //   }
  // ]


  return (
    <Page title="Trang chủ">
      <Banner/>
      <AboutSection />
      <BestSeller/>
      <AlbumLastest/>
      <CateSection/> 
      {/* <Table
        columns= {columns}
        data = {data}
      /> */}
    </Page>
  )
}
