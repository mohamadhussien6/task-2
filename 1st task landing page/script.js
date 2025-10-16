
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  const leadForm = document.getElementById('leadForm');
  leadForm.addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if(!email) return alert('فضلاً اكتب بريد إلكتروني صالح');
    alert('شكراً! تم تسجيل بريدك: ' + email);
    leadForm.reset();
  });
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if(!name) return alert('الرجاء كتابة الاسم');
    alert('تم إرسال رسالتك، سنتواصل معك قريباً — شكراً ' + name);
    contactForm.reset();
  });
});
