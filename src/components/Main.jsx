const features = [
  { number: '01', title: 'Компоненттер', text: 'Интерфейсті шағын әрі қайта қолдануға болатын бөліктерге бөлеміз.' },
  { number: '02', title: 'Құрылым', text: 'Header, Main және Footer компоненттері App ішінде біріктірілген.' },
  { number: '03', title: 'React', text: 'JSX көмегімен түсінікті интерфейс жасап, оны браузерде көрсетеміз.' },
]

export default function Main() {
  return (
    <main id="home" className="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> React негіздері</p>
          <h1 id="hero-title">Бір интерфейс.<br /><span>Үш компонент.</span></h1>
          <p className="hero-description">
            React-та интерфейсті жеке компоненттерге бөліп құру оңай. Бұл жоба —
            Header, Main және Footer компоненттерінің қарапайым мысалы.
          </p>
          <a className="primary-button" href="#about">Компоненттерді көру <span aria-hidden="true">↓</span></a>
        </div>
        <div className="code-card" aria-label="Компоненттер құрылымының мысалы">
          <div className="code-top"><span className="window-dots"><i /><i /><i /></span><span>App.jsx</span><span className="code-badge">JSX</span></div>
          <pre><code><span className="code-purple">function</span> <span className="code-yellow">App</span>() {'{'}{'\n'}  <span className="code-purple">return</span> ({'\n'}    &lt;&gt;{'\n'}      &lt;<span className="code-blue">Header</span> /&gt;{'\n'}      &lt;<span className="code-blue">Main</span> /&gt;{'\n'}      &lt;<span className="code-blue">Footer</span> /&gt;{'\n'}    &lt;/&gt;{'\n'}  ){'\n'}{'}'}</code></pre>
          <div className="code-caption"><span className="caption-check">✓</span> Барлығы бір жерде жиналды</div>
        </div>
      </section>

      <section id="about" className="features" aria-labelledby="features-title">
        <div className="section-heading"><div><p className="eyebrow">Қарапайым құрылым</p><h2 id="features-title">Үш бөлік — бір бет</h2></div><p>Әр компонент өз міндетін атқарады.</p></div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
