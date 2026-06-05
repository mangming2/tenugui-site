import { SectionTitle } from '@/components/SectionTitle'
import { FaqAccordion, type FaqItem } from '@/components/FaqAccordion'
import { ScrollReveal } from '@/components/ScrollReveal'

const BRAND_NAME = 'KASANE'

type UseCaseItem = { id: string; number: string; visual: string; title: string; desc: string }
type ForWhoItem = { id: string; title: string; desc: string }
type LookbookItem = { id: string; visual: string; tag: string; label: string; mood: string }
type PhilosophyItem = { id: string; number: string; title: string; desc: string }

const useCases: UseCaseItem[] = [
  { id: 'neck',  number: '01', visual: 'uc-neck',  title: '넥 포인트',      desc: '셔츠 위에 가볍게 두르면 완성되는 무드' },
  { id: 'hair',  number: '02', visual: 'uc-hair',  title: '헤어 스타일링',  desc: '반묶음에 포인트로, 느슨하게 묶어도 자연스럽게' },
  { id: 'bag',   number: '03', visual: 'uc-bag',   title: '백 참 스타일링', desc: '끝이 자연스럽게 흔들리며 가방에 리듬을 더해줍니다' },
  { id: 'wrist', number: '04', visual: 'uc-wrist', title: '리스트 포인트',  desc: '팔찌 대신, 손목에 가볍게 묶는 포인트 스타일' },
]

const forWhoItems: ForWhoItem[] = [
  {
    id: 'dancer',
    title: '움직임이 있는 스타일을 가진 사람',
    desc: '댄서, 클래스를 다니는 사람, 몸으로 표현하는 것을 즐기는 사람. 움직일 때 더 살아나는 스타일을 원한다면.',
  },
  {
    id: 'aesthetic',
    title: '조용하지만 감각적인 취향을 가진 사람',
    desc: '일본 감성, 동양적 무드, 서브컬처에 공명하는 사람. 과하지 않은 것에서 깊이를 발견하는 사람.',
  },
  {
    id: 'styling',
    title: '작은 것으로 포인트를 주고 싶은 사람',
    desc: '과하지 않게, 그러나 분명히 달라 보이고 싶은 사람. 가방 하나, 손목 하나에서 무드가 결정된다고 생각하는 사람.',
  },
]

const lookbookItems: LookbookItem[] = [
  { id: 'street', visual: 'lb-street', tag: 'Scene 01', label: 'street snap',  mood: '도시의 흐름 속에 녹아드는 레이어드 스타일' },
  { id: 'daily',  visual: 'lb-daily',  tag: 'Scene 02', label: 'daily layer',  mood: '일상에서 자연스럽게 살아나는 포인트' },
  { id: 'quiet',  visual: 'lb-quiet',  tag: 'Scene 03', label: 'quiet accent', mood: '말하지 않아도 전해지는 감각' },
]

const philosophyItems: PhilosophyItem[] = [
  { id: 'add',      number: '01', title: '가볍게 더하다',       desc: '티셔츠 하나에 묶는 것만으로 전혀 달라지는 분위기. 거창하지 않아도 좋습니다.' },
  { id: 'move',     number: '02', title: '움직임에서 살아나다', desc: '걷고, 춤추고, 움직일 때 더 빛나는 디자인. 정지된 사진보다 살아있는 순간에 어울립니다.' },
  { id: 'way',      number: '03', title: '방식에 따라 달라진다', desc: '같은 천이라도 묶는 방법에 따라 전혀 다른 무드가 됩니다. 정해진 정답은 없습니다.' },
  { id: 'material', number: '04', title: '소재가 말하게 한다',  desc: '과하지 않은 프린트, 손에 닿는 질감, 색이 전달하는 무드. 디자인보다 소재가 먼저입니다.' },
]

const faqItems: FaqItem[] = [
  {
    id: 'style',
    question: '어떤 스타일에 어울리나요?',
    answer: '캐주얼부터 스트릿, 레이어드 룩까지 다양하게 어울립니다. 특정 스타일을 타지 않고, 오히려 포인트 하나로 전체 무드를 바꿔주는 아이템입니다.',
  },
  {
    id: 'gender',
    question: '남녀 공용인가요?',
    answer: '네, 젠더리스로 디자인되었습니다. 사이즈나 컷이 아닌 묶는 방식으로 연출하는 아이템이라 누구에게나 잘 어울립니다.',
  },
  {
    id: 'launch',
    question: '언제 출시되나요?',
    answer: '현재 준비 중입니다. 출시 소식은 인스타그램을 통해 가장 먼저 공유드릴 예정입니다. 팔로우해두시면 놓치지 않으실 수 있습니다.',
  },
  {
    id: 'material',
    question: '어떤 소재인가요?',
    answer: '테누구이 특유의 얇고 가벼운 면 소재를 기반으로 합니다. 부드럽게 늘어지면서도 묶었을 때 형태가 잘 잡히는 것이 특징입니다.',
  },
  {
    id: 'purchase',
    question: '어디서 구매할 수 있나요?',
    answer: '아직 정식 출시 전입니다. 관심 있으신 분들은 인스타그램 팔로우 또는 메일로 문의 주시면 출시 알림을 드리겠습니다.',
  },
]

