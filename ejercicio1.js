const makeFigure = function(size) {
   //creo la matrix de nxn y la relleno con ceros(0)
   let figure = new Array(size);
   for (let i = 0; i < size; i++) {
   let fillArray = new Array(size).fill(0);
   figure[i] = fillArray;
   }
   //creo una funcion recursiva, que recibe como parametros los indices que me permiten desplazarme por la matriz.
   const recursive = (startColumn, endColumn, startRow, endRow, aux) => {
      //valido si estoy dentro de los limites de la matriz
      if(startColumn <= endColumn && startRow <= endRow){
         //recorro la matriz de izquierda a derecha
         for (let i = startColumn; i <= endColumn; i++) {
            figure[startColumn+aux][i] = 1  
         };
         //recorro la matriz de arriba hacia abajo
         for (let i = startRow; i <= endRow; i++) {
            figure[i][endColumn] = 1
         };
         //recorro la matriz de derecha a izquierda
         for (let i = endColumn; i > startColumn+aux; i--) {
            figure[endRow][i] = 1
         };
         //recorro la matriz de abajo hacia arriba
         for (let i = endRow; i >= startRow+2; i--) {
            figure[i][startColumn+aux] = 1
         };
         //modifico el valor de las variables para poder desplazarme en espiral hacia el centro de la matriz en las iteraciones siguientes
         //evitando que la serpiente se toque a si misma.
         startRow = startRow+2;
         startColumn++;
         aux++;
         endColumn = endColumn-2;
         endRow = endRow-2;
         //llamo a la funcion recursiva con los valores modificados
         recursive(startColumn, endColumn, startRow, endRow, aux);
      }
   }
   //llamo a lafuncion recursiva con los valores iniciales
   recursive(0, size-1, 0, size-1, 0);
   return figure;
};







