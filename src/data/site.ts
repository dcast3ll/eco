import type { ImageMetadata } from 'astro';
import compactoImage from '../assets/images/model-compacto.jpg';
import familiarImage from '../assets/images/model-familiar.jpg';
import duplexImage from '../assets/images/model-duplex.jpg';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ModelSpec {
  icon: string;
  label: string;
}

export interface Model {
  slug: string;
  name: string;
  size: string;
  area: string;
  priceFrom: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  specs: ModelSpec[];
  highlights: string[];
  featured?: boolean;
}

export interface Metric {
  icon: string;
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const site = {
  name: 'EcoContainers',
  tagline: 'Viviendas modulares sostenibles',
  email: 'hola@ecocontainers.mx',
  phone: '+52 55 1234 5678',
  phoneHref: 'tel:+525512345678',
  whatsapp: 'https://wa.me/525512345678',
  address: 'Av. Reforma 123, Ciudad de México',
  hours: 'Lun a Vie, 9:00 – 18:00',
  socials: [
    { label: 'Instagram', icon: 'simple-icons:instagram', href: 'https://instagram.com' },
    { label: 'Facebook', icon: 'simple-icons:facebook', href: 'https://facebook.com' },
    { label: 'WhatsApp', icon: 'simple-icons:whatsapp', href: 'https://wa.me/525512345678' },
  ],
};

export const navLinks: NavLink[] = [
  { label: 'Modelos', href: '#modelos' },
  { label: 'Características Eco', href: '#caracteristicas' },
  { label: 'Precios', href: '#modelos' },
  { label: 'FAQ', href: '#faq' },
];

export const features: Feature[] = [
  {
    icon: 'lucide:sun',
    title: 'Energía solar integrada',
    description:
      'Kit de paneles e inversores dimensionado para iluminación, refrigeración y electrodomésticos clave. Menos factura, más independencia.',
  },
  {
    icon: 'lucide:droplets',
    title: 'Reserva de agua inteligente',
    description:
      'Tanques de almacenamiento con filtros básicos y opción de captación de agua de lluvia para cubrir los días sin suministro.',
  },
  {
    icon: 'lucide:thermometer-snowflake',
    title: 'Aislamiento térmico y acústico',
    description:
      'Recubrimientos ecológicos que mantienen una temperatura agradable todo el año y reducen el ruido exterior.',
  },
  {
    icon: 'lucide:timer',
    title: 'Construcción rápida',
    description:
      'Fabricación en taller e instalación en tu terreno en menos de 45 días, con acabados listos para habitar.',
  },
];

export const models: Model[] = [
  {
    slug: 'compacto',
    name: 'Modelo Compacto',
    size: '20 ft',
    area: '30 m²',
    priceFrom: 'Desde US$ 18.900',
    summary: 'Un monoambiente versátil para vivir, trabajar o escapar los fines de semana.',
    image: compactoImage,
    imageAlt: 'Cabaña de madera rodeada de árboles al amanecer',
    specs: [
      { icon: 'lucide:ruler', label: '30 m²' },
      { icon: 'lucide:home', label: '1 ambiente' },
      { icon: 'lucide:bath', label: '1 baño' },
    ],
    highlights: ['Monoambiente / oficina', 'Cocina compacta equipada', 'Ideal para cabaña de fin de semana'],
  },
  {
    slug: 'familiar',
    name: 'Modelo Familiar',
    size: '40 ft',
    area: '60 m²',
    priceFrom: 'Desde US$ 27.500',
    summary: 'El equilibrio entre espacio, confort y precio para una familia que crece.',
    image: familiarImage,
    imageAlt: 'Sala y cocina integradas con ventanales y madera natural',
    specs: [
      { icon: 'lucide:ruler', label: '60 m²' },
      { icon: 'lucide:bed-double', label: '2 habitaciones' },
      { icon: 'lucide:bath', label: '1 baño' },
      { icon: 'lucide:sofa', label: 'Sala-comedor' },
    ],
    highlights: ['Sala-comedor amplia', '2 habitaciones con clósets', 'Preparado para paneles solares'],
    featured: true,
  },
  {
    slug: 'duplex',
    name: 'Modelo Dúplex',
    size: '2 × 40 ft',
    area: '120 m²',
    priceFrom: 'Desde US$ 42.000',
    summary: 'Dos módulos combinados con terraza superior y pérgola solar.',
    image: duplexImage,
    imageAlt: 'Casa moderna de dos niveles con jardín y alberca',
    specs: [
      { icon: 'lucide:ruler', label: '120 m²' },
      { icon: 'lucide:bed-double', label: '3 habitaciones' },
      { icon: 'lucide:bath', label: '2 baños' },
      { icon: 'lucide:sofa', label: 'Terraza con pérgola' },
    ],
    highlights: ['Terraza superior con pérgola solar', '3 habitaciones y 2 baños', 'Doble altura en sala'],
  },
];

export const metrics: Metric[] = [
  { icon: 'lucide:recycle', value: '48.000 kg', label: 'de acero reciclado reutilizado' },
  { icon: 'lucide:droplets', value: '1,2 M', label: 'de litros de agua ahorrados' },
  { icon: 'lucide:home', value: '126', label: 'proyectos entregados' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Pasamos de pagar renta a tener casa propia en nuestro terreno. La instalación fue en 38 días y el equipo nos acompañó en cada paso.',
    author: 'Camila R.',
    location: 'Valle de Bravo, México',
  },
  {
    quote:
      'Nos sorprendió el aislamiento: en verano no necesitamos aire acondicionado todo el día. Los paneles cubren casi todo nuestro consumo.',
    author: 'Diego y Mariana',
    location: 'Cuernavaca, México',
  },
  {
    quote:
      'Lo usamos como oficina en el jardín. Llegó terminado, conectamos luz y agua, y en una semana ya estábamos trabajando ahí.',
    author: 'Andrés P.',
    location: 'Monterrey, México',
  },
];

export const faqs: Faq[] = [
  {
    question: '¿Necesito un terreno con servicios?',
    answer:
      'No es indispensable. Podemos instalar con conexión a red eléctrica y de agua o con el kit solar y la reserva de agua incluidos. Revisamos tu terreno para definir la mejor configuración.',
  },
  {
    question: '¿Cuánto tarda la entrega e instalación?',
    answer:
      'Entre 30 y 45 días hábiles desde la aprobación del diseño, dependiendo del modelo y de los acabados. La instalación en sitio suele tomar de 2 a 5 días.',
  },
  {
    question: '¿Se encargan del transporte?',
    answer:
      'Sí. Coordinamos el traslado desde nuestro taller hasta tu terreno, incluido el montaje con grúa cuando el acceso lo requiere. El costo depende de la distancia y la ruta.',
  },
  {
    question: '¿Necesito permisos de construcción?',
    answer:
      'Depende de la normativa de tu municipio. Te entregamos los planos y la documentación técnica para que puedas tramitarlos, y te orientamos sobre los requisitos habituales.',
  },
  {
    question: '¿Puedo ampliar mi contenedor más adelante?',
    answer:
      'Sí. Los modelos están diseñados por módulos, así que puedes sumar ambientes o una terraza después de habitar. Lo planeamos desde el inicio para no rehacer instalaciones.',
  },
];

export const interestOptions = models.map((model) => model.name);
