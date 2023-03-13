import React from 'react'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'
import Image from 'next/image'

const AboutUs = () => {

    return (
        <>
        <Navbar />
        <div className="container mx-auto py-10 px-4" id="aboutus">
          <div className="pl-8">
            <Heading title="About KiCos" />
          </div>
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <Image
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  width={400}
                  height={400}
                  src="/images/kostum anya.png"
                />
                <Image
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  width={400}
                  height={400}
                  src="/images/kostum howl.jpg"
                />
                <Image
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  width={400}
                  height={400}
                  src="/images/kostum zhongli.jpeg"
                />
                <Image
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  width={400}
                  height={400}
                  src="/images/kostum layla.jpeg"
                />
              </div>
            </div>
          </section>
          <div className="max-w-[800px] pl-8 text-gray-700 text-[20px]">
            <p>Welcome to KiCos!</p>
            <p className="mt-6">
              We aim to offer our customers a variety of the latest Costume.
              We've come a long way, so we know exactly which direction to take
              when supplying you with high quality yet budget-friendly products.
              We offer all of this while providing excellent customer service
              and friendly support.
            </p>
            <p className="mt-4">
              We always keep an eye on the latest trends in Costume and put our
              customers' wishes first. That is why we have satisfied customers
              all over the world, and are thrilled to be a part of the Costum
              industry.
            </p>
            <p className="mt-4">
              The interests of our customers are always top priority for us, so
              we hope you will enjoy our products as much as we enjoy making
              them available to you.
            </p>
          </div>
        </div>
        </>
    )
}

export default AboutUs