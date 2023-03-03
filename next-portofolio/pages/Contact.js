import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { useState} from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [subjek, setSubjek] = useState('');
    const [pesan, setPesan] = useState('');

    const notify = () =>
    toast.success(' 🦄 Pesan berhasil dikirim!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        Nama: nama,
        Email: email,
        Subjek: subjek,
        Pesan: pesan
    };
    axios.post('https://sheet.best/api/sheets/d89a032f-0b79-4cf0-81ed-151459a83eb0', data).then((res) => {
        setNama('');
        setEmail('');
        setSubjek('');
        setPesan('');
        notify();
    });
    };
    return (
    <>
    <Navbar />
    <section className='container mx-auto py-10 px-4' id="contact">
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        <div class="pt-36 grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div class="py-6 md:py-0 md:px-6">
        <Heading title="Contact Us" />
			<p class="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div class="space-y-4">
				<p class="flex items-center">
					<MdLocationOn className="text-pink-400 text-[24px]"/>
					<span className='pl-3'>Sawojajar, Malang</span>
				</p>
				<p class="flex items-center">
					<BsFillTelephoneFill className="text-pink-400 text-[20px]"/>
					<span className='pl-3'>+62 812-3336-4789</span>
				</p>
				<p class="flex items-center">
					<MdEmail className="text-pink-400 text-[24px]"/>
					<span className='pl-3'>zaskiakiaa@gmail.com</span>
				</p>
			</div>
		</div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-8 pl-8 pr-8'>
            <div className='text-sm grid grid-cols-1 md:grid-cols-2 gap-8 '>
                <input type="text" placeholder='Nama' className=' outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3'  onChange={(e) => setNama(e.target.value)} value={nama} required />
                <input type="text" placeholder='Email' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' onChange={(e) => setEmail(e.target.value)} value={email} required />
            </div>
            <input type="text" placeholder='Subjek' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' onChange={(e) => setSubjek(e.target.value)} value={subjek} required />

            <textarea rows="6" placeholder='Pesan' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' onChange={(e) => setPesan(e.target.value)} value={pesan} required>

            </textarea>
            <div>
                <button type='submit' className='btn bg-pink-400 px-8 py-3 rounded-lg'>Kirim Pesan</button>
            </div>
        </form>
        </div>
    </section>
    </>
    )
}

export default Contact