const Navbar = () => {
  return (
    <nav className="bg-[#DDE6ED] md:bg-transparent fixed md:relative top-0 right-0 p-4 z-30 w-full">
      <div className="flex items-center justify-end gap-2 max-w-full mx-auto">
        <input 
          type="text" 
          placeholder="Search" 
          className="hidden md:block w-48 px-4 py-2 border-2 border-black rounded-lg bg-white" 
        />
        <div className="md:hidden px-3 py-2 rounded-xl flex justify-center items-center border-2 border-black bg-white">
          <i className="ri-search-line"></i>
        </div>
        <div className="px-3 py-2 rounded-xl flex justify-center items-center border-2 border-black bg-white hover:bg-gray-100">
          <i className="ri-notification-3-fill"></i>
        </div>
        <div className="px-3 py-2 rounded-xl flex justify-center items-center border-2 border-black bg-white hover:bg-gray-100">
          <i className="ri-user-3-fill"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar