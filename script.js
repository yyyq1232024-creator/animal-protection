// ================= 1. 数据配置与国际化 =================
let currentLang = 'zh';

// 翻译字典
const translations = {
    zh: {
        logo: "飞翔的精灵",
        nav_home: "首页",
        nav_gallery: "摄影作品",
        nav_acts: "爱心活动",
        nav_about: "关于我们",
        hero_title: "守护自然，从我做起",
        hero_desc: "每一份捐赠，都是对生命的敬畏与支持。",
        hero_btn: "点击了解更多",
        stats_prefix: "截止",
        stats_suffix: "本站收到爱心反馈",
        stats_count: "条 / 累计募捐 50万+ 元",
        home_gallery_title: "最新摄影作品",
        home_gallery_btn: "查看更多作品 (翻页)",
        gallery_card_btn: "我要贡献一份力量",
        home_act_title: "最新活动",
        home_act_btn: "了解更多内容 & 分类",
        friend_links: "友情链接",
        copyright: "© 2025 飞翔的精灵 版权所有",
        act_page_title: "爱心活动中心",
        act_page_desc: "参与我们，共同守护这颗星球",
        filter_all: "全部活动",
        filter_fund: "爱德基金会",
        filter_zoo: "红山动物园",
        filter_personal: "个人活动",
        back_home: "返回首页",
        back_list: "返回活动列表",
        art_donate_btn: "为该活动捐赠",
        donate_modal_title: "我来献爱心",
        donate_confirm: "确认献爱心",
        env_title: "感谢您的爱心",
        env_text: "高清摄影作品及捐助证书<br>请前往邮箱查看",
        close: "关闭",
        all_gallery: "全部摄影作品",
        prev_page: "上一页",
        next_page: "下一页",
        currency: "元",
        inp_name_ph: "您的昵称 (选填)",
        inp_email_ph: "邮箱 (用于接收证书)",
        inp_custom_ph: "自定义金额",
        date_prefix: "发布日期：",
        cat_prefix: " | 分类：",
        about_title: "关于我们",
        about_desc: "连接人与自然，传递爱与希望",
        about_mission_title: "我们的使命",
        about_mission_p1: "“飞翔的精灵”成立于2020年，是一个致力于野生动物保护与自然生态恢复的公益平台。",
        about_mission_p2: "通过汇聚摄影师的镜头语言与爱心人士的捐助，我们将善意转化为实际的保护行动。",
        about_val_1: "公开透明的募捐流程",
        about_val_2: "专业的野保执行团队",
        about_team_title: "核心团队",
        ph_photographer: "摄影师",
        ph_time: "拍摄时间",
        ph_location: "拍摄地点",
        ph_equip: "拍摄设备",
        ph_donate_btn: "支持这位摄影师",
        ph_donate_tip: "您的捐赠将用于野外拍摄设备的维护与生态保护。"
    },
    en: {
        logo: "Flying Spirits",
        nav_home: "Home",
        nav_gallery: "Gallery",
        nav_acts: "Activities",
        nav_about: "About Us",
        hero_title: "Protect Nature, Start Now",
        hero_desc: "Every donation is a tribute to life.",
        hero_btn: "Learn More",
        stats_prefix: "As of",
        stats_suffix: "feedback received:",
        stats_count: "items / Raised 500k+ CNY",
        home_gallery_title: "Latest Photography",
        home_gallery_btn: "View More (Pagination)",
        gallery_card_btn: "Contribute Now",
        home_act_title: "Latest Activities",
        home_act_btn: "Explore More & Filters",
        friend_links: "Friendly Links",
        copyright: "© 2025 Flying Spirits. All Rights Reserved.",
        act_page_title: "Activities Center",
        act_page_desc: "Join us to guard this planet together.",
        filter_all: "All",
        filter_fund: "Amity Foundation",
        filter_zoo: "Hongshan Zoo",
        filter_personal: "Personal",
        back_home: "Back to Home",
        back_list: "Back to List",
        art_donate_btn: "Donate to this Activity",
        donate_modal_title: "Make a Donation",
        donate_confirm: "Confirm Donation",
        env_title: "Thank You!",
        env_text: "HD Photos & Certificate<br>will be sent to your email.",
        close: "Close",
        all_gallery: "All Photography",
        prev_page: "Prev",
        next_page: "Next",
        currency: "CNY",
        inp_name_ph: "Nickname (Optional)",
        inp_email_ph: "Email (For Certificate)",
        inp_custom_ph: "Custom Amount",
        date_prefix: "Date: ",
        cat_prefix: " | Type: ",
        about_title: "About Us",
        about_desc: "Connecting People & Nature with Hope.",
        about_mission_title: "Our Mission",
        about_mission_p1: "Founded in 2020, Flying Spirits is a platform dedicated to wildlife protection and ecological restoration.",
        about_mission_p2: "Through the lens of photographers and the support of donors, we turn goodwill into action.",
        about_val_1: "Transparent Process",
        about_val_2: "Professional Team",
        about_team_title: "Core Team",
        ph_photographer: "Photographer",
        ph_time: "Time",
        ph_location: "Location",
        ph_equip: "Equipment",
        ph_donate_btn: "Support This Work",
        ph_donate_tip: "Donations support field equipment and eco-protection."
    }
};

