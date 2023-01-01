// import Link from "@components/ui/link";
// import SearchIcon from "@components/icons/search-icon";
// import UserIcon from "@components/icons/user-icon";
// import MenuIcon from "@components/icons/menu-icon";
// import HomeIcon from "@components/icons/home-icon";
// import { useUI } from "@contexts/ui.context";
// import { useRouter } from "next/router";
// import { ROUTES } from "@lib/routes";
// import dynamic from "next/dynamic";
// import { Drawer } from "@components/common/drawer/drawer";
// import { getDirection } from "@utils/get-direction";
// import { useAtom } from "jotai";
// import { authorizationAtom } from "@store/authorization-atom";
// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
// 	ssr: false,
// });
// const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
// 	ssr: false,
// });
// const MobileMenu = dynamic(
// 	() => import("@components/layout/header/mobile-menu")
// );

// const BottomNavigation: React.FC = () => {
// 	const {
// 		openSidebar,
// 		closeSidebar,
// 		displaySidebar,
// 		setDrawerView,
// 		openSearch,
// 		openModal,
// 		setModalView,
// 	} = useUI();

//   const [ isAuthorize ] = useAtom(authorizationAtom);

// 	function handleLogin() {
// 		setModalView("LOGIN_VIEW");
// 		return openModal();
// 	}
// 	function handleMobileMenu() {
// 		setDrawerView("MOBILE_MENU");
// 		return openSidebar();
// 	}

// 	const { locale } = useRouter();
// 	const dir = getDirection(locale);
// 	const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

// 	return (
// 		<>
// 			<div className="md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
// 				<button
// 					aria-label="Menu"
// 					className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
// 					onClick={handleMobileMenu}
// 				>
// 					<MenuIcon />
// 				</button>
// 				<button
// 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
// 					onClick={openSearch}
// 					aria-label="search-button"
// 				>
// 					<SearchIcon />
// 				</button>
// 				<Link href="/" className="flex-shrink-0">
// 					<HomeIcon />
// 				</Link>
// 				<CartButton />
// 				<AuthMenu
// 					isAuthorized={isAuthorize}
// 					href={ROUTES.ACCOUNT}
// 					className="flex-shrink-0"
// 					btnProps={{
// 						className: "flex-shrink-0 focus:outline-none",
// 						children: <UserIcon />,
// 						onClick: handleLogin,
// 					}}
// 				>
// 					<UserIcon />
// 				</AuthMenu>
// 			</div>
// 			<Drawer
// 				placement={dir === "rtl" ? "right" : "left"}
// 				open={displaySidebar}
// 				onClose={closeSidebar}
// 				handler={false}
// 				showMask={true}
// 				level={null}
// 				contentWrapperStyle={contentWrapperCSS}
// 			>
// 				<MobileMenu />
// 			</Drawer>
// 		</>
// 	);
// };

// export default BottomNavigation;



// import Link from "@components/ui/link";
// import {useRef } from 'react'
// import SearchIcon from "@components/icons/search-icon";
// import UserIcon from "@components/icons/user-icon";
// import MenuIcon from "@components/icons/menu-icon";
// import HomeIcon from "@components/icons/home-icon";
// import { useUI } from "@contexts/ui.context";
// import { useRouter } from "next/router";
// import { ROUTES } from "@lib/routes";
// import dynamic from "next/dynamic";
// import { Drawer } from "@components/common/drawer/drawer";
// import { getDirection } from "@utils/get-direction";
// import { useAtom } from "jotai";
// import { authorizationAtom } from "@store/authorization-atom";
// const CartButton = dynamic(() => import("@components/cart/cart-button"), {
// 	ssr: false,
// });
// const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
// 	ssr: false,
// });
// const MobileMenu = dynamic(
// 	() => import("@components/layout/header/mobile-menu")
// );

// const BottomNavigation: React.FC = () => {
// 	const { asPath } = useRouter();
// 	const ref = useRef(null)
// 	const {
// 		openSidebar,
// 		closeSidebar,
// 		displaySidebar,
// 		setDrawerView,
// 		openSearch,
// 		openModal,
// 		setModalView,
// 	} = useUI();

//   const [ isAuthorize ] = useAtom(authorizationAtom);

// 	function handleLogin() {
// 		setModalView("LOGIN_VIEW");
// 		return openModal();
// 	}
// 	function handleMobileMenu() {
//         // console.log(ref.current.src = 'https://cdn.pnj.io/images/image-update/layout/mobile/danhmuc-state.svg')
// 		setDrawerView("MOBILE_MENU");
// 		return openSidebar();
// 	}

