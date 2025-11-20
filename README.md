# Proyecto React CoderHouse 🚀

[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Descripción
Este proyecto es una **tienda online** desarrollada con **React**, **Context API** y **Firebase Firestore**.  
Permite a los usuarios:

- Navegar por productos.
- Agregar productos al carrito y modificar cantidades.
- Realizar un checkout con validación de datos.
- Buscar y filtrar productos por categorías.

La aplicación es **responsive** y cuenta con una **interfaz accesible** y agradable.

---

## 🛠 Tecnologías utilizadas
- **React**: Librería principal para construir la interfaz.
- **Context API**: Gestión del estado global del carrito.
- **Firebase Firestore**: Base de datos en tiempo real.
- **React Router**: Navegación entre páginas.
- **CSS / Tailwind**: Estilos y diseño responsive.

---

## ⚡ Funcionalidades
- Navegación entre catálogo y páginas de detalle de productos.
- Agregar, eliminar y modificar productos en el carrito.
- Checkout con validación de formulario.
- Búsqueda y filtrado de productos por categoría.
- Manejo de estados de carga mediante componente `Loader`.
- Manejo de rutas inexistentes con componente `NotFound`.
- Interfaz estilizada y accesible.

---

## 📁 Estructura del proyecto
src/
├─ components/ # Componentes reutilizables (ItemCount, Loader, etc.)
├─ context/ # Contextos globales (CartContext)
├─ pages/ # Páginas principales (CartPage, Checkout, MainCatalogPage)
├─ firebase/ # Configuración e integración con Firebase
├─ App.jsx # Componente principal con rutas
└─ index.js # Punto de entrada de la aplicación

---

## 🚀 Requisitos previos
- Node.js (>= 14)
- npm (>= 6) o yarn

---

## 🧭 Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/SofiaBolea/proyecto-react-CoderHouse.git
cd proyecto-react-CoderHouse
```

2. Instalar dependencias:
```bash
npm install

```

3. Configurar Firebase (si aplica):
- Crear un archivo `.env.local` en la raíz del proyecto y añadir las variables de configuración de Firebase (por ejemplo, REACT_APP_FIREBASE_API_KEY, etc.).  
- Alternativamente, completar el archivo de configuración dentro de `src/firebase/`.

4. Ejecutar la aplicación en modo desarrollo:
```bash
npm start

```
La aplicación correrá en http://localhost:3000.
