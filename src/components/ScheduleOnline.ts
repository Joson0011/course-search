
import { Ref, ref } from "vue";

const count = ref(0);

const value = ref('');
function setlist(){
    const set = []
    for(let i = 0;i < 5;i ++){
        set.push(i+1)
    }
    return set
}
const list:Ref<number[]> = ref(setlist());

const active = ref(0)
const value1 = ref(0);
const value2 = ref('a');
const option1 = [
   { text: 'All Days', value: 0 },
   { text: 'Monday', value: 1 },
   { text: 'Tuesday', value: 2 },
   { text: 'Wednesday', value: 3 },
   { text: 'Thuesday', value: 4 },
   { text: 'Friday', value: 5 },
   { text: 'Saturday', value: 6 },
];
const option2 = [
   { text: '默认排序', value: 'a' },
   { text: '好评排序', value: 'b' },
   { text: '销量排序', value: 'c' },
];
const arr = [
    "11","22","33"
];

export{arr, active, count,value, list, value1, value2, option1, option2}