// 	const { locale } = useRouter();
// 	const dir = getDirection(locale);
// 	const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

	
// 	return (
// 		<>
// 			<div className=" xl:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottom shadow-2xl Navigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 sm:px-3 px-1">	
// 				<Link href="/" className="mr-1">
// 			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/home-default.svg"/>
// 			<p className="text-[10px]">Trang chủ</p>
// 			</Link>
// 			<Link href="/" className="ml-[-1]">
// 			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/tabsale-default.svg"/>
// 			<p className="text-[10px]">Khuyến mãi</p>
// 			</Link>
// 			<Link href="/">
// 			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/ME-default.svg"/>
// 			<p className="text-[10px]">Cá nhân</p>
// 			</Link>
// 			<Link href="/">
// 			<img className="m-auto h-5 w-5" src="	https://cdn.pnj.io/images/image-update/layout/mobile/noti-default.svg"/>
// 			<p className="text-[10px]">Thông báo</p>
// 			</Link>
// 			<Link href="/">
// 			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/ME-default.svg"/>
// 			<p className="text-[10px]">Tư vấn</p>
// 			</Link>
// 			<button
// 					aria-label="Menu"
// 					className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
// 					onClick={handleMobileMenu}
// 				>
					
// 					<img ref={ref} className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/danhmuc-default.svg"/>
// 					<p className="text-[10px]">Danh mục</p>
// 				</button>
// 			</div>
// 			{/* <Drawer
// 				placement='right'
// 				open={displaySidebar}
// 				onClose={closeSidebar}
// 				handler={false}
// 				showMask={true}
// 				level={null}
// 				contentWrapperStyle={contentWrapperCSS}
// 			>
// 				<MobileMenu />
// 			</Drawer> */}
// 			<Drawer
// 			placement='right'
// 			open={displaySidebar}
// 			onClose={closeSidebar}
// 			handler={false}
// 			showMask={true}
// 			level={null}
// 			>

// <MobileMenu/>
//   </Drawer>
// 		</>
// 	);
// };

// export default BottomNavigation;

import Link from "@components/ui/link";
import {useRef , useState} from 'react'
import SearchIcon from "@components/icons/search-icon";
import UserIcon from "@components/icons/user-icon";
import MenuIcon from "@components/icons/menu-icon";
import HomeIcon from "@components/icons/home-icon";
import { useUI } from "@contexts/ui.context";
import { useRouter } from "next/router";
import { ROUTES } from "@lib/routes";
import dynamic from "next/dynamic";
import { Drawer } from "@components/common/drawer/drawer";
import { getDirection } from "@utils/get-direction";
import { useAtom } from "jotai";
import { authorizationAtom } from "@store/authorization-atom";

const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});
const AuthMenu = dynamic(() => import("@components/layout/header/auth-menu"), {
	ssr: false,
});
const MobileMenu = dynamic(
	() => import("@components/layout/header/mobile-menu")
);

const BottomNavigation: React.FC = () => {
	const { asPath } = useRouter();
	const ref = useRef(null)
	const {
		openSidebar,
		closeSidebar,
		displaySidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
	} = useUI();
	const [show , setShow] = useState<boolean>(false)

  const [ isAuthorize ] = useAtom(authorizationAtom);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	function handleMobileMenu() {
        // console.log(ref.current.src = 'https://cdn.pnj.io/images/image-update/layout/mobile/danhmuc-state.svg')
		setShow(!show)
	}

	const { locale } = useRouter();
	const dir = getDirection(locale);
	const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

	
	return (
		<>
			<div className=" xl:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottom shadow-2xl Navigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 sm:px-3 px-1">	
				<Link href="/" className="mr-1">
			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/home-default.svg"/>
			<p className="text-[10px]">Trang chủ</p>
			</Link>
			<Link href="/" className="ml-[-1]">
			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/tabsale-default.svg"/>
			<p className="text-[10px]">Khuyến mãi</p>
			</Link>
			<Link href="/">
			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/ME-default.svg"/>
			<p className="text-[10px]">Cá nhân</p>
			</Link>
			<Link href="/">
			<img className="m-auto h-5 w-5" src="	https://cdn.pnj.io/images/image-update/layout/mobile/noti-default.svg"/>
			<p className="text-[10px]">Thông báo</p>
			</Link>
			<Link href="/">
			<img className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/ME-default.svg"/>
			<p className="text-[10px]">Tư vấn</p>
			</Link>
			<button
					aria-label="Menu"
					className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
					onClick={handleMobileMenu}
				>
					
					<img ref={ref} className="m-auto h-5 w-5" src="https://cdn.pnj.io/images/image-update/layout/mobile/danhmuc-default.svg"/>
					<p className="text-[10px]">Danh mục</p>
				</button>
			</div>
			{/* <Drawer
				placement='right'
				open={displaySidebar}
				onClose={closeSidebar}
				handler={false}
				showMask={true}
				level={null}
				contentWrapperStyle={contentWrapperCSS}
			>
				<MobileMenu />
			</Drawer> */}
			<Drawer
			placement='right'
			open={show}
			onClose={handleMobileMenu}
			handler={false}
			showMask={true}
			level={null}
			>

<MobileMenu handleMobileMenu={handleMobileMenu}/>
  </Drawer>
		</>
	);
};

export default BottomNavigation;

