# Especificaciones del Proyecto: EcoContainers Landing Page

## 1. Visión del Producto
Landing page para **EcoContainers**, un concepto de soluciones habitacionales modulares basadas en contenedores marítimos reciclados. 
- **Enfoque:** Viviendas sostenibles, bonitas, muy prácticas y accesibles (no de súper lujo, pero con un diseño arquitectónico moderno y acogedor).
- **Características clave:** Autosuficiencia energética con paneles solares integrados y sistema de tanques de agua de respaldo/captación.

## 2. Paleta de Colores y Estilo Visual
- **Estilo:** Moderno, minimalista, industrial-eco, limpio y acogedor.
- **Colores primarios:** Verde oliva/bosque (#2D5A27), Tonos madera/terracota suave (#C87D55), Gris industrial/Grafito (#1E293B) y Blanco/Crema (#F8FAFC).
- **Framework de diseño:** Tailwind CSS.

## 3. Estructura de la Landing Page (Secciones)

### A. Header / Navegación
- Logo: EcoContainers (icono de hoja + contenedor).
- Enlaces: Modelos, Características Eco, Precios, FAQ.
- Botón CTA: "Cotizar mi Casa".

### B. Hero Section
- **Título principal:** "Tu casa propia, ecológica y lista para habitar."
- **Subtítulo:** "Viviendas modulares en contenedores reciclados. Espacios inteligentes, diseño moderno y 100% autosuficientes."
- **Detalles clave visibles:** Iconos rápidos de "Paneles Solares Incluidos" y "Tanques de Agua de Respaldo".
- **Llamado a la acción (CTA):** Botón primario "Ver Modelos Disponibles" y botón secundario "Agendar Visita".

### C. Características Principales (Features)
Tarjetas destacadas con enfoque práctico:
1. **Energía Solar Integrada:** Kit de paneles solares e inversores para iluminación y electrodomésticos clave.
2. **Reserva de Agua Inteligente:** Tanques de almacenamiento de respaldo con filtros básicos y opción de captación de agua de lluvia.
3. **Aislamiento Térmico y Acústico:** Recubrimientos ecológicos para garantizar temperatura agradable todo el año.
4. **Construcción Rápida:** Lista e instalada en tu terreno en menos de 45 días.

### D. Galería de Modelos / Diseños
Muestrario de 3 opciones básicas:
- **Modelo Compacto (20ft):** Monoambiente / Oficina / Cabaña de fin de semana (30m²).
- **Modelo Familiar (40ft):** 2 Habitaciones, 1 Baño, Sala-Comedor amplia.
- **Modelo Dúplex (2x40ft):** 3 Habitaciones, 2 Baños, Terraza superior con pérgola solar.

### E. Testimonios / Impacto Ecológico
- Métrica simple: "Kg de acero reciclado", "Litros de agua ahorrados", "Proyectos entregados".

### F. Pregunta Frecuente (FAQ) & Formulario de Contacto
- Preguntas sobre terreno, transporte e instalación.
- Formulario sencillo: Nombre, Email, Teléfono, Modelo de Interés y Mensaje.

### G. Footer
- Datos de contacto, redes sociales, derechos reservados.

---

## 4. Instrucciones para el Agente AI (OpenCode)
- **Framework:** Astro + Tailwind CSS.
- **Formato:** Dividir la página en componentes modulares en `src/components/` (`Hero.astro`, `Features.astro`, `Models.astro`, `Contact.astro`, etc.).
- **Diseño:** Responsivo (móvil y escritorio) con clases limpias de Tailwind CSS.

---

## Estado Actual del Desarrollo

**Estado general: completado y listo para despliegue.**

### Dark Mode — Completado
- Tema claro por defecto (no depende de la preferencia del sistema) y alternancia a oscuro desde el header.
- Paleta semántica centralizada en `src/styles/global.css` mediante tokens (`surface`, `surface-raised`, `surface-muted`, `ink`, `line`, `footer`, etc.) mapeados con `@theme inline`.
- Persistencia en `localStorage` (`ecocontainers-theme`), script inline anti-flash en `src/layouts/BaseLayout.astro` y sincronización de `aria-pressed`, `aria-label` y `meta[name="theme-color"]`.
- Verificado en escritorio y móvil, incluyendo persistencia tras recarga.

### Componentes Base — Completados
- Primitivas reutilizables en `src/components/ui/`: `Container`, `Section`, `SectionHeading`, `Button` e `IconPill`, todas apoyadas en los tokens semánticos de tema.
- Componentes de sección en `src/components/`: `Header`, `Hero`, `Features`, `FeatureCard`, `Models`, `ModelCard`, `Impact`, `FAQ`, `Contact`, `ContactForm`, `Footer` y `ThemeToggle`.
- Contenido tipado y centralizado en `src/data/site.ts`; iconografía con `astro-icon` (Lucide + Simple Icons) e imágenes optimizadas con `astro:assets`.

### Estructura de Astro — Completada
- Proyecto Astro con Tailwind CSS 4 (vía `@tailwindcss/vite`), tipografía self-hosted (Inter + Fraunces) y salida estática.
- `npx astro check`: 22 archivos, 0 errores, 0 warnings, 0 hints.
- `npm run build`: compilación exitosa, 16 imágenes optimizadas a WebP y salida estática en `dist/`.
- Página responsiva verificada en 390 px y 1440 px; navegación por anclas operativa (`#inicio`, `#caracteristicas`, `#modelos`, `#impacto`, `#faq`, `#contacto`).

### Limitaciones conocidas
- El formulario de contacto es una maqueta visual: valida en el navegador y muestra un panel de confirmación, pero no envía datos a ningún backend.
- Aviso menor de build: `astro-icon` busca `src/icons` y no existe (se silencia creando `src/icons/.gitkeep`). No afecta el resultado.