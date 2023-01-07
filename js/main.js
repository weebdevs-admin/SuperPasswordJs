let InputEmail = document.querySelector('.input-email')
let InputUser = document.querySelector('.input-user')
let InputPassword = document.querySelector('.input-password')
let InputNewPassword = document.querySelector('.input-new_password')
let Title = document.querySelector('.title')

InputEmail.addEventListener('keyup',()=>{
    if(InputEmail.value.includes('@') &&  InputEmail.value.includes('.')){
        InputEmail.classList.add('emailColor')
        Title.textContent = "Email Tog'ri"
    }else{
        Title.textContent = 'Email Xato'
    }
    
})
InputUser.addEventListener('keyup',()=>{
    if( InputUser.value.toUpperCase().length >=6  ){
        InputUser.classList.add('emailColor')
        Title.textContent = "Username Tog'ri"
    }else{
        Title.textContent = 'Username Xato'
    }
    
})
InputPassword.addEventListener('keyup',()=>{
    if( InputPassword.value.toUpperCase().length >=8  ){
        InputPassword.classList.add('emailColor')
        Title.textContent = "Password Tog'ri"
    }else{
        Title.textContent = 'Password Xato'
    }
    
})
InputNewPassword.addEventListener('keyup',()=>{
    const input = InputNewPassword.value;

    if(input == input.toLowerCase()  ){
        Title.textContent = 'Katta harf  '
        
    }
    else if(input.length <=8){
        Title.textContent = 'Kamida 8ta'
    }
    else{
        InputNewPassword.classList.add('PaswordWorrning')
        
        if(input.includes('!')||input.includes('@')||input.includes('#')||input.includes('$')||input.includes('%')||input.includes('^')||input.includes('&')||input.includes('*')||input.includes('(')||input.includes(')')||input.includes('_')||input.includes('-')||input.includes('=')||input.includes('+')||input.includes('>')||input.includes('<')||input.includes('/')){
            Title.textContent = "Muoffaqiyat!"
            InputNewPassword.classList.add('success')
            Title.classList.add('successTitle')
        }
        else{
            Title.textContent = "Belgilar Bo'lishi kerak!"
        }
 
    }
    
    
})