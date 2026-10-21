# PROGRESS — EcoContainers Landing Page

> Archivo de continuidad. Si retomás el proyecto después de un tiempo, leé esto primero.
>
> **Última actualización:** 20 de octubre de 2026
> **Estado:** completado y listo para despliegue.

---

## 1. Qué se construyó

Landing page de **EcoContainers** (viviendas modulares en contenedores marítimos reciclados) a partir de `SPECIFICATIONS.md`, con calidad de producción aunque sea un proyecto de práctica.

Incluye las siete secciones del spec —header, hero, características, modelos, impacto, FAQ y contacto, más footer— y un **modo oscuro** con tema claro por defecto.

---

## 2. Stack

| Pieza | Versión / detalle |
| --- | --- |
| Astro | `^7.4.1`, salida estática |
| Tailwind CSS | `^4.3.3` vía `@tailwindcss/vite` (sin `tailwind.config`) |
| Tipografía | `@fontsource-variable/inter` + `@fontsource-variable/fraunces` (self-hosted) |
| Iconos | `astro-icon` con `@iconify-json/lucide` y `@iconify-json/simple-icons` |
| Tipado | `@astrojs/check` + `typescript` |
| Node | `>=22.22.0` |

---

## 3. Cómo levantar el proyecto

```bash
npm install          # solo la primera vez
astro dev --background
```

- URL: `http://localhost:4321`
- Estado: `astro dev status`
- Logs: `astro dev logs`
- Detener: `astro dev stop`

Verificación antes de desplegar:

```bash
npx astro check      # 22 archivos: 0 errores, 0 warnings, 0 hints
npm run build        # salida estática en dist/
```

---

## 4. Estructura relevante

```
src/
├─ layouts/BaseLayout.astro      # lang="es", meta/OG, script anti-FOUC, skip link
├─ pages/index.astro             # composición de todas las secciones
├─ styles/global.css             # tokens semánticos, @custom-variant dark, @theme inline
├─ data/site.ts                  # TODO el contenido demo, tipado
├─ assets/images/                # hero.jpg + 3 fotos de modelos (Unsplash)
└─ components/
   ├─ ThemeToggle.astro          # botón + persistencia + sync de aria y theme-color
   ├─ Header / Hero / Features / FeatureCard
   ├─ Models / ModelCard / Impact
   ├─ FAQ / Contact / ContactForm / Footer
   └─ ui/                        # Container, Section, SectionHeading, Button, IconPill
```

---

## 5. Decisiones tomadas (y por qué)

1. **El formulario es una maqueta visual.** Valida con validación nativa del navegador y muestra un panel de éxito con `aria-live`, pero no envía datos. No hay backend ni servicio de email.
2. **Precios placeholder.** El nav "Precios" apunta a `#modelos` (no hay sección propia) y las cards muestran "Desde US$ 18.900 / 27.500 / 42.000" como referencia.
3. **Contenido centralizado.** Todo el copy demo vive en `src/data/site.ts`; cambiar textos no requiere tocar componentes.
4. **Imágenes de referencia.** Las 4 fotos son de Unsplash y la sección de modelos lo aclara explícitamente al pie.
5. **Tema claro por defecto, independiente del SO.** La preferencia se guarda en `localStorage` con la clave `ecocontainers-theme`; un script inline en el `<head>` evita el flash al recargar.
6. **Colores por tokens semánticos.** Nada de `bg-white`/`text-gray-900` sueltos: se usan `bg-surface`, `bg-surface-raised`, `bg-surface-muted`, `text-ink`, `text-ink-muted`, `border-line`, `footer-*`, etc. Así el modo oscuro no requiere `dark:` en cada elemento.

---

## 6. Verificación realizada

- `npx astro check` → 22 archivos, **0 errores / 0 warnings / 0 hints**.
- `npm run build` → exitoso, **16 imágenes optimizadas a WebP**, `dist/` ≈ 2.39 MB, `index.html` ≈ 66.5 kB.
- Anclas presentes y operativas: `#inicio`, `#caracteristicas`, `#modelos`, `#impacto`, `#faq`, `#contacto`.
- QA visual en **390 px y 1440 px**, en claro y oscuro, con capturas headless.
- Modo oscuro verificado por CDP: claro inicial → toggle → `dark:true`, `aria-pressed:true`, `theme-color:#0b1220`, `localStorage:"dark"` → persiste tras recarga.
- Menú móvil (`<details>` + `group-open`) probado y funcionando.

---

## 7. Problemas corregidos durante el QA

| Problema | Corrección |
| --- | --- |
| `IconPill` con colores solo-claro | Migrado a tokens semánticos |
| `FeatureCard` se fundía con secciones `surface-raised` | `dark:bg-surface-muted` |
| Precios partidos en dos líneas | `whitespace-nowrap` |
| Badge "Más elegido" con bajo contraste | `terracotta-700` |
| Rating del hero se partía en móvil | Avatares `hidden -space-x-2 sm:flex` |

---

## 8. Pendientes conocidos

- [ ] **Conectar el formulario** a un backend o servicio (Formspree, Netlify Forms, Resend…).
- [ ] **Silenciar el aviso de build** de `astro-icon`: busca `src/icons` y no existe. Se resuelve creando `src/icons/.gitkeep`. No afecta el resultado.
- [ ] **Inicializar git.** El proyecto aún no es un repositorio, así que no hay historial ni rama para desplegar.
- [ ] **Elegir destino de despliegue** (Netlify, Vercel, Cloudflare Pages o hosting estático propio).
- [ ] **Reemplazar imágenes de referencia** por fotos reales del producto y precios definitivos.

---

## 9. Próximo paso sugerido

Inicializar el repositorio y desplegar el `dist/` actual para tener una URL de preview; después decidir si el formulario se conecta a un servicio o queda como maqueta.

Para el detalle funcional completo, ver `SPECIFICATIONS.md` → sección **Estado Actual del Desarrollo**.
