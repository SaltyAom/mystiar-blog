const components = {
    h1: ({ children }) => <h1 className="h1">{children}</h1>,
    h2: ({ children }) => <h2 className="h2">{children}</h2>,
    p: ({ children }) => <p className="p">{children}</p>,
    a: ({ children, href }) => (
        <a href={href} rel="no-refferer no-reopener" className="a">
            {children}
        </a>
    ),
    pre: ({ children }) => <pre className="pre">{children}</pre>,
    code: ({ children }) => <code className="code">{children}</code>
}

export default components
