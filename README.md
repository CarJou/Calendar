# Calendar
El proyecto cuenta con un ABM (alta, baja, modificación) 
Distintos usuarios para loguarse. Ej: Sol, 123.
La API integrada se llama React Big Calendar.


Este proyecto tiene tres carpetas importantes para poder ejecutar la app de forma correcta:
### Fronted, backend y base de datos.


# Frontend
Hecho en React, Bootstrap y CSS. Para poder visualizarlo es necesario ejecutar el siguiente comando:

### npm i
### npm start

# Base de datos
Dentro de la carpeta Backend se encuentra otra llamada Database donde se encuentra el script. Hay que descargar https://www.apachefriends.org/index.html para poder levantar Apache y MySQL. Luego, desde http://localhost/phpmyadmin hay que importar el script.
Es importante completar estos pasos ya que los datos los lleva al Frontend de manera dinamica. 

# Backend
Hecho con Node.js y Express. Es necesario ejecutar los siguientes comandos:

### npm i
### cd src (para movernos)
y por último
### node server.js

