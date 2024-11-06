// 改變人物介紹圖
let char = 'h';
let char_area = document.querySelector('#char_area');

let exp1 = document.querySelector('#exp1');
let exp2 = document.querySelector('#exp2');
let exp3 = document.querySelector('#exp3');
let exp4 = document.querySelector('#exp4');
let change_exps = document.querySelectorAll('.exps');
change_exps[0].addEventListener ('click', () => {char_area.style.backgroundImage = `url('./${char}_1.png'`});
change_exps[1].addEventListener ('click', () => {char_area.style.backgroundImage = `url('./${char}_2.png'`});
change_exps[2].addEventListener ('click', () => {char_area.style.backgroundImage = `url('./${char}_3.png'`});
change_exps[3].addEventListener ('click', () => {char_area.style.backgroundImage = `url('./${char}_4.png'`});

let char_change = document.querySelectorAll('.char_change_pic');
let exp_backgroung = document.querySelectorAll('.exp_backgroung');

char_change[0].addEventListener('click', () => {
    char = 'h';
    char_area.style.backgroundImage = `url('./${char}_1.png')`;
    exp_backgroung.forEach((element) => {element.style.borderColor = '#2AB8C4'});
    change_exps.forEach((element, index) => {element.src = `${char}_e${index+1}.png`});
});

char_change[1].addEventListener('click', () => {
    char = 'r';
    char_area.style.backgroundImage = `url('./${char}_1.png')`;
    exp_backgroung.forEach((element) => {element.style.borderColor = '#A19A90'});
    change_exps.forEach((element, index) => {element.src = `${char}_e${index+1}.png`});
});

char_change[2].addEventListener('click', () => {
    char = 'k';
    char_area.style.backgroundImage = `url('./${char}_1.png')`;
    exp_backgroung.forEach((element) => {element.style.borderColor = '#F67558'});
    change_exps.forEach((element, index) => {element.src = `${char}_e${index+1}.png`});
});

char_change[3].addEventListener('click', () => {
    char = 'o';
    char_area.style.backgroundImage = `url('./${char}_1.png')`;
    exp_backgroung.forEach((element) => {element.style.borderColor = '#6f599c'});
    change_exps.forEach((element, index) => {element.src = `${char}_e${index+1}.png`});
});

// 改變導覽列顏色
let nav = document.querySelector('#nav');
let header = document.querySelector('#header');
let header_top = header.offsetHeight;
window.addEventListener('scroll', () => {
    let win_height =  document.documentElement.scrollTop;
    if (header_top <= win_height) {
    nav.style.backgroundColor = '#A42828';
    }
    else {
        nav.style.backgroundColor = '#801919';
    };
})
