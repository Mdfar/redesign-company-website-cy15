import { ServiceCard } from '@/components/ServiceCard'; import { getServices } from '@/lib/sanity';

export default async function ServicesPage() { const services = await getServices();

return ( <main className="max-w-7xl mx-auto px-6 py-24"> <header className="mb-16"> <h1 className="text-5xl font-bold tracking-tight text-slate-900"> IT Consulting Services <span className="text-blue-600">in Switzerland</span> </h1> <p className="mt-4 text-xl text-slate-600 max-w-2xl"> Empowering Swiss enterprises with cutting-edge digital transformation and strategic IT partnership. </p> </header>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service) => (
      <ServiceCard key={service._id} service={service} />
    ))}
  </div>
</main>


); }