export default function Page() {
  return (
    <main>
      <ScrollReveal />

      {/* ── 1. Hero ─────────────────────────────────── */}
      <section className="hero" aria-label="히어로">
        <div className="hero-noise" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="hero-eyebrow fade-up fade-up-d1">Styling Cloth Brand</p>
          <h1 className="hero-heading fade-up fade-up-d2">
            {'스타일은\n묶는 방식에서\n시작된다'}
          </h1>
          <p className="hero-sub fade-up fade-up-d3">테누구이에서 출발한 스타일링 클로스 브랜드</p>
          <div className="hero-cta fade-up fade-up-d4">
            <a href="#concept" className="btn btn-primary">브랜드 소개 보기</a>
            <button
              className="btn btn-outline"
              disabled
              aria-disabled="true"
              aria-label="인스타그램 준비중"
            >
              Instagram — 준비중
            </button>
          </div>
        </div>
        <div className="hero-scroll-hint fade-up fade-up-d5" aria-hidden="true">
          <span>scroll</span>
        </div>
      </section>

      {/* ── 2. Brand Concept ────────────────────────── */}
      <section id="concept" className="concept" aria-labelledby="concept-heading">
        <div className="container scroll-reveal">
          <div className="concept-inner">
            <div>
              <SectionTitle eyebrow="Brand Concept" heading={'천이 아닌,\n무드를 팝니다'} headingSize="md" />
            </div>
            <div className="concept-body">
              <p>
                테누구이는 수백 년의 역사를 가진 일본의 면직물입니다. 저희는 그 소재를 빌려,
                현대적인 스타일링의 언어로 다시 씁니다.
              </p>
              <p>
                목에 가볍게 두르거나, 머리에 묶거나, 가방에 매달거나. 하나의 천이 만드는
                분위기는 묶는 방식에 따라 전혀 달라집니다. 단순한 천 제품이 아니라, 무드와
                스타일링을 담은 브랜드입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Styling Use Cases ────────────────────── */}
      <section className="use-cases" aria-label="스타일링 활용법">
        <div className="container">
          <div className="scroll-reveal">
            <SectionTitle eyebrow="Styling" heading={'한 장의 천이\n만드는 분위기'} headingSize="lg" />
          </div>
          <div className="use-cases-grid">
            {useCases.map((item, i) => (
              <article key={item.id} className={`use-case-card scroll-reveal scroll-reveal-d${(i % 4) + 1}`}>
                <div className={`use-case-visual ${item.visual}`} aria-hidden="true" />
                <div className="use-case-info">
                  <span className="use-case-number">{item.number}</span>
                  <h3 className="use-case-title">{item.title}</h3>
                  <p className="use-case-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. For Who ──────────────────────────────── */}
      <section className="for-who" aria-label="이런 분들에게">
        <div className="container">
          <div className="scroll-reveal">
            <SectionTitle eyebrow="For Who" heading="이런 분들에게" headingSize="lg" />
          </div>
          <ul className="for-who-list" role="list">
            {forWhoItems.map((item, i) => (
              <li key={item.id} className={`for-who-item scroll-reveal scroll-reveal-d${i + 1}`}>
                <h3 className="for-who-title">{item.title}</h3>
                <p className="for-who-desc">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Lookbook Preview ─────────────────────── */}
      <section className="lookbook" aria-label="룩북 프리뷰">
        <div className="container">
          <div className="scroll-reveal">
            <SectionTitle eyebrow="Lookbook" heading="무드를 보여드립니다" headingSize="lg" />
          </div>
          <div className="lookbook-grid">
            {lookbookItems.map((item, i) => (
              <div key={item.id} className={`lookbook-card ${item.visual} scroll-reveal scroll-reveal-d${i + 1}`}>
                <div className="lookbook-overlay">
                  <span className="lookbook-tag">{item.tag}</span>
                  <h3 className="lookbook-label">{item.label}</h3>
                  <p className="lookbook-mood">{item.mood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Philosophy ───────────────────────────── */}
      <section className="philosophy" aria-label="브랜드 철학">
        <div className="container">
          <div className="scroll-reveal">
            <SectionTitle eyebrow="Philosophy" heading={'우리가 전달하고\n싶은 것들'} headingSize="lg" />
          </div>
          <div className="philosophy-grid">
            {philosophyItems.map((item, i) => (
              <div key={item.id} className={`philosophy-item scroll-reveal scroll-reveal-d${(i % 4) + 1}`}>
                <span className="philosophy-number">{item.number}</span>
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────── */}
      <section className="faq" aria-label="자주 묻는 질문">
        <div className="container">
          <div className="scroll-reveal">
            <SectionTitle eyebrow="FAQ" heading="자주 묻는 것들" headingSize="lg" />
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── 8. Footer / Final CTA ───────────────────── */}
      <footer className="footer" aria-label="푸터">
        <div className="container">
          <p className="footer-eyebrow">Coming Soon</p>
          <h2 className="footer-heading">곧 공개됩니다</h2>
          <p className="footer-sub">새로운 것이 도착하고 있습니다</p>
          <nav className="footer-links" aria-label="소셜 및 문의">
            <span className="footer-link footer-link-disabled" aria-label="인스타그램 준비중">Instagram</span>
            <span className="footer-sep" aria-hidden="true" />
            <a href="mailto:hello@kasane.kr" className="footer-link" aria-label="문의 메일 보내기">Contact</a>
          </nav>
          <div className="footer-bottom">
            <span className="footer-brand">{BRAND_NAME}</span>
            <span className="footer-copy">© 2026 {BRAND_NAME}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
