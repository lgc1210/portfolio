import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { id: 1, href: '/posts', label: 'Posts' },
  { id: 2, href: '/projects', label: 'Projects' },
  { id: 3, href: '/contact', label: 'Contact' }
]

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            GC
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          {navItems.map(item => {
            return (
              <li
                key={item.id}
                className='transition-colors hover:text-foreground'
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            )
          })}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
