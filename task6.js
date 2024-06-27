    // Вы отдыхали с друзьями вдали от дома, но когда приходит время возвращаться, вы понимаете, что у вас заканчивается топливо, 
    // а ближайшая заправка находится в 50нескольких милях отсюда! Вы знаете, что в среднем пробег вашей машины составляет около 25миль на галлон. Остались 2галлоны.
    // Учитывая эти факторы, напишите функцию, которая сообщит вам, можно ли добраться до насоса или нет.
    // Функция должна вернуться true, если это возможно, а false если нет.
    let distanceToPump = 50
    let mpg = 25
    let fuelLeft = 2
    const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let res = mpg * fuelLeft
        if (res >= distanceToPump) {
            return true
        } else {
            return false
        }
    };
    console.log(zeroFuel(distanceToPump, mpg, fuelLeft)) 