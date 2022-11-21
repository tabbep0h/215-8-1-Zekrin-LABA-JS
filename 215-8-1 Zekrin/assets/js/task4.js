
function go(){
    // Получаем селектор // 
    let select = document.getElementById("select");
    // Получаем текущее значение селектора//
    let selected = select[select.selectedIndex].innerHTML
    
    // Проверка на текущее значенее селектора //
    if(selected == "Russia"){
        // Создаем новый селектор и пустые значениями // 
        let selectRus = document.createElement("select")
        let optionRus1 = document.createElement("option")
        let optionRus2 = document.createElement("option")
        let optionRus3 = document.createElement("option")
        // Заполняем пустые значения // 
        optionRus1.innerHTML = "Moscow"
        optionRus2.innerHTML = "Perm"
        optionRus3.innerHTML = "Elabuga"
        // Добавляем заполненные значения в новый селектор //
        selectRus.appendChild(optionRus1)
        selectRus.appendChild(optionRus2)
        selectRus.appendChild(optionRus3)
        // Добавляем новый готовый селектор //
        document.body.appendChild(selectRus)
    }
    else if(selected == "Kazakhstan"){
        // Создаем новый селектор и пустые значениями //
        let selectKzt = document.createElement("select")
        let optionKzt1 = document.createElement("option")
        let optionKzt2 = document.createElement("option")
        let optionKzt3 = document.createElement("option")
        // Заполняем пустые значения //
        optionKzt1.innerHTML = "Almati"
        optionKzt2.innerHTML = "Baykonur"
        optionKzt3.innerHTML = "Karaganda"
        // Добавляем заполненные значения в новый селектор //
        selectKzt.appendChild(optionKzt1)
        selectKzt.appendChild(optionKzt2)
        selectKzt.appendChild(optionKzt3)
        // Добавляем новый готовый селектор //
        document.body.appendChild(selectKzt)    
    }   
    else{
        // Создаем новый селектор и пустые значениями //
        let selectUSA = document.createElement("select");
        let optionUSA1 = document.createElement("option");
        let optionUSA2 = document.createElement("option");
        let optionUSA3 = document.createElement("option");
        // Заполняем пустые значения //
        optionUSA1.innerHTML = "OHIO";
        optionUSA2.innerHTML = "Washington";
        optionUSA3.innerHTML = "New-York";
        // Добавляем заполненные значения в новый селектор //
        selectUSA.appendChild(optionUSA1);
        selectUSA.appendChild(optionUSA2);
        selectUSA.appendChild(optionUSA3);
        // Добавляем новый готовый селектор //
        document.body.appendChild(selectUSA)
    }
}
    

