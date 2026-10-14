// let number=-1;
// let bumberName;
// if (number>0) {
// bumberName="Эерэг"
// } else if (number==0) {
//     bumberName = "Тэг"
// } else {
// bumberName="Сөрөг"
// }
// console.log(bumberName);

// let age=99;
// let ageCategory;
// if (age>=0 && age<=12) {
//     ageCategory="Хүүхэд"
// } else if (age>=13 && age<=17) {
//     ageCategory="Өсвөр нас"
// } else if (age>=18) {
//     ageCategory="Насанд хүрсэн"
// } else {
//     ageCategory="Буруу нас"
// }
// console.log(ageCategory);

// let score=101;
// let scoreCategory;
// if (score>=90 && score<=100) {
//     scoreCategory="A"
// } else if (score>=80 && score<=89) {
//     scoreCategory="B"}
//     else if (score>=70 && score<=79) {
//     scoreCategory="C"}
//     else if (score>=60 && score<=69) {
//     scoreCategory="D"
// } else if (score>=0 && score<=59) {
//     scoreCategory="F"
// } else {
//     scoreCategory="Буруу оноо"
// }
// console.log(scoreCategory);

// let temperature=-20;
// let temperatureType;
// if (temperature<0) {
//     temperatureType="Хүйтэн"
// } else if (temperature>=0 && temperature<=20) {
//     temperatureType="Сэрүүн"
// } else if (temperature>=20) {
//     temperatureType="Дулаан"
// }
// console.log(temperatureType);

// const a=15, b=19;
// const checking= a>b ? "Эхний тоо их": a<b ? "Хоёр дахь тоо их" :"хоёр тоо тэнцүү";
// console.log(checking);

// const total=200000;
// if (total>=200000){
//     const discount=total*0.2;
//     console.log(total-discount);
// } else if (total>=100000){
//     const discount=total*0.1;
//     console.log(total-discount);
// }else {
//     console.log(total);
// }

// const battery=100;
// if (battery===0){
//     console.log("Унтарсан");
// } else if (battery<=19) {
//     console.log("Цэнэг бага");
// } else if (battery<=99){
//     console.log("Цэнэг хэвийн");
// } else if (battery===100){
//     console.log("Бүрэн цэнэгтэй");
// }else {
//     console.log("Буруу утга");
// }

// const color = "sda";
// if (color === "улаан") {
//   console.log("зогс");
// } else if (color === "ногоон") {
//   console.log("яв");
// } else if (color==="улбар шар"){
//   console.log("Хүлээ");
// } else {
//   console.log("Буруу өнгө");
// }

// const distance=11;
// if (distance>0 && distance<=3){
//     console.log("3000₮");
// } else if (distance>3 && distance<=10){
//     console.log("5000₮");
// } else if (distance>10){
//     console.log("8000₮");
// } else {
//     console.log("Буруу утга");
// }

// const secret=7, guess=7;
// if (guess<secret){
//     console.log("Илүү их тоо сонгоорой");
// } else if (guess>secret){
//     console.log("Илүү бага тоо сонгоорой");
// } else {
//     console.log("Та зөв таалаа");
// }

// const number=10;
// if (number%5===0){
//     console.log("yes");
// } else {
//     console.log("no");
// }

// const number=9;
// if (number%2===0){
//     console.log("even");
// } else {
//     console.log("odd");
// }

// const number=15;
// if (number%3===0 && number%5===0){
//     console.log("FizzBuzz");
// } else if (number%3===0){
//     console.log("Fizz");
// } else if (number%5===0){
//     console.log("Buzz");
// } else {
//     console.log(number);
// }

// let number=-99;
// if (number>=100) {
//   number = 100;
//   console.log(number);
// }else if (number>=0 && number<100) {
//   console.log(number);
// } else {
//   console.log("Буруу утга");
// }

// let number=-9;
// if (number<=0) {
//   console.log(number*-1);
// } else {
//   console.log(number);
// }

// const number = 1235;
// const lastDigit = number % 10;

// switch (lastDigit) {
//   case 0:
//   case 5:
//     console.log("5 dah odor yavahgui");
//     break;
//   case 1:
//   case 6:
//     console.log("1 dah odor yavahgui");
//     break;
//   case 2:
//   case 7:
//     console.log("2 dah odor yavahgui");
//     break;
//   case 3:
//   case 8:
//     console.log("3 dah odor yavahgui");
//     break;
//   case 4:
//   case 9:
//     console.log("4 dah odor yavahgui");
// }

