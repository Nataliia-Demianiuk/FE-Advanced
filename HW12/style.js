 async function getRandomChinese(length) {
    let result = '';
        try{
            while (length) {
                const sign = new Promise ((resolve) => {
                    setTimeout(() => resolve(String.fromCharCode(Date.now().toString().slice(-5))), 50);
                });

                result += await sign;
                length--;
            };

            return result;
        } catch (err){
            console.log("Failed:", err);
        } 
        };

getRandomChinese(4).then(res => console.log(res)); 

