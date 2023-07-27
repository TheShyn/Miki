import Page from "@/components/Page";
import AboutSection from "@/sections/Home/AboutSection";
import AlbumLastest from "@/sections/Home/Album";
import Banner from "@/sections/Home/Banner";
import BestSeller from "@/sections/Home/BestSeller";
import CateSection from "@/sections/Home/CategorieSection";
export default function Home() {

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