// const day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
// }

// const a = 2,
//   b = 4,
//   c = 1;
// if (a + b > c && a + c > b && b + c > a) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// const year=1900;
// if (year%4===0 && year>=1896){
//   console.log("Зуны олимпийн жил");
// }else {
//   console.log("Зуны олимпийн жил биш");
// }

// const year=2006;
// if (year>=1924 && year<=1992 &&(year-1924)%4===0){
//   console.log("Өвлийн олимпийн жил");
// }else if (year>=1994 && (year-1994)%4===0){
// console.log("Өвлийн олимпийн жил");
// }
// else {
//   console.log("Өвлийн олимпийн жил биш");
// }

// const month = 1;

// switch (month) {
//   case 1:
//   case 12:
//   case 2:
//     console.log("Өвөл");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Хавар");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Зун");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Намар");
//     break;
//   default:
//     console.log("Буруу сарын дугаар");
// }

// const fuelType = "D";
// const liters = 10;

// let niit;

// switch (fuelType) {
//   case 92:
//     niit = 5500 * liters;
//     break;
//   case 95:
//     niit = 7000 * liters;
//     break;
//   case "D":
//     niit = 6000 * liters;
//     break;
//   default:
//     console.log("Шатахууны төрөл буруу");
// }

// console.log(niit);

// const a = 4,
//   b = 3,
//   c = 1;
// const hariu = a > b && b > c ? true : false;
// console.log(hariu);

// const a = 4,
//   b = -3,
//   c = 1;
// const hariu = a > 0 && b > 0 && c>0 ? true : false;
// console.log(hariu);

// const a = 6,
//   b = 8,
//   c = 21;
// const hariu = a%2===0 && b%2===0 && c%2===0? true : false;
// console.log(hariu);

// const a = 6,
//   b = 8,
//   c = -21;
// const hariu = a<0 || b<0 || c<0? true : false;
// console.log(hariu);

// const number = 30;
// const tens=Math.floor(number/10)
// const ones=number%10;
// const reversed=ones*10+tens
// console.log(reversed);

// const number = 32;
// const tens=Math.floor(number/10)
// const ones=number%10;
// const reversed=ones*tens
// console.log(reversed);

// const year = 1900;
// const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Өндөр жил" : "Өндөр жил биш";
// console.log(isLeapYear);


// // 1970 оноос хойших нийт миллисекунд
// const elapsed = Date.now();

// // Хугацааны нэгжүүд
// const yearMs = 1000 * 60 * 60 * 24 * 365;
// const monthMs = 1000 * 60 * 60 * 24 * 30;
// const dayMs = 1000 * 60 * 60 * 24;
// const hourMs = 1000 * 60 * 60;
// const minuteMs = 1000 * 60;
// const secondMs = 1000;

// // Үлдэгдэл хугацаа
// let remaining = elapsed;

// // 1. Жил
// const year = Math.floor(remaining / yearMs);
// remaining = remaining % yearMs;

// // 2. Сар
// const month = Math.floor(remaining / monthMs);
// remaining = remaining % monthMs;

// // 3. Өдөр
// const day = Math.floor(remaining / dayMs);
// remaining = remaining % dayMs;

// // 4. Цаг
// const hour = Math.floor(remaining / hourMs);
// remaining = remaining % hourMs;

// // 5. Минут
// const minute = Math.floor(remaining / minuteMs);
// remaining = remaining % minuteMs;

// // 6. Секунд
// const second = Math.floor(remaining / secondMs);
// remaining = remaining % secondMs;

// // 7. Дооль (1 дооль = 10 миллисекунд)
// const dool = Math.floor(remaining / 10);

// // 8. Үлдсэн миллисекунд
// const millisecond = remaining % 10;

// // Үр дүн хэвлэх
// console.log("Жил:", year);
// console.log("Сар:", month);
// console.log("Өдөр:", day);
// console.log("Цаг:", hour);
// console.log("Минут:", minute);
// console.log("Секунд:", second);
// console.log("Дооль:", dool);
// console.log("Миллисекунд:", millisecond);

// const a=5, b=10, c=15;
// console.log(Math.min(a,b,c));

// const a=5, b=10, c=15;
// console.log((Math.max(a,b,c)-Math.min(a,b,c)));