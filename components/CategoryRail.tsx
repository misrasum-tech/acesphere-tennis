const categories = ['Racquets', 'Shoes', 'Clothing', 'Bags', 'Accessories', 'Balls', 'Training'];
export default function CategoryRail() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-7">
      {categories.map((category) => (
        <a key={category} href={`/shop?category=${category}`} className="rounded-3xl bg-gradient-to-br from-emerald-50 to-purple-50 p-6 text-center font-black shadow-sm hover:shadow-lg">{category}</a>
      ))}
    </div>
  );
}
