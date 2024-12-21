export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p>Price: Ksh. {product.price}</p>
      <p>Stock: {product.stock}</p>
      <a
        href="/quotation"
        className="mt-4 inline-block px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
      >
        Add to Quotation
      </a>
    </div>
  );
}
  