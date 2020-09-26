const Navbar = () => {
  return (
    <div className='flex mx-10 py-4 justify-between text-offwhite items-center'>
      <div className='text-2xl font-normal tracking-wider'>AMIT RAI </div>
      <div className='flex items-center'>
        <div className='mx-32 space-x-6  flex'>
          <div>ABOUT</div>
          <div>WORK</div>
        </div>
        <div>
          <button className='bg-blue-500 px-2 py-2 rounded tracking-wider font-normal hover:shadow-xs focus:outline-none focus:shadow-outline active:bg-blue-600'>
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
