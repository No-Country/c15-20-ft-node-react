import { Image } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";

export default function PurchasedItem({ title, description, img }) {
  return (
    <Card className='w-fit max-w-lg p-4 grid font-common-font'>
      <CardHeader className='flex items-center space-x-4'>
        <Image
          boxSize={"80px"}
          alt={`Imagen de Producto de ${title}`}
          className=' rounded object-cover object-center aspect-square border-2 border-tea-rose'
          src={img}
          fallbackSrc='https://via.placeholder.com/150'
        />
        <div className='grid gap-1'>
          <h2 className='text-lg font-bold font-title-primary flex flex-wrap'>
            {title}
          </h2>
          <p className='text-sm'>{description}</p>
        </div>
      </CardHeader>
      <CardBody className=' grid gap-4'>
        <div className='flex items-center text-sm border rounded-md px-2 py-1 gap-2 h-fit  w-fit'>
          <TagIcon className='h-3.5 w-3.5 -translate-x-1' />
          $99.99
        </div>
        <div className='flex items-center text-sm border rounded-md px-2 py-1 gap-2 h-fit  w-fit'>
          <StoreIcon className='h-3.5 w-3.5 -translate-x-1' />
          Fecha: 12/22/2023
        </div>
      </CardBody>
    </Card>
  );
}

function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7' />
      <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8' />
      <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4' />
      <path d='M2 7h20' />
      <path d='M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7' />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z' />
      <path d='M7 7h.01' />
    </svg>
  );
}
