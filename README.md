# 🧑‍💻 Reactive Forms - User Management

Aplicação desenvolvida em **Angular** para gerenciamento de usuários utilizando **Reactive Forms**, com arquitetura modular baseada em **components, services e tipagem forte em TypeScript**.

O projeto demonstra boas práticas modernas de desenvolvimento front-end como:

* separação de responsabilidades
* organização escalável de componentes
* uso de services para lógica de negócio
* formulários reativos
* uso de Angular Material para UI

---

# 📸 Funcionalidades

✔️ Listagem de usuários

✔️ Visualização de informações detalhadas 

✔️ Edição de dados pessoais 

✔️ Gerenciamento de telefones 

✔️ Gerenciamento de endereços 

✔️ Gerenciamento de dependentes 

✔️ Validação de formulários com Reactive Forms 

✔️ Máscaras para CPF e telefone 

---

# 🚀 Tecnologias utilizadas

* Angular
* TypeScript
* RxJS
* Angular Material
* TailwindCSS
* ngx-mask
* PNPM
* Vitest

---

# 🏗️ Arquitetura do projeto

O projeto segue uma estrutura modular baseada em **separação por responsabilidade**.

```
src/app
│
├── components
├── services
├── interfaces
├── enums
├── pipes
├── types
└── angular-material
```

Cada camada possui uma responsabilidade clara.

---

# 🧩 Estrutura de Components

A pasta `components` contém toda a estrutura visual da aplicação.

```
components
│
├── users-list
│
├── user-informations-container
│
├── user-info-item
│
├── general-informations
├── general-informations-edit
│
├── contact-informations
├── contact-informations-edit
│   ├── address-group-edit
│   └── contact-phone-edit
│
├── user-dependents-list
├── user-dependents-list-edit
│
├── buttons-conteiners
│
└── confirmation-dialog
```

### Principais responsabilidades

**users-list**

* Exibe a lista de usuários cadastrados.

**user-informations-container**

* Container principal responsável por organizar as informações do usuário.

**user-info-item**

* Componente reutilizável para exibição de informações individuais.

**general-informations**

* Exibição das informações pessoais do usuário.

**general-informations-edit**

* Formulário para edição dessas informações.

**contact-informations**

* Exibição de telefones e endereços.

**contact-informations-edit**

* Edição de telefones e endereços.
* Contém subcomponentes:

  * `address-group-edit`
  * `contact-phone-edit`

**user-dependents-list**

* Lista de dependentes do usuário.

**user-dependents-list-edit**

* Permite edição e manipulação dos dependentes.

**confirmation-dialog**

* Dialog reutilizável para confirmação de ações.

**buttons-conteiners**

* Componente responsável por agrupar botões de ação (salvar, cancelar etc).

---

# ⚙️ Services

A pasta `services` contém a lógica de negócio da aplicação.

Principais serviços:

**users.service**

* Gerenciamento da lista de usuários.

**update-user.service**

* Atualização de informações de usuário.

**user-form-raw-value.service**

* Conversão de dados do formulário.

**countries / states / cities services**

* Fornecimento de dados de localização.

---

# 🧠 Conceitos aplicados

O projeto utiliza vários conceitos importantes do Angular:

### Reactive Forms

Uso de formulários reativos para controle de estado e validação.

### Arquitetura baseada em Services

A lógica de negócio fica isolada da camada de apresentação.

### Pipes customizados

* formatação de CPF
* formatação de telefone
* transformação de estado civil

### Tipagem forte

Uso de:

* interfaces
* enums
* types

para evitar inconsistências de dados.

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta:

```bash
cd reactive-forms-project
```

Instale as dependências:

```bash
pnpm install
```

ou

```bash
npm install
```

---

# ▶️ Rodando a aplicação

```bash
pnpm start
```

ou

```bash
ng serve
```

Aplicação disponível em:

```
http://localhost:4200
```

---

# 🧪 Testes

O projeto utiliza **Vitest** para testes.

Executar testes:

```bash
pnpm test
```

---

# 📚 Aprendizados demonstrados neste projeto

* Arquitetura Angular escalável
* Componentização avançada
* Gerenciamento de formulários complexos
* Boas práticas com TypeScript
* Separação de responsabilidades
* Reutilização de componentes

---

# 👨‍💻 Autor

Desenvolvido como projeto de estudo focado em **Angular + Reactive Forms + arquitetura de aplicações front-end escaláveis**.
