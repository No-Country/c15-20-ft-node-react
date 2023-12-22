// handleAddCart should be action of redux
// cart should be store
import Button from "../../../components/Button";
export default function CardProduct({
  title,
  imageUrl,
  price,
  tags,
  description,
  handleAddCart,
  cart,
}) {
  return (
    <li key={title} className='flex flex-col w-auto gap-2'>
      <img
        className='rounded-md aspect-square object-cover object-center hover:scale-[1.01]'
        src={imageUrl}
      />
      <p className='text-sm'>{description}</p>
      <h4 className='font-semibold text-lg'>{title}</h4>
      <div className='flex items-center gap-4'>
        {tags.map((t) => (
          <p
            className='bg-green-600 w-[max-content] px-2 inline text-white text-sm font-semibold rounded-md'
            key={t.body}
          >
            {t.body}
          </p>
        ))}
      </div>
      <p className='text-md font-bold uppercase'>$ {price}</p>
      <a
        href={"/products/" + title}
        className='ml-auto text-xs mr-2 underline pointer'
      >
        Ver detalle
      </a>
      <Button
        id={title}
        disabled={cart.includes(title)}
        onClick={handleAddCart}
      >
        Añadir al carrito
      </Button>
    </li>
  );
}
