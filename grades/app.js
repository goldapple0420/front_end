let hero = document.querySelector('div.hero');
let slider = document.querySelector('div.slider');
let animation = document.querySelector('section.opening_ani');

const time_line = new TimelineMax();

time_line.fromTo (
    hero,
    1,
    {height: '0%'},
    {height: '100%', ease: Power2.easeInOut}
);
time_line.fromTo (
    hero,
    1,
    {width: '80%'},
    {width: '100%', ease: Power2.easeInOut}
);
time_line.fromTo (
    slider,
    1,
    {x: '-100%'},
    {x: '0%', ease: Power2.easeInOut}
);
time_line.fromTo (
    animation,
    0.3,
    {opacity: 1},
    {opacity: 0}
);
setTimeout(() => {animation.style.display = 'none'}, 3300)


window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault()
    }
});

let all_btns = document.querySelectorAll('button');
all_btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
    })
});

let all_selectors = document.querySelectorAll('select')
all_selectors.forEach((selector) => {
    selector.addEventListener('change', (e) => {
        change_color(e.target)
        setGPA()
    })
});

let all_credits = document.querySelectorAll('.class_credits')
all_credits.forEach((credit) => {
    credit.addEventListener('change', (e) => {
        setGPA()
    })
});

function change_color(target) {
    if (target.value == 'A' || target.value == 'A-') {
        target.style.backgroundColor = 'lightgreen'
    }
    else if (target.value == 'B' || target.value == 'B-' || target.value == 'B+') {
        target.style.backgroundColor = 'yellow'
    }
    else if (target.value == 'C' || target.value == 'C-' || target.value == 'C+') {
        target.style.backgroundColor = 'orange'
    }
    else if (target.value == 'D' || target.value == 'D-' || target.value == 'D+') {
        target.style.backgroundColor = 'red'
    }
    else if (target.value == 'F') {
        target.style.backgroundColor = 'grey'
    }
    else {
        target.style.backgroundColor = 'white'
    }
};

let all_trash = document.querySelectorAll('button.trash')
all_trash.forEach((trash) => {
    trash.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.style.animation = 'scale_down 0.5s ease forwards'
        e.target.parentElement.parentElement.addEventListener('animationend', (e) => {
            e.target.remove();
            setGPA();
        })
    })
});

function convertor(grade) {
    switch(grade) {
        case "A":
            return 4.0;
        case "A-":
            return 3.7;
        case "B+":
            return 3.4;
        case "B":
            return 3.0;
        case "B-":
            return 2.7;
        case "C+":
            return 2.4;
        case "C":
            return 2.0;
        case "C-":
            return 1.7;
        case "D+":
            return 1.4;
        case "D":
            return 1.0;
        case "D-":
            return 0.7;
        case "F":
            return 0.0;
    }
};

function setGPA() {
    let form_len = document.querySelectorAll('form').length;
    let credits = document.querySelectorAll('.class_credits');
    let selects = document.querySelectorAll('select');
    let sum = 0;
    let credits_sum = 0;
    for (i=0; i<form_len; i++) {
        if (!isNaN(convertor(selects[i].value)*credits[i].valueAsNumber)) {
            sum += convertor(selects[i].value)*credits[i].valueAsNumber;
            credits_sum += credits[i].valueAsNumber;
        }
    }
    let result = (sum/credits_sum).toFixed(2);
    if (isNaN(result)) {
        result = '0.00'
    };
    document.getElementById('result_GPA').innerHTML = result;
};

