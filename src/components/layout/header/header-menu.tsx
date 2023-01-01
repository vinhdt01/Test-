// import Link from "@components/ui/link";
// import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown";
// import MegaMenu from "@components/ui/mega-menu";
// import classNames from "classnames";
// import ListMenu from "@components/ui/list-menu";
// import { useTranslation } from "next-i18next";
// import React from "react";

// interface MenuProps {
// 	data: any;
// 	className?: string;
// }

// const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
// 	const { t } = useTranslation("menu");
// 	return (
// 		<nav className={classNames(`headerMenu flex w-full relative`, className)}>
// 			{data?.map((item: any) => (
// 				<div
// 					className={`menuItem group cursor-pointer py-7 ${
// 						item.subMenu ? "relative" : ""
// 					}`}
// 					key={item.id}
// 				>
// 					<Link
// 						href={item.path}
// 						className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
// 					>
// 						{t(item.label)}
// 						{(item?.columns || item.subMenu) && (
// 							<span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
// 								<FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
// 							</span>
// 						)}
// 					</Link>

// 					{item?.columns && Array.isArray(item.columns) && (
// 						<MegaMenu columns={item.columns} />
// 					)}

// 					{item?.subMenu && Array.isArray(item.subMenu) && (
// 						<div className="subMenu shadow-header bg-gray-200 absolute ltr:left-0 rtl:right-0 opacity-0 group-hover:opacity-100">
// 							<ul className="text-body text-sm py-5">
// 								{item.subMenu.map((menu: any, index: number) => {
// 									const dept: number = 1;
// 									const menuName: string = `sidebar-menu-${dept}-${index}`;

// 									return (
// 										<ListMenu
// 											dept={dept}
// 											data={menu}
// 											hasSubMenu={menu.subMenu}
// 											menuName={menuName}
// 											key={menuName}
// 											menuIndex={index}
// 										/>
// 									);
// 								})}
// 							</ul>
// 						</div>
// 					)}
// 				</div>
// 			))}
// 		</nav>
// 	);
// };

// export default HeaderMenu;
import React from 'react';
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css';

// const showSubMenu:React.FC = () => {
// 	return (
// 		<div>
// 			<div className="w-[1200px] h-[400px] px-[45px] py-[25px] bg-[#fff]">
// 			<table className="table-auto">
//   <thead>
//       <tr className="text-left text-[12px]">
//       <th className="pr-[40px] pb-[20px] pb-[20px]">Chủng Loại</th>
//       <th className="pr-[40px] pb-[20px] pb-[20px]">Chất Liệu</th>
//       <th className="pr-[40px] pb-[20px] pb-[20px]">Dòng Hàng</th>
// 	    <th className="pr-[40px] pb-[20px] pb-[20px]">Bộ Sưu Tập</th>
//       <th className="pr-[40px] pb-[20px] pb-[20px]">Thương Hiệu</th>
// 	    <th className="pr-[40px] pb-[20px] pb-[20px]">Trang Sức Phong Thủy</th>
//     </tr>
//   </thead>
//   <tbody className="text-[12px]">
//       <tr className="pr-[40px] pb-[20px] pb-[20px]">
//       <td className="pr-[40px] pb-[20px] pb-[20px]">Malcolm Lockyer</td>
//       <td className="pr-[40px] pb-[20px] pb-[20px]">Malcolm Lockyer</td>
//       <td className="pr-[40px] pb-[20px] pb-[20px]">1961</td>
// 	    <td className="pr-[40px] pb-[20px] pb-[20px]">Malcolm Lockyer</td>
//       <td className="pr-[40px] pb-[20px] pb-[20px]">Malcolm Lockyer</td>
//       <td className="pr-[40px] pb-[20px] pb-[20px]">1961</td>
//     </tr>
//     <tr className="pr-[40px] pb-[20px] pb-[20px]">
//       <td className="pr-[40px] pb-[20px] pb-[20px]">Witchy Woman</td>
//       <td className="pr-[40px] pb-[20px] pb-[20px]">The Eagles</td>
//       <td className="pr-[40px] pb-[20px]">1972</td>
// 	    <td className="pr-[40px] pb-[20px]">Witchy Woman</td>
//       <td className="pr-[40px] pb-[20px]">The Eagles</td>
//       <td className="pr-[40px] pb-[20px]">1972</td>
//     </tr>
//     <tr>
//       <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
// 	    <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
//     </tr>
// 	<tr>
//       <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
// 	  <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
//     </tr>
// 	<tr>
//       <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
// 	  <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
//     </tr>
// 	<tr>
//       <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
// 	  <td className="pr-[40px] pb-[20px]">Shining Star</td>
//       <td className="pr-[40px] pb-[20px]">Earth, Wind, and Fire</td>
//       <td className="pr-[40px] pb-[20px]">1975</td>
//     </tr>
//   </tbody>
// </table>
// 			</div>
// 		</div>
// 	)
// }

const showSubMenu:React.FC = () => {
  
	return (
  
		<div>
			<div className="w-[1200px] h-[400px] px-[45px] py-[25px] bg-[#fff]">
			<table className="table-auto">
  <thead>
      <tr className="text-left text-[12px]">
      <th className="pr-[40px] pb-[20px] "></th>
    </tr>
  </thead>
  <tbody className="text-[12px]">
     <th>
       <tr></tr>
     </th>

  </tbody>
</table>
			</div>
		</div>
	)
}
const HeaderMenu: React.FC = () => {
  return (
    <div className="bg-[#fff] text-[#000000] mt-[5px] w-[100%]">
      <div className="flex justify-center max-w-[1200px] m-auto">
        <div className="flex justify-between items-center w-[1200px] h-[40px]">
          <div className="cursor-pointer">
		 <Tippy
		 placement="bottom-end"
		 interactive
		  render={attrs => (
			showSubMenu()
		  )}
		 
		 >
		 	 <a
	              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
	              href="#"
	            >
	              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
	                Trang Sức
	              </span>
	            </a>
		 </Tippy>

			<a
              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Trang Sức Cưới
              </span>
            </a>

			<a
              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Đồng Hồ
              </span>
            </a>

			<a
              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Quà Tặng
              </span>
            </a>

			<a
              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Thương Hiệu
              </span>
            </a>

			{/* <a
              className="group pr-11 text-[#000000] hover:text-[#e3c9aa] transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-orange to-orange	 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blog
              </span>
            </a> */}

			<a
              className="group pr-11 text-pink-500 transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Blog
              </span>
            </a>

            <a
              className="group pr-11 text-pink-500 transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Khuyến Mãi
              </span>
            </a>
          </div>
          <div className="w-[350px]   items-center relative">
            <input
              className=" border-solid border-2  h-[35px] bg-[#ededed] rounded-[100px] w-[100%] pl-[10px] placeholder:italic outline-none "
              type="text"
              placeholder="Tìm kiếm nhanh"
            />
            <img
              className=" absolute top-[9px] right-2 bg-[#ededed]"
              src="https://cdn.pnj.io/images/image-update/layout/mobile/find-icon.svg"
              alt="Tìm kiếm nhanh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMenu;
