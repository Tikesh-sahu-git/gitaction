import Card from '@/components/Card'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to My Website</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Fast" desc="Next.js performance" />
        <Card title="Modern" desc="Tailwind styling" />
        <Card title="Scalable" desc="Component-based" />
      </div>
    </div>
  )
}
