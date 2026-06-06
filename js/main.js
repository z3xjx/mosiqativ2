let cart = JSON.parse(localStorage.getItem("mosiqatiCart")) || [];
let fontSize = Number(localStorage.getItem("mosiqatiFontSize")) || 1;

const translations = {
    ar: {
        home: "الصفحة الرئيسية",
        shop: "المتجر",
        gifts: "الهدايا",
        offers: "العروض الخاصة",
        about: "من نحن",
        contact: "تواصل معنا",

        homeTitle: "اكتشف عالم الموسيقى مع متجر موسيقاتي",
        startShopping: "ابدأ بالتسوق الآن",
        viewOffers: "شاهد العروض",

        shopTitle: "المتجر",
        shopIntro: "اختر نوع الآلة الموسيقية التي تبحث عنها وتصفح مجموعة مختارة من أفضل المنتجات المتوفرة في متجر موسيقاتي",
        pianoCategory: "البيانو",
        guitarCategory: "الجيتار",
        drumsCategory: "الطبول",
        oudCategory: "العود",
        promoLink: "شاهد الفيديو الترويجي لمنتجات متجر موسيقاتي",

        pianoPageTitle: "منتجات فئة البيانو",
        piano1: "بيانو جريتن P9",
        piano1Price: "السعر: 444 دينار",
        piano2: "بيانو كاسيو أسود",
        piano2Price: "السعر: 750 دينار",
        piano3: "بيانو كاسيو أبيض",
        piano3Price: "السعر: 750 دينار",
        pianoDescription: "مجموعة من البيانوهات المناسبة للتعلم والتدريب والعزف الاحترافي",

        guitarPageTitle: "منتجات فئة الجيتار",
        guitar1: "جيتار أكوستيك ياماها",
        guitar1Price: "السعر: 225 دينار",
        guitar2: "جيتار كورد أكوستيك",
        guitar2Price: "السعر: 125 دينار",
        guitar3: "جيتار مارتن أكوستيك",
        guitar3Price: "السعر: 85 دينار",
        guitarDescription: "مجموعة من الجيتارات المختارة بعناية لعشاق الموسيقى سواء كنت مبتدئا أو عازفا محترفا",

        drumsPageTitle: "منتجات فئة الطبول",
        drums1: "طبول تاما",
        drums1Price: "السعر: 850 دينار",
        drums2: "طبل سنير",
        drums2Price: "السعر: 85 دينار",
        drums3: "طبل سليد",
        drums3Price: "السعر: 95 دينار",
        drumsDescription: "اختر من بين مجموعة الطبول والدرمز التي تساعدك على صناعة الإيقاع المناسب لكل نوع موسيقي",

        oudPageTitle: "منتجات فئة العود",
        oud1: "عود جوهرة الفن",
        oud1Price: "السعر: 45 دينار",
        oud2: "عود سنباطي",
        oud2Price: "السعر: 65 دينار",
        oud3: "عود مصري",
        oud3Price: "السعر: 60 دينار",
        oudDescription: "يقدم متجر موسيقاتي مجموعة من الأعواد الشرقية التي تجمع بين الشكل الجميل والصوت الأصيل",

        add: "إضافة",
        cartTitle: "سلة المنتجات",
        total: "المجموع",
        remove: "حذف",
        checkout: "إرسال الطلب",
        clearCart: "تفريغ السلة",
        emptyCart: "السلة فارغة",
        currency: "دينار",

        giftsTitle: "الهدايا",
        giftsIntro: "اختر هدية موسيقية مميزة لأصدقائك وعائلتك من مجموعة موسيقاتي مثل الكوبونات والإكسسوارات الموسيقية",
        gift10: "قسيمة قيمة 10 دينار",
        gift10Price: "السعر: 10 دينار",
        gift25: "قسيمة قيمة 25 دينار",
        gift25Price: "السعر: 25 دينار",
        giftBag: "حقيبة بيانو",
        giftBagPrice: "السعر: 15 دينار",

        offersTitle: "العروض الخاصة",
        offersIntro: "استفد من التخفيضات والباقات الحصرية على أفضل الآلات الموسيقية والإكسسوارات من متجر موسيقاتي",
        offerGuitarTitle: "عرض الجيتار الكامل",
        offerGuitarDesc: "احصل على جيتار كلاسيكي مع حقيبة وأوتار إضافية بسعر مخفض مناسب للمبتدئين ومحبي العزف",
        offerGuitarOld: "السعر قبل الخصم: 160 دينار",
        offerGuitarNew: "السعر بعد الخصم: 120 دينار",
        offerGuitarDiscount: "نسبة الخصم: 25%",
        offerOudTitle: "باقة العود الشرقية",
        offerOudDesc: "باقة مميزة تحتوي على عود شرقي مع حقيبة وريشة عزف مناسبة للطلاب والمبتدئين",
        offerOudOld: "السعر قبل الخصم: 200 دينار",
        offerOudNew: "السعر بعد الخصم: 150 دينار",
        offerOudDiscount: "نسبة الخصم: 25%",
        offerPianoTitle: "عرض البيانو المنزلي",
        offerPianoDesc: "بيانو إلكتروني مع سماعات تدريب وستاند مناسب للتعلم والعزف في المنزل",
        offerPianoOld: "السعر قبل الخصم: 280 دينار",
        offerPianoNew: "السعر بعد الخصم: 220 دينار",
        offerPianoDiscount: "نسبة الخصم: 20%",

        aboutTitle: "🎵 من نحن",
        aboutMain: "موسيقاتي هو متجر أردني متخصص في بيع الآلات الموسيقية والإكسسوارات ويهدف إلى دعم الموسيقيين والمبتدئين من خلال توفير منتجات عالية الجودة وتجربة تسوق سهلة وممتعة",
        missionTitle: "رسالتنا",
        missionText: "توفير آلات موسيقية موثوقة بأسعار مناسبة لعشاق الموسيقى ومساعدة العملاء على اختيار المنتج المناسب لهم بسهولة",
        visionTitle: "رؤيتنا",
        visionText: "أن نكون الخيار الأول للموسيقيين في الأردن من خلال تقديم منتجات متنوعة وخدمة مميزة وتجربة استخدام واضحة",
        aboutFinal: "نؤمن في موسيقاتي أن الموسيقى لغة تجمع الناس ولذلك نسعى لتقديم أفضل الآلات الموسيقية والهدايا والعروض لكل من يحب العزف والتعلم والإبداع",

        contactTitle: "تواصل معنا",
        contactIntro: "يسعدنا الرد على أسئلتك ومساعدتك في اختيار الآلة الموسيقية المناسبة",
        contactNoticeDefault: "يمكنك تعبئة النموذج للشراء أو الاستفسار أو إرسال مشكلة واجهتك في الموقع",
        cartContactNotice: "هذه المنتجات موجودة في سلتك يرجى تعبئة النموذج لإرسال طلب الشراء",
        orderMessage: "أرغب بطلب المنتجات التالية: ",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك الكامل",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "رقم الهاتف",
        messageLabel: "الاستفسار أو المشكلة",
        messagePlaceholder: "اكتب اسم المنتج أو الهدية أو العرض المطلوب ثم اكتب استفسارك هنا",
        sendMessage: "إرسال الرسالة",
        socialTitle: "منصات التواصل",
        emailTitle: "البريد الإلكتروني",
        websiteTitle: "الموقع الإلكتروني",
        phoneTitle: "رقم التواصل",

        promoTitle: "الفيديو الترويجي لمنتجات متجر موسيقاتي",
        promoText: "يعرض هذا الفيديو مجموعة من المنتجات الأساسية في متجر موسيقاتي مثل الجيتارات والأعواد والطبول والبيانو الهدف من الفيديو هو إعطاء الزائر فكرة واضحة عن جودة المنتجات وتنوعها قبل تصفح أقسام المتجر",

        errorName: "يرجى إدخال الاسم الكامل",
        errorEmail: "يرجى إدخال البريد الإلكتروني",
        errorEmailFormat: "يرجى كتابة البريد الإلكتروني بشكل صحيح مثل example@email.com",
        errorPhone: "يرجى إدخال رقم الهاتف",
        errorPhoneFormat: "يرجى كتابة رقم الهاتف بالأرقام فقط ويجب أن يكون بين 7 و 15 رقم",
        errorMessage: "يرجى كتابة الاستفسار أو الرسالة",
        success: "تم إرسال رسالتك بنجاح شكرا لتواصلك مع متجر موسيقاتي سيتم الرد عليك قريبا"
    },

    en: {
        home: "Home",
        shop: "Shop",
        gifts: "Gifts",
        offers: "Special Offers",
        about: "About Us",
        contact: "Contact Us",

        homeTitle: "Discover the World of Music with MOSIQATI",
        startShopping: "Start Shopping Now",
        viewOffers: "View Offers",

        shopTitle: "Shop",
        shopIntro: "Choose the musical instrument you are looking for and browse selected products from MOSIQATI",
        pianoCategory: "Piano",
        guitarCategory: "Guitar",
        drumsCategory: "Drums",
        oudCategory: "Oud",
        promoLink: "Watch the promotional video for MOSIQATI products",

        pianoPageTitle: "Piano Products",
        piano1: "Greten P9 Piano",
        piano1Price: "Price: 444 JOD",
        piano2: "Black Casio Piano",
        piano2Price: "Price: 750 JOD",
        piano3: "White Casio Piano",
        piano3Price: "Price: 750 JOD",
        pianoDescription: "A collection of pianos suitable for learning training and professional playing",

        guitarPageTitle: "Guitar Products",
        guitar1: "Yamaha Acoustic Guitar",
        guitar1Price: "Price: 225 JOD",
        guitar2: "Cord Acoustic Guitar",
        guitar2Price: "Price: 125 JOD",
        guitar3: "Martin Acoustic Guitar",
        guitar3Price: "Price: 85 JOD",
        guitarDescription: "A carefully selected collection of guitars for music lovers beginners and professional players",

        drumsPageTitle: "Drums Products",
        drums1: "Tama Drums",
        drums1Price: "Price: 850 JOD",
        drums2: "Snare Drum",
        drums2Price: "Price: 85 JOD",
        drums3: "Slide Drum",
        drums3Price: "Price: 95 JOD",
        drumsDescription: "Choose from a collection of drums that help you create the right rhythm for every music style",

        oudPageTitle: "Oud Products",
        oud1: "Jawharat Al Fan Oud",
        oud1Price: "Price: 45 JOD",
        oud2: "Sunbati Oud",
        oud2Price: "Price: 65 JOD",
        oud3: "Egyptian Oud",
        oud3Price: "Price: 60 JOD",
        oudDescription: "MOSIQATI offers a collection of eastern ouds that combine beautiful design with authentic sound",

        add: "Add",
        cartTitle: "Shopping Cart",
        total: "Total",
        remove: "Remove",
        checkout: "Send Order",
        clearCart: "Clear Cart",
        emptyCart: "Your cart is empty",
        currency: "JOD",

        giftsTitle: "Gifts",
        giftsIntro: "Choose a special musical gift for your friends and family from MOSIQATI such as vouchers and musical accessories",
        gift10: "10 JOD Gift Voucher",
        gift10Price: "Price: 10 JOD",
        gift25: "25 JOD Gift Voucher",
        gift25Price: "Price: 25 JOD",
        giftBag: "Piano Bag",
        giftBagPrice: "Price: 15 JOD",

        offersTitle: "Special Offers",
        offersIntro: "Enjoy exclusive discounts and bundles on the best musical instruments and accessories from MOSIQATI",
        offerGuitarTitle: "Complete Guitar Offer",
        offerGuitarDesc: "Get a classical guitar with a bag and extra strings at a discounted price suitable for beginners and music lovers",
        offerGuitarOld: "Old price: 160 JOD",
        offerGuitarNew: "New price: 120 JOD",
        offerGuitarDiscount: "Discount: 25%",
        offerOudTitle: "Eastern Oud Bundle",
        offerOudDesc: "A special bundle including an eastern oud with a bag and pick suitable for students and beginners",
        offerOudOld: "Old price: 200 JOD",
        offerOudNew: "New price: 150 JOD",
        offerOudDiscount: "Discount: 25%",
        offerPianoTitle: "Home Piano Offer",
        offerPianoDesc: "Electronic piano with training headphones and stand suitable for learning and home practice",
        offerPianoOld: "Old price: 280 JOD",
        offerPianoNew: "New price: 220 JOD",
        offerPianoDiscount: "Discount: 20%",

        aboutTitle: "🎵 About Us",
        aboutMain: "MOSIQATI is a Jordanian store specialized in selling musical instruments and accessories and aims to support musicians and beginners with high quality products and an easy shopping experience",
        missionTitle: "Our Mission",
        missionText: "To provide reliable musical instruments at suitable prices and help customers choose the right product easily",
        visionTitle: "Our Vision",
        visionText: "To become the first choice for musicians in Jordan by offering various products excellent service and a clear user experience",
        aboutFinal: "At MOSIQATI we believe music is a language that connects people so we provide instruments gifts and offers for everyone who loves playing learning and creativity",

        contactTitle: "Contact Us",
        contactIntro: "We are happy to answer your questions and help you choose the right musical instrument",
        contactNoticeDefault: "You can fill the form to buy ask a question or report a problem",
        cartContactNotice: "These products are in your cart. Please fill the form to send your order",
        orderMessage: "I would like to order the following products: ",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email",
        phoneLabel: "Phone Number",
        messageLabel: "Question or Problem",
        messagePlaceholder: "Write the product gift or offer name then write your message",
        sendMessage: "Send Message",
        socialTitle: "Contact Platforms",
        emailTitle: "Email",
        websiteTitle: "Website",
        phoneTitle: "Phone Number",

        promoTitle: "Promotional Video for MOSIQATI Products",
        promoText: "This video shows the main products in MOSIQATI such as guitars ouds drums and piano to give visitors a clear idea about product quality and variety before browsing the store",

        errorName: "Please enter your full name",
        errorEmail: "Please enter your email",
        errorEmailFormat: "Please enter a correct email such as example@email.com",
        errorPhone: "Please enter your phone number",
        errorPhoneFormat: "Please enter numbers only between 7 and 15 digits",
        errorMessage: "Please write your question or message",
        success: "Your message was sent successfully. Thank you for contacting MOSIQATI"
    },

    fr: {
        home: "Accueil",
        shop: "Boutique",
        gifts: "Cadeaux",
        offers: "Offres",
        about: "À propos",
        contact: "Contact",

        homeTitle: "Découvrez le monde de la musique avec MOSIQATI",
        startShopping: "Commencer les achats",
        viewOffers: "Voir les offres",

        shopTitle: "Boutique",
        shopIntro: "Choisissez l’instrument musical que vous cherchez et découvrez les produits de MOSIQATI",
        pianoCategory: "Piano",
        guitarCategory: "Guitare",
        drumsCategory: "Batterie",
        oudCategory: "Oud",
        promoLink: "Voir la vidéo promotionnelle des produits MOSIQATI",

        pianoPageTitle: "Produits Piano",
        piano1: "Piano Greten P9",
        piano1Price: "Prix: 444 JOD",
        piano2: "Piano Casio Noir",
        piano2Price: "Prix: 750 JOD",
        piano3: "Piano Casio Blanc",
        piano3Price: "Prix: 750 JOD",
        pianoDescription: "Une collection de pianos adaptés à l’apprentissage à l’entraînement et au jeu professionnel",

        guitarPageTitle: "Produits Guitare",
        guitar1: "Guitare Acoustique Yamaha",
        guitar1Price: "Prix: 225 JOD",
        guitar2: "Guitare Acoustique Cord",
        guitar2Price: "Prix: 125 JOD",
        guitar3: "Guitare Acoustique Martin",
        guitar3Price: "Prix: 85 JOD",
        guitarDescription: "Une collection de guitares choisies avec soin pour les débutants et les musiciens professionnels",

        drumsPageTitle: "Produits Batterie",
        drums1: "Batterie Tama",
        drums1Price: "Prix: 850 JOD",
        drums2: "Caisse claire",
        drums2Price: "Prix: 85 JOD",
        drums3: "Tambour Slide",
        drums3Price: "Prix: 95 JOD",
        drumsDescription: "Choisissez parmi une collection de batteries pour créer le bon rythme pour chaque style musical",

        oudPageTitle: "Produits Oud",
        oud1: "Oud Jawharat Al Fan",
        oud1Price: "Prix: 45 JOD",
        oud2: "Oud Sunbati",
        oud2Price: "Prix: 65 JOD",
        oud3: "Oud Égyptien",
        oud3Price: "Prix: 60 JOD",
        oudDescription: "MOSIQATI propose une collection de ouds orientaux avec un beau design et un son authentique",

        add: "Ajouter",
        cartTitle: "Panier",
        total: "Total",
        remove: "Supprimer",
        checkout: "Envoyer la commande",
        clearCart: "Vider le panier",
        emptyCart: "Le panier est vide",
        currency: "JOD",

        giftsTitle: "Cadeaux",
        giftsIntro: "Choisissez un cadeau musical spécial pour vos amis et votre famille chez MOSIQATI",
        gift10: "Bon cadeau 10 JOD",
        gift10Price: "Prix: 10 JOD",
        gift25: "Bon cadeau 25 JOD",
        gift25Price: "Prix: 25 JOD",
        giftBag: "Sac de piano",
        giftBagPrice: "Prix: 15 JOD",

        offersTitle: "Offres spéciales",
        offersIntro: "Profitez de réductions et de packs exclusifs sur les instruments et accessoires musicaux",
        offerGuitarTitle: "Offre guitare complète",
        offerGuitarDesc: "Guitare classique avec sac et cordes supplémentaires à prix réduit",
        offerGuitarOld: "Ancien prix: 160 JOD",
        offerGuitarNew: "Nouveau prix: 120 JOD",
        offerGuitarDiscount: "Réduction: 25%",
        offerOudTitle: "Pack oud oriental",
        offerOudDesc: "Pack spécial avec oud oriental sac et médiator pour étudiants et débutants",
        offerOudOld: "Ancien prix: 200 JOD",
        offerOudNew: "Nouveau prix: 150 JOD",
        offerOudDiscount: "Réduction: 25%",
        offerPianoTitle: "Offre piano maison",
        offerPianoDesc: "Piano électronique avec casque et support adapté à l’apprentissage",
        offerPianoOld: "Ancien prix: 280 JOD",
        offerPianoNew: "Nouveau prix: 220 JOD",
        offerPianoDiscount: "Réduction: 20%",

        aboutTitle: "🎵 À propos",
        aboutMain: "MOSIQATI est un magasin jordanien spécialisé dans les instruments de musique et les accessoires",
        missionTitle: "Notre mission",
        missionText: "Fournir des instruments fiables à des prix adaptés et aider les clients à choisir facilement",
        visionTitle: "Notre vision",
        visionText: "Être le premier choix des musiciens en Jordanie grâce à des produits variés et un service clair",
        aboutFinal: "Chez MOSIQATI nous croyons que la musique relie les personnes et soutient la créativité",

        contactTitle: "Contact",
        contactIntro: "Nous sommes heureux de répondre à vos questions et de vous aider à choisir l’instrument adapté",
        contactNoticeDefault: "Vous pouvez remplir le formulaire pour acheter poser une question ou signaler un problème",
        cartContactNotice: "Ces produits sont dans votre panier. Veuillez remplir le formulaire pour envoyer votre commande",
        orderMessage: "Je souhaite commander les produits suivants: ",
        nameLabel: "Nom complet",
        namePlaceholder: "Entrez votre nom complet",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        messageLabel: "Question ou problème",
        messagePlaceholder: "Écrivez le nom du produit cadeau ou offre puis votre message",
        sendMessage: "Envoyer",
        socialTitle: "Plateformes de contact",
        emailTitle: "Email",
        websiteTitle: "Site web",
        phoneTitle: "Téléphone",

        promoTitle: "Vidéo promotionnelle des produits MOSIQATI",
        promoText: "Cette vidéo présente les principaux produits de MOSIQATI comme les guitares les ouds les tambours et le piano",

        errorName: "Veuillez entrer votre nom complet",
        errorEmail: "Veuillez entrer votre email",
        errorEmailFormat: "Veuillez entrer un email correct comme example@email.com",
        errorPhone: "Veuillez entrer votre numéro de téléphone",
        errorPhoneFormat: "Veuillez entrer uniquement des chiffres entre 7 et 15 chiffres",
        errorMessage: "Veuillez écrire votre question ou message",
        success: "Votre message a été envoyé avec succès"
    },

    es: {
        home: "Inicio",
        shop: "Tienda",
        gifts: "Regalos",
        offers: "Ofertas",
        about: "Nosotros",
        contact: "Contacto",

        homeTitle: "Descubre el mundo de la música con MOSIQATI",
        startShopping: "Empezar a comprar",
        viewOffers: "Ver ofertas",

        shopTitle: "Tienda",
        shopIntro: "Elige el instrumento musical que buscas y explora productos seleccionados de MOSIQATI",
        pianoCategory: "Piano",
        guitarCategory: "Guitarra",
        drumsCategory: "Batería",
        oudCategory: "Oud",
        promoLink: "Ver el video promocional de productos MOSIQATI",

        pianoPageTitle: "Productos de Piano",
        piano1: "Piano Greten P9",
        piano1Price: "Precio: 444 JOD",
        piano2: "Piano Casio Negro",
        piano2Price: "Precio: 750 JOD",
        piano3: "Piano Casio Blanco",
        piano3Price: "Precio: 750 JOD",
        pianoDescription: "Una colección de pianos adecuados para aprender practicar y tocar profesionalmente",

        guitarPageTitle: "Productos de Guitarra",
        guitar1: "Guitarra Acústica Yamaha",
        guitar1Price: "Precio: 225 JOD",
        guitar2: "Guitarra Acústica Cord",
        guitar2Price: "Precio: 125 JOD",
        guitar3: "Guitarra Acústica Martin",
        guitar3Price: "Precio: 85 JOD",
        guitarDescription: "Una colección de guitarras elegidas cuidadosamente para principiantes y músicos profesionales",

        drumsPageTitle: "Productos de Batería",
        drums1: "Batería Tama",
        drums1Price: "Precio: 850 JOD",
        drums2: "Caja Snare",
        drums2Price: "Precio: 85 JOD",
        drums3: "Tambor Slide",
        drums3Price: "Precio: 95 JOD",
        drumsDescription: "Elige entre una colección de baterías para crear el ritmo adecuado para cada estilo musical",

        oudPageTitle: "Productos de Oud",
        oud1: "Oud Jawharat Al Fan",
        oud1Price: "Precio: 45 JOD",
        oud2: "Oud Sunbati",
        oud2Price: "Precio: 65 JOD",
        oud3: "Oud Egipcio",
        oud3Price: "Precio: 60 JOD",
        oudDescription: "MOSIQATI ofrece una colección de ouds orientales con diseño hermoso y sonido auténtico",

        add: "Agregar",
        cartTitle: "Carrito",
        total: "Total",
        remove: "Eliminar",
        checkout: "Enviar pedido",
        clearCart: "Vaciar carrito",
        emptyCart: "El carrito está vacío",
        currency: "JOD",

        giftsTitle: "Regalos",
        giftsIntro: "Elige un regalo musical especial para tus amigos y familia de MOSIQATI",
        gift10: "Vale regalo 10 JOD",
        gift10Price: "Precio: 10 JOD",
        gift25: "Vale regalo 25 JOD",
        gift25Price: "Precio: 25 JOD",
        giftBag: "Bolsa de piano",
        giftBagPrice: "Precio: 15 JOD",

        offersTitle: "Ofertas especiales",
        offersIntro: "Disfruta descuentos y paquetes exclusivos en instrumentos y accesorios musicales",
        offerGuitarTitle: "Oferta guitarra completa",
        offerGuitarDesc: "Guitarra clásica con bolsa y cuerdas adicionales a precio reducido",
        offerGuitarOld: "Precio anterior: 160 JOD",
        offerGuitarNew: "Nuevo precio: 120 JOD",
        offerGuitarDiscount: "Descuento: 25%",
        offerOudTitle: "Paquete de oud oriental",
        offerOudDesc: "Paquete con oud oriental bolsa y púa para estudiantes y principiantes",
        offerOudOld: "Precio anterior: 200 JOD",
        offerOudNew: "Nuevo precio: 150 JOD",
        offerOudDiscount: "Descuento: 25%",
        offerPianoTitle: "Oferta piano para casa",
        offerPianoDesc: "Piano electrónico con audífonos y soporte para aprender en casa",
        offerPianoOld: "Precio anterior: 280 JOD",
        offerPianoNew: "Nuevo precio: 220 JOD",
        offerPianoDiscount: "Descuento: 20%",

        aboutTitle: "🎵 Nosotros",
        aboutMain: "MOSIQATI es una tienda jordana especializada en instrumentos musicales y accesorios",
        missionTitle: "Nuestra misión",
        missionText: "Ofrecer instrumentos confiables a precios adecuados y ayudar al cliente a elegir fácilmente",
        visionTitle: "Nuestra visión",
        visionText: "Ser la primera opción para músicos en Jordania con productos variados y buen servicio",
        aboutFinal: "En MOSIQATI creemos que la música conecta a las personas y apoya la creatividad",

        contactTitle: "Contacto",
        contactIntro: "Estamos felices de responder tus preguntas y ayudarte a elegir el instrumento adecuado",
        contactNoticeDefault: "Puedes llenar el formulario para comprar consultar o reportar un problema",
        cartContactNotice: "Estos productos están en tu carrito. Completa el formulario para enviar tu pedido",
        orderMessage: "Me gustaría pedir los siguientes productos: ",
        nameLabel: "Nombre completo",
        namePlaceholder: "Escribe tu nombre completo",
        emailLabel: "Correo electrónico",
        phoneLabel: "Teléfono",
        messageLabel: "Consulta o problema",
        messagePlaceholder: "Escribe el nombre del producto regalo u oferta y luego tu mensaje",
        sendMessage: "Enviar mensaje",
        socialTitle: "Plataformas de contacto",
        emailTitle: "Correo",
        websiteTitle: "Sitio web",
        phoneTitle: "Teléfono",

        promoTitle: "Video promocional de productos MOSIQATI",
        promoText: "Este video muestra productos principales de MOSIQATI como guitarras ouds tambores y piano",

        errorName: "Por favor escribe tu nombre completo",
        errorEmail: "Por favor escribe tu correo",
        errorEmailFormat: "Por favor escribe un correo correcto como example@email.com",
        errorPhone: "Por favor escribe tu número de teléfono",
        errorPhoneFormat: "Escribe solo números entre 7 y 15 dígitos",
        errorMessage: "Por favor escribe tu consulta o mensaje",
        success: "Tu mensaje fue enviado correctamente"
    }
};

