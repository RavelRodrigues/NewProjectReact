# Modelo Base React - Estrutura Profissional

Este repositório serve como um gabarito estrutural para aplicações React.js. Ele foi desenvolvido para acelerar o início de novos projetos, garantindo que as configurações de rotas, estado global e padronização de código estejam prontas para uso.

## Tecnologias Utilizadas

- **React JS**: Componentes de Função e Classes.
- **React Router v6**: Roteamento dinâmico e inteligente.
- **Redux**: Gerenciamento de estado global (Padrão Legacy).
- **Redux Saga**: Lógica para requisições assíncronas e efeitos colaterais.
- **History**: Navegação programática externa aos componentes.
- **Styled Components**: Estilização via CSS-in-JS.
- **ESLint 9+ e Prettier**: Padronização rigorosa de código.

---

## Estrutura de Pastas

```text
src/
├── assets/         # Arquivos estáticos como imagens e SVGs
├── components/     # Componentes compartilhados
├── pages/          # Componentes de página (containers)
├── routes/         # Configuração de rotas e MyRoute (Proteção)
├── services/       # Configuração de API (Axios) e History.js
├── store/          # Configuração completa do Redux
│   ├── modules/    # Reducers, Sagas, Actions e Types por domínio
│   └── index.js    # Ponto de entrada da Store
├── styles/         # Estilos globais e configurações de temas
└── App.js          # Componente raiz da aplicação
Instalação e ExecuçãoSiga os passos abaixo para rodar o projeto localmente:Instalar dependências:Bashnpm install
Iniciar servidor de desenvolvimento:Bashnpm start
Scripts DisponíveisComandoDescriçãonpm startInicia o projeto em localhost:3000npm run lintExecuta a verificação de erros do ESLint
```