let bnt_new = document.querySelector('.btn_plus');
bnt_new.addEventListener('click', () => {
    let new_form = document.createElement('form');
    let new_inp1 = document.createElement('input');
    new_inp1.classList.add('class_category')
    new_inp1.setAttribute('type', 'text');
    new_inp1.setAttribute('placeholder', 'Class Category');
    new_inp1.setAttribute('list', 'class_list');

    let new_inp2 = document.createElement('input');
    new_inp2.classList.add('class_number')
    new_inp2.setAttribute('type', 'text');
    new_inp2.setAttribute('placeholder', 'Class Number');

    let new_inp3 = document.createElement('input');
    new_inp3.classList.add('class_credits')
    new_inp3.setAttribute('type', 'number');
    new_inp3.setAttribute('placeholder', 'Credits');
    new_inp3.setAttribute('min', '0');
    new_inp3.setAttribute('max', '6');
    new_inp3.addEventListener('change', () => {
        setGPA();
    });

    let new_sel = document.createElement('select');
    new_sel.classList.add('class_grade');
    new_sel.setAttribute('name', 'class_grade');
    var opt1 = document.createElement("option");
    opt1.setAttribute("value", "");
    let textNode1 = document.createTextNode("");
    opt1.appendChild(textNode1);
    var opt2 = document.createElement("option");
    opt2.setAttribute("value", "A");
    let textNode2 = document.createTextNode("A");
    opt2.appendChild(textNode2);
    var opt3 = document.createElement("option");
    opt3.setAttribute("value", "A-");
    let textNode3 = document.createTextNode("A-");
    opt3.appendChild(textNode3);
    var opt4 = document.createElement("option");
    opt4.setAttribute("value", "B+");
    let textNode4 = document.createTextNode("B+");
    opt4.appendChild(textNode4);
    var opt5 = document.createElement("option");
    opt5.setAttribute("value", "B");
    let textNode5 = document.createTextNode("B");
    opt5.appendChild(textNode5);
    var opt6 = document.createElement("option");
    opt6.setAttribute("value", "B-");
    let textNode6 = document.createTextNode("B-");
    opt6.appendChild(textNode6);
    var opt7 = document.createElement("option");
    opt7.setAttribute("value", "C+");
    let textNode7 = document.createTextNode("C+");
    opt7.appendChild(textNode7);
    var opt8 = document.createElement("option");
    opt8.setAttribute("value", "C");
    let textNode8 = document.createTextNode("C");
    opt8.appendChild(textNode8);
    var opt9 = document.createElement("option");
    opt9.setAttribute("value", "C-");
    let textNode9 = document.createTextNode("C-");
    opt9.appendChild(textNode9);
    var opt10 = document.createElement("option");
    opt10.setAttribute("value", "D+");
    let textNode10 = document.createTextNode("D+");
    opt10.appendChild(textNode10);
    var opt11 = document.createElement("option");
    opt11.setAttribute("value", "D");
    let textNode11 = document.createTextNode("D");
    opt11.appendChild(textNode11);
    var opt12 = document.createElement("option");
    opt12.setAttribute("value", "D-");
    let textNode12 = document.createTextNode("D-");
    opt12.appendChild(textNode12);
    var opt13 = document.createElement("option");
    opt13.setAttribute("value", "F");
    let textNode13 = document.createTextNode("F");
    opt13.appendChild(textNode13);
    new_sel.appendChild(opt1);
    new_sel.appendChild(opt2);
    new_sel.appendChild(opt3);
    new_sel.appendChild(opt4);
    new_sel.appendChild(opt5);
    new_sel.appendChild(opt6);
    new_sel.appendChild(opt7);
    new_sel.appendChild(opt8);
    new_sel.appendChild(opt9);
    new_sel.appendChild(opt10);
    new_sel.appendChild(opt11);
    new_sel.appendChild(opt12);
    new_sel.appendChild(opt13);
    new_sel.addEventListener('change', (e) => {
        change_color(e.target);
        setGPA();
    });

    let new_trash = document.createElement('button');
    new_trash.classList.add('btn');
    let new_i = document.createElement('i');
    new_i.classList.add('fa-solid');
    new_i.classList.add('fa-trash');
    new_trash.appendChild(new_i);
    new_trash.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.style.animation = 'scale_down 0.5s ease forwards'
        e.target.parentElement.parentElement.addEventListener('animationend', (e) => {
            e.target.remove();
            setGPA();
        })
    });
    

    new_form.appendChild(new_inp1);
    new_form.appendChild(new_inp2);
    new_form.appendChild(new_inp3);
    new_form.appendChild(new_sel);
    new_form.appendChild(new_trash);

    document.querySelector('div.all_forms').appendChild(new_form);
    new_form.style.animation = 'scale_up 0.5s ease forwards';
})

