import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" shadow p-4 flex justify-between">
      <h1 className="font-bold">MySite</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}