# 🐤 Chickenbook

Our goal is to create an app where members of Junior Guru[^1] can log in and create a simple developer profile they can show to the world. Anybody will be able to browse the profiles. There will be filters to view them according to a specific field, programming language and so on. Theoretically, companies might use such a database when looking for junior developers, as well as people looking for collaborators for their projects.

**Why Chickenbook?** Junior Guru has a chicken, more precisely a chick, in its logo, and there is also a chick/chicken bot on the community's Discord server. Chick would be more precise, but I thought Chickbook might be misleading 😅, so I decided on Chickenbook instead.

[^1]: Czechoslovakian developer community

## 🏁 Quick Start

### Run the app locally

1. Clone the repository
```
git clone https://github.com/jg-chickenbook/chickenbook.git
```
2. Open the project and install dependencies
```
npm install
```
3. Run the app by using this command
```
npm run dev
```

4. The app will be ready at:
```
http://localhost:5173/chickenbook/
```

### See the app deployed in GitHub pages
```
https://jg-chickenbook.github.io/chickenbook/
```

## 🧑‍💻 Usage
- You can currently see all the public profiles. 
  - The profiles consist of "dummy data" for now.
- A detailed profile can be displayed by clicking on the profile card.
- It's also possible to register and log into the app.

</br>
</br>
<details close><summary><b>🤝 Collaboration Guide</b></summary>
</br>
</br>

`ISSUE` ➡️ `BRANCH` ➡️ `COMMITS` & `PUSHES` ➡️ `PULL REQUEST` ➡️ `CODE REVIEW` ➡️ `MERGE into DEV`

### 🔥 Issue
- Always use corresponding labels for an issue `feature`, `bug`, `documentation`,  `refactoring`, `help wanted`
- You can use an issue template for a feature or bug but feel free to use a blank issue as well. The issue description should describe a given feature/problem/bug/task.

### 🌿 Branch
Each branch should be created from an issue and issues should ideally mirror tasks on MS Teams.

| Branch Category (label)      | Meaning       |
| -----------: | ------------- |
| `main`          | for deployment        |
| `dev`           | for putting the code together before deployment |
| `gh-pages`      | for deployment to GitHub pages |
| `feature`       | for adding a feature  |
| `bug`           | for defining and fixing a bug  |
| `hotfix`        | for quickly fixing critical issues, usually with a temporary solution  |
| `refactoring`   | for restructuring and improving project/code |
| `test`          | for experimenting something which is not an issue |
| `docs`          | for documntation updates |

The name of the branch should has the following format:

`<branch-category>/<issue-number>-<issue-name>`
```
EXAMPLE: feature/30-profile-screen
feature = branch category
30 = number of issue 
the rest = the branch title
```

### ➕ Commits
- Commit small changes separately. More commits are better than few. 
- Each commit should be one logical unit. For example, you shouldn't add a small icon component and update documentation in one single commit.
- Always write commit in the following format: `<ver-in-infinitive> <something>`, for example: `Create function for fetching user data`

### 🙏 Pull requests

Pull requests should target the `dev` branch (set `base: dev` and `compare: <your-branch>`). Any change that is going to be merged should be checked by at least one other developer. Therefore **add others as reviewers in your pull request** so they get a notification that you need them to check it out. **Branch shouldn't be merged without a code review and/or some feedback written in the pull request**. Comments or at least reactions are required in PRs and **all the PR related communication should happen within the given PR** or be at least noticed/mentioned including its outcome.

Each pull requests should contain at least basic information about the changes. You can use this simple template:

```
- A reference to a related issue in your repository.
- A description of the changes proposed in the pull request.
  - What's new?
  - What has been modified?
  - What has been deleted?
```

### 💬 Communication
- **An answer to a comment is always required.** An emoji reactions can be used in some cases, such as 👍 or 👎 in the case of yes or no questions.
- **Any code that is part of the task should be well-committed and appropriately documented.**

### 🧱 Folder Structure

| Folder        | Purpose                                         |
| --:           | :--                                             |
| `assets`      | Contains all images, css files, font files, etc.|
| `data`        | For storing our data assets such as JSON files, can also store global constant variables |
| `components`  | For placing any layout based components, like a sidebar, navbar, container, etc. |
| `hooks`       | Contains every single custom hook               |
| `pages`       | Contains one folder for each page in your application, and each page folder contains folders and files that are only ever used in the given page |            |
| `utils`       | Storing all utility functions such as formatters |

### ⚙️ Recommended VS Code Extensions
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)

</details>