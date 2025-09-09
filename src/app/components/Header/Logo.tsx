import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image
        src="/assets/Name_Logo.png"
        alt="Logo - Anshpreet Singh"
      
        className="object-none"
        priority
        height={30}
        width={30}
      />
    </Link>
  )
}
