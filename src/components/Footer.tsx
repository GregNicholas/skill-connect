import Image from 'next/image'

export default function Footer () {
    return (
        <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            By{' '}
            <a href="https://gregschoenberg.com" title="Greg Schoenberg's website" target="_blank" rel="noopener noreferrer">
              <Image
                src="/GSLogo11.png"
                alt="Greg Professional Logo, link to Greg Schoenberg's website"
                className="rounded-full"
                width={50}
                height={24}
                priority
              />
            </a>
        </div>
    )
}
