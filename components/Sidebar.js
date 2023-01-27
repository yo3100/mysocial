import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from "@heroicons/react/solid";
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,
    ShoppingCartIcon,
    VideoCameraIcon,
} from "@heroicons/react/outline";
import { Avatar } from '@nextui-org/react';



function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24 bg-white border-r">

            {/* Logo */}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image
                    src="https://img.freepik.com/free-vector/cool-duck-summer-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3651.jpg?w=740&t=st=1674764356~exp=1674764956~hmac=c6d735fae1a44c269d9340d17955152f0fb2fe67f9ff36b1aa57e4a3206d2c14"
                    width="50"
                    height="50"
                />
            </div>

            {/* Menu */}
            <div className="mt-4 mb-2.5 xl:items-start">
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Live" Icon={VideoCameraIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Buy Tokens" Icon={ShoppingCartIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />

            </div>

            {/* Button */}
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inlin">
                Tweet
            </button>

            {/* Mini Profile */}
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
                <Avatar
                    circle="true"
                    src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80"
                    alt="user-img"
                />
                <div className="leading-5 hidden xl:inline">
                    <h4 className="font-bold">Big Lion</h4>
                    <p className="text-gray-500">@BigLion</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>

        </div>
    )
}

export default Sidebar