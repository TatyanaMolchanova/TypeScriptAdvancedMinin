class Person {
   constructor(private name: string) {} 
}

const max = new Person('Maxim')

const btn: Element = document.querySelector('.btn')! // ! - for Typescript we promise that object isn't null - or make if check on this element true
btn.addEventListener('click', () => console.log('click'))

// if(btn) {
//     btn.addEventListener('click', () => {console.log('click')})
// }

// const map = new Map()

// 30-00 https://www.youtube.com/watch?v=7NU6K4170As&t=46s