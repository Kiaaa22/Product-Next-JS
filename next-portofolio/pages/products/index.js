import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'
import { useRouter } from 'next/navigation'
import data from '@/data/data.js'
import Footer from '@/components/Footer'


const ProdukJual = () => {
    const [keyword, setKeyword] = useState("");
    const [filteredData, setFiltered] = useState([]);
    useEffect(() => {
        filterData();
        }, [data, keyword]);
    
        const handleSearch = (e) => {
            e.preventDefault();
            const filteredData = data.filter((e) => {
            return e.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFiltered(filteredData);
            };
        
            const filterData = () => {
            const filteredData = data.filter((e) => {
                return e.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFiltered(filteredData);
            };
    const router = useRouter()
    const dataCustom = data
    
    return (
    <>
        <Navbar />
        <div className="container mx-auto py-4 md:py-10 px-4" id="produkjual">
        <div className="pl-8 flex flex-col md:flex-row md:justify-between">
            <Heading title="Product" />
        <form onSubmit={handleSearch} className="py-2.5 md:mt-20 md:ml-96 w-5/12 lg:w-72 flex justify-center mb-8">
                <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search product"
                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-clip-padding border border-solid border-pink-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-300 focus:outline-none"/>
            </form>
        </div>
        <div className="pl-8 flex gap-8 flex-wrap justify-center">
            {filteredData.map((item, index) => {
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
                    cursorshover="true">
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
