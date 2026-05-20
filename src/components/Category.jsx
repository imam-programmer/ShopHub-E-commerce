import React from 'react'
import Ctabox from './Ctabox'

const Category = () => {
  return (
    <section className='pt-16 pb-16 h-79'>
<div className="container">
    <h2 className='text-[30px] font-bold font-inter leading-9 text-[#111827] text-center pb-8'>Shop by Category</h2>
<div className='flex justify-between flex-wrap'>
<Ctabox img="./image/ctagori-img-1.png" p="Electronics"/>
<Ctabox img="./image/ctagori-img-2.png" p="Fashion"/>
<Ctabox img="./image/ctagori-img-3.png" p="Home"/>
<Ctabox img="./image/ctagori-img-4.png" p="Sports"/>
<Ctabox img="./image/ctagori-img-5.png" p="Books"/>
<Ctabox img="./image/ctagori-img-6.png" p="Gaming"/>
</div>

</div>
    </section>
  )
}

export default Category