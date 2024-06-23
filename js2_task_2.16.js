 // В программе заданы два массива array_1 и array_2, элементы которого являются числами. 
 // Значения внутри одного массива уникальные. Реализуйте функцию intersection,
 //  которая принимает в качестве аргументов два массива и возвращает новый массив. 
 //  Он должен содержать значения,
 //   которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.
 let array_1 = [2, 4, 7, 8, 1]
 let array_2 = [2, 5, 11, 6, 1]
     function intersection(array_1, array_2) {
         let res  = []
 for (let i = 0; i < array_1.length; i++) {
     for (let n = 0; n < array_2.length; n++) {
         if (array_1[i] === array_2[i]) {
 res.push(array_1[i])
 break
         }
     }
 } return res
 
     }
 intersection(array_1, array_2) 