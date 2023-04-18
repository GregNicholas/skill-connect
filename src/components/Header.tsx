import { FaUserAlt } from "react-icons/fa";

export default function Header () {

    return (
      <>
        <div 
          className="sticky left-0 top-0 flex w-full justify-between items-center 
            gap-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 px-4 
            backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
            lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 
            lg:dark:bg-zinc-800/30"
        >
          <h1 className="text-3xl sm:text-6xl select-none">Skill Connect</h1>
          <FaUserAlt 
            className="text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"
          />
        </div>
      </>
    ) 
}