function getCurrentLanguage() {
    return localStorage.getItem("mosiqatiLang") || "ar";
}

function getText(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || translations.ar[key] || key;
}

function saveCart() {
    localStorage.setItem("mosiqatiCart", JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function createCartDrawer() {
    if (document.getElementById("cartDrawer")) return;

    const overlay = document.createElement("div");
    overlay.className = "cart-overlay";
    overlay.id = "cartOverlay";

    const drawer = document.createElement("aside");
    drawer.className = "cart-drawer";
    drawer.id = "cartDrawer";

    drawer.innerHTML = `
        <div class="cart-header">
            <h2 id="cartDrawerTitle">${getText("cartTitle")}</h2>
            <button class="close-cart" id="closeCart">X</button>
        </div>
        <div class="cart-items" id="cartItems"></div>
        <div class="cart-summary">
            <p class="cart-total" id="cartTotal">${getText("total")}: 0 ${getText("currency")}</p>
            <button class="cart-checkout" id="checkoutBtn">${getText("checkout")}</button>
            <button class="clear-cart" id="clearCartBtn">${getText("clearCart")}</button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener("click", closeCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);

    document.getElementById("clearCartBtn").addEventListener("click", function () {
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    });

    document.getElementById("checkoutBtn").addEventListener("click", function () {
        if (cart.length === 0) {
            alert(getText("emptyCart"));
            return;
        }

        const summary = cart.map(item => `${item.name} - ${item.price} ${getText("currency")}`).join(" | ");
        localStorage.setItem("mosiqatiOrderSummary", summary);
        window.location.href = getContactPath() + "?type=cart";
    });
}

function getContactPath() {
    if (window.location.pathname.includes("/html/")) {
        return "contact.html";
    }
    return "html/contact.html";
}

function openCart() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");

    if (overlay && drawer) {
        overlay.classList.add("active");
        drawer.classList.add("active");
        renderCart();
    }
}

function closeCart() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");

    if (overlay && drawer) {
        overlay.classList.remove("active");
        drawer.classList.remove("active");
    }
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${getText("emptyCart")}</p>`;
        cartTotal.textContent = `${getText("total")}: 0 ${getText("currency")}`;
        return;
    }

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(function (item, index) {
        total += Number(item.price);

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.price} ${getText("currency")}</p>
            </div>
            <button class="remove-item" data-index="${index}">${getText("remove")}</button>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.textContent = `${getText("total")}: ${total} ${getText("currency")}`;

    document.querySelectorAll(".remove-item").forEach(function (button) {
        button.addEventListener("click", function () {
            const index = Number(this.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
            updateCartCount();
        });
    });
}

function setupAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach(function (button) {
        button.addEventListener("click", function () {
            const card = this.closest(".product-card") || this.closest(".gift-card") || this.closest(".offer-card");
            const title = card ? card.querySelector("h2").textContent.trim() : this.dataset.name;
            const image = card ? card.querySelector("img") : null;

            const item = {
                name: title,
                price: this.dataset.price,
                type: this.dataset.type,
                image: image ? image.src : this.dataset.image
            };

            cart.push(item);
            saveCart();
            updateCartCount();
            openCart();
        });
    });
}

function setupTheme() {
    const savedTheme = localStorage.getItem("mosiqatiTheme");
    const themeBtn = document.getElementById("themeToggle");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        if (themeBtn) themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("light-mode");
        if (themeBtn) themeBtn.textContent = "🌙";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("mosiqatiTheme", "light");
                themeBtn.textContent = "☀️";
            } else {
                localStorage.setItem("mosiqatiTheme", "dark");
                themeBtn.textContent = "🌙";
            }
        });
    }
}

