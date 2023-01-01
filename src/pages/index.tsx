// import BannerCard from "@components/common/banner-card";
// import Container from "@components/ui/container";
// import BrandGridBlock from "@containers/brand-grid-block";
// import CategoryBlock from "@containers/category-block";
// import { getLayout } from "@components/layout/layout";
// import BannerWithProducts from "@containers/banner-with-products";
// import BannerBlock from "@containers/banner-block";
// import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";
// import Instagram from "@components/common/instagram";
// import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
// import ProductsFeatured from "@containers/products-featured";
// import BannerSliderBlock from "@containers/banner-slider-block";
// import ExclusiveBlock from "@containers/exclusive-block";
// import Subscription from "@components/common/subscription";
// import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
// import { ROUTES } from "@lib/routes";
// import {
//   masonryBanner,
//   promotionBanner,
//   modernDemoBanner as banner,
//   modernDemoProductBanner as productBanner,
// } from "@data/static/banners";

// export { getStaticProps } from "@framework/ssr/homepage/modern";

// export default function Home() {
//   return (
//     <>
//       <BannerBlock data={masonryBanner} />
//       <Container>
//         <ProductsFlashSaleBlock />
//       </Container>
//       <BannerSliderBlock data={promotionBanner} />
//       <Container>
//         <CategoryBlock sectionHeading="text-shop-by-category" variant="rounded" />
//         <ProductsFeatured sectionHeading="text-featured-products" />
//         <BannerCard
//           data={banner[0]}
//           href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
//           className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
//         />
//         <BrandGridBlock sectionHeading="text-top-brands" />
//         <BannerCard
//           data={banner[1]}
//           href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
//           className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
//         />
//         <BannerWithProducts
//           sectionHeading="text-on-selling-products"
//           categorySlug="/search"
//           data={productBanner}
//         />
//         <ExclusiveBlock />
//         <NewArrivalsProductFeed />
//         <DownloadApps />
//         <Support />
//         <Instagram />
//         <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
//       </Container>
//       <Divider className="mb-0" />
//       <h1>Hello</h1>
//     </>
//   );
// }

// // Home.getLayout = getLayout;


// import BannerCard from "@components/common/banner-card";
// import Container from "@components/ui/container";
// import BrandGridBlock from "@containers/brand-grid-block";
// import CategoryBlock from "@containers/category-block";
import { getLayout } from "@components/layout/layout";
// import BannerWithProducts from "@containers/banner-with-products";
// import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
// import BannerBlock from "@containers/banner-block";
// import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";
// import Instagram from "@components/common/instagram";
// import ProductsFeatured from "@containers/products-featured";
// import BannerSliderBlock from "@containers/banner-slider-block";
// import ExclusiveBlock from "@containers/exclusive-block";
// import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
// import Subscription from "@components/common/subscription";
// import HeroSlider from "@containers/hero-slider";
// import {
//   homeElegantHeroSlider as heroBanner,
//   elegantBannerDataThree,
//   elegantHomeBanner
// } from "@data/static/banners";
// import Slider from '@components/slide/slider'

// import { ROUTES } from "@lib/routes";
// import {
//   classicDemoBanner as banner,
//   classicDemoProductBanner as productBanner,
//   promotionBanner,
//   classicDemoBannerTwo as bannerTwo,
//   classicDemoBannerThree as bannerThree
// } from "@data/static/banners";

// export { getStaticProps } from "@framework/ssr/homepage/classic";

import SiteLayout from '@components/layout/layout'
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
// external
import "react-toastify/dist/ReactToastify.css";
// base css file
// import "@styles/scrollbar.css";
// import "@styles/swiper-carousel.css";
// import "@styles/custom-plugins.css";
// import "@styles/tailwind.css";

import BannerCard from "@components/common/banner-card";
import {
  classicDemoBanner as banner,
  classicDemoProductBanner as productBanner,
  promotionBanner,
  classicDemoBannerTwo as bannerTwo,
  classicDemoBannerThree as bannerThree
} from "@data/static/banners";
import HeroSlider from "@containers/hero-slider";
import {
  homeElegantHeroSlider as heroBanner,
  elegantBannerDataThree,
  elegantHomeBanner
} from "@data/static/banners";
import Slider from '@components/slide/slider'
import BannerSliderBlock from "@containers/banner-slider-block";
import CategoryBlock from "@containers/category-block";

const CustomApp: any = ({ Component, pageProps }: AppPropsWithLayout) => { 

return (
  <>
         <HeroSlider 
        data={heroBanner} 
        paginationPosition="left" 
        buttonClassName="block" 
        variant="fullWidth" 
        variantRounded="default" 
        buttonPosition="inside" 
      />
              <CategoryBlock sectionHeading="text-shop-by-category" />

 <BannerCard
          data={bannerThree}
          href='#'
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
          effectActive={true}
        />
  <BannerSliderBlock data={promotionBanner} />      
      </>
)
}
export default CustomApp


