// Japan Possible株式会社 - アニメーションマネージャー
// スクロール時のアニメーションをトリガーし、インタラクティブな動きを実現

(function() {
  'use strict';

  // IntersectionObserver の設定
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // セクションのアニメーション
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // 一度実行されたら監視を終了
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // すべてのセクションに監視を適用
  document.querySelectorAll('.sec').forEach(section => {
    sectionObserver.observe(section);
  });

  // 見出し、リスト、ボックスのアニメーション
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.sec h2, .sec h3, .biz, .greet');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 遅延アニメーションを適用
          const delay = (index % 3) * 0.15;
          entry.target.style.animation = `slideInLeft 0.8s cubic-bezier(.34,.1,.68,.55) ${delay}s both`;
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach(el => observer.observe(el));
  };

  // スクロール時のパララックス効果
  const parallaxInit = () => {
    const kvSection = document.querySelector('.kv');
    if (!kvSection) return;

    const updateParallax = () => {
      const scrollPos = window.pageYOffset;
      const kvRect = kvSection.getBoundingClientRect();

      // ビューポート内にある場合のみ実行
      if (kvRect.top < window.innerHeight && kvRect.bottom > 0) {
        const offset = scrollPos * 0.3;
        kvSection.style.backgroundPosition = `center calc(center + ${offset}px)`;
      }
    };

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax(); // 初期実行
  };

  // スムーズスクロール
  const smoothScrollInit = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  };

  // スクロール時のナビゲーション背景変更
  const navScrollEffect = () => {
    const header = document.querySelector('.hdr');
    const gnav = document.querySelector('.gnav');

    if (!header || !gnav) return;

    const updateNavStyle = () => {
      const scrollPos = window.pageYOffset;

      if (scrollPos > 50) {
        header.style.transition = 'all 0.3s ease';
        gnav.style.background = 'rgba(15, 14, 12, 0.95)';
        gnav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      } else {
        gnav.style.background = 'var(--bg)';
        gnav.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', updateNavStyle, { passive: true });
    updateNavStyle(); // 初期実行
  };

  // テキストのアニメーション（オプション）
  const textAnimateInit = () => {
    const elements = document.querySelectorAll('.h2, .h3, .lead p');

    elements.forEach((el, index) => {
      el.style.animation = `fadeInUp 0.8s cubic-bezier(.34,.1,.68,.55) ${index * 0.1}s both`;
    });
  };

  // ページ読み込み完了時に初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animateOnScroll();
      parallaxInit();
      smoothScrollInit();
      navScrollEffect();
      textAnimateInit();
    });
  } else {
    // 既に読み込まれている場合
    animateOnScroll();
    parallaxInit();
    smoothScrollInit();
    navScrollEffect();
    textAnimateInit();
  }

  // ウィンドウリサイズ時の再計算
  window.addEventListener('resize', () => {
    parallaxInit();
  }, { passive: true });
})();
