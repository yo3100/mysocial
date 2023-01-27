import { SparklesIcon } from "@heroicons/react/outline";
import  Input  from "./input";


export default function Feed() {
    return (
        <div className="xl:ml-[370px] border-l border-r border-white-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            {/*Header */}
            <div className="flex py-2 px-3 sticky top-0 z-50 border-l border-b border-white-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div> 
            </div>
            <Input />

        </div>
    )
}