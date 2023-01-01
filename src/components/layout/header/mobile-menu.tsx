// import { useState } from "react";
// import Link from "@components/ui/link";
// import Scrollbar from "@components/common/scrollbar";
// import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
// import Logo from "@components/ui/logo";
// import { useUI } from "@contexts/ui.context";
// import { IoClose } from "@react-icons/all-files/io5/IoClose";
// import { useTranslation } from "next-i18next";
// import { useSettings } from "@contexts/settings.context";
// import { getIcon } from "@lib/get-icon";
// import socialIcons from "@components/icons/social-icon";
// import { Social } from "@framework/types";
// import { mobileMenu } from "@data/static/menus";

// export default function MobileMenu() {
// 	const [activeMenus, setActiveMenus] = useState<any>([]);
//   const settings = useSettings();

//   const socials = settings?.contactDetails?.socials;

// 	const { closeSidebar } = useUI();
// 	const { t } = useTranslation("menu");
// 	const handleArrowClick = (menuName: string) => {
// 		let newActiveMenus = [...activeMenus];

// 		if (newActiveMenus.includes(menuName)) {
// 			let index = newActiveMenus.indexOf(menuName);
// 			if (index > -1) {
// 				newActiveMenus.splice(index, 1);
// 			}
// 		} else {
// 			newActiveMenus.push(menuName);
// 		}

// 		setActiveMenus(newActiveMenus);
// 	};

// 	const ListMenu = ({
// 		dept,
// 		data,
// 		hasSubMenu,
// 		menuName,
// 		menuIndex,
// 		className = "",
// 	}: any) =>
// 		data.label && (
// 			<li className={`mb-0.5 ${className}`}>
// 				<div className="flex items-center justify-between">
// 					<Link
// 						href={data.path}
// 						className="w-full text-[15px] menu-item relative py-3 ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 ltr:pr-4 rtl:pl-4 transition duration-300 ease-in-out"
// 					>
// 						<span className="block w-full" onClick={closeSidebar}>
// 							{t(`${data.label}`)}
// 						</span>
// 					</Link>
// 					{hasSubMenu && (
// 						<div
// 							className="cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center"
// 							onClick={() => handleArrowClick(menuName)}
// 						>
// 							<IoIosArrowDown
// 								className={`transition duration-200 ease-in-out transform text-heading ${
// 									activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"
// 								}`}
// 							/>
// 						</div>
// 					)}
// 				</div>
// 				{hasSubMenu && (
// 					<SubMenu
// 						dept={dept}
// 						data={data.subMenu}
// 						toggle={activeMenus.includes(menuName)}
// 						menuIndex={menuIndex}
// 					/>
// 				)}
// 			</li>
// 		);

// 	const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
// 		if (!toggle) {
// 			return null;
// 		}

// 		dept = dept + 1;

// 		return (
// 			<ul className="pt-0.5">
// 				{data?.map((menu: any, index: number) => {
// 					const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

// 					return (
// 						<ListMenu
// 							dept={dept}
// 							data={menu}
// 							hasSubMenu={menu.subMenu}
// 							menuName={menuName}
// 							key={menuName}
// 							menuIndex={index}
// 							className={dept > 1 && "ltr:pl-4 rtl:pr-4"}
// 						/>
// 					);
// 				})}
// 			</ul>
// 		);
// 	};

// 	return (
// 		<>
// 			<div className="flex flex-col justify-between w-full h-full">
// 				<div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 flex-shrink-0 py-0.5">
// 					<Logo />

// 					<button
// 						className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
// 						onClick={closeSidebar}
// 						aria-label="close"
// 					>
// 						<IoClose className="text-black mt-1 md:mt-0.5" />
// 					</button>
// 				</div>

// 				<Scrollbar className="menu-scrollbar flex-grow mb-auto">
// 					<div className="flex flex-col py-7 px-0 lg:px-2 text-heading">
//               <ul className="mobileMenu">
//                 {mobileMenu?.map((menu: any, index: number) => {
//                   const dept: number = 1;
//                   const menuName: string = `sidebar-menu-${dept}-${index}`;

//                   return (
//                     <ListMenu
//                       dept={dept}
//                       data={menu}
//                       hasSubMenu={menu.subMenu}
//                       menuName={menuName}
//                       key={menuName}
//                       menuIndex={index}
//                     />
//                   );
//                 })}
//               </ul>
// 					</div>
// 				</Scrollbar>

