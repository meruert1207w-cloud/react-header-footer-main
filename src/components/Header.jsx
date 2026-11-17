export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Басты бет">
        <span className="brand-mark" aria-hidden="true">R</span>
        <span>React<span className="brand-light">Start</span></span>
      </a>
      <nav aria-label="Негізгі навигация">
        <a href="#home">Басты бет</a>
        <a href="#about">Жоба туралы</a>
      </nav>
      <a className="header-link" href="https://react.dev/" target="_blank" rel="noreferrer">
        React үйрену <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
