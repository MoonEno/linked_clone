import Image from 'next/image';
import HeaderLink from '../components/HeaderLink';
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";

function Home() {
  return (
    <div>
        <header className='flex justify-around items-center py-4'>
            <div className='relative w-36 h-10'>
                <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" width={80} height={50} />
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
                <div className='hidden sm:flex space-x-8 pr-4'>
                    <HeaderLink  Icon={ExploreIcon} text="Discover" />
                    <HeaderLink Icon={GroupIcon} text="grop"/>
                    {/* <HeaderLink /> */}
                    {/* <HeaderLink /> */}
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home;