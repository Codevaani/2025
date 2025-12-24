import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>NUUK - Premium Home Appliances</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Anton&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#FF004D", // NUUK Red/Pink
                        "background-light": "#F9FAFB",
                        "background-dark": "#111827",
                        "surface-light": "#FFFFFF",
                        "surface-dark": "#1F2937",
                        "gray-light": "#F3F4F6",
                        "gray-dark": "#374151",
                    },
                    fontFamily: {
                        display: ["Anton", "sans-serif"],
                        body: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                    },
                },
            },
        };
    </script>
    <style>
        .font-display {
            font-family: 'Anton', sans-serif;
        }

        .font-body {
            font-family: 'Inter', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }

        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>

<body
    class="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-body transition-colors duration-200">
    <div class="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
        RATED CERAMICTECH™ AIR FRYER | SHOP NOW
    </div>
    <nav class="bg-surface-light dark:bg-surface-dark shadow-sm sticky top-0 z-50 transition-colors duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-3xl font-display text-primary tracking-wide">NUUK</span>
                </div>
                <div class="hidden md:flex space-x-8 items-center">
                    <a class="text-xs font-bold uppercase text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                        href="#">Shop</a>
                    <a class="text-xs font-bold uppercase text-primary" href="#">Corporate Gifting</a>
                    <a class="text-xs font-bold uppercase text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                        href="#">Nuuk Insider</a>
                    <a class="text-xs font-bold uppercase text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
                        href="#">Support Hub</a>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        <span class="material-icons">search</span>
                    </button>
                    <button
                        class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary relative">
                        <span class="material-icons">shopping_bag</span>
                        <span
                            class="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
                    </button>
                    <button
                        class="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary md:hidden">
                        <span class="material-icons">menu</span>
                    </button>
                    <button class="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                        onclick="document.documentElement.classList.toggle('dark')">
                        <span class="material-icons text-sm">brightness_4</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <div class="relative bg-gray-200 dark:bg-gray-800 h-[500px] overflow-hidden group">
        <img alt="Modern kitchen with appliances"
            class="w-full h-full object-cover opacity-90 dark:opacity-60 transition-opacity duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3kPttIwb9jQYD2jaqmpsrgBsPTQbmHhPFbgmJD1TVRyVcXwRyOlj12N7C_UK75Omf64zN7PLVZeexI172ghVZXap-6OnNtceQ9gLoCpeIyyoWwculgvHDZw27UbfnWdFIPDNvwYPBQXRMdZm15-LGCywcSrGCe4GpkfqJe6D_gNSn9gDn1wZqBBXEBKEpgq4q-ZLtuOZqMkpcao6MYBD0HrY7OCNNhY777ViqTwLtGNwOnFp0qjdYBCvTAVYz7E5kRH8byQz6EjE" />
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-16">
            <h1 class="text-4xl md:text-6xl font-display text-white mb-4 leading-tight max-w-2xl">
                Trending on socials<br />right now
            </h1>
            <div class="flex items-center justify-between w-full">
                <div class="flex space-x-2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                    <div class="w-2 h-2 rounded-full bg-white/50"></div>
                    <div class="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
                <button
                    class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition text-white">
                    <span class="material-icons">arrow_forward</span>
                </button>
            </div>
        </div>
    </div>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="text-3xl md:text-4xl font-display mb-8 text-gray-900 dark:text-white">Bestsellers this season</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div
                    class="relative bg-[#EAD6BB] dark:bg-opacity-20 aspect-square p-6 flex items-center justify-center">
                    <span
                        class="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">New
                        Launch</span>
                    <span
                        class="absolute top-12 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Trending</span>
                    <img alt="HOT BLOX Heater"
                        class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi_V83SlHC5pf5hLin8ByMrFhjlEiqeysJFPJRCSeB83WgpErFJgj71tt66G8ucZf16-q2TBEiCDpRDc0Ef5bErc9QQxAaeL3Bi1xofIqv21RIpTd2rPBndsRIGEHVKx3FlEgVJJ_1JQKApq9m7zNc2jsM1duEU3hxQJpCsADMtgUTXczZKBygTAz7E41jeiw5K-8Hk3pNIfhPadEZ-QGj0Bom7g-OM356azOwMsP2_6LlOYD21gVeSLaLIKlzInGBuXNv3MEUVLM" />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                    <div class="flex items-center space-x-2 mb-2">
                        <span
                            class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">4.6
                            <span class="material-icons text-[10px] ml-0.5">star</span></span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">(143)</span>
                    </div>
                    <h3 class="text-xl font-display uppercase mb-1 text-gray-900 dark:text-white">HOT BLOX</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">Smart Oil Filled Radiator
                        Heater with RapidHeat™ and Digital Touch Display</p>
                    <div class="mt-auto">
                        <div class="flex space-x-2 mb-4">
                            <button
                                class="w-4 h-4 rounded-full bg-black border border-gray-300 dark:border-gray-600 ring-1 ring-offset-2 ring-transparent focus:ring-gray-400"></button>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs text-gray-400 dark:text-gray-500 line-through block">Rs.
                                    19,999</span>
                                <span class="text-lg font-bold text-gray-900 dark:text-white">Rs. 13,999</span>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div class="relative bg-gray-100 dark:bg-gray-800 aspect-square p-6 flex items-center justify-center">
                    <img alt="HOT BAR Heater"
                        class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOA6Tbhh1_v6gES5L81fsDHeYwS8IFIcKRXZAqmba2Msm63ZCPVZ7GPA9RBkK7f2WlbixIlwM6Z5nw23juiMZTCZuxQaNMRfzu2lRaCY0RJ2sUJNaJDO6EIViKGJsadHLbE8hWppVSObRKwb8hFq7M3B3KRp5lXs_sbal2744DvHK7KA6mp9XoDWQ-jGQwGFCwF19rCSQt9uGfjeY3V9lnzqRZm2-RjLrLmXoB-AyFJEG6vs0tCItrDfi57ZL7xiB4-IA0MCH9f74" />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                    <div class="flex items-center space-x-2 mb-2">
                        <span
                            class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">5.0
                            <span class="material-icons text-[10px] ml-0.5">star</span></span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">(89)</span>
                    </div>
                    <h3 class="text-xl font-display uppercase mb-1 text-gray-900 dark:text-white">HOT BAR</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">PTC Room Heater with Wide
                        Angle Oscillation Control</p>
                    <div class="mt-auto">
                        <div class="flex space-x-2 mb-4">
                            <button
                                class="w-4 h-4 rounded-full bg-red-500 border border-gray-300 dark:border-gray-600"></button>
                            <button
                                class="w-4 h-4 rounded-full bg-gray-600 border border-gray-300 dark:border-gray-600"></button>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs text-gray-400 dark:text-gray-500 line-through block">Rs.
                                    8,999</span>
                                <span class="text-lg font-bold text-gray-900 dark:text-white">Rs. 6,499</span>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div class="relative bg-white dark:bg-gray-800 aspect-square p-6 flex items-center justify-center">
                    <span
                        class="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Bestseller</span>
                    <img alt="BRISK Air Fryer"
                        class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARK39nOPDTlrqCYJjcqwwU4Jm2ANZb-qkvpW0eoFFySSH0_XnhCRNlNpLIlneJob4a0kebncVjrR_1NdDxq-f3BgEc9rRBhP3GdbRjxqlyzwcX5C5JdOWWjMgJvjWSNflJ0US9kiZtNUMIvrczHg_NjoLEzAiXCore3aN0RdnZVqqdb2etGCucZCJtGjpKD6KOnY4hLs4vYagxdkO0vITqU_4SZkQ4SGo4Iky1wwJ-8uIQcliyk6Uu9_XtMbwiaqkuwUsNjwyk-GI" />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                    <div class="flex items-center space-x-2 mb-2">
                        <span
                            class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">4.8
                            <span class="material-icons text-[10px] ml-0.5">star</span></span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">(531)</span>
                    </div>
                    <h3 class="text-xl font-display uppercase mb-1 text-gray-900 dark:text-white">BRISK</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">6.5L Food-Safe Air Fryer with
                        ILAG CeramicTech</p>
                    <div class="mt-auto">
                        <div class="flex space-x-2 mb-4">
                            <button
                                class="w-4 h-4 rounded-full bg-red-500 border border-gray-300 dark:border-gray-600"></button>
                            <button
                                class="w-4 h-4 rounded-full bg-gray-300 border border-gray-300 dark:border-gray-600"></button>
                            <button
                                class="w-4 h-4 rounded-full bg-gray-800 border border-gray-300 dark:border-gray-600"></button>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs text-gray-400 dark:text-gray-500 line-through block">Rs.
                                    12,499</span>
                                <span class="text-lg font-bold text-gray-900 dark:text-white">Rs. 8,999</span>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700 flex flex-col">
                <div class="relative bg-gray-50 dark:bg-gray-800 aspect-square p-6 flex items-center justify-center">
                    <img alt="REN PRO Vacuum"
                        class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYcz-dwOngsjOT_cQdp3a1PN3z7yfxmWU5cxVhl9yDZupLe4iOUsO-dEAX5M0-tPpG8BKLxU8nLdcFU43844WEfe4kB6EP89IMB33ph_NPEKd8GC6CAjd2-bSRaWekK-dp1jKAxzx-jRKspNsWmtALeIUNfMrPk1kBKf-5b4c9j2_lTzJMa-dw2-TNtBi3uhAzA7RyxQN0RJ36JGBcGELnzf4CX0-tV4AqF50KlN8c8rpJ83fVg04oncHhbfzX-CiLXHxZxlF_zc0" />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                    <div class="flex items-center space-x-2 mb-2">
                        <span
                            class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">4.7
                            <span class="material-icons text-[10px] ml-0.5">star</span></span>
                        <span class="text-gray-500 dark:text-gray-400 text-xs">(36)</span>
                    </div>
                    <h3 class="text-xl font-display uppercase mb-1 text-gray-900 dark:text-white">REN PRO</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">34kPa Adaptive Suction Vacuum
                        Cleaner for all your home surfaces.</p>
                    <div class="mt-auto">
                        <div class="flex space-x-2 mb-4 h-4">
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs text-gray-400 dark:text-gray-500 line-through block">Rs.
                                    25,999</span>
                                <span class="text-lg font-bold text-gray-900 dark:text-white">Rs. 19,999</span>
                            </div>
                            <button
                                class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">Add
                                to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
            class="bg-primary rounded-3xl overflow-hidden shadow-lg relative flex flex-col md:flex-row items-center p-8 md:p-12">
            <div class="w-full md:w-1/2 z-10 text-center md:text-left mb-8 md:mb-0">
                <h2 class="text-4xl md:text-6xl font-display text-white mb-4">NUUK x <span class="italic">Karan
                        Johar</span></h2>
                <p class="text-white text-lg mb-8 max-w-md mx-auto md:mx-0 font-medium">Everyday appliances get their
                    cinematic edge. Experience luxury in every utility.</p>
                <button
                    class="bg-black text-white px-8 py-3 font-bold tracking-wider rounded uppercase hover:bg-gray-900 transition shadow-lg">Discover
                    More</button>
            </div>
            <div class="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <div
                    class="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 transform hover:rotate-0 transition duration-500">
                    <img alt="Karan Johar Portrait Placeholder" class="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUbdEFQWfzBQqqumEU161POL4FBAkB7Mw1gYfUDapr_y4RYBoHQMS6t8x3TkvspXxmmks8ft68ky3Kd_1gA5L1BxI3m9r6sMu_-JkXTH_wqpdiur50I-6Jqt9kDKC3MjHjkfPOzh6j3t_EU06-wfTtham4v1govv3IhTfxKBIQey1zUrvwXGoKkT0zUntY3HsPqKk3iWxZayFrEnlBIoPRpTFQxIwI0k5sK3JUqHKdT91-TDYPgYkwjqVQOoySZ2zDqm2tOIHG5Rk" />
                </div>
            </div>
            <div class="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="dots" patternUnits="userSpaceOnUse" width="40" x="0" y="0">
                            <circle cx="2" cy="2" fill="white" r="2"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#dots)" height="100%" width="100%"></rect>
                </svg>
            </div>
        </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 class="text-3xl md:text-4xl font-display mb-10 text-center text-gray-900 dark:text-white">Shop by Function
            and Category</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative overflow-hidden h-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer group">
                <div class="relative z-10">
                    <h3 class="text-2xl font-display text-gray-900 dark:text-white leading-none">Heaters</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">2 Products</p>
                </div>
                <img alt="Heater"
                    class="absolute bottom-4 right-4 w-32 h-32 object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPPjVgLNfH0_TO6IwDJlBQfweCqp83GcZWE3BDazQXxYG17rmGas6EC18az-1itodG5ZbwfFF1HG8bmg7AImKHRzB3BiQKdLmcPtWpoKbl9FhwnvC02UlUwdjOZBFossTi1Ub06dJdpqa66j9uF8qO4IKdNfOLxlD-Mv0A2eiYjV8TI12LjcHjmFsJlJyWmIlnplPA0oVeisSGBBmf_UCH7_pgujtrxSx5ViqvElCM5bHL-Himxs-_wOydrxnVLzHOYSWssp6IY2k" />
            </div>
            <div
                class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative overflow-hidden h-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer group">
                <div class="relative z-10">
                    <h3 class="text-2xl font-display text-gray-900 dark:text-white leading-none">Kitchen<br />Essentials
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">4 Products</p>
                </div>
                <img alt="Kitchen"
                    class="absolute bottom-0 right-0 w-40 h-40 object-cover rounded-tl-3xl group-hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJXZPOIpjkv4qTyl8jY2rjFLJnQ1zDtJ9yAlHmwWCsI9Pv4HasLL6077qjqFoLafCY6RtLbajbURO7dbqYutHqpFSYPtzYwvZPJh2oFOKNFn9vF3xyzHo0btvz7aZhqicERJMURdpoZ24Y6T7JcgCtEotANDm1MWaKfaeRSBOOVvZDyg3cxNGIh3M0k6qtBBWQ2U0wCHplsR6DmNn6CEywtCpa7EN0rd1SLKtwtKbcvD85otBMlBWPtsc0de7MIm-h_kigvzMLOCU" />
            </div>
            <div
                class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative overflow-hidden h-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer group">
                <div class="relative z-10">
                    <h3 class="text-2xl font-display text-gray-900 dark:text-white leading-none">Vacuum<br />Cleaners
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">14 Products</p>
                </div>
                <img alt="Vacuum"
                    class="absolute -bottom-2 right-2 w-36 h-48 object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition duration-300 rotate-12"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwNV9zJ1jCGdcc6sBKXO-7E6IKJiy6eXVwpsVMU8i-ghgGtglMDl15kkh8Pj0UqtF77RJk99qxm3g2YRsaPTjlC8eV2asPlnORjvKR0Bd5nwjwLQks-7-4gtjKuJHJH68sV4v9DayRPbUnYca3xweZcsrgpu2jD7y1mWWT3LLv0Uad3SVbeeQMQnOkxu_UFP0ewEMwOvviALGHU9Yw9lXgGFRhueYgub0sQaX3g2-4O2KYhe1bp9Y21ly27FLin92NLgOG5tn83eI" />
            </div>
            <div
                class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative overflow-hidden h-64 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer group">
                <div class="relative z-10">
                    <h3 class="text-2xl font-display text-gray-900 dark:text-white leading-none">Garment<br />Care</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">2 Products</p>
                </div>
                <img alt="Garment Care"
                    class="absolute bottom-0 right-0 w-36 h-40 object-cover rounded-tl-3xl group-hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6fXpCtSK1CJIcRjki0MKNKd3ik1UAx_wbg5RXRCWqj8RZ55UKGK8jbCT9-7fQ8UyEo5gQfQiRwN_NhrvpRCC0MpaatRIRYJseOaUKQLzI-1KU-rpff4-3byylH8QZFfUHgrkAv3_6PdRUehl4KUgy7pPX_aQ2Xhi_rFmIb-OiWSV-gtfL0oouGOM0NXVKUQMYTR8wMsI1ho_o-2b27josyn7et6PGjugnH2-qEtSRnAgs1Q2z0XXPN_3XJxl_Uh58pj7fzvL98e8" />
            </div>
            <div
                class="col-span-1 md:col-span-2 lg:col-span-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 relative overflow-hidden h-48 flex items-center justify-between hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer group">
                <div class="z-10 pl-4 md:pl-10">
                    <h3 class="text-3xl font-display text-gray-900 dark:text-white leading-none">All Season<br />Fans
                    </h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">5 Products</p>
                </div>
                <div class="bg-[#EAD6BB] absolute right-0 top-0 h-full w-1/2 md:w-1/3 flex items-center justify-center">
                    <img alt="Fans"
                        class="w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-multiply group-hover:rotate-12 transition duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHJ4PKBvtUWn9zV6_nG-EL0hR8i8krLRxZccL-sk_R7YYLtBAya34npqELMp5xWL-tdekS2c8EGaTDsjQfgHl4c5Djix8fa0gGWwRHpMOF9X3UhTjwcVW81LEND0GIONV9y4W2bSnktczODS51DiSetd_S7qnBRXavCW-yGgbiHX79XNlX_vCdUQRDuC629O7DcfevqHGeGeo2jDjvJjKz71tKIsRtas1-JKWpGALileHsCwL7zo98tTDZAq6skXfl8aJDmd-ebF8" />
                </div>
            </div>
        </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex flex-col md:flex-row justify-between items-start mb-8">
            <div class="max-w-md">
                <h2 class="text-3xl md:text-5xl font-display text-primary leading-tight mb-4">
                    Live from the<br />NUUK Studio
                </h2>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                    Join our product demos to see how form meets function with our latest launch REN PRO.
                </p>
                <button
                    class="bg-primary text-white px-6 py-2.5 rounded font-bold uppercase text-sm hover:bg-red-600 transition">Book
                    Live Demo</button>
            </div>
        </div>
        <div
            class="relative w-full aspect-video bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            <img alt="Video Thumbnail"
                class="w-full h-full object-cover opacity-90 transition group-hover:scale-105 duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBeSH-ODCwFO9ZgS_w9c5Fcx6depF0y2OcQBbv07szr2Znb5FIeHdQqrnb2YViNcwnUujA-LFYlq0YjWDg7Rytqi5FT9he8a9u4NKs9rO7drXa6Gu9enPerwgmY3QtTVKn483I3PqxJi_dr69F6xvPcrXAwdCHgukywdiLATVbY6TnH8iH8f3No9RXTpKmhwdrgTsHYJCHJb-anXpnzlXNtvlb2X0IIKNYIULnAZJXX8Q56a5Yx1rnzFYiavmMbvGsOXI11uzdQ5E" />
            <div class="absolute inset-0 flex items-center justify-center">
                <button
                    class="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/50 transition">
                    <span class="material-icons text-white text-5xl ml-2">play_arrow</span>
                </button>
            </div>
            <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs uppercase font-bold">
                Live Now
            </div>
        </div>
    </section>
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 class="text-2xl md:text-4xl font-display text-gray-900 dark:text-white leading-tight">
            People demanded more from their home appliances: silent operation, thoughtful design, and premium quality
            without compromise. When you ask for better, Nuuk delivers.
        </h2>
    </section>
    <section class="bg-gray-50 dark:bg-gray-900 py-16">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <span class="text-6xl text-gray-200 dark:text-gray-700 font-serif leading-none">“</span>
            <div class="mb-6">
                <img alt="Mint Logo" class="h-8 mx-auto grayscale opacity-70 invert dark:invert-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtuQPuPS1iOClCERMLBj5yQwWiCFPgjYlNygSjXdeyJiKUaygnRsPpxHK83j4Y2HYP1OzIgqJ69CSHdtsPg2leHcQW6jJeH805jOEC6886Cph4zo-GQMTaRyhpgSBvmL0z3FF6_pxDGxUQh_kivUmJhmMHzYENaoTMGHKa7wpCjv2hedBbS0WZXIAsp5LH2iJHTF51BFD6PjtjvWLsVKkkv6yy-YehpRI9PM6lAPVkKposGCyneZk1BaKsyUvl-wYvJIhAIO2wG48" />
            </div>
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                The NUUK DRIP Self-Feeding Cold Press Juicer is one of the best cold pressed juicers for home use.
            </p>
            <span
                class="text-6xl text-gray-200 dark:text-gray-700 font-serif leading-none block mt-4 text-right">”</span>
        </div>
    </section>
    <section class="bg-primary py-16 text-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-8">
                <div>
                    <h2 class="text-4xl md:text-5xl font-display mb-6">Meet the Nuuk fam!</h2>
                    <div class="flex flex-wrap gap-2">
                        <button
                            class="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-transparent">Heaters</button>
                        <button
                            class="bg-transparent text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/30 hover:bg-white/10 transition">Kitchen
                            Essentials</button>
                        <button
                            class="bg-transparent text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border border-white/30 hover:bg-white/10 transition">Vacuums</button>
                    </div>
                </div>
            </div>
            <div class="flex overflow-x-auto space-x-6 pb-8 no-scrollbar snap-x snap-mandatory">
                <div
                    class="snap-start shrink-0 w-80 bg-white dark:bg-surface-dark rounded-xl overflow-hidden text-gray-900 dark:text-white">
                    <div
                        class="relative bg-gray-100 dark:bg-gray-700 aspect-square p-8 flex items-center justify-center">
                        <span
                            class="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">New
                            Launch</span>
                        <img alt="Heater" class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC1OyrI2bnEqdnKHx4lXlhX8vIwMVKiFgJPSVyDxTM6mM2aaGy9-1TCKIEIUCTYrfCruy5IuiNWSnP58c66lX1Z6hBCUHuJBS_teJm5eMEqemjGVh4xqAFvyxPBgTKUr7tbl65h23ZhNUXvLiW3F07vnAK0seNzoVA8OV_fXKqlMPPNhvwbduV7Qsg-tfx06eLhlug6P5jqMXQXH7yuoUwImgyMmGZcqZEpRJKpdyq08_v9XwPuj7xMcb1nF6_TI2BChzh8bRyrE8" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-2 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">4.6
                                <span class="material-icons text-[10px] ml-0.5">star</span></span>
                            <span class="text-gray-500 text-xs">(143)</span>
                        </div>
                        <h3 class="text-xl font-display uppercase">HOT BLOX</h3>
                        <p class="text-sm text-gray-500 mb-3 truncate">Smart Oil Filled Radiator Heater</p>
                        <div class="flex items-center justify-between mt-4">
                            <div>
                                <span class="text-xs text-gray-400 line-through block">Rs. 19,999</span>
                                <span class="text-lg font-bold">Rs. 13,999</span>
                            </div>
                            <button
                                class="bg-black text-white px-3 py-1.5 rounded text-xs font-bold uppercase">Add</button>
                        </div>
                    </div>
                </div>
                <div
                    class="snap-start shrink-0 w-80 bg-white dark:bg-surface-dark rounded-xl overflow-hidden text-gray-900 dark:text-white">
                    <div
                        class="relative bg-gray-100 dark:bg-gray-700 aspect-square p-8 flex items-center justify-center">
                        <span
                            class="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Bestseller</span>
                        <img alt="Heater" class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2FKqf6bWGPQP-Vz1U64KjWVIXbH9rEEp7-Efj7P3rUUWDKAOi3dx4WwQpvjHJwkJlSYLIaDEfy5gycBFwb6Q3xzhP1n3bMQUGPipG3bVjLMmvLEC-Eb4xx1pqYwZ2Vsq0UHqW53Elo_orEsxQjMsWisTB6ygtMCMgkxRAvp-i6KbPqM3ADIQIRyPARR6bgI3xevIYwTMN7gzZzcgM3Y2NWIhwzV8a5HhuqMTnXlAIBWo-EEEAzbFncLSe2Xro_9F4Rm4w0cTyS-E" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-2 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">5.0
                                <span class="material-icons text-[10px] ml-0.5">star</span></span>
                            <span class="text-gray-500 text-xs">(89)</span>
                        </div>
                        <h3 class="text-xl font-display uppercase">HOT BAR</h3>
                        <p class="text-sm text-gray-500 mb-3 truncate">PTC Room Heater with Wide Angle</p>
                        <div class="flex items-center justify-between mt-4">
                            <div>
                                <span class="text-xs text-gray-400 line-through block">Rs. 8,999</span>
                                <span class="text-lg font-bold">Rs. 6,499</span>
                            </div>
                            <button
                                class="bg-black text-white px-3 py-1.5 rounded text-xs font-bold uppercase">Add</button>
                        </div>
                    </div>
                </div>
                <div
                    class="snap-start shrink-0 w-80 bg-white dark:bg-surface-dark rounded-xl overflow-hidden text-gray-900 dark:text-white opacity-90">
                    <div
                        class="relative bg-gray-100 dark:bg-gray-700 aspect-square p-8 flex items-center justify-center">
                        <img alt="Heater" class="object-contain h-full w-full mix-blend-multiply dark:mix-blend-normal"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9x2RVjimdWB_46__c5DFuwQ2L9XyY9aSn0hLEBm8wJYLxPdESTfsuckpbKOmrlxNAQrls8gfFHychr6Gndk1VtcpoXsjwddv70bzqofaiSL3lZl8Krteu3VdfqJH5HRqUpxB3Z1frXWe2vShQqPFGFQ6yMB_XpWiQLgxi6BFThOnive20tRdtPQgT8W_Aps_I5O2BjPONTFoNb0yDmCLUodmx75yesRmurB5E5TDAv59YMiCdE67vc6Y-nTqQy43yC4hqXiyJ0VE" />
                    </div>
                    <div class="p-4">
                        <div class="flex items-center space-x-2 mb-2">
                            <span
                                class="bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center">4.2
                                <span class="material-icons text-[10px] ml-0.5">star</span></span>
                            <span class="text-gray-500 text-xs">(12)</span>
                        </div>
                        <h3 class="text-xl font-display uppercase">WARM UP</h3>
                        <p class="text-sm text-gray-500 mb-3 truncate">Compact Personal Heater</p>
                        <div class="flex items-center justify-between mt-4">
                            <div>
                                <span class="text-xs text-gray-400 line-through block">Rs. 4,999</span>
                                <span class="text-lg font-bold">Rs. 2,999</span>
                            </div>
                            <button
                                class="bg-black text-white px-3 py-1.5 rounded text-xs font-bold uppercase">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex flex-col md:flex-row justify-between items-end mb-8">
            <div class="mb-4 md:mb-0">
                <h2 class="text-4xl md:text-5xl font-display text-gray-900 dark:text-white leading-none">
                    Meet the<br />
                    <span class="text-primary">NUUK</span><br />
                    <span class="bg-primary text-white px-1 inline-block transform -skew-x-12">INSIDERS</span>
                </h2>
                <p class="text-lg font-bold mt-4 text-gray-900 dark:text-white">Real people, real Nuuks</p>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div class="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img alt="User" class="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCKH09lWouPqvq5I9SdSB0T2PIlQ1qWzOT_vVg6IIwCl2nqhsvAU2sw9W5yCG9gk37VsrAgG1UR6ZBcb7yjzDdY5XBYu92eHj4csRh3SqT4VS4obCQwwhrJV06Ir-P5tMWXJgAePSrg0-l6TBqC8UTWGog62ovgAh70p9Si-SiOXe5BUi-HZ5VlTG0dKcTZT9ZsZ_PXUgVJMhNFUQ9P2Mp6C3gXabnvB3sbRGL4dEfAxPOx_e3DNqyDUse2F--xhiZPXvQWbYBLuQ" />
            </div>
            <div class="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img alt="User" class="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBzu2VwQhXp14QTZ3iNOlOBuxLx5BSMP1ksMHOKkWq9zgvtyBumTo3KQBS3084oaEfBCYz6o0Y4v2c7HeBiaAWFSf83h--hw6hhqJ7vFBmiMS5Tyhw2nMsJx4QpuJreGtsveZHxsCWYDz0RYTne86t94B0KDLSt7EvdNRQny1MmG7DnaQBRQpdxhxZON8wlZu1MaAPvmIw_gIFVhbe9H5n46uDpX8tM7jJy6cpN2Hxw8y76BQs7kbnAqsisul-K8vvydc1xgo8bw" />
            </div>
            <div class="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img alt="User" class="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAuDZel2DGRgyK_WTDOWcxNPy2_q4fahgueqYH37jzvjWzmIUSaOzAVX-ZaNzze1LCmbWQmp30TiajM8szfLs5GiwH-_NchuFlwqlxVRt9USjnclkgM-B4fO96Z6YCIaxRoddrMPwMI2y87LB6oOiCQez123my6ldrhAAoa8uFvnx6g85pIiXEAe2MQRSK1FL44dSZHsdUD9wn_7Ik3RRpUXwITbV-ZaONg5aWN4iOMu5HWrxWk9d-qxh4cELPur1EUIfOVxwgd1k" />
            </div>
            <div class="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img alt="User" class="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Sq7Jolcar3t4TTWWrE0p57e-gDXDLblHr4vWfo5eSE_HVGMxB9l-SvfsfmdRTl3HSKq5sBdQDu02gxnRu2eBfiv7MUVTZSnawX3TSoQNe699C7YwHv3bP0ftrmlmz03yAPNlESDk2TMNZJziRsNIraW6ngjuriQBB3fly9POlVj-VXWAxC04wB2p24eaoRUe5ceJE0LRpNkuBl8XsqnuStll24LHpYRAH2y2-5mnUgC0SvFIUgNZln9QOCo_ocfCe_HuxYpR2Jk" />
            </div>
            <div class="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img alt="User" class="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuqyNRPrOVUpX7GgGWH08s4NmFIn5E3yGqIxJHhHQnkKO5dihcjnbN5sKxV_dpWvyK6vOuSqZXYOGHruPIdyauPyzsy8fVR9FnXGMI4Z9KDrdy2rXMa3LDdYNhZGDUErhP-mhCT4_pUxpk8WiL5C9PgCKCKo_qXf7dNveEcpwkd0Nr72RZii1WbwbGger9hZfzEHqCKrOx-CAcOxk4ekdaasE0R7oUI_lMVvoZatCPImdfxMmd5BF1B2BIJxyLX95t6V7E4Ba9pk8" />
            </div>
            <div
                class="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <span class="material-icons text-4xl text-gray-400">add</span>
            </div>
        </div>
    </section>
    <footer class="bg-black text-white pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between mb-16">
                <div class="md:w-1/3 mb-10 md:mb-0">
                    <span class="text-5xl font-display text-primary tracking-wide block mb-8">NUUK</span>
                    <h3 class="text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Nuuklife Consumer Pvt.
                        Ltd.</h3>
                    <p class="text-gray-500 text-sm leading-relaxed mb-8">
                        Subsidiary of Neutopia Technology Pvt. Ltd.<br />
                        Tower A Paras Twin Towers, Golf Course<br />
                        Road, Sector 54, Gurugram, Haryana 122011 -<br />
                        India
                    </p>
                    <div class="mb-4">
                        <p class="text-gray-500 text-sm mb-1">For help, reach out to our community desk:</p>
                        <a class="text-white font-bold hover:text-primary transition"
                            href="mailto:care@nuuk.in">care@nuuk.in</a>
                        <p class="text-gray-500 text-sm mt-1">+919621551000 (9:30 AM to 6 PM | Monday - Friday)</p>
                    </div>
                </div>
                <div class="md:w-2/3 flex flex-wrap md:justify-end gap-x-20 gap-y-10">
                    <div>
                        <h4 class="text-white font-bold text-lg mb-6">The Company</h4>
                        <ul class="space-y-3 text-sm text-gray-400">
                            <li><a class="hover:text-white transition" href="#">About Us</a></li>
                            <li><a class="hover:text-white transition" href="#">Terms &amp; Conditions</a></li>
                            <li><a class="hover:text-white transition" href="#">Privacy Policy</a></li>
                            <li><a class="hover:text-white transition" href="#">Returns &amp; Refunds</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold text-lg mb-6">Shop</h4>
                        <ul class="space-y-3 text-sm text-gray-400">
                            <li><a class="hover:text-white transition" href="#">All Products</a></li>
                            <li><a class="hover:text-white transition" href="#">Track Order</a></li>
                            <li><a class="hover:text-white transition" href="#">Corporate Orders</a></li>
                            <li><a class="hover:text-white transition" href="#">Warranty Registration</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div class="flex space-x-4 mb-4 md:mb-0">
                    <a class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary transition text-white"
                        href="#">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                            </path>
                        </svg>
                    </a>
                    <a class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary transition text-white"
                        href="#">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                            </path>
                        </svg>
                    </a>
                    <a class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary transition text-white"
                        href="#">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                            </path>
                        </svg>
                    </a>
                </div>
                <p class="text-gray-500 text-sm">© 2025 Nuuk.</p>
            </div>
        </div>
    </footer>
    <div class="fixed bottom-6 right-6 z-50">
        <button class="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce">
            <span class="material-icons">chat</span>
        </button>
    </div>

</body>

</html>
  `);
}
