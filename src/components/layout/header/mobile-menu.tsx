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
			
			title: 'Trang S???c',
			children: {
				title: 'Trang S???c',
				data: [
					{
						type: 'trang_suc',
	  
						title: 'Ch???ng Lo???i',


						children: {

							title: 'Ch???ng Lo???i',
	                        data: [
								{
									type:'trang_suc',
									title:'Nh???n'
								},
								{
									type:'trang_suc',
									title:'B??ng Tai'
								},
								{
									type:'trang_suc',
									title:'L???c'
								},
								{
									type:'trang_suc',
									title:'V??ng'
								},
								{
									type:'trang_suc',
									title:'Ki???ng'
								},
								{
									type:'trang_suc',
									title:'D??y Chuy???n'
								},
								{
									type:'trang_suc',
									title:'M???t D??y Chuy???n'
								},
								{
									type:'trang_suc',
									title:'D??y C???'
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
	  
						title: 'Ch???t Li???u',
						children: {

							title: 'Ch???t Li???u',
	                        data: [
								{
									type:'trang_suc',
									title:'V??ng'
								},
								{
									type:'trang_suc',
									title:'B???c'
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
	  
						title: 'D??ng trang s???c',
						children: {

							title: 'D??ng Trang S???c',
	                        data: [
								{
									type:'trang_suc',
									title:'Trang S???c ????nh Kim C????ng'
								},
								{
									type:'trang_suc',
									title:'Trang S???c ????nh ECZ'
								},
								{
									type:'trang_suc',
									title:'Trang S???c ????nh ???? Qu?? V?? B??n Qu??'
								},
								{
									type:'trang_suc',
									title:'Trang S???c C??ng Ngh??? ??'
								}
								,
								{
									type:'trang_suc',
									title:'Trang S???c ????nh Ng???c Trai'
								}
								,
								{
									type:'trang_suc',
									title:'Trang S???c ????nh CZ'
								}
								,
								{
									type:'trang_suc',
									title:'Trang S???c Kh??ng ????nh ????'
								}
								,
								{
									type:'trang_suc',
									title:'Kim C????ng Vi??n'
								}
							]
						    

						}
						
					},
					
					{
						type: 'trang_suc',
	  
						title: 'B??? s??u t???p',
						children: {

							title: 'B??? S??u T???p',
	                        data: [
								{
									type:'trang_suc',
									title:'Flowrous'
								},
								{
									type:'trang_suc',
									title:'Th???n T??i 2023'
								},
								{
									type:'trang_suc',
									title:'N??ng Ti??n C?? Ariel'
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
									title:'S??? Gi??? M??a Xu??n'
								},
								{
									type:'trang_suc',
									title:'N??? T???m Xu??n'
								},
								{
									type:'trang_suc',
									title:'Th???n T??i 2022'
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
									title:'N??ng Thu'
								},
								
							]
						    

						}
					},
					
					{
						type: 'trang_suc',
	  
						title: 'Th????ng Hi???u',
						children: {

							title: 'Th????ng Hi???u',
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
	  
						title: 'Trang s???c phong th???y',
						children: {

							title: 'Trang S???c Phong Th???y',
	                        data: [
								{
									type:'trang_suc',
									title:'Trang S???c Theo Cung'
								},
								{
									type:'trang_suc',
									title:'Trang S???c Theo Cung'
								},
								{
									type:'trang_suc',
									title:'S???n Ph???m Phong Th???y'
								}
							
						]
					}
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang s???c tr??? em',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang S???c Nam',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang S???c Tr??? Em',
					},
					{
						type: 'trang_suc',
	  
						title: 'Trang S???c T??n Ng?????ng',
					},
					{
						type: 'trang_suc',
	  
						title: 'Online Exclusive',
					},
					{
						type: 'trang_suc',
	  
						title: 'B??? Trang S???c',
					},
					{
						type: 'trang_suc',
	  
						title: 'Best Seller',
					},
				],
			},
		},

		{
			
			title: 'Trang S???c C?????i',
			children: {
				title: 'Trang S???c C?????i',
				data: [
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Theo m???c ????ch',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Ch???ng Lo???i',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'D??ng trang s???c',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'Ch???t li???u',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: 'B??? s??u t???p',
					},
					{
						type: 'trang_suc_cuoi',
	  
						title: '>> Xem t???t c???',
					},

				],
			},
		},
		{
			
			title: '?????ng H???',
			children: {
				title:'?????ng H???',
				data: [
					{
						type: 'dong_ho',
						title:'Th????ng Hi???u Th???y S???',
						children: {
							title:'?????ng H???',
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
						title:'Th????ng Hi???u Th???i Trang',
						children: {
							title:'Th????ng Hi???u Th???i Trang',
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
						title:'Th????ng Hi???u Y??u Th??ch',
						children:{
							title:'Th????ng Hi???u Y??u Th??ch',
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
						title:'Gi???i T??nh',
						children:{
							title:'Gi???i T??nh',
							data:[
							   {
								type:'dong_ho',
								title:'Nam',
							   },
							   {
								type:'dong_ho',
								title:'N???',
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
						title:'Ch???ng Lo???i',
						children:{
							title:'Gi???i T??nh',
							data:[
							   {
								type:'dong_ho',
								title:'?????ng H???',
							   },
							   {
								type:'dong_ho',
								title:'M???t K??nh',
							   },
							   {
								type:'dong_ho',
								title:'?????ng H??? C???p',
							   },
							   {
								type:'dong_ho',
								title:'Ph??? Ki???n',
							   },		
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Ch???t Li???u D??y',
						children:{
							title:'Gi???i T??nh',
							data:[
							   {
								type:'dong_ho',
								title:'D??y Da',
							   },
							   {
								type:'dong_ho',
								title:'D??y Th??p Kh??ng G??? 316L',
							   },
							   {
								type:'dong_ho',
								title:'D??y Cao Su',
							   },
							   {
								type:'dong_ho',
								title:'D??y Satin',
							   },
							   {
								type:'dong_ho',
								title:'C??c lo???i D??y Kh??c',
							   },			
							]
						}
					},
					{
						type: 'dong_ho',
						title:'Xem T???t C???'
					},
				]
			}
			
		},
		{
			
			title: 'Qu?? T???ng',
			children: {
				title:'Qu?? T???ng',
				data:[
					{
						type:'qua_tang',
						title:'G???i ?? qu?? t???ng',
						children:{
							title:'G???i ?? qu?? t???ng',
							data:[
								{
									type:'qua_tang',
									title:'Cho N??ng'
								},
								{
									type:'qua_tang',
									title:'Cho Ch??ng'
								},
								{
									type:'qua_tang',
									title:'Cho Cha'
								},
								{
									type:'qua_tang',
									title:'Cho M???'
								},
								{
									type:'qua_tang',
									title:'Cho B??'
								},
							]
						}
					},
					{
						type:'qua_tang',
						title:'Qu?? T???ng Doanh Nghi???p'
					},
					{
						type:'qua_tang',
						title:'Phi???u Qu?? T???ng'
					},
					{
						type:'qua_tang',
						title:'Qu?? t???ng Phong Th???y',
						children: {
							title:'Qu?? t???ng Phong Th???y',
							data:[
								{
									type:'qua_tang',
									title:'T?????ng Phong Th???y'
								},
								{
									type:'qua_tang',
									title:'Tranh Phong Th???y'
								},
								{
									type:'qua_tang',
									title:'C??i ??o Doanh Nh??n'
								},
								{
									type:'qua_tang',
									title:'Xem T???t C???'
								},
							]
						}

					},
				]
			}
			
		},{
			
			title: 'Th????ng Hi???u',
			children: {
				title:'Th????ng Hi???u',

				data:[
					{
						su:'Th????ng Hi???u',
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
			
			title: 'Khuy???n M??i',
			
		},{
			
			title: 'D???ch V???',
			
		},{
			
			title: 'H??? Th???ng C???u H??ng',
			
		},{
			
			title: 'V??? PNJ',
			
		},{
			
			title: 'Quan H??? C??? ????ng',
			
		},{
			
			title: '?????t L???ch H???n',
			
		},
		{
			
			title: 'Hotline: 1800545457(Mi???n Ph??)',
			
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