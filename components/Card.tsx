interface Props {
  title: string
  desc: string
}

export default function Card({ title, desc }: Props) {
  return (
    <div className=" p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}