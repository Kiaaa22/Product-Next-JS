
import React,{useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Heading from '@/components/Heading'
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function getCostum(id) {
    const [data, setData] = useState([]) 
    useEffect(() => {
        try{
          const fetchData = async () => {
            const response = await fetch("https://api.jsonbin.io/v3/b/640fbd57ebd26539d08e2ec7");
            const result = await response.json();
            setData(result.record);
          };
          fetchData();
        } catch (err){
        console.log(err);
      }
      }, []);
    const item = data.find((e) => e.id === Number(id))
    if (typeof item === 'object') {
    return item
    }
    return {}
}

function Detail() {
    const [count, setCount] = useState(1)
    const router = useRouter()
    const { slug } = router.query
    


    const costum = getCostum(slug)
    console.log(costum)

    if (Object.keys(costum).length === 0) {
    return <div>Loading....</div>
    }


const minCount = ()=>{
    if(count === 1){
        setCount(1)
    }else{
        setCount(count-1)
    }
}
    return (
    <>
        <Navbar />
        <div class="container mx-auto py-10 px-4">
        <div class="pl-8">
            <Heading title="Product Detail" />
        </div>
        <div className="pl-8 flex flex-col md:flex-row gap-x-20">
            <img
            src={costum.image}
            className="w-full md:h-auto md:w-96 rounded"
            alt=""
            />
            <div>
            <h5 className="mb-2 text-4xl font-medium text-pink-500">
                {costum.name}
            </h5>
            <p class="text-2xl text-pink-400">Rp {costum.price}</p>
            <p class="text-lg text-pink-400">{costum.terjual} Terjual | Sisa {costum.stok}</p>
            <p class="mt-5 text-lg text-pink-400">{costum.desk}</p>
            <p class="text-lg text-pink-400">Brand : {costum.merk}</p>
            <p class="text-lg text-pink-400">Ukuran : {costum.ukuran}</p>

            <div className='mt-20'>
            <div className='flex gap-4'>
                <button className='text-pink-600 text-xl' onClick={minCount}><AiOutlineMinusCircle /></button>
                <p>{count}</p>
                <button className='text-pink-600 text-xl' onClick={(()=>setCount(count+1))}><AiOutlinePlusCircle /></button>
            </div>

            <div className='flex mt-4 gap-3'>
                <button 
                class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md outline outline-pink-600 outline-2 dark:text-pink-600"
                cursorshover="true"><IoCartOutline className='text-xl'/>Add to cart</button>
                <button 
                class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-pink-400 dark:text-pink-700"
                cursorshover="true">Checkout</button>
            </div>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Detail