// 模拟图片数据
const myGalleryImages = [
    "img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg",
    "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg"
];

// 模拟活动数据
const myActivities = [
    { 
        id: 1, type: 'fund', date: "2023-02-23",
        title: "[爱德基金会] 湿地保护行动启动", 
        title_en: "[Amity] Wetland Protection Start",
        desc: "湿地被称为地球之肾。本项目旨在恢复长江中下游地区的湿地生态，志愿者们将深入保护区清理垃圾、监测水质。",
        desc_en: "Wetlands are the kidney of the earth. We aim to restore the ecology in the Yangtze River region.",
        img: "img/11.jpg",
        content: `<p><strong>湿地被誉为"地球之肾"。</strong></p><p>本次"湿地保护行动"由爱德基金会发起...</p>`,
        content_en: `<p><strong>Wetlands are the 'Kidney of the Earth'.</strong></p><p>This action is launched by Amity Foundation...</p>`
    },
    { 
        id: 2, type: 'zoo', date: "2023-03-01",
        title: "[红山动物园] 小小饲养员体验营", 
        title_en: "[Zoo] Little Keeper Camp",
        desc: "让孩子们亲手为动物准备食物、打扫笼舍，在劳动中学习科普知识，培养对生命的敬畏。",
        desc_en: "Let children prepare food and clean cages for animals, learning to respect life through labor.",
        img: "img/12.jpg",
        content: `<p>为了让孩子们更好地了解动物习性...</p>`,
        content_en: `<p>To help children better understand animal habits...</p>`
    },
    { 
        id: 3, type: 'personal', date: "2023-03-15",
        title: "[个人活动] 观鸟摄影展", 
        title_en: "[Personal] Bird Watching Expo",
        desc: "汇集独立摄影师十年心血，记录100余种珍稀鸟类的飞行瞬间。",
        desc_en: "A collection of 10 years of work, recording flight moments of 100+ rare birds.",
        img: "img/13.jpg",
        content: `<p>每一张照片背后，都有一个关于等待与守候的故事...</p>`,
        content_en: `<p>Behind every photo, there is a story about waiting...</p>`
    },
    { 
        id: 4, type: 'fund', date: "2023-03-20",
        title: "[爱德基金会] 春季植树造林", 
        title_en: "[Amity] Spring Tree Planting",
        desc: "阳春三月，前往郊区公益林基地，种植水杉和刺槐，为城市增添一抹绿。",
        desc_en: "In March, we go to the suburbs to plant metasequoia and locust trees.",
        img: "img/10.jpg",
        content: `<p>种下一棵树，就是种下希望...</p>`,
        content_en: `<p>Planting a tree is planting hope...</p>`
    }
];

// 切换语言逻辑
function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.getElementById('langText').innerText = currentLang === 'zh' ? 'EN' : '中';
    updatePageLanguage();
}

// 更新页面所有文本
function updatePageLanguage() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(t[key]) el.innerHTML = t[key];
    });
    document.getElementById('inp_name').placeholder = t.inp_name_ph;
    document.getElementById('inp_email').placeholder = t.inp_email_ph;
    document.getElementById('customVal').placeholder = t.inp_custom_ph;

    renderHomeGallery();
    renderHomeActs();
    
    // 保持筛选状态
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if(activeFilterBtn) {
        let type = 'all';
        if(activeFilterBtn.innerText.includes('爱德') || activeFilterBtn.innerText.includes('Amity')) type = 'fund';
        if(activeFilterBtn.innerText.includes('红山') || activeFilterBtn.innerText.includes('Zoo')) type = 'zoo';
        if(activeFilterBtn.innerText.includes('个人') || activeFilterBtn.innerText.includes('Personal')) type = 'personal';
        filterActs(type, activeFilterBtn);
    }
    
    if(document.getElementById('galleryModal').style.display === 'flex') {
        renderPage();
    }
}

