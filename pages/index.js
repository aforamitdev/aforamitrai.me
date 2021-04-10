import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>amitrai.dev</title>
      </Head>
      <div className='flex flex-col lg:flex-row bg-gray-700 h-screen'>
        <div className='flex justify-end items-center mx-10 my-10 space-x-10'>
          <div>About</div>
          <div className='bg-blue-400 px-5 py-2 rounded-sm text-white font-bold cursor-pointer shadow-md hover:bg-blue-600 uppercase'>
            Contact
          </div>
        </div>
        <div className='lg:w-1/2 h-1/2 md:mx-auto flex flex-col justify-center '>
          <div>
            <img
              src='https://media-exp1.licdn.com/dms/image/C5103AQGav9ABLIdDUQ/profile-displayphoto-shrink_800_800/0/1536674810816?e=1620864000&v=beta&t=LRd4aPxGtETKCW-K2As8R-LiSrfS9mODVV7i5ucctyk'
              alt='profile image'
              className='h-48 rounded-full shadow-lg'
            />
          </div>
          <div>context details</div>
        </div>
        {/* programing  */}
        <div className='lg:w-1/2 h-1/2 md:mx-auto'>
          <div>as</div>
        </div>
      </div>
    </div>
  );
}
