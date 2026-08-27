 // ============ DATA MANAGEMENT ============
        const newsDatabase = [
            {
                id: 1,
                title: "জলবায়ু পরিবর্তনের প্রভাবে উঁচু পর্বতের পাথর ও বরফের ভিত নড়বড়ে হয়ে পড়ছে",
                description: "নেপালে আকস্মিক বন্যার পর এক্সক্যাভেটর দিয়ে কাদা ও বর্জ্য সরানোর কাজ করছেন উদ্ধারকর্মী। ত্রিশূলী, নুয়াকোট",

                content: "জলবায়ু পরিবর্তনের কারণে উঁচু পর্বতের পাথর ও বরফের ভারসাম্য নষ্ট হচ্ছে। এর ফলে বাড়ছে বড় ধরনের প্রাকৃতিক বিপর্যয়ের ঝুঁকি। নেপাল ও চীনের তিব্বত সীমান্ত অঞ্চলে তেমনই এক হিমবাহ ধস ও বন্যায় প্রাণ গেছে অন্তত ৩৫৯ জনের। বিজ্ঞানীরা বলছেন, এই দুর্যোগ জলবায়ু পরিবর্তনেরই ফল।",
                category: "news",
                image: "https://media.prothomalo.com/prothomalo-bangla%2F2026-08-27%2Fk5w0tsby%2Fnepal-afp.jpg?rect=0%2C0%2C3345%2C2230&w=622&auto=format%2Ccompress&fmt=avif",
                date: "২৭ আগস্ট ২০২৬",
                author: "ফুয়াদ আল মাইমুন",
                views: "২৫০০",
                featured: true
            },
            {
                id: 2,
                title: "বাংলাদেশ বিশ্ব কাপে নতুন মাইলফলক অর্জন করেছে",
                description: "জাতীয় ক্রীড়া দলটি আন্তর্জাতিক পর্যায়ে অসাধারণ পারফরম্যান্স দেখিয়েছে।",
                content: "বাংলাদেশের ক্রীড়া দল এই বছর আন্তর্জাতিক মঞ্চে অভূতপূর্ব সাফল্য অর্জন করেছে। তারা বিশ্ব কাপে অংশগ্রহণ করে দেশের জন্য সম্মান এনেছে। এই সাফল্য আমাদের তরুণ ক্রীড়াবিদদের প্রতিভা এবং কঠোর পরিশ্রমের ফল। প্রশিক্ষক এবং কোচিং স্টাফের নিবেদিত প্রচেষ্টা এই অর্জনকে সম্ভব করেছে।",
                category: "sports",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
                date: "২৩ আগস্ট ২০২৬",
                author: "সালিম আহমেদ",
                views: "২৫০০",
                featured: true
            },
            {
                id: 2,
                title: "নতুন প্রযুক্তি কেন্দ্র ঢাকায় উদ্বোধিত হয়েছে",
                description: "আইটি সেক্টরে যুগান্তকারী পদক্ষেপ নেওয়া হয়েছে।",
                content: "ঢাকায় একটি অত্যাধুনিক প্রযুক্তি কেন্দ্র আজ আনুষ্ঠানিকভাবে উদ্বোধন করা হয়েছে। এই কেন্দ্রটি তরুণ উদ্যোক্তা এবং প্রযুক্তিবিদদের জন্য একটি হাব হিসেবে কাজ করবে। এখানে অত্যাধুনিক সুবিধা এবং প্রশিক্ষণ প্রোগ্রাম থাকবে।",
                category: "technology",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
                date: "২২ আগস্ট ২০২৬",
                author: "রাজিব কুমার",
                views: "১৮০০",
                featured: true
            },
            {
                id: 3,
                title: "শেয়ার বাজার নতুন উচ্চতায় পৌঁছেছে",
                description: "বিনিয়োগকারীদের আস্থা বৃদ্ধি পেয়েছে এই সপ্তাহে।",
                content: "বাংলাদেশের শেয়ার বাজার আজ নতুন উচ্চতায় পৌঁছেছে। প্রধান সূচক ঢাকা স্টক এক্সচেঞ্জ সূচক ৪% বৃদ্ধি পেয়েছে। এটি গত ছয় মাসের সেরা পারফরম্যান্স। বিনিয়োগকারীরা আর্থিক খাতে আস্থাশীল দেখা যাচ্ছে।",
                category: "business",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500",
                date: "২১ আগস্ট ২০২৬",
                author: "ফারহানা রহমান",
                views: "১৪০০",
                featured: false
            },
            {
                id: 4,
                title: "প্রধানমন্ত্রী জাতীয় উন্নয়ন পরিকল্পনা উপস্থাপন করেছেন",
                description: "২০২৬-২০৩০ সালের জন্য নতুন রোডম্যাপ ঘোষণা করা হয়েছে।",
                content: "প্রধানমন্ত্রী আজ জাতীয় সংসদে দেশের উন্নয়ন পরিকল্পনা উপস্থাপন করেছেন। এই পরিকল্পনায় অবকাঠামো, শিক্ষা এবং স্বাস্থ্য সেবা খাতে বিশেষ গুরুত্ব দেওয়া হয়েছে। সরকার পরবর্তী পাঁচ বছরে জিডিপি ৭% বৃদ্ধির লক্ষ্য নির্ধারণ করেছে।",
                category: "politics",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
                date: "২০ আগস্ট ২০২৬",
                author: "করিম হোসেন",
                views: "৩২০০",
                featured: true
            },
            {
                id: 5,
                title: "জনপ্রিয় চলচ্চিত্র পরিচালক নতুন মুভি ঘোষণা করেছেন",
                description: "ঐতিহাসিক নাটকটি আগামী বছর প্রদর্শিত হবে।",
                content: "বাংলা চলচ্চিত্র ইন্ডাস্ট্রির প্রখ্যাত পরিচালক একটি নতুন চলচ্চিত্র প্রকল্পের ঘোষণা দিয়েছেন। এটি একটি ঐতিহাসিক নাটক যা ১৯৭০ সালের ঘটনার উপর ভিত্তি করে তৈরি। ছবিটিতে অংশ নিচ্ছেন দেশের শীর্ষস্থানীয় অভিনেতারা। আগামী বছর এটি প্রেক্ষাগৃহে আসবে।",
                category: "entertainment",
                image: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=500",
                date: "১৯ আগস্ট ২০২৬",
                author: "নাজমুল হোসেন",
                views: "২১০০",
                featured: false
            },
            {
                id: 6,
                title: "পরিবেশ বাঁচাতে নতুন উদ্যোগ গ্রহণ করা হয়েছে",
                description: "বৃক্ষরোপণ কর্মসূচি সারাদেশে শুরু হচ্ছে।",
                content: "সরকার জলবায়ু পরিবর্তনের বিরুদ্ধে লড়াইয়ে নতুন পদক্ষেপ নিয়েছে। এই বছর ১০ মিলিয়ন গাছ রোপণের লক্ষ্য নির্ধারণ করা হয়েছে। এই উদ্যোগে স্থানীয় সম্প্রদায়ের ব্যাপক অংশগ্রহণ দেখা যাচ্ছে।",
                category: "politics",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
                date: "১৮ আগস্ট ২০২৬",
                author: "নিলুফার আক্তার",
                views: "১৬০০",
                featured: false
            },
            {
                id: 7,
                title: "নতুন স্মার্টফোন মডেল বাজারে এসেছে",
                description: "অত্যাধুনিক ক্যামেরা এবং প্রসেসর সহ।",
                content: "একটি শীর্ষস্থানীয় প্রযুক্তি কোম্পানি তাদের সর্বশেষ স্মার্টফোন মডেল বাজারে এনেছে। এতে রয়েছে অত্যাধুনিক AI ক্যামেরা এবং দ্রুততম প্রসেসর। ব্যাটারি লাইফ ৭২ ঘণ্টা পর্যন্ত স্থায়ী হবে।",
                category: "technology",
                image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500",
                date: "১৭ আগস্ট ২০২৬",
                author: "সুমন দাস",
                views: "২৮০০",
                featured: false
            },
            {
                id: 8,
                title: "মিডিয়েভ্যাল ঐতিহ্য আবিষ্কার করা হয়েছে",
                description: "প্রাচীন মুদ্রা এবং নিদর্শন পাওয়া গেছে।",
                content: "একটি প্রত্নতাত্ত্বিক খননে বাংলাদেশের মধ্যযুগীয় ইতিহাসের গুরুত্বপূর্ণ নিদর্শন আবিষ্কার করা হয়েছে। এর মধ্যে রয়েছে দুর্লভ মুদ্রা এবং মৃৎপাত্র। এই আবিষ্কার আমাদের ইতিহাস সম্পর্কে নতুন আলোকপাত করবে।",
                category: "politics",
                image: "https://images.unsplash.com/photo-1578926314433-8a0c2f5ae2b1?w=500",
                date: "১৬ আগস্ট ২০২৬",
                author: "ড. রফিকুল ইসলাম",
                views: "১২০০",
                featured: false
            },
            {
                id: 9,
                title: "তরুণ ক্রিকেটার নতুন রেকর্ড স্থাপন করেছে",
                description: "টেস্ট ক্রিকেটে সর্বকনিষ্ঠ শতক।",
                content: "বাংলাদেশের এক তরুণ ক্রিকেটার টেস্ট ক্রিকেটে দেশের সর্বকনিষ্ঠ শতক রেকর্ড স্থাপন করেছে। তিনি মাত্র ৬৫ বলে এই অসাধারণ পারফরম্যান্স দেখিয়েছেন। এটি ক্রিকেটের ইতিহাসে একটি স্মরণীয় মুহূর্ত।",
                category: "sports",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
                date: "১৫ আগস্ট ২০२६",
                author: "মাসুদ রানা",
                views: "৩৫০০",
                featured: false
            },
            {
                id: 10,
                title: "রেহানা শিল্পী গ্র্যামি পুরস্কার জিতেছেন",
                description: "আন্তর্জাতিক পর্যায়ে বাঙালির সাফল্য।",
                content: "একজন বাংলাদেশী শিল্পী আন্তর্জাতিক পর্যায়ে গ্র্যামি পুরস্কার জিতেছেন। এটি বাংলাদেশের শিল্প ও সংস্কৃতির জন্য একটি বড় মর্যাদার বিষয়। বিশ্বব্যাপী তার প্রতিভা স্বীকৃতি পেয়েছে।",
                category: "entertainment",
                image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500",
                date: "১৪ আগস্ট ২०२६",
                author: "আয়েশা সুলতানা",
                views: "২৬০০",
                featured: false
            }
        ];

        let currentPage = 1;
        let itemsPerPage = 6;
        let currentCategory = 'all';
        let filteredNews = [...newsDatabase];

        // ============ INITIALIZATION ============
        document.addEventListener('DOMContentLoaded', () => {
            setCurrentDate();
            initializeNavToggle();
            renderFeaturedSection();
            renderTrendingList();
            renderCommentsList();
            renderNewsGrid();
            renderPagination();
        });

        function setCurrentDate() {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const today = new Date().toLocaleDateString('bn-BD', options);
            document.getElementById('current-date').textContent = today;
        }

        // ============ NAVIGATION ============
        function initializeNavToggle() {
            const toggle = document.getElementById('nav-toggle');
            const menu = document.getElementById('nav-menu');
            toggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
            
            document.addEventListener('click', (e) => {
                if (!e.target.closest('header')) {
                    menu.classList.remove('active');
                }
            });
        }

        // ============ FEATURED SECTION ============
        function renderFeaturedSection() {
            const featured = newsDatabase.filter(n => n.featured);
            if (featured.length === 0) return;

            const mainFeatured = featured[0];
            const sideFeatured = featured.slice(1, 3);

            let html = `
                <div class="featured-heading">🔴 শীর্ষ সংবাদ</div>
                <div class="featured-grid">
                    <div class="featured-main" onclick="openNewsModal(${mainFeatured.id})">
                        <img src="${mainFeatured.image}" alt="" class="featured-main-img">
                        <div class="featured-main-content">
                            <span class="category">${getCategoryName(mainFeatured.category)}</span>
                            <h2>${mainFeatured.title}</h2>
                            <p>${mainFeatured.description}</p>
                            <div class="article-meta">
                                <span>লেখক: ${mainFeatured.author}</span>
                                <span>${mainFeatured.date}</span>
                            </div>
                        </div>
                    </div>
                    <div class="featured-side">
            `;

            sideFeatured.forEach(article => {
                html += `
                    <div class="featured-item" onclick="openNewsModal(${article.id})">
                        <img src="${article.image}" alt="" class="featured-item-img">
                        <div class="featured-item-content">
                            <h3>${article.title}</h3>
                            <p>${article.date}</p>
                        </div>
                    </div>
                `;
            });

            html += `</div></div></div>`;
            document.getElementById('featured-section').innerHTML = html;
        }

        // ============ TRENDING LIST ============
        function renderTrendingList() {
            const sorted = [...newsDatabase].sort((a, b) => parseInt(b.views) - parseInt(a.views)).slice(0, 5);
            let html = '';
            sorted.forEach((article, index) => {
                html += `
                    <div class="trending-item" onclick="openNewsModal(${article.id})" style="cursor: pointer;">
                        <h4><span class="count">${index + 1}.</span> ${article.title}</h4>
                        <p>${article.views} পড়েছেন</p>
                    </div>
                `;
            });
            document.getElementById('trending-list').innerHTML = html;
        }

        // ============ COMMENTS LIST ============
        function renderCommentsList() {
            const comments = [
                { author: "আহমেদ আলী", text: "অসাধারণ খবর, ধন্যবাদ", article: "বাংলাদেশ বিশ্ব কাপে নতুন মাইলফলক অর্জন করেছে" },
                { author: "ফাতেমা বেগম", text: "এই উদ্যোগ খুবই প্রশংসনীয়", article: "পরিবেশ বাঁচাতে নতুন উদ্যোগ গ্রহণ করা হয়েছে" },
                { author: "করিম সাহেব", text: "আমাদের গর্ব করার মতো অর্জন", article: "রেহানা শিল্পী গ্র্যামি পুরস্কার জিতেছেন" },
                { author: "সালমা খাতুন", text: "ভবিষ্যৎ উজ্জ্বল হবে এই উদ্যোগে", article: "নতুন প্রযুক্তি কেন্দ্র ঢাকায় উদ্বোধিত হয়েছে" },
                { author: "জামিল আহমেদ", text: "দুর্দান্ত পারফরম্যান্স দেখেছি", article: "তরুণ ক্রিকেটার নতুন রেকর্ড স্থাপন করেছে" }
            ];

            let html = '';
            comments.forEach(comment => {
                html += `
                    <div class="trending-item">
                        <h4>${comment.author}</h4>
                        <p style="font-size: 11px;">"${comment.text}"</p>
                        <p style="font-size: 11px; color: var(--primary-color);">- ${comment.article}</p>
                    </div>
                `;
            });
            document.getElementById('comments-list').innerHTML = html;
        }

        // ============ NEWS GRID ============
        function renderNewsGrid() {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageNews = filteredNews.slice(start, end);

            let html = '<div class="news-grid">';
            pageNews.forEach(article => {
                html += `
                    <div class="news-card" onclick="openNewsModal(${article.id})">
                        <img src="${article.image}" alt="" class="news-card-img">
                        <div class="news-card-content">
                            <span class="news-card-category">${getCategoryName(article.category)}</span>
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <div class="news-card-footer">
                                <span>${article.date}</span>
                                <a href="#" class="read-more" onclick="event.preventDefault(); openNewsModal(${article.id})">বিস্তারিত →</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            document.getElementById('news-section').innerHTML = html;
        }

        // ============ PAGINATION ============
        function renderPagination() {
            const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
            let html = '';

            if (currentPage > 1) {
                html += `<button onclick="changePage(${currentPage - 1})">← আগের</button>`;
            }

            for (let i = 1; i <= totalPages; i++) {
                if (i === currentPage) {
                    html += `<button class="active">${i}</button>`;
                } else {
                    html += `<button onclick="changePage(${i})">${i}</button>`;
                }
            }

            if (currentPage < totalPages) {
                html += `<button onclick="changePage(${currentPage + 1})">পরের →</button>`;
            }

            document.getElementById('pagination').innerHTML = html || '';
        }

        function changePage(page) {
            currentPage = page;
            renderNewsGrid();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ============ CATEGORIES ============
        function loadCategory(category) {
            currentCategory = category;
            currentPage = 1;
            if (category === 'all') {
                filteredNews = [...newsDatabase];
            } else {
                filteredNews = newsDatabase.filter(n => n.category === category);
            }
            renderNewsGrid();
            renderPagination();
            renderTrendingList();
            document.getElementById('nav-menu').classList.remove('active');
        }

        function getCategoryName(category) {
            const names = {
                'politics': 'রাজনীতি',
                'sports': 'ক্রীড়া',
                'technology': 'প্রযুক্তি',
                'entertainment': 'বিনোদন',
                'business': 'ব্যবসা',
                'news' : "খবর"
            };
            return names[category] || category;
        }

        // ============ SEARCH ============
        function searchNews() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            if (!query) {
                filteredNews = [...newsDatabase];
            } else {
                filteredNews = newsDatabase.filter(n =>
                    n.title.toLowerCase().includes(query) ||
                    n.description.toLowerCase().includes(query) ||
                    n.content.toLowerCase().includes(query)
                );
            }
            currentPage = 1;
            renderNewsGrid();
            renderPagination();
            document.getElementById('nav-menu').classList.remove('active');
        }

        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchNews();
            }
        });

        // ============ MODAL ============
        function openNewsModal(id) {
            const article = newsDatabase.find(n => n.id === id);
            if (!article) return;

            document.getElementById('modal-img').src = article.image;
            document.getElementById('modal-category').textContent = getCategoryName(article.category);
            document.getElementById('modal-title').textContent = article.title;
            document.getElementById('modal-date').textContent = `লেখক: ${article.author} | ${article.date}`;
            document.getElementById('modal-description').textContent = article.description;
            document.getElementById('modal-full-content').textContent = article.content;
            document.getElementById('newsModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('newsModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        window.onclick = (event) => {
            const modal = document.getElementById('newsModal');
            if (event.target === modal) {
                closeModal();
            }
        };

        // ============ KEYBOARD NAVIGATION ============
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });