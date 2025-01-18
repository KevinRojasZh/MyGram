# Instagram Clone: Proyecto Full Stack

Este proyecto es un clon básico de Instagram, desarrollado utilizando **Django** para el backend y **React** para el frontend. Contiene funcionalidades clave como publicaciones, me gusta, comentarios, y un sistema de seguidores/seguidos.

---

## **Características Principales**

### 1. **Backend (Django)**
- API REST desarrollada con Django REST Framework (DRF).
- Autenticación basada en tokens (JWT).
- Gestión de usuarios con perfiles personalizados.
- Funcionalidades:
  - Subir imágenes con descripciones (captions).
  - Sistema de seguidores y seguidos.
  - Interacciones con publicaciones: me gusta y comentarios.

### 2. **Frontend (React)**
- Interfaz de usuario dinámica creada con React.
- Uso de Axios para consumir la API.
- Rutas protegidas y públicas con React Router.
- Funcionalidades:
  - Feed de publicaciones.
  - Formularios de inicio de sesión y registro.
  - Página de perfil con seguidores, seguidos y publicaciones propias.

---

## **Tecnologías Utilizadas**

### **Backend**
- Django
- Django REST Framework (DRF)
- Simple JWT (para autenticación)
- PostgreSQL (base de datos)

### **Frontend**
- React con Vite
- Axios
- React Router
- CSS/Tailwind (para estilos)

### **Otros**
- Docker (opcional, para despliegue)
- Git y GitHub (control de versiones)

---

## **Estructura del Proyecto**

```
/project-root
    ├── backend/                     # Proyecto Django
    │   ├── insta_clone/             # Configuración principal
    │   ├── users/                   # Gestión de usuarios
    │   ├── posts/                   # Gestión de publicaciones
    │   ├── media/                   # Archivos subidos
    │   ├── manage.py                # Comando principal de Django
    │   └── requirements.txt         # Dependencias
    ├── frontend/                    # Proyecto React
    │   ├── src/                     # Código fuente
    │   │   ├── components/          # Componentes reutilizables
    │   │   ├── pages/               # Páginas completas
    │   │   ├── services/            # API calls
    │   │   └── styles/              # Estilos
    │   ├── package.json             # Dependencias de React
    │   └── vite.config.js           # Configuración de Vite
    ├── .gitignore                   # Archivos ignorados por Git
    └── README.md                    # Documentación del proyecto
```

---

## **Cómo Empezar**

### **1. Configurar el Backend**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/instagram-clone.git
   cd instagram-clone/backend
   ```

2. Crea un entorno virtual e instala las dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Realiza las migraciones e inicia el servidor:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### **2. Configurar el Frontend**
1. Ve a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### **3. Conectar Frontend y Backend**
- Durante el desarrollo, React se conectará al backend mediante un proxy configurado en `vite.config.js`.

---

## **Funcionalidades Futuras**
- **Notificaciones**: Alertas de seguidores y me gusta.
- **Mensajes Directos**: Sistema de chat.
- **Explorar**: Descubrir usuarios y publicaciones populares.

---

## **Contribuir**
Si deseas contribuir a este proyecto, por favor sigue los pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu funcionalidad o corrección:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realiza un pull request.

---

## **Autor**
Este proyecto fue creado por **Kenan Rojas** como un ejercicio para aprender y mejorar habilidades en desarrollo full stack.

---

## **Licencia**
Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.



