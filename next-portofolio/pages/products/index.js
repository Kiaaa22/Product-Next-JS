import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'
import { useRouter } from 'next/navigation'
import data from '@/data/data.js'
import Footer from '@/components/Footer'

const ProdukJual = () => {
  const router = useRouter()
  const dataCustom = data
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10 px-4" id="produkjual">
        <div className="pl-8">
          <Heading title="Product" />
        </div>
        <div className="pl-8 flex gap-8 flex-wrap justify-center	">
          {dataCustom.map((item, index) => {
            return (
              <div class="max-w-xs rounded-md shadow-md dark:bg-pink-300 dark:text-pink-500">
                <Image
                  src={item.image}
                  width={1000}
                  height={200}
                  alt=""
                  class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div class="flex flex-col justify-between p-6 space-y-8">
                  <div class="space-y-2">
                    <h2 class="text-2xl font-semibold tracking-wide">
                      {item.name}
                    </h2>
                    <p class="dark:text-pink-500">
                      {item.desk}
                    </p>
                  </div>
                  <button
                    onClick={() => router.push(`/products/${item.id}`)}
                    type="button"
                    class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-pink-400 dark:text-pink-600"
                    cursorshover="true"
                  >
                    Details 
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProdukJual
