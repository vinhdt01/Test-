import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.pnj.io/images/promo/147/xmas_1972x640CTA.jpg" },
  {
    url: "https://cdn.pnj.io/images/promo/146/Banner_tabsale_T12_Scheme_1972x640CTA.jpg",
  },
  {
    url: "https://cdn.pnj.io/images/promo/147/watch-thoi-gian-nang-toa-sang-1972_x_640_-_CTA.jpg",
  },
  {
    url: "https://cdn.pnj.io/images/promo/141/egift_banner_2022_1972x640CTA.jpg",
  },
  { url: "https://cdn.pnj.io/images/promo/141/PNJ_FastBanner_1972x640CTA.jpg" },
];

const Slider:React.FC = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={493}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={2000}
      />
    </div>
  );
};
export default Slider;
