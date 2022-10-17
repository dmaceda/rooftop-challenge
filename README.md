# Challenge Aplicants Rooftop

Debemos crear esta figura de NxN, siendo N un número entero mayor igual a 5 que es ingresado
en la función como parámetro de entrada.

El valor de retorno a nivel de código debe contener un array de arrays, de 0 y 1.

IMPORTANTE:\
● La serpiente hecha con “1” no puede tocarse a sí misma\
● La serpiente siempre empieza en la esquina superior izquierda y va hacia la derecha, en
sentido horario.\
● Debido a los edge-cases para figuras de espiral muy pequeñas, el tamaño será de al menos
5 como mínimo para que tenga sentido la forma generada.

Requisitos adicionales:\
● En caso de haber consultado información en internet para ayudarse con la resolución, el
dev deberá adjuntar los links de la documentación consultada en un readme o algún
archivo del repositorio.\
● Se tendrán en cuenta código limpio, buenas prácticas, comentarios.



## Solución 

Para la resolución de este ejercicio, recordé que durante el bootcamp que realicé hace un tiempo, había recorrido matrices, pintando figuras y letras.
Por lo que utilicé la misma lógica de ciclos for, para recorrer la matriz en forma de espiral.\
Adicionalmente vi un video realizado en el lenguaje Java, en el cual el instructor recorre una matriz en forma de espiral, pero sin dejar espacios en cada iteración,
por lo que con esa guía, modifique los indices de modo que el espiral quede espaciado y no se toque a si mismo en ningún momento.\
Adicionalmente utilicé una función recursiva para iterar sobre la matriz.


Adjunto el video de guía [Youtube link](https://www.youtube.com/watch?v=mEvoR1RAHxQ).