<!-- Quiero describir como usar los comandos de git para clonar y hacer todas las operaciones que se puede hacer con git con sus descripciones.

la web del repositorio es https://github.com/Jorge-Zeros/G7-MDS-App_Tutoria_Alumnos.git-->

# G7-MDS-App_Tutoria_Alumnos

Para clonar un repositorio, primero hay que copiar la URL del repositorio. Para ello, hay que ir al repositorio en GitHub y pulsar en el botón verde que pone "Code". Se abrirá un desplegable y hay que pulsar en el botón que pone "HTTPS". Se copia la URL que aparece en el desplegable.

```bash

git clone https://github.com/Jorge-Zeros/G7-MDS-App_Tutoria_Alumnos.git-->

```

## ¿Cómo hacer un commit?

Para hacer un commit, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git add .

```

Este comando añade todos los cambios realizados en la carpeta al commit. Si se quiere añadir un fichero en concreto, hay que ejecutar el siguiente comando:

```bash

git add nombre_fichero

```

Una vez añadidos los cambios al commit, hay que ejecutar el siguiente comando:

```bash

git commit -m "mensaje_commit"

```

Este comando crea un commit con los cambios añadidos y con el mensaje que se le haya indicado.

## ¿Cómo hacer un push?

Para hacer un push, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git push

```

Este comando envía los commits realizados en la rama local al repositorio remoto.

## ¿Cómo hacer un pull?

Para hacer un pull, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git pull

```

Este comando trae los commits realizados en la rama remota a la rama local.

## ¿Cambiar de rama?

Para cambiar de rama, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git checkout nombre_rama

```

Este comando cambia de rama a la rama indicada.

## ¿Cómo crear una rama?

Para crear una rama, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git checkout -b nombre_rama

```

## ¿Cómo ver las ramas?

Para ver las ramas, primero hay que situarse en la carpeta del repositorio. Una vez situado en la carpeta, hay que ejecutar el siguiente comando:

```bash

git branch

```

# Git

## ¿Qué es Git?

Git es un sistema de control de versiones distribuido, gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes con velocidad y eficiencia.

## ¿Qué es GitHub?

GitHub es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git. El código se almacena de forma pública, aunque también se puede hacer de forma privada, creando una cuenta de pago.

## ¿Qué es un repositorio?

Un repositorio es un espacio centralizado donde se almacena, organiza, mantiene y difunde información digital, habitualmente archivos informáticos. Los repositorios pueden ser de distintos tipos, como repositorios de código, repositorios de datos, repositorios de documentos, repositorios de imágenes, repositorios de paquetes, etc.

## ¿Qué es un commit?

Un commit es un objeto de Git, es decir, un objeto de la base de datos de Git. Un commit es un objeto que contiene información sobre los cambios realizados en el repositorio. Un commit contiene un puntero a un árbol que contiene un puntero a un árbol que contiene un puntero a un árbol o un blob, etc. hasta llegar a los blobs que contienen los datos de los ficheros.

## ¿Qué es un push?

Un push es una operación de Git que consiste en enviar los commits realizados en la rama local a la rama remota.

## ¿Qué es un pull?

Un pull es una operación de Git que consiste en traer los commits realizados en la rama remota a la rama local.

## ¿Qué es un clone?

Un clone es una operación de Git que consiste en clonar un repositorio remoto en un repositorio local.

## ¿Qué es un fork?

Un fork es una copia de un repositorio remoto en otro repositorio remoto.

## ¿Qué es un branch?

Un branch es una rama de un repositorio. Un repositorio puede tener varias ramas. Por defecto, un repositorio tiene una rama llamada master.

## ¿Qué es un merge?

Un merge es una operación de Git que consiste en fusionar dos ramas de un repositorio.

## ¿Qué es un stash?

Un stash es una operación de Git que consiste en guardar los cambios realizados en la rama local en una pila de cambios para poder recuperarlos más tarde.

## ¿Qué es un tag?

Un tag es una etiqueta que se le puede poner a un commit para identificarlo.

## ¿Qué es un issue?

Un issue es un problema que se puede crear en un repositorio para que los usuarios puedan reportar errores, hacer peticiones de funcionalidades, etc.

## ¿Qué es un pull request?

Un pull request es una petición que se puede hacer en un repositorio para que los usuarios puedan proponer cambios en el código.

## ¿Qué es un merge request?

Un merge request es una petición que se puede hacer en un repositorio para que los usuarios puedan proponer fusionar dos ramas.

## ¿Qué es un wiki?

Un wiki es una página web que se puede crear en un repositorio para que los usuarios puedan crear y modificar páginas web.

## ¿Qué es un README?

Un README es un fichero que se puede crear en un repositorio para que los usuarios puedan leer información sobre el repositorio.

## ¿Qué es un .gitignore?

Un .gitignore es un fichero que se puede crear en un repositorio para que Git ignore los ficheros que se indiquen en el fichero.