// ================= 2. 轮播图逻辑 (Carousel) =================
const bannerImages = ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg'];
let bannerIndex = 0;
let bannerTimer = null;

function initHeroCarousel() {
    const dotsContainer = document.getElementById('heroDots');
    dotsContainer.innerHTML = '';
    bannerImages.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.onclick = () => setBanner(idx);
        dotsContainer.appendChild(dot);
    });
    startAutoPlay();
}

function updateBanner() {
    const heroSection = document.getElementById('heroSection');
    heroSection.style.backgroundImage = `url('${bannerImages[bannerIndex]}')`;
    document.querySelectorAll('.dot').forEach((d, idx) => {
        d.classList.toggle('active', idx === bannerIndex);
    });
}

function startAutoPlay() {
    if (bannerTimer) clearInterval(bannerTimer);
    bannerTimer = setInterval(() => {
        bannerIndex = (bannerIndex + 1) % bannerImages.length;
        updateBanner();
    }, 5000); 
}

function changeBanner(step) {
    bannerIndex += step;
    if (bannerIndex < 0) bannerIndex = bannerImages.length - 1;
    if (bannerIndex >= bannerImages.length) bannerIndex = 0;
    updateBanner();
    startAutoPlay();
}

function setBanner(idx) {
    bannerIndex = idx;
    updateBanner();
    startAutoPlay();
}

// ================= 3. SPA 路由导航逻辑 (Router) =================
function navigateTo(pageId) {
    // 隐藏所有页面，显示目标页面
    document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0, 0);

    if(pageId === 'activities') {
        filterActs('all', document.querySelector('.filter-btn')); 
    }
}

// ================= 4. 数据渲染逻辑 (Rendering) =================

// 生成包含ID的图片数据用于详情页
const galleryData = Array.from({length: 24}, (_, i) => ({
    id: i,
    title: `摄影作品 ${i+1}`, 
    title_en: `Photo Work ${i+1}`,
    img: myGalleryImages[i % myGalleryImages.length], 
    desc: "捕捉自然瞬间，定格美好永恒。",
    desc_en: "Capture Nature Moments, Freeze the Beauty.",
    author: ["Li Ming", "Sarah", "Unknown", "John Doe"][i % 4],
    location: ["Yunnan, China", "Sichuan, China", "Amazon Rainforest", "Nanjing, China"][i % 4]
}));

// 打开图片详情页
function openPhotoDetail(id) {
    const item = galleryData.find(d => d.id === id);
    if(!item) return;

    document.getElementById('galleryModal').style.display = 'none';

    const t = translations[currentLang];
    const title = currentLang === 'zh' ? item.title : item.title_en;
    const desc = currentLang === 'zh' ? item.desc : item.desc_en;

    document.getElementById('detail-img-full').src = item.img;
    document.getElementById('detail-title').innerText = title;
    document.getElementById('detail-desc').innerText = desc;
    document.getElementById('detail-author').innerText = item.author;
    document.getElementById('detail-loc').innerText = item.location;

    navigateTo('photo-detail');
}

// 渲染单个图片卡片HTML
function renderPhotoCard(item) {
    const btnText = translations[currentLang].gallery_card_btn;
    const title = currentLang === 'zh' ? item.title : (item.title_en || item.title);
    const desc = currentLang === 'zh' ? item.desc : (item.desc_en || item.desc);

    return `
    <div class="photo-card" onclick="openPhotoDetail(${item.id})">
        <img src="${item.img}">
        <div class="photo-overlay">
            <div>
                <div style="font-weight:bold; font-size:18px;">${title}</div>
                <div style="font-size:12px; opacity:0.8;">${desc}</div>
            </div>
            <button class="donate-btn-small" onclick="event.stopPropagation(); openDonate('${title}')">${btnText}</button>
        </div>
    </div>`;
}

// 渲染首页预览图片
function renderHomeGallery() {
    document.getElementById('homeGallery').innerHTML = galleryData.slice(0, 4).map(renderPhotoCard).join('');
}

// 渲染首页活动预览
function renderHomeActs() {
    const html = myActivities.slice(0, 2).map(act => {
        const title = currentLang === 'zh' ? act.title : act.title_en;
        const desc = currentLang === 'zh' ? act.desc : act.desc_en;
        return `
        <div class="act-card" onclick="openArticlePage(${act.id})">
            <img src="${act.img}" class="act-img">
            <div class="act-content">
                <div class="act-title">${title}</div>
                <div class="act-desc">${desc}</div>
                <div class="act-date">${act.date}</div>
            </div>
        </div>`;
    }).join('');
    document.getElementById('homeActivityPreview').innerHTML = html;
}

