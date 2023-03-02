import data from '@/data/data'
import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'

function getCostum(id) {
  const item = data.find((e) => e.id === Number(id))
  if (typeof item === 'object') {
    return item
  }
  return {}
}

function Detail() {
  const router = useRouter()
  const { slug } = router.query
  console.log(data)

  const costum = getCostum(slug)
  console.log(costum)

  if (Object.keys(costum).length === 0) {
    return <div>Item not found</div>
  }

  return (
    <>
      <Navbar />
      <div class="container mx-auto py-10 px-4">
        <div class="pl-8">
          <Heading title="Product Detail" />
        </div>
        <div className="pl-8 flex gap-x-20">
          <img
            src={costum.image}
            className="h-96 w-full md:h-auto md:w-80 rounded"
            alt=""
          />
          <div className="">
            <h5 className="mb-2 text-2xl font-medium text-pink-500">
              {costum.name}
            </h5>
            <p class="text-base text-pink-400">{costum.price}</p>
            <p class="text-base text-pink-400">Terjual : {costum.terjual}</p>
            <p class="text-base text-pink-400">Stok : {costum.stok}</p>
            <p class="mt-5 text-base text-pink-400">{costum.desk}</p>
            <p class="text-base text-pink-400">Brand : {costum.merk}</p>
            <p class="text-base text-pink-400">Ukuran : {costum.ukuran}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
