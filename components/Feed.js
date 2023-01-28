import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./input";
import Post from "./Post";


export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Big Lion",
            username: "Big Lion",
            userImg: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80",
            img: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/12/600/400/lion-king-photo-2.jpg?ve=1&tl=1",
            text: "cute baby lion",
            timestamp: "1 hour ago"
        },
        {
            id: "2",
            name: "Big Lion",
            username: "Big Lion",
            userImg: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMGhlYWR8ZW58MHx8MHx8&w=1000&q=80",
            img: "https://static01.nyt.com/images/2022/12/17/multimedia/17xp-mountainlion-stevewinter/17xp-mountainlion-stevewinter-mobileMasterAt3x.jpg",
            text: "p=22 mountain lion",
            timestamp: "2 hour ago"
        },
    ]
    return (
        <div className="xl:ml-[370px] border-l border-r border-white-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
            {/*Header */}
            <div className="flex py-2 px-3 sticky top-0 z-50  border-b border-white-200 bg-white">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}

        </div>
    )
}