function setupFontControls() {
    document.documentElement.style.setProperty("--font-scale", fontSize);

    const increase = document.getElementById("increaseFont");
    const decrease = document.getElementById("decreaseFont");

    if (increase) {
        increase.addEventListener("click", function () {
            if (fontSize < 1.3) {
                fontSize += 0.1;
                fontSize = Number(fontSize.toFixed(1));
                localStorage.setItem("mosiqatiFontSize", fontSize);
                document.documentElement.style.setProperty("--font-scale", fontSize);
            }
        });
    }

    if (decrease) {
        decrease.addEventListener("click", function () {
            if (fontSize > 0.8) {
                fontSize -= 0.1;
                fontSize = Number(fontSize.toFixed(1));
                localStorage.setItem("mosiqatiFontSize", fontSize);
                document.documentElement.style.setProperty("--font-scale", fontSize);
            }
        });
    }
}

function setupLanguage() {
    const languageSelect = document.getElementById("languageSelect");
    const savedLang = getCurrentLanguage();

    if (languageSelect) {
        languageSelect.value = savedLang;

        languageSelect.addEventListener("change", function () {
            localStorage.setItem("mosiqatiLang", this.value);
            applyLanguage(this.value);
            renderCart();
        });
    }

    applyLanguage(savedLang);
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.ar;

    document.documentElement.lang = lang;

    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.body.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
        document.body.dir = "ltr";
    }

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.dataset.i18n;
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach(function (element) {
        const key = element.dataset.placeholder;
        if (t[key]) {
            element.placeholder = t[key];
        }
    });

    const cartDrawerTitle = document.getElementById("cartDrawerTitle");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");

    if (cartDrawerTitle) cartDrawerTitle.textContent = getText("cartTitle");
    if (checkoutBtn) checkoutBtn.textContent = getText("checkout");
    if (clearCartBtn) clearCartBtn.textContent = getText("clearCart");

    const contactNotice = document.getElementById("contactNotice");
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const orderSummary = localStorage.getItem("mosiqatiOrderSummary");

    if (contactNotice && type !== "cart") {
        contactNotice.textContent = getText("contactNoticeDefault");
    }

    if (contactNotice && type === "cart" && orderSummary) {
        contactNotice.textContent = getText("cartContactNotice");
    }
}

