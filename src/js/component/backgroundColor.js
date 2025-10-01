function removeBackgroundColour(){
    return document.body.classList.remove('from-[#FFD885]', 'to-[#359EFF]', 
                                        'from-[#FFE3A8]', 'to-[#0084FF]', 
                                        'from-[#9BB6FF]', 'to-[#1B2B56]', 
                                        'from-[#C8C8C8]', 'to-[#505050]', 
                                        'from-[#61A3FA]', 'to-[#00226B]', 
                                        'from-[#304B6B]', 'to-[#0B1C30]', 
                                        'from-[#E3E3E3]', 'to-[#8C8C8C]', 
                                        'from-[#BABABA]', 'to-[#2B2B2B]', 
                                        'from-[#1C2228]', 'to-[#424242]');
}

function changeBackgroundUI(data){
    const hours = parseInt(data.location.localtime.split(' ')[1].split(':')[0]);
    const weatherCode = data.current.condition.code;
    
    const cerah = [1000];
    const matahariBerawan = [1003];
    const berawan = [1006, 1009];
    const kabut = [1030, 1135, 1147]; 
    const hujan = [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1072];
    const hujanPetir = [1087, 1273, 1276];
    const salju = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1069, 1204, 1207, 1237, 1249, 1252, 1261, 1264];
    const hujanSaljuBadai = [1117, 1279, 1282];

    removeBackgroundColour();

    if(hours >= 5 && hours <= 18){
        if(cerah.includes(weatherCode)){
            document.body.classList.add('from-[#FFD885]', 'to-[#359EFF]');
        } else if(matahariBerawan.includes(weatherCode)){
            document.body.classList.add('from-[#FFE3A8]', 'to-[#0084FF]');
        } else if(berawan.includes(weatherCode)){
            document.body.classList.add('from-[#9BB6FF]', 'to-[#1B2B56]');
        } else if(kabut.includes(weatherCode)){
            document.body.classList.add('from-[#C8C8C8]', 'to-[#505050]');
        } else if(hujan.includes(weatherCode)){
            document.body.classList.add('from-[#61A3FA]', 'to-[#00226B]');
        } else if(hujanPetir.includes(weatherCode)){
            document.body.classList.add('from-[#304B6B]', 'to-[#0B1C30]');
        } else if(salju.includes(weatherCode)){
            document.body.classList.add('from-[#E3E3E3]', 'to-[#8C8C8C]');
        }else if(hujanSaljuBadai.includes(weatherCode)){
            document.body.classList.add('from-[#BABABA]', 'to-[#2B2B2B]');
        }
    } else {
        document.body.classList.add('from-[#1C2228]', 'to-[#424242]');
    }
}

export {changeBackgroundUI};