let btn_desc = document.querySelector('button.resort_Desc');
let btn_asc = document.querySelector('button.resort_Asc');
btn_desc.addEventListener('click', () => (
    grade_sort('desc')
))
btn_asc.addEventListener('click', () => (
    grade_sort('asc')
))



function grade_sort(direction) {
    let forms = document.querySelectorAll('form');
    let object_array = [];
    for (let i = 0; i < forms.length; i++) {
        let object = {
            class_category: forms[i].children[0].value,
            class_number: forms[i].children[1].value,
            class_credits: forms[i].children[2].value,
            class_grade: forms[i].children[3].value,
            class_grade_number: convertor(forms[i].children[3].value),
        };
        object_array.push(object);
        object_array = mergeSort(object_array);
        if (direction == 'desc') {
            object_array = object_array.reverse();
        };
    }
    
    let all_forms = document.querySelector('div.all_forms');
    all_forms.innerHTML = '';
    for (let i = 0; i < object_array.length; i++) {
        all_forms.innerHTML += 
        `<form>
            <input 
            type="text" class="class_category" placeholder="Class Category" list="class_list" value = ${object_array[i].class_category}
            ><input 
            type="text" class="class_number" placeholder="Class Number"  value = ${object_array[i].class_number}
            ><input 
            type="number" class="class_credits" placeholder="Credits" min="0" max="6"  value = ${object_array[i].class_credits}
            ><select 
            name="class_grade" class="class_grade">
                <option value=""></option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="C-">C-</option>
                <option value="D+">D+</option>
                <option value="D">D</option>
                <option value="D-">D-</option>
                <option value="F">F</option>
            </select
            ><button class="trash"
            class="btn"><i class="fa-solid fa-trash"></i></button>
        </form>`
    };

    forms = document.querySelectorAll('form');
    for (let i = 0; i < object_array.length; i++) {
        forms[i].children[3].value = object_array[i].class_grade;
    };

    let credits = document.querySelectorAll('input.class_credits');
    credits.forEach((credit) => {
        setGPA();
        credit.addEventListener('change', () => {
            setGPA();
        })
    })


    let selectors = document.querySelectorAll('select.class_grade');
    selectors.forEach((selector) => {
        change_color(selector);
        setGPA();
        selector.addEventListener('change', (e) => {
            change_color(e.target);
            setGPA();
        });
    });

    let all_trash = document.querySelectorAll('button.trash');
    all_trash.forEach((trash) => {
        trash.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.style.animation = 'scale_down 0.5s ease forwards'
            e.target.parentElement.parentElement.addEventListener('animationend', (e) => {
            e.target.remove();
            setGPA();
           });
        });
    });
};

function merge(a1, a2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < a1.length && j < a2.length) {
      if (a1[i].class_grade_number > a2[j].class_grade_number) {
        result.push(a2[j]);
        j++;
      } else {
        result.push(a1[i]);
        i++;
      }
    }
  
    while (i < a1.length) {
      result.push(a1[i]);
      i++;
    }
    while (j < a2.length) {
      result.push(a2[j]);
      j++;
    }
  
    return result;
  }
  
function mergeSort(arr) {
    if (arr.length == 0) {
      return;
    }
  
    if (arr.length == 1) {
      return arr;
    } else {
      let middle = Math.floor(arr.length / 2);
      let left = arr.slice(0, middle);
      let right = arr.slice(middle, arr.length);
      return merge(mergeSort(left), mergeSort(right));
    }
  }