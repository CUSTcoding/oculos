# 🥽 Óculos

> Plataforma inteligente de orientação acadêmica baseada em IA que ajuda estudantes a escolherem o melhor caminho educacional e profissional.

---

## 📌 Sobre o projeto

O **Óculos** é uma plataforma de inteligência artificial que orienta estudantes na escolha da sua área de estudo (Ciências, Letras ou Técnico-Profissional), cursos universitários e institutos.

A IA analisa o perfil do aluno, desempenho escolar, interesses e objetivos, e gera recomendações personalizadas com base em dados educacionais.

Além disso, fornece:

- Guias de estudo para a 12ª classe
- Temas mais importantes para exames
- Plano de estudos personalizado
- Recomendações de universidades e institutos
- Recursos gratuitos (YouTube, livros, simulados)
- Relatório final em PDF com o caminho acadêmico completo

---

## 🎯 Problema

Muitos estudantes:

- Não sabem que curso escolher
- Não conhecem bem as áreas profissionais
- Não têm orientação acadêmica estruturada
- Tomam decisões baseadas em influência externa
- Não têm acesso a preparação de qualidade

---

## 💡 Solução

O Óculos resolve esse problema através de uma IA que:

- Analisa o perfil do estudante
- Sugere áreas e cursos ideais
- Mostra dificuldades e requisitos de cada área
- Cria um plano de estudo estruturado
- Aponta universidades e institutos adequados
- Gera um relatório completo de orientação

---

## ⚙️ Funcionalidades

- 🤖 Chat com IA educacional
- 🧠 Teste vocacional inteligente
- Análise de perfil do estudante
- Recomendações de cursos e áreas
- Sugestão de universidades e institutos
- Guia de estudo por disciplina
- Simulados e temas de exame
- Recursos gratuitos (YouTube e materiais)
- Geração de relatório em PDF

---

## Arquitetura (MVP)

- Frontend: React + TailwindCSS
- Backend: Python + FastAPI
- IA: LLM + RAG (Retrieval-Augmented Generation)
- Banco de dados: PostgreSQL
- Cache: Redis
- Autenticação: MagicLink e autenticação federada (google, apple ad microsoft)
- Geração de PDF: ReportLab / WeasyPrint

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/CCS/oculos.git
cd oculos
```
## Estrutura do projeto (MVP)
```bash
oculos/
│
├── frontend/        # Interface do usuário (React)
├── backend/
│       ├── api/     # API (Djano Rest Framwork)
│       └── ai/      # Módulos de IA e RAG
├── docs/            # Documentação
├── infra/           # Infraestrutura (Docker)       
└── README.md
```