function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    const contactNotice = document.getElementById("contactNotice");
    const messageInput = document.getElementById("message");

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const orderSummary = localStorage.getItem("mosiqatiOrderSummary");

    if (contactNotice && type === "cart" && orderSummary) {
        contactNotice.textContent = getText("cartContactNotice");

        if (messageInput) {
            messageInput.value = getText("orderMessage") + orderSummary;
        }
    }

    if (!contactForm) return;

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
            formMessage.textContent = getText("errorName");
            formMessage.classList.add("error");
            return;
        }

        if (email === "") {
            formMessage.textContent = getText("errorEmail");
            formMessage.classList.add("error");
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = getText("errorEmailFormat");
            formMessage.classList.add("error");
            return;
        }

        if (phone === "") {
            formMessage.textContent = getText("errorPhone");
            formMessage.classList.add("error");
            return;
        }

        if (!phonePattern.test(phone)) {
            formMessage.textContent = getText("errorPhoneFormat");
            formMessage.classList.add("error");
            return;
        }

        if (message === "") {
            formMessage.textContent = getText("errorMessage");
            formMessage.classList.add("error");
            return;
        }

        formMessage.textContent = getText("success");
        formMessage.classList.add("success");

        contactForm.reset();
        localStorage.removeItem("mosiqatiOrderSummary");

        cart = [];
        saveCart();
        updateCartCount();
        renderCart();

        if (contactNotice) {
            contactNotice.textContent = getText("contactNoticeDefault");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    createCartDrawer();
    setupTheme();
    setupFontControls();
    setupLanguage();
    setupAddToCartButtons();
    setupContactForm();
    updateCartCount();

    const cartButton = document.getElementById("cartButton");
    if (cartButton) {
        cartButton.addEventListener("click", openCart);
    }
});