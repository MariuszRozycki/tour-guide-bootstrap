src/
├── assets/
│ ├── images/ # Obrazy
│ └── fonts/ # Czcionki
├── components/ # Komponenty React
│ ├── Navbar/
│ │ ├── Navbar.jsx
│ │ └── Navbar.module.scss # Style dla Navbar
│ ├── Carousel/
│ │ ├── Carousel.jsx
│ │ └── Carousel.module.scss # Style dla Carousel
├── styles/ # Folder główny na SCSS
│ ├── abstracts/ # Zmienne, mixiny, funkcje
│ │ ├── \_variables.scss # Zmienne SCSS
│ │ ├── \_mixins.scss # Mixiny SCSS
│ │ └── \_functions.scss # Funkcje SCSS
│ ├── base/ # Podstawowe style
│ │ ├── \_typography.scss # Style dla tekstu
│ │ ├── \_reset.scss # Resetowanie stylów
│ │ └── \_utilities.scss # Narzędzia (np. klasy pomocnicze)
│ ├── components/ # Style dla komponentów Bootstrapowych
│ │ ├── \_navbar.scss # Dostosowanie stylów Navbar
│ │ ├── \_carousel.scss # Dostosowanie stylów Carousel
│ │ └── \_buttons.scss # Dostosowanie stylów przycisków
│ ├── layouts/ # Style dla układu strony
│ │ ├── \_header.scss # Nagłówki
│ │ ├── \_footer.scss # Stopki
│ │ └── \_grid.scss # Dostosowanie siatki Bootstrap
│ ├── pages/ # Style specyficzne dla stron
│ │ ├── \_home.scss # Strona główna
│ │ └── \_about.scss # Strona "O nas"
│ ├── vendors/ # Zewnętrzne biblioteki
│ │ └── \_bootstrap.scss # Import Bootstrap SCSS
│ └── main.scss # Główny plik SCSS
├── App.jsx # Główny komponent aplikacji
└── index.js # Punkt wejściowy aplikacji