// 				<div className="flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-x-1 rtl:space-x-reverse">
// 					{socials?.map((social: Social, index: number) => (
// 						<a
// 							href={social?.url ?? "#!"}
// 							className={`text-heading p-5 opacity-60 ltr:first:-ml-4 rtl:first:-mr-4 transition duration-300 ease-in hover:opacity-100`}
// 							target="_blank"
//               rel="noreferrer"
// 							key={index}
// 						>
//               {getIcon({
//                 iconList: socialIcons,
//                 iconName: social?.icon
//               })}
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	);
// }


  import React , { useState } from "react"
  import { useUI } from "@contexts/ui.context";
  import { IoClose } from "@react-icons/all-files/io5/IoClose";
  import {IoIosArrowBack} from "@react-icons/all-files/io5/IoIosArrowBack";
  import clsx from "clsx";
	

  export default function MobileMenu({handleMobileMenu}) { 
	const MENU_ITEMS = [
		{
			
			title: 'Trang Sức',
			children: {
				title: 'Trang Sức',
				data: [
					{
						type: 'trang_suc',
	  
						title: 'Chủng Loại',


						children: {

							title: 'Chủng Loại',
	                        data: [
								{
									type:'trang_suc',
									title:'Nhẫn'
								},
								{
									type:'trang_suc',
									title:'Bông Tai'
								},
								{
									type:'trang_suc',
									title:'Lắc'
								},
								{
									type:'trang_suc',
									title:'Vòng'
								},
								{
									type:'trang_suc',
									title:'Kiềng'
								},
								{
									type:'trang_suc',
									title:'Dây Chuyền'
								},
								{
									type:'trang_suc',
									title:'Mặt Dây Chuyền'
								},
								{
									type:'trang_suc',
									title:'Dây Cổ'
								},
								{
									type:'trang_suc',
									title:'Charm'
								},
							]
						    

						}
					},
					
					{
						type: 'trang_suc',
	  
						title: 'Chất Liệu',
						children: {

							title: 'Chất Liệu',
	                        data: [
								{
									type:'trang_suc',
									title:'Vàng'
								},
								{
									type:'trang_suc',
									title:'Bạc'
								},
								{
									type:'trang_suc',
									title:'Platinum'
								}
							]
						    

						}
					},
				
					{
						type: 'trang_suc',
	  
						title: 'Dòng trang sức',
						children: {

							title: 'Dòng Trang Sức',
	                        data: [
								{
									type:'trang_suc',
									title:'Trang Sức Đính Kim Cương'
								},
								{
									type:'trang_suc',
									title:'Trang Sức Đính ECZ'
								},
								{
									type:'trang_suc',
									title:'Trang Sức Đính Đá Quý Và Bán Quý'
								},
								{
									type:'trang_suc',
									title:'Trang Sức Công Nghệ Ý'
								}
								,
								{
									type:'trang_suc',
									title:'Trang Sức Đính Ngọc Trai'
								}
								,
								{
									type:'trang_suc',
									title:'Trang Sức Đính CZ'
								}
								,
								{
									type:'trang_suc',
									title:'Trang Sức Không Đính Đá'
								}
								,
								{
									type:'trang_suc',
									title:'Kim Cương Viên'
								}
							]
						    

						}
						
					},
					
					{
						type: 'trang_suc',
	  
						title: 'Bộ sưu tập',
						children: {

							title: 'Bộ Sưu Tập',
	                        data: [
								{
									type:'trang_suc',
									title:'Flowrous'
								},
								{
									type:'trang_suc',
									title:'Thần Tài 2023'
								},
								{
									type:'trang_suc',
									title:'Nàng Tiên Cá Ariel'
								},
								{
									type:'trang_suc',
									title:'Alice in Wonderland'
								},
								{
									type:'trang_suc',
									title:'The Merrier'
								},
								{
									type:'trang_suc',
									title:'Sứ Giả Mùa Xuân'
								},
								{
									type:'trang_suc',
									title:'Nụ Tầm Xuân'
								},
								{
									type:'trang_suc',
									title:'Thần Tài 2022'
								},
								{
									type:'trang_suc',
									title:'Tinker Bell'
								},
								{
									type:'trang_suc',
									title:'Style X Chou Chou'
								},
								{
									type:'trang_suc',
									title:'Sweet Spring'
								},
								{
									type:'trang_suc',
									title:'Goddesses'
								},
								{
									type:'trang_suc',
									title:'Nàng Thu'
								},
								
							]
						    

						}
					},
					
					{
						type: 'trang_suc',
	  
						title: 'Thương Hiệu',
						children: {

							title: 'Thương Hiệu',
	                        data: [
								{
									type:'trang_suc',
									title:'PNJ'
								},
								{
									type:'trang_suc',
									title:'PNJSILVER'
								},
								{
									type:'trang_suc',
									title:'STYLE By PNJ'
								},
								{
									type:'trang_suc',
									title:'Disney|PNJ'
								}
							
						]
					}
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang sức phong thủy',
						children: {

							title: 'Trang Sức Phong Thủy',
	                        data: [
								{
									type:'trang_suc',
									title:'Trang Sức Theo Cung'
								},
								{
									type:'trang_suc',
									title:'Trang Sức Theo Cung'
								},
								{
									type:'trang_suc',
									title:'Sản Phẩm Phong Thủy'
								}
							
						]
					}
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang sức trẻ em',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang Sức Nam',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang Sức Trẻ Em',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang Sức Tín Ngưỡng',
					},
					{
						type: 'trang_suc',
	  
						title: 'Online Exclusive',
					},
					{
						type: 'trang_suc',
	  
						title: 'Bộ Trang Sức',
					},
					{
						type: 'trang_suc',
	  
						title: 'Best Seller',
					},
				],
			},
		},

		{
			
			title: 'Trang Sức Cưới',
			children: {
				title: 'Trang Sức Cưới',
				data: [
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Theo mục đích',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Chủng Loại',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Dòng trang sức',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Chất liệu',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Bộ sưu tập',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: '>> Xem tất cả',
					},

				],
			},
		},
		{
			
			title: 'Đồng Hồ',
			children: {
				title:'Đồng Hồ',
				data: [
					{
						type: 'dong_ho',
						title:'Thương Hiệu Thụy Sỹ',
						children: {
							title:'Đồng Hồ',
							data: [
								{
						          type: 'dong_ho',
						          title:'Jowissa'
								},
								{
								  type: 'dong_ho',
								  title:'Jowissa'
								},
								{
								  type: 'dong_ho',
								  title:'Longines'
								},
								{
								  type: 'dong_ho',
								  title:'Tissot'
								},
								{
								  type: 'dong_ho',
								  title:'Jacques Du Manoir'
								},
								{
								  type: 'dong_ho',
								  title:'Claude Bernard'
								},
								{
								  type: 'dong_ho',
								  title:'Swiss Military'
								}
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Thương Hiệu Thời Trang',
						children: {
							title:'Thương Hiệu Thời Trang',
							data: [
								{
						          type: 'dong_ho',
						          title:'Gucci'
								},
								{
								  type: 'dong_ho',
								  title:'Emily Carter'
								},
								{
								  type: 'dong_ho',
								  title:'Olivia Burton'
								},
								{
								  type: 'dong_ho',
								  title:'Just Cavalli'
								},
								{
								  type: 'dong_ho',
								  title:'Kenneth Cole'
								},
								{
								  type: 'dong_ho',
								  title:'Avi-8'
								},
								{
								  type: 'dong_ho',
								  title:'Michael Kors'
								}
								,
								{
								  type: 'dong_ho',
								  title:'Fossil'
								}
								,
								{
								  type: 'dong_ho',
								  title:'Daniel Wellington'
								}
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Thương Hiệu Yêu Thích',
						children:{
							title:'Thương Hiệu Yêu Thích',
							data:[
								{
									type:'dong_ho',
									title:'Citizen'
								},
								{
									type:'dong_ho',
									title:'Casio'
								},
								{
									type:'dong_ho',
									title:'Orient'
								},
								{
									type:'dong_ho',
									title:'Skagen'
								},
								{
									type:'dong_ho',
									title:'Lancaster'
								},
								{
									type:'dong_ho',
									title:'Hamilton'
								},
								{
									type:'dong_ho',
									title:'Calvin Klein'
								},
								{
									type:'dong_ho',
									title:'Anonimo'
								},
								{
									type:'dong_ho',
									title:'Emporio Armani'
								},

							]
						}
					},
					{
						type: 'dong_ho',
						title:'Giới Tính',
						children:{
							title:'Giới Tính',
							data:[
							   {
								type:'dong_ho',
								title:'Nam',
							   },
							   {
								type:'dong_ho',
								title:'Nữ',
							   },
							   {
								type:'dong_ho',
								title:'Unisex',
							   }		
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Chủng Loại',
						children:{
							title:'Giới Tính',
							data:[
							   {
								type:'dong_ho',
								title:'Đồng Hồ',
							   },
							   {
								type:'dong_ho',
								title:'Mắt Kính',
							   },
							   {
								type:'dong_ho',
								title:'Đồng Hồ Cặp',
							   },
							   {
								type:'dong_ho',
								title:'Phụ Kiện',
							   },		
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Chất Liệu Dây',
						children:{
							title:'Giới Tính',
							data:[
							   {
								type:'dong_ho',
								title:'Dây Da',
							   },
							   {
								type:'dong_ho',
								title:'Dây Thép Không Gỉ 316L',
							   },
							   {
								type:'dong_ho',
								title:'Dây Cao Su',
							   },
							   {
								type:'dong_ho',
								title:'Dây Satin',
							   },
							   {
								type:'dong_ho',
								title:'Các loại Dây Khác',
							   },			
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Xem Tất Cả'
					},
				]
			}
			
		},
		{
			
			title: 'Quà Tặng',
			children: {
				title:'Quà Tặng',
				data:[
					{
						type:'qua_tang',
						title:'Gợi ý quà tặng',
						children:{
							title:'Gợi ý quà tặng',
							data:[
								{
									type:'qua_tang',
									title:'Cho Nàng'
								},
								{
									type:'qua_tang',
									title:'Cho Chàng'
								},
								{
									type:'qua_tang',
									title:'Cho Cha'
								},
								{
									type:'qua_tang',
									title:'Cho Mẹ'
								},
								{
									type:'qua_tang',
									title:'Cho Bé'
								},
							]
						}
					},
					{
						type:'qua_tang',
						title:'Quà Tặng Doanh Nghiệp'
					},
					{
						type:'qua_tang',
						title:'Phiếu Quà Tặng'
					},
					{
						type:'qua_tang',
						title:'Quà tặng Phong Thủy',
						children: {
							title:'Quà tặng Phong Thủy',
							data:[
								{
									type:'qua_tang',
									title:'Tượng Phong Thủy'
								},
								{
									type:'qua_tang',
									title:'Tranh Phong Thủy'
								},
								{
									type:'qua_tang',
									title:'Cài Áo Doanh Nhân'
								},
								{
									type:'qua_tang',
									title:'Xem Tất Cả'
								},
							]
						}

					},
				]
			}
			
		},{
			
			title: 'Thương Hiệu',
			children: {
				title:'Thương Hiệu',

				data:[
					{
						su:'Thương Hiệu',
					},
					{
						type:'thuong_hieu',
						title:'PNJ'
					},
					{
						type:'thuong_hieu',
						title:'PNJSILVER'
					},
					{
						type:'thuong_hieu',
						title:'STYLE By PNJ'
					},
					{
						type:'thuong_hieu',
						title:'Disney|PNJ'
					},
				]
			}
			
		},{
			
			title: 'Blog',
			
		},{
			
			title: 'Khuyến Mãi',
			
		},{
			
			title: 'Dịch Vụ',
			
		},{
			
			title: 'Hệ Thống Cữu Hàng',
			
		},{
			
			title: 'Về PNJ',
			
		},{
			
			title: 'Quan Hệ Cổ Đông',
			
		},{
			
			title: 'Đặt Lịch Hẹn',
			
		},
		{
			
			title: 'Hotline: 1800545457(Miễn Phí)',
			
		}
	
	  
	  ];
const [history , setHistory] = useState([{data:MENU_ITEMS}])
const current = history[history.length - 1]
const { closeSidebar } = useUI();

const handleChangeMenu = () => {

}
   return (
     <div className="p-4">
<div className={clsx(history.length > 1 ? 'flex items-center justify-between' : 'flex items-center justify-end ')}>
		 {history.length > 1 && <div onClick={() => setHistory((history) => history.slice(0, history.length - 1))}><img className="ml-3 h-[15px] w-[20px] cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/152/152413.png"/></div>}
						<button
							className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
							onClick={handleMobileMenu}
							aria-label="close"
						>
							<IoClose className="text-black mt-1 md:mt-0.5" />
						</button>
</div>
{history.length > 1 && (
      <h4 className="text-[14px] text-[#A0A0A0] font-">{current.title}</h4>
                        )}
	 {current.data.map((item , index) => {
		            const isParent = !!item.children;
					

		return (
			<div className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={() => {
				if (isParent) {
					setHistory((history) => [...history, item.children]);
				} else {
					
				}
			}}>
				
				<div
				
		     	
				>
<div>
	<div className="text-[14px] text-[#000000] font-Roboto">{item.title}</div>
</div>

				</div>
				{isParent ? <div>
					<img className=" h-[15px] w-[15px] rotate-180" src="https://cdn-icons-png.flaticon.com/512/152/152413.png"/>
				</div> : <span></span>}
			</div>
		)
	 })}
	 </div>
	)
  }