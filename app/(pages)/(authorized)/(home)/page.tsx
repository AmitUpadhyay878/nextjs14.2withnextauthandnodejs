import { client } from '@/lib/contentful/client'
import Image from 'next/image'
export default async function Home() {

     const res = await client.getEntries({ content_type: 'hero' })
     const abc = res?.items

  return (
    <main>
      <section>
        <div className='hero'>
          {abc?.map((cc): any => {
            return (
              <>
                <p>{cc?.fields?.name}</p>
                <p className='text-4xl'>{cc?.fields?.description}</p>
                <img
                  src={`https:${cc?.fields?.image?.fields?.file?.url}`}
                  height={800}
                  width={500}
                  alt='ggg'
                />
              </>
            )
          })}
        </div>
      </section>
    </main>
  )
}
