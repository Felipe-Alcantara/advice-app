const btnGet = document.getElementById('btn-get')
const btnCopy = document.getElementById('btn-copy')
const adviceText = document.getElementById('advice-text')
const adviceId = document.getElementById('advice-id')

async function fetchAdvice(){
    try{
        // visual feedback
        btnGet.disabled = true
        btnGet.classList.add('loading')
        const dice = btnGet.querySelector('.dice')
        dice.style.transform = 'rotate(30deg) scale(.95)'

        const res = await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        const data = await res.json()

        const slip = data && data.slip ? data.slip : null
        if(!slip){ throw new Error('Sem dados') }

        const original = slip.advice
        originalCache = original

        // remove any visible original text from previous load
        const maybe = document.querySelector('.original-text')
        if(maybe) maybe.remove()

        // Attempt translation using MyMemory (free public endpoint).
        // This will translate from English to Brazilian Portuguese.
        let translated = original
        try{
            const q = encodeURIComponent(original)
            const r = await fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=en|pt-BR`)
            const tr = await r.json()
            if(tr && tr.responseData && tr.responseData.translatedText){
                translated = tr.responseData.translatedText
            }
        }catch(e){
            // fallback to original text if translation fails
            console.warn('Translation failed', e)
            translated = original
        }

        adviceText.textContent = translated
        adviceText.classList.remove('pop')
        // force reflow to re-trigger animation
        void adviceText.offsetWidth
        adviceText.classList.add('pop')

        adviceId.textContent = slip.id

        // little bounce & shine effect
        dice.animate([{transform: 'rotate(0)'},{transform:'rotate(-20deg)'},{transform:'rotate(0)'}],{duration:420,easing:'ease-out'})
        // update small hint
        const badge = document.getElementById('translation-badge')
        badge.textContent = translated !== original ? 'Traduzido ↑' : 'Original'

    }catch(err){
            // ensure translation badge shows status using previous values
            const badge = document.getElementById('translation-badge')
            badge.textContent = '—'
        console.error(err)
        adviceText.textContent = 'Ops! Erro ao carregar conselho. Tente novamente.'
    }finally{
        btnGet.disabled = false
        btnGet.classList.remove('loading')
        const dice = btnGet.querySelector('.dice')
        dice.style.transform = ''
    }
}

btnGet.addEventListener('click', fetchAdvice)

btnCopy.addEventListener('click', async ()=>{
    const text = adviceText.textContent
    try{
        await navigator.clipboard.writeText(text)
        const el = btnCopy
        el.textContent = '✅'
        setTimeout(()=> el.textContent = '📋', 1200)
    }catch(e){
        console.warn('Clipboard fail',e)
        alert('Não foi possível copiar o texto')
    }
})

// fetch one on load
window.addEventListener('DOMContentLoaded', fetchAdvice)

// toggle original text 
const btnOriginal = document.getElementById('btn-original')
let originalCache = ''
btnOriginal.addEventListener('click', () =>{
    const el = document.querySelector('.original-text')
    if(!el){
        const o = document.createElement('div')
        o.className = 'original-text'
        o.textContent = originalCache || '—'
        const parent = document.querySelector('.advice-meta')
        parent.appendChild(o)
        setTimeout(()=> o.classList.add('show'), 20)
        btnOriginal.textContent = '👁️'
    } else {
        el.classList.remove('show')
        setTimeout(()=> el.remove(), 280)
        btnOriginal.textContent = '🔁'
    }
})