import Image from 'next/image'

export function BlogAuthor({ author }) {
  if (!author) return null

  return (
    <aside className="mt-14 border-t border-gray-200 pt-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
        Written by
      </p>
      <div className="mt-5 flex gap-5">
        {author.image && (
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        )}
        <div className="min-w-0">
          {author.linkedin ? (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-950 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-950"
            >
              {author.name}
            </a>
          ) : (
            <p className="text-lg font-semibold text-gray-950">{author.name}</p>
          )}
          {author.role && (
            <p className="mt-1 text-sm text-gray-500">{author.role}</p>
          )}
          {author.bio && (
            <p className="mt-3 text-sm/6 text-gray-600">{author.bio}</p>
          )}
        </div>
      </div>
    </aside>
  )
}
