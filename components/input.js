import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { Avatar } from "@nextui-org/react";


export default function input() {
    return (
        <div className="flex  border-b border-gray-200 p-3 space-x-3">
            <Avatar
                circle="true"
                src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80"
                alt="user-img"
                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
            />
            <div className="w-full divide-y divide-gray-200">
                <div className="">
                    <textarea
                        className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                        rows="2"
                        placeholder="What's happening?"
                    />
                </div>
                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex">
                        <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                        <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    </div>
                    <button
                        className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                    >
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    )
}
