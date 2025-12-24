import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>NUUK - Electric Shop Homepage</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=Oswald:wght@400;500;700&amp;display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#FF0033", // The vivid red from the screenshot
                        "primary-dark": "#CC0029",
                        "background-light": "#F9FAFB", // Light gray/white
                        "background-dark": "#121212", // Almost black
                        "surface-light": "#FFFFFF",
                        "surface-dark": "#1E1E1E",
                        "text-light": "#111827",
                        "text-dark": "#F3F4F6",
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Oswald', 'sans-serif'], // For headings
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                        'xl': '1rem',
                        '2xl': '1.5rem',
                    },
                },
            },
        };
    </script>
    <style>
        .hide-scroll::-webkit-scrollbar {
            display: none;
        }

        .hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
    <style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
</head>

<body
    class="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans antialiased transition-colors duration-200">
    <div class="bg-primary text-white text-xs font-bold py-2 px-4 text-center tracking-wide uppercase">
        Rated CeramicTech™ Air Fryer | Shop Now
    </div>
    <nav
        class="sticky top-0 z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div class="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
            <div class="text-2xl font-display font-bold tracking-tighter text-primary">NUUK</div>
            <div class="flex items-center space-x-4">
                <button class="text-gray-600 dark:text-gray-300 hover:text-primary">
                    <span class="material-icons-round">search</span>
                </button>
                <button class="text-gray-600 dark:text-gray-300 hover:text-primary relative">
                    <span class="material-icons-round">shopping_bag</span>
                    <span
                        class="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">2</span>
                </button>
                <button class="text-gray-600 dark:text-gray-300 hover:text-primary">
                    <span class="material-icons-round">menu</span>
                </button>
            </div>
        </div>
    </nav>
    <main class="max-w-md mx-auto pb-24 overflow-hidden">
        <section class="relative w-full h-80 bg-gray-100 dark:bg-gray-800">
            <img alt="Modern kitchen appliance lifestyle" class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA80BpLurb7UK1CAGu6AsFYzUxxwMtHYUfpggYoa1wphIjnHTZksWqbsOZaeJKWwifR7hQNyEWBUkX0ThRepKbPv62gKJ4gCDLkJx8x3SgSfAxuSxY3-lyEO7BFkEl8r1QMFQ5RKaGPmODh1mNajqyjP0omOphiH2Moh-5qLwndPtFsSQxtSFgCv4D7CgJv2ZUxnmef-vSxC1w9pjc9FBPp6CA5hAXPOiNkT2VerTgdAjqhoxzq-o23g-9OzADQqtiY25E_z1SOags" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div class="p-6 w-full">
                    <h1 class="text-3xl font-display font-bold text-white mb-2 leading-none">Trending on
                        socials<br />right now</h1>
                    <div class="flex justify-between items-center mt-4">
                        <div class="flex space-x-2">
                            <span class="w-2 h-2 rounded-full bg-white"></span>
                            <span class="w-2 h-2 rounded-full bg-white/50"></span>
                            <span class="w-2 h-2 rounded-full bg-white/50"></span>
                        </div>
                        <button class="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                            <span class="material-icons-round">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-8 px-4">
            <h2 class="text-2xl font-display font-bold mb-6">Bestsellers this season</h2>
            <div class="flex overflow-x-auto space-x-4 hide-scroll pb-4 -mx-4 px-4 snap-x">
                <div
                    class="flex-none w-64 snap-center bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden group">
                    <div
                        class="relative bg-gray-50 dark:bg-gray-800/50 p-4 aspect-square flex items-center justify-center">
                        <div class="absolute top-2 left-2 flex flex-col space-y-1">
                            <span
                                class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">New
                                Launch</span>
                            <span
                                class="bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">Trending</span>
                        </div>
                        <img alt="Nuuk Hot Blox Heater"
                            class="w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClaLPAjRHRETe8C7TRqxiSJLKwiqRlRO4oQqzQqjWBWnKinq5yDkAJse1DL6tu3enz04vj05ORvhMVw60Ss0zm69v9E05JFjDU0he_704BGKrk-6k58iVV8dWXlkZmJgsmE5rjsPIDsAgJN_sR8gHlXUJNxUJYxP-atBPP-nb4XwLqebTdtI8MEbE_F55nIbJEAZWyJUGtMHPByT8d1SODrSgsl1l_itE4JhJSbeLwHguyo0QcReErhzzhgKBvfMHmmFgud4MlT1s" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-1 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                                4.6 <span class="material-icons-round text-[10px] ml-0.5">star</span>
                            </span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">(143)</span>
                        </div>
                        <h3 class="font-display font-bold text-lg mb-1">HOT BLOX</h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">Smart Oil Filled Radiator
                            Heater with RapidHeat™ and Digital Touch Display</p>
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-4 h-4 rounded-full bg-black border border-gray-300 cursor-pointer"></div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs text-gray-400 line-through">Rs. 19,999</p>
                                <p class="text-sm font-bold">Rs. 13,999</p>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-4 py-2 rounded-lg">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
                <div
                    class="flex-none w-64 snap-center bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden group">
                    <div
                        class="relative bg-gray-50 dark:bg-gray-800/50 p-4 aspect-square flex items-center justify-center">
                        <div class="absolute top-2 right-2">
                            <button class="text-gray-400 hover:text-primary">
                                <span class="material-icons-round">favorite_border</span>
                            </button>
                        </div>
                        <img alt="Nuuk Hot Bar" class="w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD_3PGUbb2wFCdlIEZwTiEiTK_Tl01o49fRHHQ9jIpSf-OpT6gGNLlKqUL2QkKAFw4_1GOBsRMl8PYP2sBLdpxs38qzcx6JlyLecXhNUfMSGaUjS6drOe9skzwPmS_kHEw3GB1uyzCG5EXFS11dSOCLkPr-cAdgjbxLABRCKY8y4Yx1_oWULOqBfMSdLP6qwCdmw93ewe23tqRbhCD7MN4zPxcczyQKKig-On1Jk1TALYMbAaomSoOvAH-Ql5O741U5VdEs8c_aI0" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-1 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                                5.0 <span class="material-icons-round text-[10px] ml-0.5">star</span>
                            </span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">(89)</span>
                        </div>
                        <h3 class="font-display font-bold text-lg mb-1">HOT BAR</h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">PTC Room Heater with
                            Feather Touch Control</p>
                        <div class="flex items-center space-x-2 mb-4">
                            <div
                                class="w-4 h-4 rounded-full bg-primary cursor-pointer ring-1 ring-offset-1 ring-gray-300 dark:ring-gray-600">
                            </div>
                            <div class="w-4 h-4 rounded-full bg-gray-500 cursor-pointer"></div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-xs text-gray-400 line-through">Rs. 8,999</p>
                                <p class="text-sm font-bold">Rs. 6,499</p>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-4 py-2 rounded-lg">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 mb-8">
            <div
                class="relative w-full rounded-2xl overflow-hidden bg-primary shadow-lg aspect-[4/5] sm:aspect-[16/10]">
                <div class="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90 z-10"></div>
                <div class="relative z-20 h-full flex flex-col items-center pt-8 text-center">
                    <h2 class="text-3xl font-display font-bold text-white leading-tight">NUUK x Karan Johar</h2>
                    <p class="text-white text-sm mt-1 opacity-90">Everyday appliances get<br />their cinematic edge</p>
                    <button
                        class="mt-4 bg-black text-white text-xs font-bold px-6 py-2.5 rounded shadow-lg uppercase tracking-wider">
                        Discover More
                    </button>
                    <div class="mt-auto w-full flex justify-center">
                        <img alt="Celebrity Collaboration" class="h-64 object-cover object-top mask-image-bottom-fade"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD-1a_wQd8_yQTfX8Hhgz-oIfrrBD9ilt5Ggdsmu_DGEDDxbGbgsO9kLdDlntGMUtkwx3IOLs_QUN13H-Sjys5RFoUKLA0cv6vNR-P1Cr3L_xCcIfBKU_YVzQPZ_DW6Y-BfVQQzn0AA2rLo9O0utnbft5f67rNQk_RtfF7Mm7AiuWBscfa7DctHs6mtcbosvapybvvIQS5Ej5h8LkRCxOyZkWT7LQcDalFjoAC4s5Yl4865q-uQPSje1Ei3mdlHcNlKDTdqOBY5NY" />
                    </div>
                </div>
            </div>
        </section>
        <section
            class="py-6 px-4 bg-white dark:bg-surface-dark rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
            <h2 class="text-2xl font-display font-bold mb-6 px-2">Shop by Function and Category</h2>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative overflow-hidden h-40 group">
                    <div class="absolute top-4 left-4 z-10">
                        <h3 class="font-display font-bold text-lg leading-none">Heaters</h3>
                        <p class="text-xs text-gray-500 mt-1">2 Products</p>
                    </div>
                    <img alt="Heaters"
                        class="absolute bottom-0 right-0 w-24 h-32 object-contain translate-x-2 translate-y-2 group-hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7OHO36cLccrE7xh-sy8BLgR9V0xk9SvxAlTaBaxa2kAlB_ECpsrFa7XHTv7x_11TxPNNgLExrCPvF-c0D_qlGf-l8sgsbDa4Jr-CLmH0HBn2CEKi4iwrM2JxpkaMGPKrkXAGBxXbthS8VSgM9PJuFGBBssfqqniu4m1GSfDUjvwgX8gvbwVx74cxKDDEUpL5PeqQu_1NGSZFQ2b2yFVhlfMSCS6yrGSjl8p2IfoSLlE4-kL_dgTXWKQ5ay6OC6PxuEP7EuhH6Nw" />
                </div>
                <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative overflow-hidden h-40 group">
                    <div class="absolute top-4 left-4 z-10">
                        <h3 class="font-display font-bold text-lg leading-none">Kitchen<br />Essentials</h3>
                        <p class="text-xs text-gray-500 mt-1">4 Products</p>
                    </div>
                    <img alt="Kitchen"
                        class="absolute bottom-0 right-0 w-28 h-28 object-contain translate-x-2 translate-y-2 group-hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCr2lTZ-SVs6irSlHGaBpPuSV31y_25fNjRJEPaCOiMp1I65yOpS5bKsDw-jMGP1pyUKi3ZNlIvWnaUiepxZRpfAlaXwwfMrgQQieeuvHvD-tWflPAqvG1RkHgBYwpHT0ZJkW3dRaMz4mCxAI_aH4fra8KzRDp6dGdhbFQSrbcIQeXaAziCCPuiNjRg4-3udpcXpakm5yE4nc8TGuJyh4T-spzf2zFNpKOtdagCzVQ5WRbeZ6CPR0MzVYgXwYCFKPlTEpRUTo_V1k" />
                </div>
                <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative overflow-hidden h-40 group">
                    <div class="absolute top-4 left-4 z-10">
                        <h3 class="font-display font-bold text-lg leading-none">Vacuum<br />Cleaners</h3>
                        <p class="text-xs text-gray-500 mt-1">14 Products</p>
                    </div>
                    <img alt="Vacuums"
                        class="absolute bottom-0 right-0 w-28 h-28 object-contain translate-x-2 translate-y-2 group-hover:scale-105 transition-transform duration-300 -rotate-12"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgge-wF6WK_sJ9w_9y3FFDYqjaaQWi02sFSmZt8vlj6apdPpSEOSN8g4epgE27x8wY91r7qbIfJq5mqmydopHS1vKwGqH8fTazdBXGlOhKyF_IgqRell0upQh9CCCJBgka_CjPvpQzMMFxyQ1Mcl7UI2t3WzTQWTGRzvGFFslX6Jejy_ysV_bloDlixrPrQnR1yPMLIhC05FKdzRNyo3zebVDpAm15tvQ3bxOuZR4hk1JrmiI7vEKr-5QzSoSa8FDVZ98XDQehvZk" />
                </div>
                <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative overflow-hidden h-40 group">
                    <div class="absolute top-4 left-4 z-10">
                        <h3 class="font-display font-bold text-lg leading-none">Garment<br />Care</h3>
                        <p class="text-xs text-gray-500 mt-1">2 Products</p>
                    </div>
                    <img alt="Garment Care"
                        class="absolute bottom-0 right-0 w-24 h-32 object-contain translate-x-2 translate-y-2 group-hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv-wGKgexGSObDreS27qIi17XDuQ3756Dhqbjd7J0GsXKfaiP2Y55qO3U6E3HxQskZkGe0kKNzG0vdCFSlVvApYRXdBjw1jvLy0_ja-CN2LLaC3nPRu9YOTPeAaLzviM47ZW8CWCH3k_EWf5Wcu29SBVyFZI3I-yIUfae9c3i5qW2rI3aSKjFwam13ZtZ-VgchOUeb36H1AbOzUv7zHeYbFxX77evln1abZCCXCdm8vvZ6aB-C_yrYuCFiNUgWkEvoQjZOtppdExM" />
                </div>
                <div
                    class="col-span-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative overflow-hidden h-32 group flex items-center justify-between">
                    <div class="z-10 pl-2">
                        <h3 class="font-display font-bold text-lg leading-none">All Season<br />Fans</h3>
                        <p class="text-xs text-gray-500 mt-1">5 Products</p>
                    </div>
                    <img alt="Fans"
                        class="w-32 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqiolfKMqJwG_PTNOZP7PkcHohUJ2viUedkEWz4eTJYRxt87F4lOOjB1Ft9Vtb4s_zy_ppofmsPXT7FlJgVaGGiIvD4q8SnV_MctWs_WpRU51uydYOMJRObUJfz7i1f3fDUBsCcC3stwFgg52EyGSfTbnueGu9g1IxUQ45Jyyg9RLmXewQwc7K8Hpc-nvkxlCD7ETvvAnthMVMeNl-0btfDb8rToyubuyr4Iym0mdQOY3hh1g9dBB-FI-EKfnXZ-Wb9V8huPZwfo" />
                </div>
            </div>
        </section>
        <section class="py-8 px-4">
            <div class="flex justify-between items-end mb-4">
                <div>
                    <h2 class="text-2xl font-display font-bold text-primary leading-none">Live from the<br />NUUK Studio
                    </h2>
                    <p class="text-[10px] text-gray-500 dark:text-gray-400 mt-2 max-w-[200px] leading-tight">Join our
                        product demos to see how form meets function with our latest launch REN PRO</p>
                </div>
                <button
                    class="bg-primary hover:bg-primary-dark text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md transition-colors">
                    Book Live Demo
                </button>
            </div>
            <div
                class="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 relative aspect-video">
                <img alt="Live Demo Video Thumbnail" class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz4ymIncdegceb-jExTrGSyLoZNefF3CSEWwO1sd8Ee0uZE-Hzy7aPxgkOvYBGlqeOwyBglln-8oFPdTcAMyu4hIWuOxaF0SyqSELPy6XF2MGujXxC4jMJy_tAEvECRhLFo2pe1O2JHe8KgHofOBB1tpVtPrZ_YZ9zypenQjIqPtfYwuaGNoWRwwxmEvUJP7HqLcrgL2MP_qsQZJjjhspNXXzBgVREAXZi9aJ8PJUVrDZ4CGLQ3Y1pWSXgFpEBP3NESnr_I2tvdmw" />
                <div class="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                    <div
                        class="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div
                            class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-10 px-6 text-center">
            <p class="text-lg md:text-xl font-display font-bold leading-tight">
                People demanded more from their home appliances: silent operation, thoughtful design, and premium
                quality without compromise. When you ask for better, Nuuk delivers.
            </p>
        </section>
        <section class="bg-gray-100 dark:bg-surface-dark py-8 px-6 mb-8 mx-4 rounded-xl relative">
            <span class="text-6xl text-gray-300 dark:text-gray-700 font-serif absolute top-2 left-4">“</span>
            <div class="flex justify-center mb-4">
                <h3 class="text-amber-500 font-serif font-bold text-2xl tracking-tight italic">mint</h3>
            </div>
            <p class="text-sm font-medium text-center relative z-10 px-4">
                The NUUK DRIP Self-Feeding Cold Press Juicer is one of the best cold pressed juicers for home use.
            </p>
            <span class="text-6xl text-gray-300 dark:text-gray-700 font-serif absolute bottom-[-20px] right-4">”</span>
        </section>
        <section class="bg-primary text-white py-10 px-0">
            <div class="px-4 mb-6">
                <h2 class="text-2xl font-display font-bold mb-4">Meet the Nuuk fam!</h2>
                <div class="flex space-x-2 overflow-x-auto hide-scroll pb-2">
                    <button
                        class="bg-black text-white text-[10px] font-bold px-4 py-2 rounded uppercase whitespace-nowrap border border-black">Heaters</button>
                    <button
                        class="bg-transparent hover:bg-white/20 text-white text-[10px] font-bold px-4 py-2 rounded uppercase whitespace-nowrap border border-white/30">Kitchen
                        Essentials</button>
                    <button
                        class="bg-transparent hover:bg-white/20 text-white text-[10px] font-bold px-4 py-2 rounded uppercase whitespace-nowrap border border-white/30">Vacuums</button>
                </div>
            </div>
            <div class="flex overflow-x-auto space-x-4 hide-scroll px-4 snap-x pb-4">
                <div
                    class="flex-none w-64 snap-center bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden text-text-light dark:text-text-dark">
                    <div
                        class="relative bg-gray-50 dark:bg-gray-800/50 p-4 aspect-square flex items-center justify-center">
                        <div class="absolute top-2 left-2 flex flex-col space-y-1">
                            <span
                                class="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">New
                                Launch</span>
                        </div>
                        <img alt="Nuuk Hot Blox Heater"
                            class="w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACQ-I0ebHJA7enJwjazAOud7TwCVGDD2B2HHFDDGIGr6TenSBlbeMA7QzO_Vyq61ZH3dGeiDv_woEzPl1ktwrzA9Rc0Y3hHY-RkZFuge21XGMCQayY4GPNBUtxjxyCW8ZRrlpdFcxegukAQ5SW8cLBRwiwJ58ZfqVlgeLTMeVUpzWi97ZFjI6WJOahOpIa25EdYsHfjl9dDi65jfl4jArrj0ZhQeYlIUWtYH5hkeVEUL9wOBNEXNtLsm8RMOfNy2iZSdI2xbtvwU0" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-1 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                                4.6 <span class="material-icons-round text-[10px] ml-0.5">star</span>
                            </span>
                            <span class="text-xs text-gray-500">(143)</span>
                        </div>
                        <h3 class="font-display font-bold text-lg mb-1">HOT BLOX</h3>
                        <p class="text-xs text-gray-500 line-clamp-2 mb-3">Smart Oil Filled Radiator Heater</p>
                        <div class="flex items-center justify-between mt-auto">
                            <div>
                                <p class="text-xs text-gray-400 line-through">Rs. 19,999</p>
                                <p class="text-sm font-bold">Rs. 13,999</p>
                            </div>
                            <button class="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
                <div
                    class="flex-none w-64 snap-center bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden text-text-light dark:text-text-dark">
                    <div
                        class="relative bg-gray-50 dark:bg-gray-800/50 p-4 aspect-square flex items-center justify-center">
                        <div class="absolute top-2 left-2 flex flex-col space-y-1">
                            <span
                                class="bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">Bestseller</span>
                        </div>
                        <img alt="Nuuk Hot Bar" class="w-3/4 object-contain mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRCULZ5NutHAj9rH3Qo_bTw_hoNATnemijMth8DS86rXOmJyhHxVkhQ7ODYgZwQCKbzusTHsB182fXZr6POk2lPlYNqxKxqVTHNBpeYfbO0ICMWriKmpWsVNj6kIHYnjEQmjrPB2RwMXEb9XKtWWVrscBG28kS49lJaiBqUkU_ekaZaI3Krfr4Qnla_w-HdhtCMj6QiSC0fxUuhurkjZ9j2OXczAyNLsY2PiA8RQmdA1yX5msbwe3pglspu6M3oH7G7ADQaNy8Ioc" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-1 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">
                                5.0 <span class="material-icons-round text-[10px] ml-0.5">star</span>
                            </span>
                            <span class="text-xs text-gray-500">(89)</span>
                        </div>
                        <h3 class="font-display font-bold text-lg mb-1">HOT BAR</h3>
                        <p class="text-xs text-gray-500 line-clamp-2 mb-3">PTC Room Heater with Feather Touch</p>
                        <div class="flex items-center justify-between mt-auto">
                            <div>
                                <p class="text-xs text-gray-400 line-through">Rs. 8,999</p>
                                <p class="text-sm font-bold">Rs. 6,499</p>
                            </div>
                            <button class="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded">Add to
                                Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-10 px-4">
            <h2 class="text-2xl font-display font-bold mb-0 leading-none">Meet the<br /><span
                    class="text-primary">NUUK</span></h2>
            <div class="bg-primary inline-block transform -rotate-2 px-2 py-0 mt-1 mb-4">
                <span class="text-white font-display font-bold text-xl uppercase italic">Insiders</span>
            </div>
            <p class="text-sm font-bold mb-6">Real people, real Nuuks</p>
            <div class="grid grid-cols-3 gap-2">
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD13W1GiNv-JjaP137Bv6aE2MtDtHfNFRnsNgAktO4tu9hs9xkNCyzHkgsuYuGG1sFtx6p7QZyzB7TSpQPqZ3wPECcSSrzgnqic2hz6vYm3bBBEntYR7NZ_CAdBKWdvXAJU8FpWkvbBbg_lCIWQtY-aSths1ZU9nEFrTtvOtujx8sfKGVi_IVnZFjPbqmRiKMEXuNMgwAmiQvX8dxQiT8IOHYcVmv0s9NdM8uFd9fBk36FEAJBkm3CU7QgITYWeMw97EWGG9fy4Z7I" />
                </div>
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVfAzMYETTxNCc_grBrqybAjBK9wgvnhmJlApyHHdTBEBZw6M0NUZiNWcLy9Pz5eCGxdBnuLtEsCPrltJFl4kKf8s6dV_MzdyCp2VBOFQuVdWKh3x4VEghX4FcA12ZeW1yIUaVvINFHlo00y_A8JjOcWC12ZP-VEJJTtA810CQ2giQBVnsgCzty-ZUp3pllS-j3LJC8mi-0SVgs30sBil7QZFN1IN6C0ghh0KObb--76uqauOesnaZ8rr44dvx2QC7XH1iXm74P9g" />
                </div>
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATpIZSB21g6zH61ysOmYLTntzclU92ZJP6pCZE1YrPLPxcMHsOf5ryjypq7DBJpEB6YOYo7BSj29qmRoMLAf714AmbxjcZf4Z-1vRUiFQ-qiNxlZdX1a6DZ-ag1jVgdI00moElj_WP_1o9JECuEOtF189J9C5sUgMBnUUy3x9WLUj1ofSsTotGR4yOpo32jeWQAPslgHgPlg_TA9XFVA8lyqe70EDD1bMlSr9jsDVvwGZCPsgrNnNmIU8ADBU3AzGrU9zbG6l0WA" />
                </div>
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_RB949JYkf9YPB6UEuIPxCcaDYUs-R9AzhScVkksrvzDLYnOwVIJexHWQtwwHDBO6r79EBSUaGatS5IF90K6PKLO0ctZmD8JlqTyGTS-p4Ff93lXSytvKHMocZGyX9PofD8Vw1FNaE1vnJiwDn8Y3dHfYvBmx0Gw1wTZv7pf8JK2dI5PQ6Mhzj7G_UwnYjsdFK0I2R4OtbfSF6xh-4aJN9tIsukCMw-mlKTsDJ_mmjOKD5VCJ_vcaOy-bKFrqM9rrb2CPovYhH8" />
                </div>
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ24VL9U9H7sOeIUWr5hof5OLuUm17SfhMvYJfnnL-5t1BVyag4o9avmbEAG-_VvnvKUnsUNlCnptSzK-yI2Pcp4aC5CrA_jaoZGeN54zhLdLBUrl5X0lFq7kcE--S1_a4DJ6XEe467DQ49BbJn6Wa55OvdsiB1_QhKYp6LVgJ0pWKmxa3_Sa2Mthsy9glhtdnooDedfJnkxTssmTpq04EeCmph43GVJyBrM_WBc8UfhpfKveXzGT0li8LxVhMtkONO2FsyTD-MjE" />
                </div>
                <div
                    class="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                    <span class="material-icons-round text-gray-400">add</span>
                </div>
            </div>
        </section>
        <footer class="bg-black text-white pt-12 pb-24 px-6 rounded-t-3xl">
            <h2 class="text-4xl font-display font-bold text-primary mb-6">NUUK</h2>
            <p class="text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">NUUKLIFE CONSUMER PVT. LTD.</p>
            <p class="text-xs text-gray-500 mb-8 leading-relaxed">
                Subsidiary of Neutopia Technology Pvt. Ltd.<br />
                Tower A Paras Twin Towers, Golf Course<br />
                Road, Sector 54, Gurugram, Haryana 122011 -<br />
                India
            </p>
            <div class="mb-8 border-t border-gray-800 pt-6">
                <p class="text-xs text-gray-500 mb-1">For help, reach out to our community desk:</p>
                <a class="text-white font-bold text-sm block mb-1" href="mailto:care@nuuk.in">care@nuuk.in</a>
                <p class="text-xs text-gray-500">+919621551000 (9:30 AM to 6 PM | Monday - Friday)</p>
            </div>
            <div class="grid grid-cols-2 gap-8 mb-8 text-sm text-gray-400">
                <div class="flex flex-col space-y-2">
                    <span class="text-white font-bold mb-2">The Company</span>
                    <a class="hover:text-primary" href="#">About Us</a>
                    <a class="hover:text-primary" href="#">Terms &amp; Conditions</a>
                    <a class="hover:text-primary" href="#">Privacy Policy</a>
                    <a class="hover:text-primary" href="#">Returns &amp; Refunds</a>
                </div>
                <div class="flex flex-col space-y-2">
                    <span class="text-white font-bold mb-2">Shop</span>
                    <a class="hover:text-primary" href="#">All Products</a>
                    <a class="hover:text-primary" href="#">Track Order</a>
                    <a class="hover:text-primary" href="#">Corporate Orders</a>
                    <a class="hover:text-primary" href="#">Warranty Registration</a>
                </div>
            </div>
            <div class="flex items-center space-x-4 mb-8">
                <a class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
                    href="#">
                    <i class="material-icons-round" style="font-size: 1.2rem;">photo_camera</i>
                </a>
                <a class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
                    href="#">
                    <i class="material-icons-round" style="font-size: 1.2rem;">play_arrow</i>
                </a>
            </div>
            <p class="text-xs text-gray-600 text-center border-t border-gray-800 pt-6">
                © 2025 Nuuk.
            </p>
        </footer>
        <div
            class="fixed inset-0 z-[60] bg-black/60 flex items-end sm:items-center justify-center p-4 pointer-events-none opacity-0">
        </div>
        <div class="fixed bottom-6 right-6 z-40">
            <button
                class="bg-primary/90 hover:bg-primary text-white p-3 rounded-full shadow-lg backdrop-blur-sm flex items-center justify-center">
                <span class="material-icons-round">chat_bubble</span>
            </button>
        </div>
    </main>

</body>

</html>
  `);
}
