import Image from "next/image"
import recipe from '@public/images/recipe.png'
import Link from "next/link"


const Navbar = () => {
  return (
    <>
        <div className="w-full h-auto py-5 max-w-[380px] sm:max-w-[650px] md:max-w-[1100px] m-auto">
            <Link href='/' className="flex items-center">
                <Image src={recipe} alt="/" width={40} height={40} priority />
                <h1 className="text-xl text-dark/90 font-semibold">Scrumptious</h1>
            </Link>
        </div>
    </>
  )
}

export default Navbar;