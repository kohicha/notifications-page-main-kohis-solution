const username = document.querySelectorAll('.username')

const readAll = document.querySelector('.read-all')

readAll.addEventListener('click', () => {
    document.querySelectorAll('.notif-box').forEach(el => {
        el.classList.remove('bg-VeryLightGrayishBlue')
    })
})

username.forEach(el => {
    el.classList.add('hover:text-Blue')
    el.classList.add('cursor-pointer')
})