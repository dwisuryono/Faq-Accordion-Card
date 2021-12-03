const faqItems = document.querySelectorAll('.faq-items')

for( let i = 0; i < faqItems.length; i++ ){
    faqItems[i].addEventListener('click', function() {
        const descFaqItems = document.querySelectorAll('.desc-faq-items')
        if( descFaqItems[i].style.display === 'block' ) {
            descFaqItems[i].style.display = 'none'
        } else {
            descFaqItems[i].style.display = 'block'
        }

        const imgArrow =document.querySelectorAll('.img-arrow')
        imgArrow[i].classList.toggle('rotate')

        faqItems[i].classList.toggle('bold')
    })
}