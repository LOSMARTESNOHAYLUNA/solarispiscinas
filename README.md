# Piscinas Solaris — Sitio Web

Web corporativa de **Piscinas Solaris**, especialistas en construcción y rehabilitación de piscinas en Madrid.

## 📁 Estructura

```
solaris/
├── index.html                  → Home (con vídeo hero)
├── construccion-piscinas.html  → Landing construcción de obra nueva
├── lamina-armada.html          → Landing lámina armada RENOLIT
├── rehabilitacion.html         → Landing rehabilitación
├── reformas-piscinas.html      → Landing reformas integrales
├── contacto.html               → Página de contacto con formulario
├── servicios.html              → Página de servicios
├── css/
│   └── styles.css              → CSS global compartido
├── js/
│   └── main.js                 → JS global compartido
├── img/
│   └── (imágenes del proyecto) → Ver tabla de imágenes abajo
└── vercel.json                 → Configuración Vercel
```

## 🖼️ Imágenes necesarias (carpeta `/img`)

| Archivo | Usado en | Descripción |
|---|---|---|
| `hero-construccion.jpg` | construccion-piscinas.html | Hero piscina en construcción |
| `hero-rehabilitacion.jpg` | rehabilitacion.html | Hero piscina deteriorada/rehabilitada |
| `hero-lamina-armada.jpg` | lamina-armada.html | Hero instalación lámina RENOLIT |
| `hero-reformas.jpg` | reformas-piscinas.html | Hero reforma piscina/entorno |
| `hero-servicios.jpg` | servicios.html | Hero genérico piscinas |
| `antes-1.jpg` | index.html galería | Antes rehabilitación Pozuelo |
| `despues-1.jpg` | index.html galería | Después rehabilitación Pozuelo |
| `antes-2.jpg` | index.html galería | Antes obra nueva Las Rozas |
| `despues-2.jpg` | index.html galería | Después obra nueva Las Rozas |
| `antes-3.jpg` | index.html galería | Antes reforma Boadilla |
| `despues-3.jpg` | index.html galería | Después reforma Boadilla |
| `construccion-nueva.jpg` | index.html cards | Card proyecto obra nueva |
| `rehabilitacion.jpg` | index.html cards | Card proyecto rehabilitación |
| `rehabilitacion-renolit.jpg` | rehabilitacion.html | Foto proceso instalación RENOLIT |

## 🚀 Deploy en Vercel

1. Sube este repositorio a GitHub
2. Entra en [vercel.com](https://vercel.com) → **Add New Project**
3. Importa el repositorio de GitHub
4. Framework: **Other** (HTML estático)
5. Click **Deploy** — listo en 1 minuto

## ✏️ Personalización pendiente

- [ ] Sustituir `contacto@dominio.com` por el email real
- [ ] Sustituir `https://piscinassolaris.es/` por el dominio real en los meta canonical
- [ ] Añadir imágenes en la carpeta `/img`
- [ ] Conectar formulario de contacto (recomendado: [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com))
- [ ] Añadir Google Analytics / tag de seguimiento
- [ ] Sustituir enlaces de redes sociales en el footer

## 📞 Contacto empresa

- **Teléfono:** 614 69 10 70
- **Email:** contacto@dominio.com
- **Dirección:** C/ Del Rey nº2, nave 13 · 28609 Sevilla la Nueva · Madrid