// 渲染完整活动列表
function renderFullActs(list) {
    const grid = document.getElementById('fullActivityGrid');
    grid.innerHTML = list.map(act => {
        const title = currentLang === 'zh' ? act.title : act.title_en;
        const desc = currentLang === 'zh' ? act.desc : act.desc_en;
        const tagMap = {
            'fund': currentLang === 'zh' ? '基金会' : 'Fund',
            'zoo': currentLang === 'zh' ? '动物园' : 'Zoo',
            'personal': currentLang === 'zh' ? '个人' : 'Personal'
        };

        return `
        <div class="act-card" onclick="openArticlePage(${act.id})">
            <img src="${act.img}" class="act-img">
            <div class="act-content">
                <span class="act-tag">${tagMap[act.type]}</span>
                <div class="act-title">${title}</div>
                <div class="act-desc">${desc}</div>
                <div class="act-date">${act.date}</div>
            </div>
        </div>`;
    }).join('');
}

// 活动筛选功能
function filterActs(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    const list = type === 'all' ? myActivities : myActivities.filter(a => a.type === type);
    renderFullActs(list);
}

// 打开文章阅读页
function openArticlePage(id) {
    const act = myActivities.find(a => a.id === id);
    if(!act) return;
    
    const title = currentLang === 'zh' ? act.title : act.title_en;
    const content = currentLang === 'zh' ? act.content : act.content_en;
    const t = translations[currentLang];

    document.getElementById('article-img').src = act.img;
    document.getElementById('article-title').innerText = title;
    document.getElementById('article-meta').innerText = `${t.date_prefix}${act.date}${t.cat_prefix}${act.type}`;
    document.getElementById('article-body').innerHTML = content;
    
    navigateTo('article');
}

// ================= 5. 交互与弹窗逻辑 (Interactions) =================

// 打开捐款弹窗
function openDonate(name) {
    const t = translations[currentLang];
    document.getElementById('donateTarget').innerText = (currentLang === 'zh' ? "项目：" : "Project: ") + name;
    document.getElementById('donateModal').style.display = 'flex';
    document.getElementById('donateForm').style.display = 'block';
    document.getElementById('envelopeAnim').style.display = 'none';
    document.getElementById('envelopeAnim').classList.remove('active');
}

function closeDonate() {
    document.getElementById('donateModal').style.display = 'none';
}

function setVal(v) { document.getElementById('customVal').value = v; }

// 显示信封动画
function showEnvelopeAnimation() {
    document.getElementById('donateForm').style.display = 'none';
    const env = document.getElementById('envelopeAnim');
    env.style.display = 'block';
    setTimeout(() => { env.classList.add('active'); }, 100);
}

// --- 初始化执行 ---
renderHomeGallery();
renderHomeActs();
initHeroCarousel();

// 实时时钟
setInterval(() => {
    const now = new Date();
    document.getElementById('realTimeClock').innerText = now.toLocaleString();
}, 1000);

// 生成随机弹幕
const danmuTexts = ["支持环保！", "已捐赠10元", "活动很有意义", "照片太美了", "爱德基金会加油"];
const danmuArea = document.getElementById('danmuArea');
danmuTexts.forEach(txt => {
    const el = document.createElement('div');
    el.className = 'danmu-item';
    el.innerText = txt;
    el.style.background = `linear-gradient(90deg, #FF9A9E, #FECFEF)`;
    el.style.top = Math.random()*120 + 'px';
    el.style.animationDuration = (8 + Math.random()*5) + 's';
    danmuArea.appendChild(el);
});

// 画廊分页逻辑
let curPage = 1; 
function openFullGallery() {
    document.getElementById('galleryModal').style.display = 'flex';
    renderPage();
}
function renderPage() {
    const start = (curPage-1)*8;
    const list = galleryData.slice(start, start+8);
    document.getElementById('modalGrid').innerHTML = list.map(renderPhotoCard).join('');
    document.getElementById('pageInfo').innerText = `${curPage}/3`;
}
function changePage(d) {
    if(curPage + d > 0 && curPage + d <= 3) {
        curPage += d;
        renderPage();
    }
}

// 页面加载时初始化
window.onload = function() {
    renderHomeGallery();
    renderHomeActs();
    initHeroCarousel();
    
    // 设置初始语言
    document.getElementById('langText').innerText = currentLang === 'zh' ? 'EN' : '中';
    updatePageLanguage();
};