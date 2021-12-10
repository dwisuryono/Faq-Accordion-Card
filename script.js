const faqItems = document.querySelectorAll('.faq-items')
const descFaqItems = document.querySelectorAll('.desc-faq-items')

for( let i = 0; i < faqItems.length; i++ ){
    faqItems[i].addEventListener('click', function(e) {
        e.target.nextElementSibling.classList.toggle('slide')
        
        const imgArrow = document.querySelectorAll('.img-arrow')
        imgArrow[i].classList.toggle('rotate')
        faqItems[i].classList.toggle('bold')
    })
}