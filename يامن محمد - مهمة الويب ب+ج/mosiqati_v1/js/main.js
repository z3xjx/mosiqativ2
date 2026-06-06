const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{7,15}$/;

        formMessage.textContent = "";
        formMessage.className = "form-message";

        if (name === "") {
            formMessage.textContent = "يرجى إدخال الاسم الكامل";
            formMessage.classList.add("error");
            return;
        }

        if (email === "") {
            formMessage.textContent = "يرجى إدخال البريد الإلكتروني";
            formMessage.classList.add("error");
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = "يرجى كتابة البريد الإلكتروني بشكل صحيح مثل example@email.com";
            formMessage.classList.add("error");
            return;
        }

        if (phone === "") {
            formMessage.textContent = "يرجى إدخال رقم الهاتف";
            formMessage.classList.add("error");
            return;
        }

        if (!phonePattern.test(phone)) {
            formMessage.textContent = "يرجى كتابة رقم الهاتف بالأرقام فقط ويجب أن يكون بين 7 و 15 رقم";
            formMessage.classList.add("error");
            return;
        }

        if (message === "") {
            formMessage.textContent = "يرجى كتابة الاستفسار أو الرسالة";
            formMessage.classList.add("error");
            return;
        }

        if (message.length < 10) {
            formMessage.textContent = "يرجى كتابة رسالة أوضح لا تقل عن 10 أحرف";
            formMessage.classList.add("error");
            return;
        }

        formMessage.textContent = "تم إرسال الرسالة بنجاح شكرا لتواصلك مع متجر موسيقاتي";
        formMessage.classList.add("success");

        contactForm.reset();
    });
}